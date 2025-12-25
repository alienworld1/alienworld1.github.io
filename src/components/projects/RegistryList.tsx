import { motion } from 'motion/react';
import type { Project } from '../../data/ProjectsData';
import ProjectModule from './ProjectModule';

interface RegistryListProps {
  projects: Project[];
}

function RegistryList({ projects }: RegistryListProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      {/* Section Label */}
      <div className="flex items-center gap-2 mb-6">
        <div className="w-2 h-2 bg-accent-gold" />
        <span className="text-[10px] text-accent-gold tracking-[0.3em]">
          DEPLOYMENT REGISTRY
        </span>
        <div className="flex-1 h-px bg-accent-gold/30" />
        <span className="text-[8px] text-text/40 font-mono">
          {projects.length} ENTRIES
        </span>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <ProjectModule key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* Empty State */}
      {projects.length === 0 && (
        <div className="text-center py-16 border border-accent-blue/20 clip-chamfer">
          <div className="text-2xl text-accent-blue/30 mb-4">[//]</div>
          <div className="text-[10px] text-text/40 tracking-wider">
            NO PROJECTS IN REGISTRY
          </div>
        </div>
      )}
    </motion.section>
  );
}

export default RegistryList;
