import React from 'react'
import SelfPortrait from '../assets/images/self-portrait.jpg';
import Hero from '../assets/images/02-hero-bg.jpg';

export default function About() {
  return (
    <div className="min-h-screen pb-[50px]">
      <section className="hero">
        <div >
          <h2 className='pt-1 pr-2 pb-1 pl-1 xs:text-[7vw]  sm:text-[6vw] md:text-[5vw] md:text-[4vw] xl:text-[3vw] font-bold text-[white] bg-[black]'>Welcome!</h2>
          <figure>
            <img src={Hero} alt="hero banner" title="Hero Banner" className='xs:max-h-[150px] sm:max-h-[200px] md:max-h-[250px] lg:max-h-[300px] xl:max-h-[400px]' width={"100%"} />
          </figure>
        </div>
      </section>
      <div className="intro max-w-[90%] ml-[auto] mr-[auto]">
        <section>
          <h2 className='pt-10 pr-2 pb-1 xs:text-[7vw]  sm:text-[6vw] md:text-[5vw] md:text-[4vw] xl:text-[3vw] font-bold '>About me</h2>
          <div id="about mt-[1em] mb-[1em]">
            <figure>
              <img src={SelfPortrait}     alt="Image of Author"
                title="Hi, there!"
                className="xs:max-h-[200px] sm:max-h-[250px] md:max-h-[300px] lg:max-h-[350px] xl:max-h-[400px] xl:max-h-[450px]"
              />
              <figcaption className="offscreen">

              </figcaption>
            </figure>
          </div>
          <div className="para mb-[2em] mt-[2em] text-[1.25em]">
            <p>
              Helvetica put a bird on it church-key Blue Bottle banjo bespoke brunch Etsy authentic Marfa quinoa typewriter plaid
              direct trade small batch wayfarers bicycle rights cliche craft beer gastropub single-origin coffee Godard
              Carles you probably haven't heard of them irony pickled kitsch synth sriracha gentrify literally heirloom blog Truffaut
              paleo scenester
            </p>

            <br />

            <p>
              Echo Park sriracha Pinterest vegan biodiesel 90's irony iPhone Kickstarter Carles crucifix kitsch narwhal
              dreamcatcher pickled trust fund selvage art party letterpress Tumblr post-ironic kogi Thundercats Tonx
              Brooklyn Pitchfork Odd Future authentic normcore freegan leggings Schlitz chambray organic tousled retro fap
              squid street art church-key fashion axe Wes Anderson bespoke whatever gentrify banh mi you probably haven't
              heard of them American Apparel next level pug ugh.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
