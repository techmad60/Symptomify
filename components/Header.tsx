import Navbar from "./Navbar";

export default function Header() {

  return (
    <header className="flex flex-col p-4 sm:px-8 md:px-12 lg:p-0 lg:px-16 lg:items-center">
        <div className="max-w-5xl w-full">
          <Navbar/>
        </div>
    </header>
  )
}