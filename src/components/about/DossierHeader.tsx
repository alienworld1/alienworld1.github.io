import { motion } from 'motion/react';
import { PERSONNEL_DATA } from '../../data/PersonnelData';

function DossierHeader() {
  const { identity } = PERSONNEL_DATA;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="mb-8"
    >
      {/* Section Label */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 bg-accent-red" />
        <span className="text-[10px] text-accent-red tracking-[0.3em]">
          PERSONNEL IDENTIFICATION
        </span>
        <div className="flex-1 h-px bg-accent-red/30" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 p-4 bg-secondary/30 border-l-2 border-accent-gold clip-chamfer">
        {/* Biometric Scan / Photo */}
        <div className="relative">
          <div className="aspect-square bg-primary border border-accent-blue/40 overflow-hidden relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl text-accent-blue/30 mb-2">◎</div>
                <div className="text-[8px] text-accent-blue/50 tracking-wider">
                  BIOMETRIC SCAN
                </div>
              </div>
            </div>

            {/* Scanline effect overlay */}
            <div
              className="absolute inset-0 pointer-events-none opacity-30"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(52,73,94,0.3) 2px, rgba(52,73,94,0.3) 4px)',
              }}
            />

            {/* Moving scanline */}
            <motion.div
              className="absolute left-0 right-0 h-8 bg-linear-to-b from-transparent via-accent-red/20 to-transparent"
              animate={{ y: ['-100%', '400%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            />

            <img
              src={identity.biometricScan}
              alt="Biometric scan"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Photo ID number */}
          <div className="absolute bottom-0 left-0 right-0 bg-primary/80 py-1 text-center">
            <span className="text-[8px] text-accent-gold/60 tracking-widest">
              ID: {identity.personnelId}
            </span>
          </div>
        </div>

        {/* Identity Data */}
        <div className="space-y-4">
          {/* Subject Name */}
          <div>
            <span className="text-[10px] text-accent-red tracking-[0.2em] block mb-1">
              SUBJECT NAME
            </span>
            <h1 className="text-display text-2xl md:text-3xl text-text tracking-wider">
              {identity.subjectName}
            </h1>
          </div>

          {/* Data Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <span className="text-[8px] text-accent-blue/60 tracking-wider block mb-1">
                DESIGNATION
              </span>
              <span className="text-xs text-accent-gold font-mono">
                {identity.designation}
              </span>
            </div>
            <div>
              <span className="text-[8px] text-accent-blue/60 tracking-wider block mb-1">
                SECTOR / ORIGIN
              </span>
              <span className="text-xs text-text/80 font-mono">
                {identity.sectorOrigin}
              </span>
            </div>
            <div>
              <span className="text-[8px] text-accent-blue/60 tracking-wider block mb-1">
                CLEARANCE
              </span>
              <span className="text-xs text-accent-gold font-mono">
                {identity.clearanceLevel}
              </span>
            </div>
            <div>
              <span className="text-[8px] text-accent-blue/60 tracking-wider block mb-1">
                STATUS
              </span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent-gold animate-pulse-glow" />
                <span className="text-xs text-accent-gold font-mono">
                  {identity.status}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default DossierHeader;
