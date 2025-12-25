import { motion } from 'motion/react';
import type { Project } from '../../data/ProjectsData';
import MediaViewport from './MediaViewport';

interface ProjectModuleProps {
  project: Project;
  index: number;
}

function ProjectModule({ project, index }: ProjectModuleProps) {
  const statusColors = {
    DEPLOYED: 'text-accent-gold bg-accent-gold/10 border-accent-gold/40',
    IN_DEVELOPMENT: 'text-accent-blue bg-accent-blue/10 border-accent-blue/40',
    ARCHIVED: 'text-accent-red/70 bg-accent-red/10 border-accent-red/30',
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: 0.2 + index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="group relative bg-[#1B1E23] border border-accent-blue/20 clip-chamfer
                 hover:border-accent-gold/50 transition-colors duration-300"
    >
      {/* Header Bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-secondary/50 border-b border-accent-blue/20">
        <div className="flex items-center gap-3">
          <span className="text-[10px] text-accent-red/70 font-mono">
            {project.id}
          </span>
          <span className="text-[8px] text-accent-blue/50">//</span>
          <span
            className={`text-[8px] px-2 py-0.5 border ${statusColors[project.status]} tracking-wider`}
          >
            {project.status.replace('_', ' ')}
          </span>
        </div>
        <div className="text-[10px] text-accent-gold/60 font-mono tracking-wider">
          {project.version}
        </div>
      </div>

      {/* Media Viewport */}
      <MediaViewport
        thumbnail={project.thumbnail}
        title={project.title}
        videoUrl={project.videoUrl}
      />

      {/* Content Body */}
      <div className="p-4">
        {/* Title */}
        <h3 className="text-display text-sm md:text-base text-text tracking-wider mb-3 group-hover:text-accent-gold transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-[11px] text-text/60 font-mono leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="text-[8px] px-2 py-1 bg-secondary border border-accent-blue/30 
                         text-text/70 font-mono tracking-wider"
            >
              [{tag}]
            </span>
          ))}
        </div>

        {/* Action Access Buttons */}
        <div className="flex flex-wrap gap-2 pt-3 border-t border-accent-blue/20">
          {/* GitHub Link */}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 bg-accent-blue/10 border border-accent-blue/50
                       hover:bg-accent-blue/20 hover:border-accent-blue transition-colors clip-chamfer-sm"
          >
            <span className="text-accent-blue text-xs">{'>>'}</span>
            <span className="text-[9px] text-accent-blue tracking-[0.15em]">
              ACCESS_SOURCE
            </span>
          </a>

          {/* Live URL - Only render if exists */}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 bg-accent-gold/10 border border-accent-gold/50
                         hover:bg-accent-gold/20 hover:border-accent-gold transition-colors clip-chamfer-sm"
            >
              <span className="text-accent-gold text-xs">[+]</span>
              <span className="text-[9px] text-accent-gold tracking-[0.15em]">
                INITIALIZE_LINK
              </span>
            </a>
          )}
        </div>
      </div>

      {/* Corner Accent */}
      <div
        className="absolute top-0 right-0 w-4 h-4 border-r border-t border-accent-gold/0 
                      group-hover:border-accent-gold/50 transition-colors"
      />
      <div
        className="absolute bottom-0 left-0 w-4 h-4 border-l border-b border-accent-gold/0 
                      group-hover:border-accent-gold/50 transition-colors"
      />
    </motion.article>
  );
}

export default ProjectModule;
