
import React, { useState } from 'react'
import { Download, Code2, Sparkle, Sparkles } from 'lucide-react'
import { SiReact, SiNodedotjs, SiMongodb, SiTailwindcss, SiExpress } from 'react-icons/si'
import FadeIn from '../animation/FadeIn'
import RadialGradientBackground from '../backgrounds/RadialGradientBackground'
import { ABOUT_STATS, PERSONAL_INFO } from '../../utils/constants'



const About = () => {

    // A variable for skills 
    const skills = [
        { name: 'React.js', icon: SiReact, color: '#61DAFB' },
        { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
        { name: 'Express.js', icon: SiExpress, color: '#47A249' }


    ]
    return <section id='about' className=' relative py-20 bg-black overflow-hidden mb-8'>
        <RadialGradientBackground variant='about' />
        <div className='relative z-10 max-w-7xl px-4 mx-auto sm:px-6 lg:px-8'>
            {/* main grid */}
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-16 items-center mb-20'>
                {/* left column */}
                <div className='flex flex-col gap-12'>
                    <div className='flex flex-col gap-8'>
                        <FadeIn delay={60}>
                            <div className='inline-flex items-center gap-2.5 px-5 py-2.5 border border-primary/30 bg-primary/25 rounded-2xl hover:bg-primary/35 hover:text-white/45 transition-all duration-300'>
                                <Code2 className='w-5 h-5 text-primary' />
                                <span className='text-medium text-primary'>
                                    Full-Stack DevOp
                                </span>
                                <Sparkles className='w-6 h-6 text-amber-400' />

                            </div>
                        </FadeIn>

                        <FadeIn delay={100}>
                            <h2 className='text-4xl lg:text-5xl font-normal text-white leading-tight'>
                                Crafting Experience that matter
                            </h2>
                        </FadeIn>

                        <FadeIn delay={200}>
                            <div className='flex flex-col gap-4'>
                                {PERSONAL_INFO.bio.map((paragraph, index) => (
                                    <p
                                        key={index}
                                        className='text-base text-white/70 leading-relaxed'
                                    >
                                        {paragraph}
                                    </p>))}

                            </div>
                        </FadeIn>
                        <FadeIn delay={300}>
                            <div className='grid grid-cols-1 lg:grid-cols-3'>
                                {ABOUT_STATS.map((stat, index) => (
                                    <div key={index} className='relative'>
                                        <div className='absolute -left-4  top-0 w-1 h-full bg-linear-to-b from-primary/50 via-primary/30 to-primary/20 rounded-full'></div>
                                        <div className='text-3xl text-primary font-normal mb-2 font-mono '>
                                            {stat.value}
                                        </div>
                                        <p className='text-sm text-white/60 leading-snug mr-3'>
                                            {stat.label}

                                        </p>

                                    </div>
                                ))}

                            </div>
                        </FadeIn>

                        <FadeIn delay={400}>
                            <button
                                className='inline-flex items-center gap-3 bg-white/20 hover:bg-white/45 transition-all duration-300 rounded px-4 py-2'
                                onClick={() => window.open(PERSONAL_INFO.resume)}
                            >
                                <Download className='w-5 h-5 text-primary/80 hover:text-primary' />
                                <span className='text-primary hover:text-primary/70 transition-all duration-200 font-mono'>
                                    Download Resume
                                </span>

                            </button>
                        </FadeIn>


                    </div>

                </div>
                {/* Right column content */}
                <FadeIn delay={300}>
                    <div className='grid lg:grid-cols-2 '>
                        <div className='col-span-2 relative group pb-4'>
                            <div className='absolute inset-0 bg-linear-to-br from-primary/10 via-primary/40 to-primary/60  rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300'></div>
                            <div className='relative bg-white/10 border border-white/15 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300'>
                                <div className='flex items-center gap-4'>
                                    <div className='p-3 bg-primary/10 rounded-xl'>
                                        <Code2 className='w-6 h-6 text-primary' />
                                    </div>
                                    <div className='flex-1'>
                                        <h3 className='text-lg font-semibold text-white mb-2'>
                                            Expertise
                                        </h3>
                                        <p className='text-sm text-white/70 leading-relaxed'>
                                            Specialized in building scalable web applications with mordern tech and best practices.
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='relative group pr-2.5'>
                            <div className='absolute inset-0 bg-linear-to-br from-primary/10 via-primary/40 to-primary/60 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300'></div>
                            <div className='relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 '>
                                <div className='p-3 bg-primary/10 rounded-xl w-fit'>
                                    <Sparkles className='w-6 h-6 text-primary' />
                                </div>
                                <h3 className='text-base font-semibold text-white mb-2'>Clean Code</h3>
                                <p className='text-sm text-white/70 leading-relaxed'>
                                    Writing maintainable, well-documented code that scales
                                </p>
                            </div>
                        </div>
                        <div className='relative group'>
                            <div className='absolute inset-0 bg-linear-to-br from-primary/10 via-primary/40 to-primary/60 rounded-2xl opacity-50 blur-2xl group-hover:opacity-75 transition-opacity duration-300'></div>
                            <div className='relative bg-white/10 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 h-full'>
                                <div className='p-3 bg-primary/10 rounded-xl w-fit mb-4'>
                                    <Download className='w-6 h-6 text-primary ' />
                                </div>
                                <h3 className='text-base font-semibold text-white mb-2'>
                                    Performance
                                </h3>
                                <p className='text-sm text-white/70 leading-relaxed'>
                                    Optimizing for speed and efficiency in every project
                                </p>
                            </div>
                        </div>
                        <div className='relative col-span-2 group'>
                            <div className='absolute inset-0 bg-linear-to-br from-primary/10 via-primary/40 to-primary/60 rounded-2xl opacity-50 blur-2xl group-hover:opacity-75 transition-opacity duration-300'></div>
                            <div className='relative bg-white/5 border-white/20 rounded-2xl mt-3 p-6 hover:border-primary/30 transition-all duration-300'>
                                <div className='grid grid-cols-3 gap-6 text-center'>
                                    <div>
                                        <div>
                                            <div className='text-2xl text-primary font-bold'>100%</div>
                                            <div className='text-sm text-white/60'>Client Satisfaction</div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='text-2xl text-primary font-bold'>24/7</div>
                                        <div className='text-sm text-white/60'>Support Available</div>
                                    </div>
                                    <div>
                                        <div className='text-2xl text-primary font-bold'>Fast</div>
                                        <div className='text-sm text-white/60'>Delivery Time</div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </FadeIn>
            </div>
            {/* Skills Grid Section */}
            <FadeIn delay={500}>
                <div className='flex flex-col items-center gap-8'>
                    <div className='text-center'>
                        <h3 className='text-2xl font-normal text-white mb-2'>
                                Tech Stack & Expertise
                        </h3>
                        <p className='text-sm text-white/70'>
                            Technologies I work with to bulid amaizing programs and Product
                        </p>
                    </div>

                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 w-full max-w-4xl gap-3 '>
                                {skills.map((skill,index)=>(
                                    <div
                                    key={index}
                                    className='group relative bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/20 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:scale-105'

                                    >
                                        <skill.icon className='text-3xl text-primary' />
                                        <div className='text-sm text-white/80 font-medium text-center'>
                                            {skill.name}

                                        </div>
                                         {/* Hover Effect  */}
                                         <div className='absolute inset-0 bg-linear-to-br from-primary/0 via-primary/0 to-primary/0 rounded-2xl blur-xl opacity-50 group-hover:from-primary/10 group-hover:via-primary/40 group-hover:to-primary/60 transition-all duration-300'></div>
                                    </div>
                                ))}
                    </div>

                </div>
            </FadeIn>

        </div>

    </section>
}

export default About