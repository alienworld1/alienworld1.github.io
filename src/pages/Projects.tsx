import { motion } from 'motion/react';
import { IndustrialFrame, NavHUD } from '../components';
import { ManifestHeader, RegistryList } from '../components/projects';
import { PROJECTS_DATA } from '../data/ProjectsData';

function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative w-full min-h-screen bg-primary"
    >
      {/* CRT Effect Overlay */}
      <div className="fixed inset-0 pointer-events-none z-100">
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background:
              'radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(18,20,23,0.8) 100%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)',
          }}
        />
      </div>

      <IndustrialFrame serialNumber="MANIFEST-ENG-77">
        <NavHUD />

        {/* Main Content */}
        <div className="ml-16 md:ml-36 mr-4 md:mr-8 py-8">
          <ManifestHeader projects={PROJECTS_DATA} />
          <RegistryList projects={PROJECTS_DATA} />

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-12 pt-4 border-t border-accent-blue/20 text-center"
          >
            <div className="text-[8px] text-accent-blue/40 tracking-[0.2em]">
              END OF MANIFEST // ENGINEERING DIVISION // ALL SYSTEMS NOMINAL
            </div>
          </motion.div>
        </div>
      </IndustrialFrame>

      {/* Background Grid */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.02] z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(241,196,15,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(241,196,15,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
    </motion.div>
  );
}

export default Projects;
