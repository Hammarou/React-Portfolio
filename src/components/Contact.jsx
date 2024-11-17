import React from 'react'

export default function Contact() {
  return (
    <section className="bg-[linear-gradient(to_bottom_right,_bisque,_beige)]">
            <div className="p-[2em_0]">
                <h2 className="ml-[1.5em] text-[4vw] font-bold">Contact Me</h2>
                <address className="text-[4vw] font-bold bg-none text-blue-500 flex flex-wrap sm:flex-col md:flex-col justify-around items-center">
                    <a href="" className="p-[0.5em_0] hover:text-purple-900 hover:underline">+1555.123.4567</a>
                    <a href="#" className="p-[0.5em_0] hover:text-purple-900 hover:underline">abc123@email.com</a>
                    <a href="#" className="p-[0.5em_0] hover:text-purple-900 hover:underline">GitHub</a>
                    <a href="#" className="p-[0.5em_0] hover:text-purple-900 hover:underline">Twitter</a>
                    <a href="#" className="p-[0.5em_0] hover:text-purple-900 hover:underline">Spotify</a>
                  
                </address>
            </div>
        </section>
  )
}
