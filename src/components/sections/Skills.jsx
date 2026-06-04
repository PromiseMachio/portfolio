import React from 'react'
import { skills } from '../../data/skills'
import * as Icons from 'lucide-react'
import FadeIn from '../animation/FadeIn'

const Skills = () => {
    const skillCategories = {
        'Frontend Development': [
            skills.find(s => s.name === 'React.js'),
            skills.find(s => s.name === 'JavaScript'),
            skills.find(s => s.name === 'Express.js'),
            skills.find(s => s.name === 'Tailwind CSS'),
        ].filter(Boolean),
        'Backend & APIs': [
            skills.find(s => s.name === 'MongoDb'),
            skills.find(s => s.name === 'Node.js'),
            skills.find(s => s.name === 'Rest APIs')
        ].filter(Boolean),
        'Tools & Others': [
            skills.find(s => s.name === 'Git & GitHub'),
            skills.find(s => s.name === 'Vite'),

        ].filter(Boolean)
    }

    // Get proficiency level
    const getProfeciencyLevel = (level) => {
        const levels = {
            'Expert': 95,
            'Advanced': 80,
            'Intermediate': 65
        };
        return levels[level] || 50;
    }
    // Get level color
    const getLevelColors = (level) => {
        const colors = {
            'Expert': 'text-[#8DFF69] bg-[#8DFF69]/20 border-[#8DFF69]/30',
            'Advanced': 'text-cyan-400 bg-cyan-500/20 border-cyan-500/30',
            'Intermediate': 'text-emerald-400 bg-emerald-500/20 border-emerald-500/30'
        };
        return colors[level] || 'text-gray-400 bg-gray-500/20 border-gray-500/30'
    }


    return <section id='skills' className='relative py-20 bg-black overflow-hidden'>
        {/* Animated Background Gdadient */}
        <div className='absolute inset-0 overflow-hidden'>
            <div className='absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50 ' />
            <div className='absolute bottom-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50' />
        </div>
        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <FadeIn delay={100}>
                <div className='text-center mb-16'>
                    <div className='inline-flex justify-center items-center gap-2 px-4 py-2 bg-primary/10  border border-primary/20 rounded-full w-fit hover:bg-primary/35 animate-bounce' >
                        <Icons.Sparkles className='w-6 h-6 text-amber-300 ' />
                        <span className='font-medium font-mono text-2xl text-primary'>My Expertise</span>
                    </div>
                    <h2 className='text-3xl lg:text-5xl font-normal text-white mb-4'>
                        Skills & Technologies
                    </h2>
                    <p className='text-lg text-white/60 max-w-2xl mx-auto'>
                        A comprehensive overview of my technical skill and proficiency level
                    </p>
                </div>

            </FadeIn>
            {/* Skills cartegories */}
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                {Object.entries(skillCategories).map(([category, categorySkills], categoryIndex) => (
                    <FadeIn key={category} delay={categoryIndex * 100}>
                        <div className='relative bg-white/5 border border-primary/15 p-6 rounded-2xl h-full hover:border-primary/50 hover:bg-primary/25 transition-all duration-300 scale-105 group'>
                            <div className='flex items-center gap-3 mb-6 pb-4 border-b border-white/10'>
                                <div className='w-1 h-8 bg-linear-to-br from-primary/10 via-primary/40 to-primary/60 rounded-full'></div>
                                <h3 className='text-xl font-medium text-white'>{category}</h3>
                            </div>

                            {/* skills List */}
                            {/* skills List */}
                            <div className='space-y-5'>
                                {categorySkills.map((skill, skillIndex) => {
                                    const IconComponent = Icons[skill.icon] || Icons.Code2
                                    const proficiency = getProfeciencyLevel(skill.level)

                                    return (
                                        <div key={skill.id} className='space-y-2'>

                                            {/* Top Row */}
                                            <div className='flex items-center justify-between gap-3'>

                                                <div className='flex items-center gap-2'>
                                                    <IconComponent className='w-5 h-5 text-primary' />
                                                    <span className='text-white/80 font-medium font-mono hover:text-white/90 transition-all duration-300 scale-100'>
                                                        {skill.name}
                                                    </span>
                                                </div>

                                                <span className='text-sm text-white/40'>
                                                    {skill.experience}
                                                </span>

                                            </div>

                                            {/* Level Badge */}
                                            <span
                                                className={`text-xs px-2 py-1 rounded-full border ${getLevelColors(skill.level)}`}
                                            >
                                                {skill.level}
                                            </span>

                                            {/* Progress Bar */}
                                            <div className='w-full h-2 bg-white/10 rounded-full overflow-hidden mt-4'>
                                                <div
                                                    className='h-full bg-primary transition-all duration-500 rounded-2xl animate-pulse'
                                                    style={{ width: `${proficiency}%` }}
                                                />
                                            </div>

                                        </div>
                                    )
                                })}
                            </div>
                            <div className='absolute inset-0 bg-linear-to-br rounded-xl from-primary/0 via-primary/5 to-primary/10 group-hover:from-primary/5 group-hover:via-primary/10 group-hover:to-primary/15 duration-300 pointer-events-none'></div>
                        </div>
                    </FadeIn>
                ))}
            </div>


        </div>

    </section>

}
export default Skills