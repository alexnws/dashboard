import { useContext } from "react"
import AppContext from "/src/components/AppContext"

const Dashboard = () => {
  const { data, incoming, outgoing } = useContext(AppContext)

  return (
    <table className="w-full border-solid ">
      <thead className>
        <tr>
          <th className="border border-black">INCOMING</th>
          <th className="border border-black">OUTCOMING</th>
        </tr>
      </thead>
      <tbody>
        <>
          {data.map(({ amount, description }, id) => (
            <tr
              key={id}
              className={`${
                id % 2 === 0 ? "bg-slate-100" : "bg-white"
              } w-full text-right text-lg`}
            >
              {amount > 0 ? (
                <>
                  <td className="w-1/2 p-1 border-solid border-x-2">
                    <p className="font-bold text-green-500">{amount} €</p>
                    <p>{description}</p>
                  </td>
                  <td className="w-1/2 p-1 border-x-2"></td>
                </>
              ) : (
                <>
                  <td className="w-1/2 p-1 border-x-2"></td>
                  <td className="w-1/2 p-1 border-x-2">
                    <p className="font-bold text-red-500">{amount} €</p>
                    <p>{description}</p>
                  </td>
                </>
              )}
            </tr>
          ))}
        </>
        <tr className>
          <td className="w-1/2 p-1 border border-black">
            <div className="flex flex-row items-center justify-between">
              <p className="font-bold ">TOTAL</p>
              <p className="font-bold text-green-500">{incoming} €</p>
            </div>
          </td>
          <td className="w-1/2 p-1 border border-black">
            <div className="flex flex-row items-center justify-between">
              <p className="font-bold">TOTAL</p>
              <p className="font-bold text-red-500">{outgoing} €</p>
            </div>
          </td>
        </tr>
      </tbody>
      <tfoot className="w-full border-2">
        <tr>
          <td colSpan="2" className="w-full p-1 border-2 ">
            <div className="flex flex-row items-center justify-between px-5 py-3 text-2xl">
              <p className="font-bold">RESULT</p>
              <p className="font-bold ">{incoming + outgoing} €</p>
            </div>
          </td>
        </tr>
      </tfoot>
    </table>
  )
}

export default Dashboard
