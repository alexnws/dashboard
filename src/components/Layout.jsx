import { AppContextProvider } from "/src/components/AppContext"
import Header from "/src/components/Header"

const Layout = (props) => {
  const { children, ...otherProps } = props

  return (
    <AppContextProvider>
      <div className="relative min-h-screen" {...otherProps}>
        <Header title={props.title} />
        <main className="w-4/6 p-8 border-2 mx-auto">{children}</main>
      </div>
    </AppContextProvider>
  )
}

export default Layout
