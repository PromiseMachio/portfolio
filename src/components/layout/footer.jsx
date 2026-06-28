import React from 'react'
import { FaGithub, FaLinkedin, FaXTwitter, FaDribbble } from "react-icons/fa6";
import { Mail, MapPin, Heart } from 'lucide-react'
import { PERSONAL_INFO, SOCIAL_LINK, NAV_LINKS } from '../../utils/constants';
import { scrollToSection } from '../../hooks/useScrollSpy';
import FadeIn from '../animation/FadeIn';


const Footer = () => {
    const socialIcons = {
        github: FaGithub,
        linkedin: FaLinkedin,
        twitter: FaXTwitter,
        dribble: FaDribbble
    }
    return (

        <footer className='relative bg-black overflow-hidden border-t  border-white/10 '>
            <div className='absolute inset-0 overflow-hidden'>
                <div className='absolute top-0 left-1/4 w-96 h-96 bg-primary/10 opacity-30 rounded-full blur-3xl ' />
                <div className='absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 opacity-30 rounded-full blur-3xl' />
            </div>
            <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 '>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-12 mb-12'>
                    <FadeIn delay={0}>
                        <div>
                            <h3 className='text-3xl font-bold bg-linear-to-r from-primary/80 via-primary to-primary/80 bg-clip-text text-transparent mb-4'>
                                {PERSONAL_INFO.name.split(' ')[0]}
                            </h3>
                            <p className='text-white/60 text-sm mb-6 leading-relaxed'>
                                {PERSONAL_INFO.tagline}
                            </p>
                            <div className='space-y-3'>
                                <a href={`mailto:${PERSONAL_INFO.email}`}
                                    className='group flex items-center gap-3 p-3 bg-white/5 border border-white/20 rounded-xl hover:bg-primary/20 hover:border-white/40 transition-all duration-300'
                                >
                                    <div className='p-2 bg-primary/10 rounded-lg'>
                                        <Mail className='w-5 h-5 text-primary' />
                                    </div>

                                    <span className='text-sm text-white/70 group-hover:text-white transition-colors duration-300'>
                                        {PERSONAL_INFO.email}
                                    </span>
                                </a>
                                <div className='flex items-center gap-3 p-3 bg-white/5 border border-white/20 rounded-xl cursor-pointer'>
                                    <div className='p-2 bg-primary/10 rounded-lg'>
                                        <MapPin className='w-5 h-5 text-primary' />
                                    </div>
                                    <span className='text-sm text-white/70 group-hover:text-white transition-colors duration-300'>
                                        {PERSONAL_INFO.location}
                                    </span>

                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn delay={100}>
                        <div>
                            <h4 className="text-white text-lg font-semibold mb-6">
                                Quick Links
                            </h4>

                            <ul className="space-y-3">
                                {NAV_LINKS.map((link) => (
                                    <li key={link.id}>
                                        <button
                                            onClick={() => scrollToSection(link.id)}
                                            className="group flex items-center gap-3 text-white/60 hover:text-primary transition-all duration-300"
                                        >
                                            <div className="w-2 h-2 rounded-full bg-primary scale-0 group-hover:scale-100 transition-transform duration-300" />

                                            <span className="group-hover:translate-x-1 transition-transform duration-300">
                                                {link.label}
                                            </span>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </FadeIn>

                    <FadeIn delay={200}>
                        <div>
                            <h4 className="text-white text-lg font-semibold mb-4">
                                Connect with me 📞
                            </h4>

                            <p className="text-white/60 leading-relaxed mb-6">
                                Let's connect and create something amazing together.
                            </p>

                            <div className="flex items-center gap-4">
                                {Object.entries(SOCIAL_LINK).map(([platform, url]) => {
                                    const Icon = socialIcons[platform];

                                    return Icon ? (
                                        <a
                                            key={platform}
                                            href={url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`Connect on ${platform}`}
                                            className="group relative p-3 bg-white/5 border border-white/10 rounded-xl hover:border-primary/40 hover:bg-primary/10 transition-all duration-300 hover:-translate-y-1"
                                        >
                                            <Icon className="w-5 h-5 text-white/80 group-hover:text-primary transition-colors duration-300" />
                                        </a>
                                    ) : null;
                                })}
                            </div>
                        </div>
                    </FadeIn>
                </div>
                <FadeIn delay={300}>
                    <div className='pt-8 border-t border-white/10'>
                        <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
                            <p className='text-white/50 text-sm'>
                                {new Date().getFullYear()} {PERSONAL_INFO.name} All rights reserved
                            </p>
                            <p className='flex items-center gap-2 text-white/50 text-sm'>
                                Built with <Heart className='w-4 h-4 fill-primary text-primary animate-bounce' /> using React and Tailwind Css

                            </p>

                        </div>
                    </div>
                </FadeIn>
            </div>

        </footer>
    )
}

export default Footer