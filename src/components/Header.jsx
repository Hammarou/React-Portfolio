import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
      <header className="flex flex-col md:flex-row justify-between md:justify-center flex-wrap items-center bg-gradient-to-r from-[rgb(51,87,231)] to-[rgb(77,214,218)] pt-4 pb-4 pr-[6%] pl-[1%]">
        <h1 className="header__h1 font-bold sm:text-[4vw] md:text-[8vw]">Emeka Okpala</h1>
        <nav className="xs:text-[5vw] md:text-[3vw]">
            <Link to="/" className="font-bold inline-block pr-1 underline hover:no-underline">About</Link>
            <Link to="/portfolio" className="font-bold inline-block pr-1 underline hover:no-underline">Portfolio</Link>
            <Link to="/contact" className="font-bold inline-block pr-1 underline hover:no-underline">Contact</Link>
            <Link to="/resume" className="font-bold inline-block pr-1 underline hover:no-underline">Resume</Link>
        </nav>
    </header>
    </div>
  )
}
