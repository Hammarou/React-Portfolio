import React from 'react'
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <section className="bg-[linear-gradient(to_bottom_right,_bisque,_beige)]">
            <div className="p-[2em_0]">
                <h2 className="ml-[1.5em] text-[4vw] font-bold"></h2>
                <address className="text-[4vw] 2xl:text-[2vw] font-bold bg-none text-blue-500 flex flex-wrap sm:flex-row md:flex-row justify-around items-center">
                    <a href="#" className="p-[0.5em_0] hover:text-purple-900 hover:underline"><FaGithub /></a>
                    <a href="#" className="p-[0.5em_0] hover:text-purple-900 hover:underline"><BsTwitterX /></a>
                    <a href="#" className="p-[0.5em_0] hover:text-purple-900 hover:underline"><FaLinkedin /></a>
                  
                </address>
            </div>
        </section>
  )
}
