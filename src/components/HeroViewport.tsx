import { motion } from 'motion/react';

interface HeroViewportProps {
  operatorName?: string;
  operatorSpec?: string;
}

function SystemDiagnostic() {
  const diagnostics = [
    { label: 'CORE.TEMP', value: '32.7°C', status: 'ok' },
    { label: 'MEM.ALLOC', value: '847 MB', status: 'ok' },
    { label: 'NET.LATENCY', value: '12ms', status: 'ok' },
    { label: 'UPTIME', value: '2077.147:23:41', status: 'ok' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className="mt-8 p-4 border border-accent-blue/30 clip-chamfer-sm bg-secondary/30"
    >
      <div className="text-[10px] text-accent-red tracking-[0.2em] mb-3">
        {'>'} SYSTEM DIAGNOSTIC
      </div>
      <div className="grid grid-cols-2 gap-x-6 gap-y-2">
        {diagnostics.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 + index * 0.15 }}
            className="flex items-center gap-2"
          >
            <div className="w-1.5 h-1.5 bg-accent-gold/80" />
            <span className="text-[10px] text-text/50 font-mono">
              {item.label}
            </span>
            <span className="text-[10px] text-accent-gold font-mono ml-auto">
              {item.value}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function BootSequence() {
  const lines = [
    { text: 'INITIALIZING VIEWPORT INTERFACE...', delay: 0.1 },
    { text: 'LOADING OPERATOR CREDENTIALS...', delay: 0.3 },
    { text: 'SYSTEM CHECK: PASSED', delay: 0.5 },
    { text: 'WELCOME TO COMMAND BRIDGE', delay: 0.7 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="mb-8 space-y-1"
    >
      {lines.map((line, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: line.delay }}
          className="text-[10px] text-accent-blue/60 font-mono tracking-wider"
        >
          {'>'} {line.text}
        </motion.div>
      ))}
    </motion.div>
  );
}

export default function HeroViewport({
  operatorName = 'DESIGNATION PENDING',
  operatorSpec = 'FRONTEND ENGINEER // UI ARCHITECT',
}: HeroViewportProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col justify-center min-h-[80vh] max-w-2xl mx-auto px-4 md:px-0 ml-16 md:ml-24"
    >
      {/* Boot sequence */}
      <BootSequence />

      {/* Main viewport container */}
      <div className="relative left-10">
        {/* Top accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="h-px bg-linear-to-r from-accent-gold via-accent-gold/50 to-transparent mb-6 origin-left"
        />

        {/* Operator info */}
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <span className="text-[10px] text-accent-red tracking-[0.3em] block mb-1">
              OPERATOR
            </span>
            <h1 className="text-display text-2xl md:text-4xl lg:text-5xl text-text tracking-wider">
              {operatorName}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
          >
            <span className="text-[10px] text-accent-red tracking-[0.3em] block mb-1">
              SPEC
            </span>
            <p className="text-accent-gold font-mono text-sm md:text-base tracking-wider">
              {operatorSpec}
            </p>
          </motion.div>
        </div>

        {/* System diagnostic panel */}
        <SystemDiagnostic />

        {/* Mission brief */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="mt-8"
        >
          <div className="text-[10px] text-accent-blue/60 tracking-[0.2em] mb-2">
            {'>'} MISSION BRIEF
          </div>
          <p className="text-text/70 text-sm leading-relaxed font-mono max-w-lg">
            Building robust, maintainable systems for the digital frontier.
            Specializing in backend architectures, web interfaces, and design
            systems that scale across star systems.
          </p>
        </motion.div>

        {/* CTA / Action panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="/projects"
            className="group relative px-6 py-3 bg-secondary border border-accent-gold/50 
                       hover:border-accent-gold hover:bg-accent-gold/10 transition-all duration-300 clip-chamfer-sm"
          >
            <span className="text-[10px] text-accent-gold tracking-[0.2em] group-hover:text-accent-gold">
              VIEW PROJECTS {'>>'}
            </span>
          </a>
          <a
            href="/contact"
            className="group relative px-6 py-3 border border-accent-blue/50 
                       hover:border-accent-blue hover:bg-accent-blue/10 transition-all duration-300 clip-chamfer-sm"
          >
            <span className="text-[10px] text-text/70 tracking-[0.2em] group-hover:text-text">
              ESTABLISH CONTACT {'>>'}
            </span>
          </a>
        </motion.div>

        {/* Bottom frame accent */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 2.2 }}
          className="h-px bg-linear-to-r from-transparent via-accent-blue/30 to-accent-blue/50 mt-12 origin-right"
        />
      </div>
    </motion.div>
  );
}
