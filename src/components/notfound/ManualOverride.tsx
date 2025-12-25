import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

function ManualOverride() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9 }}
      className="mt-10"
    >
      {/* Section label */}
      <div className="text-[10px] text-accent-red/60 tracking-[0.2em] mb-4">
        {'>>>'} MANUAL OVERRIDE OPTIONS
      </div>

      <div className="flex flex-wrap gap-4">
        {/* Primary action - Return to command center */}
        <Link to="/">
          <motion.button
            className="group relative px-6 py-4 bg-accent-red/10 border-2 border-accent-red 
                       clip-chamfer overflow-hidden cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Siren animation background */}
            <motion.div
              className="absolute inset-0 bg-accent-red/20"
              animate={{
                opacity: [0, 0.3, 0],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            {/* Button content */}
            <div className="relative flex items-center gap-3">
              <motion.span
                className="text-accent-red text-lg"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 0.5, repeat: Infinity }}
              >
                ◆
              </motion.span>
              <span className="text-sm text-accent-red tracking-[0.15em] font-mono group-hover:text-text transition-colors">
                RETURN_TO_COMMAND_CENTER
              </span>
              <motion.span
                className="text-accent-red"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                {'>>'}
              </motion.span>
            </div>

            {/* Hover glow effect */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
              style={{
                boxShadow: 'inset 0 0 20px rgba(166,52,70,0.5)',
              }}
            />
          </motion.button>
        </Link>

        {/* Secondary action - Emergency evacuation */}
        <Link to="/">
          <motion.button
            className="group relative px-6 py-4 bg-secondary border border-accent-red/50 
                       clip-chamfer overflow-hidden cursor-pointer
                       hover:border-accent-gold hover:bg-accent-gold/5 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="relative flex items-center gap-3">
              <span className="text-accent-red/70 text-lg group-hover:text-accent-gold transition-colors">
                ▲
              </span>
              <span className="text-sm text-text/70 tracking-[0.15em] font-mono group-hover:text-accent-gold transition-colors">
                INITIATE_EMERGENCY_EVACUATION
              </span>
            </div>
          </motion.button>
        </Link>
      </div>

      {/* Warning footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-8 pt-4 border-t border-accent-red/20"
      >
        <div className="flex items-center gap-2 text-[9px] text-accent-red/50 tracking-wider font-mono">
          <motion.div
            className="w-1.5 h-1.5 bg-accent-red"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
          SECURITY LOCKDOWN IN EFFECT // ALL MOVEMENTS MONITORED // INCIDENT
          LOGGED
        </div>
      </motion.div>
    </motion.div>
  );
}

export default ManualOverride;
