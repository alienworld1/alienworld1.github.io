import { motion } from 'motion/react';
import { PERSONNEL_DATA } from '../../data/PersonnelData';

function PsychProfile() {
  const { psychProfile } = PERSONNEL_DATA;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 }}
      className="mb-8"
    >
      {/* Section Label */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 bg-accent-blue" />
        <span className="text-[10px] text-accent-blue tracking-[0.3em]">
          SUBSIDIARY INTERESTS // PSYCH-EVAL
        </span>
        <div className="flex-1 h-px bg-accent-blue/30" />
      </div>

      <div className="p-4 bg-secondary/20 border-l-2 border-accent-blue clip-chamfer">
        <div className="flex flex-wrap gap-3">
          {psychProfile.map((interest, index) => (
            <motion.div
              key={interest.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + index * 0.05 }}
              className={`
                px-4 py-2 border clip-chamfer-sm flex items-center gap-2 
                ${
                  interest.category === 'TECHNICAL'
                    ? 'border-accent-gold/40 hover:bg-accent-gold/10'
                    : 'border-accent-red/40 hover:bg-accent-red/10'
                }
                transition-colors cursor-default
              `}
            >
              <span
                className={`text-lg ${
                  interest.category === 'TECHNICAL'
                    ? 'text-accent-gold/60'
                    : 'text-accent-red/60'
                }`}
              >
                {interest.icon}
              </span>
              <span className="text-[10px] text-text/70 tracking-wider font-mono">
                {interest.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Evaluation note */}
        <div className="mt-4 pt-3 border-t border-accent-blue/20">
          <div className="text-[8px] text-accent-blue/40 tracking-wider">
            {'>'} PSYCH EVALUATION: STABLE // NO ANOMALIES DETECTED
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default PsychProfile;
