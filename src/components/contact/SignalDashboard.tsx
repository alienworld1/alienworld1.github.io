import { motion } from 'motion/react';
import { SYSTEM_TELEMETRY } from '../../data/ContactData';

function SignalDashboard() {
  const {
    signalStrength,
    encryption,
    encryptionStatus,
    frequency,
    latency,
    uptime,
  } = SYSTEM_TELEMETRY;

  return (
    <motion.section
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8"
    >
      {/* Section Label */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 bg-accent-gold animate-pulse-glow" />
        <span className="text-[10px] text-accent-gold tracking-[0.3em]">
          SIGNAL DIAGNOSTICS
        </span>
        <div className="flex-1 h-px bg-accent-gold/30" />
      </div>

      <div className="p-4 bg-secondary/30 border border-accent-blue/30 clip-chamfer">
        {/* Main Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          {/* Signal Strength */}
          <div className="border-l-2 border-accent-gold pl-3">
            <div className="text-[8px] text-text/50 tracking-wider mb-1">
              SIGNAL STRENGTH
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl text-accent-gold font-mono">
                {signalStrength}%
              </span>
              <SignalBars strength={signalStrength} />
            </div>
          </div>

          {/* Encryption */}
          <div className="border-l-2 border-accent-gold pl-3">
            <div className="text-[8px] text-text/50 tracking-wider mb-1">
              ENCRYPTION
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent-gold animate-pulse-glow" />
              <span className="text-sm text-accent-gold font-mono">
                {encryption} {encryptionStatus}
              </span>
            </div>
          </div>

          {/* Frequency */}
          <div className="border-l-2 border-accent-blue pl-3">
            <div className="text-[8px] text-text/50 tracking-wider mb-1">
              FREQUENCY
            </div>
            <span className="text-sm text-text/80 font-mono">{frequency}</span>
          </div>

          {/* Latency */}
          <div className="border-l-2 border-accent-blue pl-3">
            <div className="text-[8px] text-text/50 tracking-wider mb-1">
              LATENCY // UPTIME
            </div>
            <span className="text-sm font-mono">
              <span className="text-accent-blue">{latency}</span>
              <span className="text-text/30 mx-1">//</span>
              <span className="text-accent-gold">{uptime}</span>
            </span>
          </div>
        </div>

        {/* Oscilloscope Visualization */}
        <OscilloscopeWave />
      </div>
    </motion.section>
  );
}

// Signal strength bars component
function SignalBars({ strength }: { strength: number }) {
  const bars = 5;
  const activeBars = Math.ceil((strength / 100) * bars);

  return (
    <div className="flex items-end gap-0.5 h-4">
      {Array.from({ length: bars }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 0.5 + i * 0.1 }}
          className={`w-1 origin-bottom ${
            i < activeBars ? 'bg-accent-gold' : 'bg-secondary'
          }`}
          style={{ height: `${(i + 1) * 3 + 4}px` }}
        />
      ))}
    </div>
  );
}

// Oscilloscope wave animation
function OscilloscopeWave() {
  return (
    <div className="relative h-12 bg-primary/50 border border-accent-blue/20 overflow-hidden">
      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(52,73,94,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(52,73,94,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '20px 10px',
        }}
      />

      {/* Animated wave */}
      <svg
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
        viewBox="0 0 400 50"
      >
        <motion.path
          d="M0,25 Q25,10 50,25 T100,25 T150,25 T200,25 T250,25 T300,25 T350,25 T400,25"
          fill="none"
          stroke="rgba(241,196,15,0.6)"
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: [0.4, 1, 0.4],
            d: [
              'M0,25 Q25,10 50,25 T100,25 T150,25 T200,25 T250,25 T300,25 T350,25 T400,25',
              'M0,25 Q25,40 50,25 T100,25 T150,25 T200,25 T250,25 T300,25 T350,25 T400,25',
              'M0,25 Q25,10 50,25 T100,25 T150,25 T200,25 T250,25 T300,25 T350,25 T400,25',
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </svg>

      {/* Scanline */}
      <motion.div
        className="absolute top-0 bottom-0 w-px bg-accent-gold/60"
        animate={{ x: [0, 400] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
      />

      {/* Labels */}
      <div className="absolute top-1 left-2 text-[6px] text-accent-blue/50 font-mono">
        WAVEFORM.01
      </div>
      <div className="absolute bottom-1 right-2 text-[6px] text-accent-gold/50 font-mono">
        CARRIER_SIGNAL
      </div>
    </div>
  );
}

export default SignalDashboard;
