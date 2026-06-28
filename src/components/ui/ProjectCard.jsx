import React from "react"
import { ExternalLink, Code2, TrendingUp } from "lucide-react"

const ProjectCard = ({ project }) => {
  const { title, description, image, technologies, metrix, demoUrl, githubUrl } = project
  return (
    <div className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>

          <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
          <div className="absolute bottom-4  right-4 flex items-center gap-3 mr-6">
            {demoUrl && (
              <a 
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-white/10 backdrop-blur-md rounded-lg border border-white/20  hover:bg-primary/30 hover:border-white/40 transition-all duration-300 hover:scale-110 "
              title="view demo">
                <ExternalLink className="w-4 h-4 text-white" />
              </a>
            )}
            {githubUrl && (
              <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
                            className="p-2.5 bg-white/10 backdrop-blur-md rounded-lg border border-white/20  hover:bg-primary/30 hover:border-white/40 transition-all duration-300 hover:scale-110 "
              title="view code"
              >
                <Code2 className="w-4 h-4 text-white"/>
              </a>
            )}
          </div>
          <div className="absolute top-4 left-4">
              <span className="px-3 py-1 text-xs font-medium bg-black/40 backdrop-blur-sm border border-white/30 rounded-lg hover:bg-primary/40 hover:border-white/60 transition-all duration-300 hover:scale-110">{project.cartegory}</span>
          </div>
      </div>
      <div className="p-6 space-y-4">
            <h3 className="text-sm font-semibold text-white mb-2  group-hover:text-[#A8FF8D] transition-colors duration-300">
              {title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed line-clamp-2">
                {description}
              </p>
      </div>
      <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index)=>(
              <span
              key={index}
              className="px-3 py-1 text-sm font-medium text-primary bg-primary/10 border border-primary/30 rounded-lg hover:bg-primary/40 hover:border-primary/50 transition-colors duration-300 cursor-pointer ml-4"
              >
                  {tech}
              </span>
            ))}
      </div>
      {metrix && (
        <div className="flex items-center gap-2 ml-2.5 mr-1.5 mb-3 mt-3 pt-3 border-t border-white/10  ">
          <TrendingUp className="w-4 h-4 text-primary" />
          <p className="text-sm text-green-400 ">{metrix}</p>

        </div> 
      )}
    </div>
  )
}

export default ProjectCard