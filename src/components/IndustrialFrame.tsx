import { motion } from 'motion/react';
import type { ReactNode } from 'react';

interface IndustrialFrameProps {
  children: ReactNode;
  serialNumber?: string;
}

// Corner bolt decorations
function CornerBolt({ position }: { position: 'tl' | 'tr' | 'bl' | 'br' }) {
  const positionClasses = {
    tl: 'top-2 left-2',
    tr: 'top-2 right-2',
    bl: 'bottom-2 left-2',
    br: 'bottom-2 right-2',
  };

  return (
    <div className={`absolute ${positionClasses[position]} w-3 h-3`}>
      {/* Outer bolt ring */}
      <div className="absolute inset-0 border border-accent-gold/60 rotate-45" />
      {/* Inner bolt head */}
      <div className="absolute inset-1 bg-secondary border border-accent-gold/40" />
    </div>
  );
}

// Technical serial number display
function SerialTag({
  serial,
  position,
}: {
  serial: string;
  position: 'top' | 'bottom';
}) {
  const positionClasses =
    position === 'top'
      ? 'top-1 left-1/2 -translate-x-1/2'
      : 'bottom-1 left-1/2 -translate-x-1/2';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className={`absolute ${positionClasses} text-[8px] text-accent-gold/50 tracking-[0.3em] font-mono`}
    >
      {serial}
    </motion.div>
  );
}

export default function IndustrialFrame({
  children,
  serialNumber = 'MDR-77-PORTFOLIO',
}: IndustrialFrameProps) {
  return (
    <div className="relative w-full h-full min-h-screen bg-primary">
      {/* Main frame border */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-2 md:inset-3 border border-accent-gold/30"
      >
        {/* Corner bolts */}
        <CornerBolt position="tl" />
        <CornerBolt position="tr" />
        <CornerBolt position="bl" />
        <CornerBolt position="br" />

        {/* Serial numbers */}
        <SerialTag serial={serialNumber} position="top" />
        <SerialTag serial="SYS.BUILD" position="bottom" />

        {/* Side technical markings */}
        <div
          className="absolute top-1/2 -translate-y-1/2 left-1 text-[6px] text-accent-blue/60 tracking-widest writing-mode-vertical hidden md:block"
          style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
        >
          VIEWPORT-A1
        </div>
        <div
          className="absolute top-1/2 -translate-y-1/2 right-1 text-[6px] text-accent-blue/60 tracking-widest"
          style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
        >
          REV.2077
        </div>

        {/* Scanline effect overlay */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.03]">
          <div
            className="absolute w-full h-1 bg-accent-gold"
            style={{
              animation: 'scanline 8s linear infinite',
            }}
          />
        </div>
      </motion.div>

      {/* Content container */}
      <div className="relative h-full min-h-screen p-4 md:p-6">{children}</div>
    </div>
  );
}
