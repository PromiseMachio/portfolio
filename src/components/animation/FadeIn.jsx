import React, { useEffect, useRef, useState } from 'react'

const FadeIn = ({children, delay = 0, duration = 500, threshold = 0.1}) => {
    // states hook
    const [isVisible, setIsVisible] = useState(false)
    const elementRef = useRef(null)
    useEffect(() =>{
        const observer = new IntersectionObserver(([entry]) =>{
            // Triger animation when content is on view 
            if(entry.isIntersecting && !isVisible){
                setIsVisible(true)
            }
        },
        {
            threshold: threshold,
            rootMargin:'0px 0px -50px 0px'
        }
            
        );
        if(elementRef.current){
            observer.observe(elementRef.current);

        }
        return () =>{
            if(elementRef.current){
                observer.unobserve(elementRef.current)
            }
        }
    }, [threshold,isVisible])
  return <div
  ref={elementRef}
  className={isVisible ?'animate-fadeIn'  : 'opacity-0' }
  style={{
    animationDelay:isVisible ? `${delay}ms` :'0ms' ,
    animationDuration: `${duration}`,
    animationFillMode:'both'
  }}
  >
    {children}
  </div>
}

export default FadeIn