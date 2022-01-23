import { createContext, useCallback, useState, useEffect } from "react"

const AppContext = createContext({})

const save = (data) => {
  localStorage.setItem("data", JSON.stringify(data))
}

export const AppContextProvider = (props) => {
  const [data, setData] = useState([])
  const [incoming, setIncoming] = useState(0)
  const [outgoing, setOutgoing] = useState(0)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    let totalIncome = data.reduce((total, current) => {
      if (current.amount > 0) {
        return Number(total) + Number(current.amount)
      }

      return Number(total) + 0
    }, 0)

    setIncoming(totalIncome)
  }, [data])

  useEffect(() => {
    const outcome = data.reduce((total, current) => {
      if (current.amount < 0) {
        return Number(total) + Number(current.amount)
      }

      return Number(total) + 0
    }, 0)

    setOutgoing(outcome)
  }, [data])

  const addData = useCallback(
    (data) => setData((currentData) => [...currentData, data]),
    []
  )

  useEffect(() => {
    const localStoragedata = localStorage.getItem("data")

    if (!localStoragedata) {
      setLoaded(true)

      return
    }

    const data = JSON.parse(localStoragedata)

    setData(data)
    setLoaded(true)
  }, [])

  useEffect(() => {
    if (!loaded) {
      return
    }

    save(data)
  }, [loaded, data])

  return (
    <AppContext.Provider
      {...props}
      value={{ data, addData, incoming, outgoing }}
    />
  )
}

export default AppContext
