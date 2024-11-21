import React from 'react'

import oceanSunset from '../assets/images/ocean-sunset.jpg'
import natureScenery from '../assets/images/nature-scenery.jpg'
import calmSeaIceberg from '../assets/images/calm-sea-iceberg.jpg'
import beautifulBeach from '../assets/images/beautiful-beach.jpeg'
import lonelyRoad from '../assets/images/lonely-road.jpg'


export default function Portfolio() {
  return (
    <section className="pb-[50px]">
      <h2 className="mt-[1em] ml-[1.5em] xs:text-[8vw]  sm:text-[6vw] md:text-[4vw] lg:text-[4vw] 2xl:text-[4vw] font-bold">Portfolio</h2>
      <div className="flex flex-wrap justify-center">
        <div className='ocean-sunset border-4 border-blue-500 border-solid rounded hover:border-red-500 '>
          <a href="#" className="inline-block relative text-[3vw] border-blue-500 min-h-[492px] xs:min-h-[392px] flex-basis-[100%] flex items-end p-[6em_0_20px_0] m-[1px] bg-opacity-[90%] no-underline bg-blend-soft-light bg-[180%] transition-all duration-[500ms] bg-no-repeat bg-green-200 hover:border-red-500 hover:bg-transparent hover:transition-all hover:duration-[250ms] hover:ease-in bottom-[97px]"
          >
            <div className='bg-[rgb(228,127,127)] p-[8px_10px]'>
              <h3>Ocean Sunset</h3>
              <span>HTML/CSS/JavaScripti</span>
            </div>
          </a>
        </div>

        <div className='nature-scenery border-4 border-blue-500 border-solid rounded hover:border-red-500'>
          <a href="#" className="inline-block relative text-[3vw] sm:text-[2vw] md:text-[1.5vw] border-3 border-solid border-blue-500 min-h-[194px] max-h-[194px] basis-[calc(50%-1em)] flex items-end p-[6em_0_20px_0]  no-underline bg-[180%] bg-opacity-[90%] no-underline bg-blend-soft-light bg-[180%] transition-all duration-[500ms] bg-no-repeat bg-green-200transition-all duration-500 bg-no-repeat bg-green-200 hover:border-red-500 hover:bg-transparent hover:transition-all hover:duration-[250ms] hover:ease-in bottom-[97px] ">
            <div className='bg-[rgb(228,127,127)] p-[8px_10px]'>
              <h3>Nature Scenery</h3>
              <span>OOP/JQuery</span>
            </div>
          </a>
        </div>

        <div className="calm-sea-iceberg border-4 border-blue-500 border-solid rounded hover:border-red-500">
          <a href="#" className="inline-block relative text-[3vw] sm:text-[2vw] md:text-[1.5vw] border-3 border-solid border-blue-500 min-h-[194px] max-h-[194px] basis-[calc(50%-1em)] flex items-end p-[6em_0_20px_0]  no-underline bg-[180%] bg-opacity-[90%] no-underline bg-blend-soft-light bg-[180%] transition-all duration-[500ms] bg-no-repeat bg-green-200transition-all duration-500 bg-no-repeat bg-green-200 hover:border-red-500 hover:bg-transparent hover:transition-all hover:duration-[250ms] hover:ease-in bottom-[97px]">
            <div className='bg-[rgb(228,127,127)] p-[8px_10px]'>
              <h3>Calm Sea Iceberg</h3>
              <span>SQL/ORM/MVC</span>
            </div>
          </a>
        </div>

        <div className="beautiful-beach border-4 border-blue-500 border-solid rounded hover:border-red-500">
          <a href="#" className="inline-block relative text-[3vw] sm:text-[2vw] md:text-[1.5vw] border-3 border-solid border-blue-500 min-h-[194px] max-h-[194px] basis-[calc(50%-1em)] flex items-end p-[6em_0_20px_0]  no-underline bg-[180%] bg-opacity-[90%] no-underline bg-blend-soft-light bg-[180%] transition-all duration-[500ms] bg-no-repeat bg-green-200transition-all duration-500 bg-no-repeat bg-green-200 hover:border-red-500 hover:bg-transparent hover:transition-all hover:duration-[250ms] hover:ease-in bottom-[97px]">
            <div className='bg-[rgb(228,127,127)] p-[8px_10px]'>
              <h3>Beautiful Beach</h3>
              <span>MongoDB/Express.js</span>
            </div>
          </a>
        </div>

        <div className="lonely-road border-4 border-blue-500 border-solid rounded hover:border-red-500">
          <a href="#" className="inline-block relative text-[3vw] sm:text-[2vw] md:text-[1.5vw] border-3 border-solid border-blue-500 min-h-[194px] max-h-[194px] basis-[calc(50%-1em)] flex items-end p-[6em_0_20px_0]  no-underline bg-[180%] bg-opacity-[90%] no-underline bg-blend-soft-light bg-[180%] transition-all duration-[500ms] bg-no-repeat bg-green-200transition-all duration-500 bg-no-repeat bg-green-200 hover:border-red-500 hover:bg-transparent hover:transition-all hover:duration-[250ms] hover:ease-in bottom-[97px]">
            <div className='bg-[rgb(228,127,127)] p-[8px_10px]'>
              <h3>Lonely Road</h3>
              <span>React/Node.js</span>
            </div>
          </a>
        </div>

      </div>
    </section>
  )
}
