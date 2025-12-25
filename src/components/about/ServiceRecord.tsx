import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { PERSONNEL_DATA } from '../../data/PersonnelData';

// Service Record / Background Logs
function ServiceRecord() {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const { backgroundLogs } = PERSONNEL_DATA;

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < backgroundLogs.length) {
        setDisplayedLines(prev => [...prev, backgroundLogs[currentIndex]]);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="mb-8"
    >
      {/* Section Label */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 bg-accent-blue" />
        <span className="text-[10px] text-accent-blue tracking-[0.3em]">
          BACKGROUND LOGS
        </span>
        <div className="flex-1 h-px bg-accent-blue/30" />
      </div>

      <div className="p-4 bg-primary border border-accent-blue/30 border-l-2 border-l-accent-blue clip-chamfer-sm">
        {/* Terminal Header */}
        <div className="flex items-center justify-between mb-3 pb-2 border-b border-accent-blue/20">
          <span className="text-[8px] text-accent-gold/60 tracking-wider">
            TERMINAL://PERSONNEL/BACKGROUND
          </span>
          <div className="flex gap-1">
            <div className="w-2 h-2 bg-accent-red/60" />
            <div className="w-2 h-2 bg-accent-gold/60" />
            <div className="w-2 h-2 bg-accent-blue/60" />
          </div>
        </div>

        {/* Terminal Content */}
        <div className="font-mono text-sm text-text/80 leading-relaxed h-48 overflow-y-auto">
          {displayedLines.map((line, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`${line && line.startsWith('>') ? 'text-accent-gold' : ''}`}
            >
              {line || '\u00A0'}
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
      </div>
    </motion.section>
  );
}

export default ServiceRecord;
