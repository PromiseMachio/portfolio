import React from 'react'
// import {services} from '../../data'
import * as icons from 'lucide-react'
import { Wrench } from 'lucide-react'
import FadeIn from '../animation/FadeIn'
import { services } from '../../data/services'

const Services = () => {
    return <section id='services' className='relative py-20 bg-black overflow-hidden'>
        <div className='absolute inset-0 overflow-hidden'>
            <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 opacity-20 rounded-full blur-3xl' />
            <div className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/30 opacity-20 rounded-full blur-3xl' />
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/30 opacity-20 blur-3xl rounded-full' />
        </div>

        <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
                backgroundImage:
                    'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
                backgroundSize: '30px 30px',
            }}
        />

        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <FadeIn delay={0}>
                <div className='text-center mb-16'>
                    <div className='inline-flex items-center gap-2 px-4 py-2 bg-primary/20 border border-white/30 rounded-full hover:bg-primary/50 hover:border-primary/70 mb-6'>
                        <Wrench className='w-4 h-4 text-primary' />
                        <span className='text-sm font-medium tracking-wider uppercase '>What I offer</span>

                    </div>
                    <h2 className='text-4xl font-medium text-white mb-4 max-w-2xl mx-auto '>
                        Built for innovation, designed for results
                    </h2>
                    <p className='text-lg text-white/60 max-w-xl mx-auto '>
                        Comprehensive solutions to turn your ideas into digital reality.
                    </p>

                </div>
            </FadeIn>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6'>
                {services.slice(0, 2).map((service, index) => {
                    const IconComponent = icons[service.icon] || icons.Code2
                    return <FadeIn key={service.id} delay={100 + index * 100}>
                        <div className='group relative bg-white/5 border border-white rounded-3xl p-8 hover:border-primary/15 transition-all duration-300 h-full min-h-60 flex flex-col'>
                            <div className='mb-6'>
                                <div className='w-16 h-16 bg-primary/40 border border-white/30 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                                    <IconComponent className='w-8 h-8 text-primary' />
                                </div>
                            </div>
                            <div className='flex-1'>
                                <h3 className='text-2xl mb-3 font-semibold group-hover:text-primary/40 transition-colors duration-300'>
                                    {service.title}
                                </h3>
                                <p className='text-white/60 leading-relaxed'>
                                    {service.description}
                                </p>
                            </div>
                            <div className='absolute inset-0 bg-linear-to-r from-primary-0 to-primary-0 group-hover:from-primary/5 group-hover:to-primary/10 rounded-3xl transition-all duration-300 pointer-events-auto' />
                        </div>
                    </FadeIn>
                })}
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {services.slice(2).map((service, index) => {
                    const IconComponent = icons[service.icon] || icons.Code2;
                    return <FadeIn key={service.id} delay={300 + index * 100}>
                        <div className='group relative bg-white/5 border border-white rounded-3xl p-8 hover:border-primary/15 transition-all duration-300 h-full min-h-60 flex flex-col'>
                            <div className='mb-6'>
                                <div className='w-16 h-16 bg-primary/40 border border-white/30 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                                    <IconComponent className='w-8 h-8 text-primary' />
                                </div>
                            </div>
                            <div className='flex-1'>
                                <h3 className='text-2xl mb-3 font-semibold group-hover:text-primary/40 transition-colors duration-300'>
                                    {service.title}
                                </h3>
                                <p className='text-white/60 leading-relaxed'>
                                    {service.description}
                                </p>
                            </div>
                            <div className='absolute inset-0 bg-linear-to-r from-primary-0 to-primary-0 group-hover:from-primary/5 group-hover:to-primary/10 rounded-3xl transition-all duration-300 pointer-events-auto' />
                        </div>
                    </FadeIn>
                })}
            </div>
        </div>

    </section>
}

export default Services