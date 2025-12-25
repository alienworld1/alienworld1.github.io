import { motion } from 'motion/react';
import { IndustrialFrame, NavHUD } from '../components';
import {
  SignalDashboard,
  TransmissionChannels,
  StatusTerminal,
} from '../components/contact';

function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative w-full min-h-screen bg-primary"
    >
      {/* CRT Effect Overlay */}
      <div className="fixed inset-0 pointer-events-none z-100">
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background:
              'radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(18,20,23,0.8) 100%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)',
          }}
        />
      </div>

      <IndustrialFrame serialNumber="COMM-UPLINK-07">
        <NavHUD />

        {/* Main Content */}
        <div className="ml-16 md:ml-36 mr-4 md:mr-8 py-8 max-w-3xl">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-8"
          >
            <div className="text-[8px] text-accent-red tracking-[0.3em] mb-2">
              {'>>>'} COMMUNICATIONS DIVISION
            </div>
            <h1 className="text-display text-xl md:text-2xl text-accent-gold tracking-widest">
              COMM-LINK UPLINK
            </h1>
            <div className="mt-2 text-[10px] text-text/40 font-mono">
              TRANSMISSION ACCESS:{' '}
              {new Date().toISOString().split('T')[0].replace(/-/g, '.')} //
              RELAY: GAMMA-07
            </div>
          </motion.div>

          {/* Transmission Notice */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6 p-3 border-l-2 border-accent-gold bg-accent-gold/5"
          >
            <div className="text-[10px] text-accent-gold/80 font-mono leading-relaxed">
              {'>'} ESTABLISHING SECURE CONNECTION TO REMOTE TERMINAL...
              <br />
              {'>'} ALL CHANNELS ENCRYPTED. SELECT PREFERRED UPLINK PROTOCOL.
            </div>
          </motion.div>

          {/* Signal Dashboard */}
          <SignalDashboard />

          {/* Transmission Channels */}
          <TransmissionChannels />

          {/* Status Terminal */}
          <StatusTerminal />

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-12 pt-4 border-t border-accent-blue/20 text-center"
          >
            <div className="text-[8px] text-accent-blue/40 tracking-[0.2em]">
              END TRANSMISSION // COMM ARRAY GAMMA // SIGNAL LOCKED
            </div>
          </motion.div>
        </div>
      </IndustrialFrame>

      {/* Background Grid */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.02] z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(241,196,15,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(241,196,15,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
    </motion.div>
  );
}

export default Contact;
