import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { IndustrialFrame, NavHUD } from '../components';

import DecryptionLoader from '../components/about/DecryptionLoader';
import DossierHeader from '../components/about/DossierHeader';
import ServiceRecord from '../components/about/ServiceRecord';
import TechnicalClearances from '../components/about/TechnicalClearances';
// import DeploymentHistory from '../components/about/DeploymentHistory';
import PsychProfile from '../components/about/PsychProfile';

export default function About() {
  const [isDecrypting, setIsDecrypting] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isDecrypting && (
          <DecryptionLoader onComplete={() => setIsDecrypting(false)} />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isDecrypting ? 0 : 1 }}
        transition={{ duration: 0.5 }}
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

        <IndustrialFrame serialNumber="DOSSIER-CLASSIFIED">
          <NavHUD />

          {/* Main Content */}
          <div className="ml-16 md:ml-36 mr-4 md:mr-8 py-8 max-w-4xl">
            {/* Page Header */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-8"
            >
              <div className="text-[8px] text-accent-red tracking-[0.3em] mb-2">
                {'>>>'} CLASSIFIED DOCUMENT
              </div>
              <h1 className="text-display text-xl md:text-2xl text-accent-gold tracking-widest">
                PERSONNEL DOSSIER
              </h1>
              <div className="mt-2 text-[10px] text-text/40 font-mono">
                FILE ACCESS:{' '}
                {new Date().toISOString().split('T')[0].replace(/-/g, '.')} //
                TERMINAL: WY-7G-ALPHA
              </div>
            </motion.div>

            {/* Dossier Content */}
            <DossierHeader />
            <ServiceRecord />
            <TechnicalClearances />
            {/* <DeploymentHistory /> */}
            <PsychProfile />

            {/* Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-12 pt-4 border-t border-accent-blue/20 text-center"
            >
              <div className="text-[8px] text-accent-blue/40 tracking-[0.2em]">
                END OF FILE // WEYLAND-YUTANI CORP // BUILDING BETTER WORLDS
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
    </>
  );
}
