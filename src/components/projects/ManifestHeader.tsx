import { motion } from 'motion/react';
import type { Project } from '../../data/ProjectsData';

interface ManifestHeaderProps {
  projects: Project[];
}

function ManifestHeader({ projects }: ManifestHeaderProps) {
  const deployedCount = projects.filter(p => p.status === 'DEPLOYED').length;
  const inDevCount = projects.filter(p => p.status === 'IN_DEVELOPMENT').length;
  const archivedCount = projects.filter(p => p.status === 'ARCHIVED').length;

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8"
    >
      {/* Page Title */}
      <div className="mb-6">
        <div className="text-[8px] text-accent-red tracking-[0.3em] mb-2">
          {'>>>'} ENGINEERING DIVISION
        </div>
        <h1 className="text-display text-xl md:text-2xl text-accent-gold tracking-widest">
          PROJECT MANIFEST
        </h1>
        <div className="mt-2 text-[10px] text-text/40 font-mono">
          REGISTRY ACCESS:{' '}
          {new Date().toISOString().split('T')[0].replace(/-/g, '.')} //
          TERMINAL: WY-ENG-ALPHA
        </div>
      </div>

      {/* Stats Bar */}
      <div className="p-4 bg-secondary/30 border border-accent-blue/30 clip-chamfer">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Total Assets */}
          <div className="border-l-2 border-accent-gold pl-3">
            <div className="text-[8px] text-text/50 tracking-wider mb-1">
              TOTAL ASSETS DEPLOYED
            </div>
            <div className="text-xl text-accent-gold font-mono">
              {String(projects.length).padStart(3, '0')}
            </div>
          </div>

          {/* Registry Status */}
          <div className="border-l-2 border-accent-gold pl-3">
            <div className="text-[8px] text-text/50 tracking-wider mb-1">
              REGISTRY STATUS
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent-gold animate-pulse-glow" />
              <span className="text-sm text-accent-gold font-mono">
                OPERATIONAL
              </span>
            </div>
          </div>

          {/* Active Projects */}
          <div className="border-l-2 border-accent-blue pl-3">
            <div className="text-[8px] text-text/50 tracking-wider mb-1">
              ACTIVE // IN_DEV
            </div>
            <div className="text-lg font-mono">
              <span className="text-accent-gold">{deployedCount}</span>
              <span className="text-text/30 mx-1">//</span>
              <span className="text-accent-blue">{inDevCount}</span>
            </div>
          </div>

          {/* Archived */}
          <div className="border-l-2 border-accent-red/50 pl-3">
            <div className="text-[8px] text-text/50 tracking-wider mb-1">
              ARCHIVED SYSTEMS
            </div>
            <div className="text-lg text-accent-red/70 font-mono">
              {String(archivedCount).padStart(2, '0')}
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}

export default ManifestHeader;
