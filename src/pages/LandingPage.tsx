import { motion } from 'motion/react';
import {
  IndustrialFrame,
  NavHUD,
  StatusPanel,
  HeroViewport,
} from '../components';

export default function LandingPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative w-full min-h-screen bg-primary overflow-hidden"
    >
      {/* CRT/Monitor effect overlay */}
      <div className="fixed inset-0 pointer-events-none z-100">
        {/* Vignette effect */}
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background:
              'radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(18,20,23,0.8) 100%)',
          }}
        />

        {/* Subtle CRT lines */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)',
          }}
        />
      </div>

      {/* Industrial frame wrapper */}
      <IndustrialFrame serialNumber="MDR-77-PORTFOLIO">
        {/* Navigation HUD */}
        <NavHUD />

        {/* Main hero viewport */}
        <HeroViewport
          operatorName="A B Aditya"
          operatorSpec="WEB DEVELOPER // BACKEND ARCHITECT // SYSTEM DESIGNER"
        />

        {/* Live status panel */}
        <StatusPanel />
      </IndustrialFrame>

      {/* Background grid pattern */}
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
