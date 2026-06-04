import React, { useRef, useState } from 'react'
import { projects, cartegories } from '../../data/projects'
import { Briefcase, Sparkles, Target, Globe, Palette, Zap, ChevronLeft, ChevronRight } from 'lucide-react'
import ProjectCard from '../ui/ProjectCard'
import FadeIn from '../animation/FadeIn'


const Projects = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollContainerRef = useRef(null)

    const filteredProjects = activeCategory === 'All'
        ? projects
        : projects.filter(projects => projects.cartegory === activeCategory);

    // Reset carousel when categories
    const handleCategoryChange = (category) => {
        setActiveCategory(category);
        setCurrentIndex(0);
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        }
    }
    const scrollToIndex = (index) => {
        setCurrentIndex(index);
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const cardWidth = container.offsetWidth / 3;
            container.scrollTo({
                left: cardWidth * index,
                behavior: 'smooth'
            })
        }
    };

    const nextSlide = () => {
        const maxIndex = Math.max(0, filteredProjects.length - 3);
        const newIndex = Math.min(currentIndex + 1, maxIndex)
        scrollToIndex(newIndex)
    }

    const prevSlide = () => {
        const newIndex = Math.max(currentIndex - 1, 0);
        scrollToIndex(newIndex)
    }

    const categories = {
        'All': Target,
        'Web Apps': Globe,
        'UI Components': Palette,
        'Full Stack': Zap
    }
    return <section id='projects' className=''>
        <div className>
            <div className='' />
            <div className='' />
            <div className='' />
        </div>

        <div className=''>
            <FadeIn delay={0}>
                <div className=''>
                    <div className=''>
                        <Briefcase className='' />
                        <span className=''> My Work</span>
                    </div>
                    <h2 className=''>
                        Featured Projects
                    </h2>
                    <p className=''>
                        Showcasing my best work and achievements
                    </p>

                </div>
            </FadeIn>
            {/* Category Filter */}
            <FadeIn delay={100}>
                <div className=''>
                    {cartegories.map((category)=>(
                        <button
                        key={category}
                        onClick={()=> handleCategoryChange(category)}
                        className={`group relative px-6 py-3 rounded-full font-medium`}
                        >

                        </button>
                    ))}

                </div>
            </FadeIn>

        </div>

    </section>
}

export default Projects