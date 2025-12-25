import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

function FailureReport() {
  const [timestamp] = useState(new Date().toISOString());
  const [glitchActive, setGlitchActive] = useState(false);

  // Random glitch effect
  useEffect(() => {
    const glitchInterval = setInterval(
      () => {
        setGlitchActive(true);
        setTimeout(() => setGlitchActive(false), 150);
      },
      3000 + Math.random() * 2000,
    );

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative"
    >
      {/* Error Code - Large display */}
      <motion.div
        className="mb-8"
        animate={
          glitchActive
            ? {
                x: [0, -5, 5, -3, 3, 0],
                opacity: [1, 0.8, 1, 0.7, 1],
              }
            : {}
        }
        transition={{ duration: 0.15 }}
      >
        <div className="text-[10px] text-accent-red tracking-[0.3em] mb-2">
          {'>>>'} CRITICAL FAILURE
        </div>

        {/* Glitchy 404 text */}
        <div className="relative">
          <motion.h1
            className="text-display text-6xl md:text-8xl lg:text-9xl text-accent-red tracking-wider"
            animate={{
              textShadow: [
                '0 0 10px rgba(166,52,70,0.5)',
                '0 0 20px rgba(166,52,70,0.8)',
                '0 0 10px rgba(166,52,70,0.5)',
              ],
            }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            ERROR_404
          </motion.h1>

          {/* Glitch layers */}
          {glitchActive && (
            <>
              <div
                className="absolute inset-0 text-display text-6xl md:text-8xl lg:text-9xl text-cyan-500/50 tracking-wider"
                style={{ transform: 'translate(-2px, 0)' }}
              >
                ERROR_404
              </div>
              <div
                className="absolute inset-0 text-display text-6xl md:text-8xl lg:text-9xl text-accent-red/50 tracking-wider"
                style={{ transform: 'translate(2px, 0)' }}
              >
                ERROR_404
              </div>
            </>
          )}
        </div>
      </motion.div>

      {/* Status indicators */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="space-y-2 mb-8"
      >
        <StatusLine
          label="SECTOR STATUS"
          value="DECOMPRESSED"
          status="critical"
        />
        <StatusLine
          label="FILE_INTEGRITY"
          value="COMPROMISED"
          status="critical"
        />
        <StatusLine
          label="CONTAINMENT"
          value="BREACH DETECTED"
          status="critical"
        />
        <StatusLine label="LIFE_SUPPORT" value="OFFLINE" status="warning" />
      </motion.div>

      {/* Incident Log */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="p-4 bg-secondary/30 border border-accent-red/30 clip-chamfer mb-8"
      >
        <div className="text-[10px] text-accent-red tracking-[0.2em] mb-3 flex items-center gap-2">
          <motion.div
            className="w-2 h-2 bg-accent-red"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 0.5, repeat: Infinity }}
          />
          INCIDENT LOG
        </div>

        <div className="font-mono text-xs space-y-1">
          <LogEntry label="TIMESTAMP" value={timestamp} />
          <LogEntry label="USER_IP" value="[DETECTED]" />
          <LogEntry label="ACCESS_ATTEMPT" value="UNAUTHORIZED" highlight />
          <LogEntry label="LOCATION" value="UNKNOWN_REGION_0x404" />
          <LogEntry label="CLEARANCE_LEVEL" value="INSUFFICIENT" highlight />
          <LogEntry label="PROTOCOL" value="LOCKDOWN_INITIATED" />
        </div>
      </motion.div>

      {/* Error message */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="text-text/50 font-mono text-sm leading-relaxed max-w-lg"
      >
        <span className="text-accent-red">{'>'}</span> REQUESTED SECTOR DOES NOT
        EXIST OR HAS BEEN PURGED FROM SYSTEM REGISTRY.
        <br />
        <span className="text-accent-red">{'>'}</span> ALL ACCESS ATTEMPTS HAVE
        BEEN LOGGED AND REPORTED.
        <br />
        <span className="text-accent-red">{'>'}</span> INITIATE EMERGENCY
        PROTOCOLS OR RETURN TO COMMAND CENTER.
      </motion.div>
    </motion.div>
  );
}

// Status line component
function StatusLine({
  label,
  value,
  status,
}: {
  label: string;
  value: string;
  status: 'critical' | 'warning';
}) {
  return (
    <div className="flex items-center gap-3 font-mono text-sm">
      <motion.div
        className={`w-2 h-2 ${status === 'critical' ? 'bg-accent-red' : 'bg-accent-gold'}`}
        animate={{ opacity: [1, 0.3, 1] }}
        transition={{
          duration: status === 'critical' ? 0.5 : 1,
          repeat: Infinity,
        }}
      />
      <span className="text-text/50">{label}:</span>
      <span
        className={
          status === 'critical' ? 'text-accent-red' : 'text-accent-gold'
        }
      >
        {value}
      </span>
    </div>
  );
}

// Log entry component
function LogEntry({
  label,
  value,
  highlight = false,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-accent-red/60">{'>>'}</span>
      <span className="text-text/40">{label}:</span>
      <span className={highlight ? 'text-accent-red' : 'text-text/70'}>
        {value}
      </span>
    </div>
  );
}

export default FailureReport;
