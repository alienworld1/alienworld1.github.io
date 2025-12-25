import { motion } from 'motion/react';
import { PERSONNEL_DATA } from '../../data/PersonnelData';

function TechnicalClearances() {
  const { technicalClearances } = PERSONNEL_DATA;

  const renderClearanceLevel = (level: number) => {
    return (
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map(i => (
          <div
            key={i}
            className={`w-2 h-3 ${i <= level ? 'bg-accent-gold' : 'bg-secondary'}`}
          />
        ))}
      </div>
    );
  };

  const renderSkillGrid = (
    title: string,
    skills: { name: string; status: string; level: number }[],
    accentColor: string,
  ) => (
    <div className="mb-6">
      <div className="flex items-center gap-2 mb-3">
        <div className={`w-1.5 h-1.5 ${accentColor}`} />
        <span className="text-[9px] text-text/50 tracking-[0.2em]">
          {title}
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 + index * 0.05 }}
            className="p-3 bg-secondary/50 border border-accent-blue/20 clip-chamfer-sm hover:border-accent-gold/40 transition-colors"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] text-text font-mono tracking-wider">
                {skill.name}
              </span>
              <span
                className={`text-[8px] tracking-wider ${
                  skill.status === 'OPERATIONAL'
                    ? 'text-accent-gold'
                    : 'text-accent-blue'
                }`}
              >
                {skill.status}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[8px] text-text/40">CLEARANCE</span>
              {renderClearanceLevel(skill.level)}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="mb-8"
    >
      {/* Section Label */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 bg-accent-gold" />
        <span className="text-[10px] text-accent-gold tracking-[0.3em]">
          TECHNICAL CLEARANCES
        </span>
        <div className="flex-1 h-px bg-accent-gold/30" />
      </div>

      <div className="p-4 bg-secondary/20 border-l-2 border-accent-gold clip-chamfer">
        {renderSkillGrid(
          'CORE SYSTEMS // LANGUAGES',
          technicalClearances.coreSystems,
          'bg-accent-red',
        )}
        {renderSkillGrid(
          'INTERFACE PROTOCOLS // FRONTEND',
          technicalClearances.interface,
          'bg-accent-gold',
        )}
        {renderSkillGrid(
          'INFRASTRUCTURE // BACKEND',
          technicalClearances.infrastructure,
          'bg-accent-blue',
        )}
      </div>
    </motion.section>
  );
}

export default TechnicalClearances;
