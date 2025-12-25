import { motion } from 'motion/react';
import type { ReactNode } from 'react';

interface AlarmOverlayProps {
  children: ReactNode;
}

function AlarmOverlay({ children }: AlarmOverlayProps) {
  return (
    <div className="relative w-full min-h-screen bg-primary overflow-hidden">
      {/* Pulsing red vignette */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-50"
        animate={{
          boxShadow: [
            'inset 0 0 100px 20px rgba(166,52,70,0.1)',
            'inset 0 0 150px 40px rgba(166,52,70,0.25)',
            'inset 0 0 100px 20px rgba(166,52,70,0.1)',
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Top warning bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent-red z-50"
        animate={{
          opacity: [1, 0.3, 1],
          scaleX: [1, 0.98, 1],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Bottom warning bar */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 h-1 bg-accent-red z-50"
        animate={{
          opacity: [1, 0.3, 1],
          scaleX: [1, 0.98, 1],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.5,
        }}
      />

      {/* Left warning strip */}
      <motion.div
        className="fixed top-0 bottom-0 left-0 w-1 bg-accent-red/50 z-50"
        animate={{ opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />

      {/* Right warning strip */}
      <motion.div
        className="fixed top-0 bottom-0 right-0 w-1 bg-accent-red/50 z-50"
        animate={{ opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 0.75 }}
      />

      {/* Warning text marquee - top */}
      <div className="fixed top-1 left-0 right-0 overflow-hidden z-50 h-5">
        <motion.div
          className="whitespace-nowrap text-[10px] text-accent-red tracking-[0.3em] font-mono"
          animate={{ x: ['100%', '-100%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          ▲ ALERT ▲ SECTOR BREACH DETECTED ▲ CONTAINMENT PROTOCOL ACTIVE ▲
          UNAUTHORIZED ACCESS ATTEMPT ▲ SECURITY LEVEL: CRITICAL ▲ ALERT ▲
          SECTOR BREACH DETECTED ▲ CONTAINMENT PROTOCOL ACTIVE ▲
        </motion.div>
      </div>

      {/* Heavy scanline overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-40 opacity-[0.04]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(166,52,70,0.5) 2px, rgba(166,52,70,0.5) 4px)',
        }}
      />

      {/* Flickering scanline */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-40"
        animate={{ opacity: [0.02, 0.05, 0.02] }}
        transition={{ duration: 0.1, repeat: Infinity }}
      >
        <motion.div
          className="absolute left-0 right-0 h-32 bg-linear-to-b from-transparent via-accent-red/10 to-transparent"
          animate={{ y: ['-100%', '100vh'] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        />
      </motion.div>

      {/* Content */}
      {children}
    </div>
  );
}

export default AlarmOverlay;
