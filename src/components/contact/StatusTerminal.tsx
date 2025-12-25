import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

const LOG_MESSAGES = [
  '> INITIALIZING COMM ARRAY...',
  '> SCANNING FREQUENCIES...',
  '> RELAY_NODE_07: CONNECTED',
  '> ENCRYPTION HANDSHAKE: COMPLETE',
  '> PINGING_RELAY...',
  '> SIGNAL LOCKED',
  '> UPLINK_STABLE',
  '> AWAITING TRANSMISSION...',
  '> MONITORING CHANNELS...',
  '> HEARTBEAT: OK',
];

function StatusTerminal() {
  const [logs, setLogs] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Initial boot sequence
    const bootSequence = () => {
      if (currentIndex < 5) {
        setLogs(prev => [...prev.slice(-6), LOG_MESSAGES[currentIndex]]);
        setCurrentIndex(prev => prev + 1);
      }
    };

    const bootTimer = setTimeout(bootSequence, 500 + currentIndex * 400);

    return () => clearTimeout(bootTimer);
  }, [currentIndex]);

  // Continuous status updates after boot
  useEffect(() => {
    if (currentIndex >= 5) {
      const interval = setInterval(() => {
        const randomMsg =
          LOG_MESSAGES[Math.floor(Math.random() * LOG_MESSAGES.length)];
        const timestamp = new Date().toLocaleTimeString('en-US', {
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        });
        setLogs(prev => [...prev.slice(-6), `[${timestamp}] ${randomMsg}`]);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [currentIndex]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
    >
      {/* Section Label */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 bg-accent-red" />
        <span className="text-[10px] text-accent-red tracking-[0.3em]">
          SYSTEM LOG
        </span>
        <div className="flex-1 h-px bg-accent-red/30" />
      </div>

      <div className="p-4 bg-primary border border-accent-blue/30 clip-chamfer-sm">
        {/* Terminal Header */}
        <div className="flex items-center justify-between mb-3 pb-2 border-b border-accent-blue/20">
          <span className="text-[8px] text-accent-gold/60 tracking-wider">
            TERMINAL://COMM/STATUS
          </span>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-accent-gold animate-pulse" />
            <span className="text-[8px] text-accent-gold/60 tracking-wider">
              LIVE
            </span>
          </div>
        </div>

        {/* Log Output */}
        <div className="font-mono text-xs space-y-1 h-32 overflow-hidden">
          {logs.map((log, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className={`${
                log.includes('CONNECTED') ||
                log.includes('COMPLETE') ||
                log.includes('STABLE')
                  ? 'text-accent-gold'
                  : log.includes('ERROR') || log.includes('FAILED')
                    ? 'text-accent-red'
                    : 'text-text/60'
              }`}
            >
              {log}
            </motion.div>
          ))}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
            className="text-accent-gold"
          >
            █
          </motion.span>
        </div>

        {/* Status Bar */}
        <div className="mt-3 pt-3 border-t border-accent-blue/20 flex items-center justify-between">
          <div className="text-[8px] text-text/40 tracking-wider">
            NODE: RELAY-07-GAMMA // SECTOR: 7-G
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-accent-gold animate-pulse-glow" />
            <span className="text-[8px] text-accent-gold tracking-wider">
              UPLINK NOMINAL
            </span>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default StatusTerminal;
