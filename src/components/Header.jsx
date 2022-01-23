import Nav from "/src/components/Nav"

const Header = ({ title }) => {
  return (
    <header className="h-16 px-10 mb-8 flex flex-row items-center justify-between bg-blue-500 text-white">
      <h1 className="text-4xl font-bold">{title}</h1>
      <nav className="text-lg flex flex-row items-center justify-between">
        <Link href="/">
          <a className="hover:bg-blue-400 hover:font-bold py-2 text-center w-24">
            Journal
          </a>
        </Link>
        <Link href="/addentry">
          <a className="hover:bg-blue-400 hover:font-bold py-2 text-center w-24">
            Add Entry
          </a>
        </Link>
      </nav>
    </header>
  )
}

export default Header
