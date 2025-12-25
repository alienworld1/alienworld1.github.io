import { motion } from 'motion/react';
import {
  AlarmOverlay,
  FailureReport,
  ManualOverride,
} from '../components/notfound';

function NotFound() {
  return (
    <AlarmOverlay>
      {/* Main container with shake effect */}
      <motion.div
        className="min-h-screen flex items-center justify-center p-4 md:p-8"
        animate={{
          x: [0, -1, 1, -1, 0],
        }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatDelay: 5,
        }}
      >
        {/* Terminal window */}
        <div className="relative w-full max-w-3xl">
          {/* Terminal border */}
          <div className="absolute inset-0 border-2 border-accent-red/50 clip-chamfer-lg" />

          {/* Terminal header */}
          <div className="relative bg-accent-red/10 border-b border-accent-red/30 px-4 py-2 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <motion.div
                className="w-3 h-3 bg-accent-red"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 0.5, repeat: Infinity }}
              />
              <span className="text-[10px] text-accent-red tracking-[0.2em] font-mono">
                SYSTEM ALERT // PRIORITY: CRITICAL
              </span>
            </div>
            <div className="text-[8px] text-accent-red/50 font-mono">
              TERM://SECURITY/404
            </div>
          </div>

          {/* Terminal content */}
          <div className="relative bg-primary/80 p-6 md:p-10 clip-chamfer-lg">
            {/* Background grid */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(166,52,70,0.5) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(166,52,70,0.5) 1px, transparent 1px)
                `,
                backgroundSize: '30px 30px',
              }}
            />

            {/* Content */}
            <div className="relative z-10">
              <FailureReport />
              <ManualOverride />
            </div>

            {/* Corner decorations */}
            <div className="absolute top-4 right-4 text-[8px] text-accent-red/30 font-mono">
              SEC.BREACH.404
            </div>
            <div className="absolute bottom-4 left-4 text-[8px] text-accent-red/30 font-mono">
              WY-SECURITY-SYS
            </div>
          </div>

          {/* Terminal footer */}
          <div className="relative bg-accent-red/5 border-t border-accent-red/30 px-4 py-2 flex items-center justify-between">
            <div className="text-[8px] text-accent-red/40 font-mono tracking-wider">
              CONTAINMENT PROTOCOL: ACTIVE
            </div>
            <motion.div
              className="flex items-center gap-2"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-1.5 h-1.5 bg-accent-red" />
              <span className="text-[8px] text-accent-red tracking-wider">
                LOCKDOWN
              </span>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Additional background effects */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.02] z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(166,52,70,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(166,52,70,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
    </AlarmOverlay>
  );
}

export default NotFound;
