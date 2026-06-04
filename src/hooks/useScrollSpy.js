import { Section } from "lucide-react";
import { useState, useEffect } from "react";

export const useScrollSpy = (sectionIds, offset=100) => {
    // state initializations 
    const [activeSection, setActiveSection] = useState('');
    // Effecs of scrolling and resizing 
    useEffect(() =>{
        const handleScroll = () => {
            const scrollPosition = window.screenY + offset;

            // Finding the section
            for(let i = sectionIds.length - 1; i >= 0; i--){
                const section = document.getElementById(sectionIds[i]);
                if(section){
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;

                    if(scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight){
                        setActiveSection(sectionIds[i])
                        break;
                    }
                }
            }
        }
        handleScroll();
        window.addEventListener('scroll',handleScroll,{passive:true})
        return () => {
            window.removeEventListener('scroll', handleScroll)
        };
    }, [sectionIds,offset])
    return activeSection
};

// Smooth scrolling to a section
export const scrollToSection = (sectionId, offset=80) =>{
    const section = document.getElementById(sectionId)
    if(section){
        const top = section.offsetTop - offset;
        window.scrollTo({
            top,
            behavior:'smooth'
        })
    }
};