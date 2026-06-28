import React from 'react'
import { ChevronDown, Star } from 'lucide-react';
import { SiReact, SiExpressdotcom, SiNodedotjs, SiMongodb } from 'react-icons/si';
import { PERSONAL_INFO, STATS } from '../../utils/constants';
import { scrollToSection } from '../../hooks/useScrollSpy';
import FadeIn from '../animation/FadeIn';
// import devWorks from 'src/assets/profileImg1.jpeg'
import RadialGradientBackground from '../backgrounds/RadialGradientBackground';

const Hero = () => {
  return (
    <section id='hero' className='relative min-h-screen flex items-center overflow-hidden bg-black mt-20 mb-10'>
      <RadialGradientBackground variant="hero" />

      {/* container for all left and right  */}
      <div className='relative z-10 max-w-7xl sm:px-6 lg:py-20 w-full'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          {/* Left container */}
          <div className='text-left'>
            <FadeIn delay={0}>
              <div className='incline-flex items-center gap-2.5 px-4.5 py-2.75 mb-8 bg-linear-to-r from-primary/10 via-primary/15 to-primary/20 border border-primary/20 rounded-2xl'>
                <Star className='w-4 h4 text-white fill-white' />
                <span className='text-xs md:text-sm text-white tracking-[1.2px]'>
                  {PERSONAL_INFO.title} | Based in {PERSONAL_INFO.location}

                </span>

              </div>
            </FadeIn>

            <FadeIn delay={100}>
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-6 leading-tight'>
                SoftWare Engineer Portfolio
              </h1>
            </FadeIn>

            <FadeIn delay={200}>
              <p className='text-lg text-white/70 max-w-137.5 mb-8'>
                Building and designing scalable UI/UX architectures with modern technologies and best practices.
Ensuring reliability, efficiency, and consistency across complex applications.
              </p>
            </FadeIn>

            <FadeIn delay={300}>
              <button
                className='inline-flex items-center gap-0 group'
                onClick={() => scrollToSection('contact')}
              >
                <div className=' relative z-10 bg-white text-primary py-3.5 px-8 rounded-[17px] hover:bg-white/80  hover:text-primary/25 transition-all duration-300 mb-8 font-medium border border-white'>
                  Get In Touch

                </div>

              </button>
            </FadeIn>

            <FadeIn delay={400}>
              <div className='grid grid-cols-2 md:grid-cols-4 gap-10 max-w-full'>
                {STATS.map((stat, index) => (
                  <div key={index} className='text-left border-r-2 border-primary/50 pr-10 last:border-r-0  '>
                    <div className='text-2xl font-normal text-primary mb-2 font--mono'>
                      {stat.value}
                    </div>
                    <div className='text-sm text-white leading-snug '>
                      {stat.label}
                    </div>
                  </div>
                ))}

              </div>
            </FadeIn>

          </div>
          {/* right section */}
          <FadeIn delay={500}>
            <div className='relative'>
              <div className='relative overflow-hidden rounded-2xl aspect-4.5 max-w-125 ml-auto group'>
                <div className='absolute inset-0 rounded-2xl overflow-hidden'>
                  <div className='absolute inset-0.5 bg-linear-to-r from-primary/20 via-primary/10 to-primary animate-spin-slow rounded-2xl'></div>
                </div>
                {/* image container */}
                <div className='relative rounded-2xl overflow-hidden m-px h-[calc(1005-2px)]'>
                  <img src={PERSONAL_INFO.image} 
                    alt="devOpAtWork"
                    className='w-full h-full object-cover' /> ||
                    
                    {/* <img src={devWorks} 
                    alt="devOpAtWork"
                    className='w-full h-full object-cover'
                    /> */}
                </div>
                {/* Technologies Logos */}
                <div className='absolute bottom-5 left-6 z-20'>
                  <FadeIn delay={500}>
                    <div className='flex items-center gap-4 bg-black/40 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3'>

                      <div className=''>
                        <SiReact className='w-5 h-5 text-primary text-fil hover:text-primary/50 transition-all duration-300 ' />
                      </div>

                      <div className=''>
                        <SiExpressdotcom className='w-5 h-5 text-primary text-fil hover:text-primary/50 transition-all duration-300 ' />
                      </div>

                      <div className=''>
                        <SiNodedotjs className='w-5 h-5 text-primary text-fil hover:text-primary/50 transition-all duration-300 ' />
                      </div>

                      <div className=''>
                        <SiMongodb className='w-5 h-5 text-primary text-fil hover:text-primary/50 transition-all duration-300 ' />
                      </div>
                    </div>

                  </FadeIn>

                </div>

              </div>
            </div>

          </FadeIn>
        </div>
        <FadeIn delay={300}><div className='flex items-center justify-center pt-5'>
          <button
           onClick={()=>scrollToSection('about')}
           className={`border rounded-[50%] bg-gray-500 hover:bg-gray-800 transition-all duration-300 animate-pulse `}
          >
            <ChevronDown  className=' w-9 h-9 text-primary hover:text-primary/40 transition-all duration-300'/>

          </button>

        </div>
        </FadeIn>
        

      </div>

    </section>
  )
}

export default Hero