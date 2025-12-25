import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface StatusItemProps {
  label: string;
  value: string;
  status?: 'nominal' | 'warning' | 'critical';
  blinking?: boolean;
}

function StatusItem({
  label,
  value,
  status = 'nominal',
  blinking = false,
}: StatusItemProps) {
  const statusColors = {
    nominal: 'text-accent-gold',
    warning: 'text-accent-red',
    critical: 'text-accent-red animate-pulse',
  };

  return (
    <div className="flex items-center justify-between gap-4 py-1">
      <span className="text-[10px] text-text/50 tracking-wider">{label}</span>
      <span
        className={`text-[10px] font-mono tracking-wider ${statusColors[status]} ${blinking ? 'animate-data-stream' : ''}`}
      >
        {value}
      </span>
    </div>
  );
}

function CommLinkIndicator() {
  const [active, setActive] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive(prev => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-2">
      <div
        className={`
        w-2 h-2 transition-all duration-300
        ${active ? 'bg-accent-gold shadow-[0_0_8px_rgba(241,196,15,0.6)]' : 'bg-accent-gold/30'}
      `}
      />
      <span className="text-[10px] text-accent-gold tracking-wider">
        COMM-LINK {active ? 'ACTIVE' : 'SYNC'}
      </span>
    </div>
  );
}

export default function StatusPanel() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  };

  const formatDate = (date: Date) => {
    return date
      .toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      })
      .replace(/\//g, '.');
  };

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="fixed bottom-4 md:bottom-6 right-4 md:right-6 z-50"
    >
      <div className="relative bg-primary/90 border border-accent-blue/40 p-3 clip-chamfer-sm">
        {/* Panel header */}
        <div className="flex items-center justify-between mb-3 pb-2 border-b border-accent-blue/20">
          <span className="text-[8px] text-accent-red tracking-[0.2em]">
            SYS.STATUS
          </span>
          <span className="text-[10px] text-accent-gold font-mono">
            {formatTime(time)}
          </span>
        </div>

        {/* Status items */}
        <div className="space-y-1 min-w-40">
          <StatusItem label="DATE" value={formatDate(time)} />
          <StatusItem label="O2 LEVELS" value="STABLE" status="nominal" />
          <StatusItem label="PRESSURE" value="1.013 BAR" />
          <StatusItem label="SECTOR" value="7-G" />
          <StatusItem label="CLEARANCE" value="LEVEL-4" status="nominal" />
        </div>

        {/* Comm link indicator */}
        <div className="mt-3 pt-2 border-t border-accent-blue/20">
          <CommLinkIndicator />
        </div>

        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-6 h-6">
          <div className="absolute top-0 right-0 w-full h-px bg-accent-gold/40" />
          <div className="absolute top-0 right-0 h-full w-px bg-accent-gold/40" />
        </div>
      </div>
    </motion.div>
  );
}
