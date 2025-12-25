import { motion } from 'motion/react';
import { PERSONNEL_DATA } from '../../data/PersonnelData';

function DeploymentHistory() {
  const { deploymentHistory } = PERSONNEL_DATA;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="mb-8"
    >
      {/* Section Label */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 bg-accent-red" />
        <span className="text-[10px] text-accent-red tracking-[0.3em]">
          DEPLOYMENT HISTORY
        </span>
        <div className="flex-1 h-px bg-accent-red/30" />
      </div>

      <div className="space-y-3">
        {deploymentHistory.map((deployment, index) => (
          <motion.div
            key={deployment.missionId}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 + index * 0.1 }}
            className="p-4 bg-secondary/30 border-l-2 border-accent-red/60 clip-chamfer-sm relative overflow-hidden"
          >
            {/* Mission ID Badge */}
            <div className="absolute top-2 right-2 text-[8px] text-accent-blue/40 font-mono">
              {deployment.missionId}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-sm text-accent-gold font-mono tracking-wider">
                    {deployment.title}
                  </span>
                  <span
                    className={`text-[8px] px-2 py-0.5 tracking-wider ${
                      deployment.status === 'ACTIVE'
                        ? 'bg-accent-gold/20 text-accent-gold'
                        : 'bg-accent-blue/20 text-accent-blue'
                    }`}
                  >
                    {deployment.status}
                  </span>
                </div>
                <div className="text-xs text-text/60 mb-2">
                  {deployment.organization}
                </div>
                <p className="text-[11px] text-text/50 font-mono leading-relaxed">
                  {deployment.briefing}
                </p>
              </div>
              <div className="text-right md:text-left">
                <span className="text-[10px] text-accent-red/80 font-mono tracking-wider">
                  {deployment.period}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default DeploymentHistory;
