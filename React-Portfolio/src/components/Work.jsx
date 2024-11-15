import React from 'react'

import oceanSunset from "../assets/images/ocean-sunset.jpg"

export default function Work() {
  return (
    <section>
      <h2 id="work">Work</h2>
      <div className="flex flex-wrap justify-center">
        <a href="#" className="text-[3vw] sm:text-[2vw] md:text-[1.5vw] border-3 border-solid border-blue-500 min-h-[200px] max-h-[200px] basis-[calc(50%-1em)] flex items-end p-[6em_0_20px_0] m-2 no-underline bg-blend-soft-light bg-[180%] transition-all duration-500 bg-no-repeat bg-green-200 ocean-sunset"
        style={{ backgroundImage: `url(${oceanSunset})` }}
        >
        
          <div>
            <h3>Ocean Sunset</h3>
            <span>HTML/CSS/JavaScript</span>
          </div>
        </a>
        <a href="#" className="text-[3vw] sm:text-[2vw] md:text-[1.5vw] border-3 border-solid border-blue-500 min-h-[200px] max-h-[200px] basis-[calc(50%-1em)] flex items-end p-[6em_0_20px_0] m-2 no-underline bg-blend-soft-light bg-[180%] transition-all duration-500 bg-no-repeat bg-green-200 nature-scenery">
          <div>
            <h3>Nature Scenery</h3>
            <span>OOP/JQuery</span>
          </div>
        </a>
        <a href="#" className="text-[3vw] sm:text-[2vw] md:text-[1.5vw] border-3 border-solid border-blue-500 min-h-[200px] max-h-[200px] basis-[calc(50%-1em)] flex items-end p-[6em_0_20px_0] m-2 no-underline bg-blend-soft-light bg-[180%] transition-all duration-500 bg-no-repeat bg-green-200 calm-sea-iceberg">
          <div>
            <h3>Calm Sea Iceberg</h3>
            <span>SQL/ORM/MVC</span>
          </div>
        </a>
        <a href="#" className="text-[3vw] sm:text-[2vw] md:text-[1.5vw] border-3 border-solid border-blue-500 min-h-[200px] max-h-[200px] basis-[calc(50%-1em)] flex items-end p-[6em_0_20px_0] m-2 no-underline bg-blend-soft-light bg-[180%] transition-all duration-500 bg-no-repeat bg-green-200 beautiful-beach">
          <div>
            <h3>Beautiful Beach</h3>
            <span>MongoDB/Express.js</span>
          </div>
        </a>
        <a href="#" className="text-[3vw] sm:text-[2vw] md:text-[1.5vw] border-3 border-solid border-blue-500 min-h-[200px] max-h-[200px] basis-[calc(50%-1em)] flex items-end p-[6em_0_20px_0] m-2 no-underline bg-blend-soft-light bg-[180%] transition-all duration-500 bg-no-repeat bg-green-200 lonely-road">
          <div>
            <h3>Lonely Road</h3>
            <span>React/Node.js</span>
          </div>
        </a>
      </div>
    </section>
  )
}
