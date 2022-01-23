import Link from "next/link"
const Header = ({ title }) => {
  return (
    <header className="h-20 px-10 mb-8 flex flex-row items-center justify-between bg-black text-white">
      <h1 className="text-4xl font-bold">{title}</h1>
      <nav className="text-lg flex flex-row items-center justify-between">
        <Link href="/">
          <a className=" text-center w-24">Journal</a>
        </Link>
        <Link href="/addentry">
          <a className=" text-center w-20">Add Entry</a>
        </Link>
      </nav>
    </header>
  )
}

export default Header
