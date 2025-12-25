import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

function DecryptionLoader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState(
    'ESTABLISHING SECURE CONNECTION...',
  );

  useEffect(() => {
    const statuses = [
      'ESTABLISHING SECURE CONNECTION...',
      'AUTHENTICATING CREDENTIALS...',
      'DECRYPTING PERSONNEL FILE...',
      'LOADING BIOMETRIC DATA...',
      'VERIFYING CLEARANCE LEVEL...',
      'ACCESS GRANTED',
    ];

    const interval = setInterval(() => {
      setProgress(prev => {
        const next = prev + Math.random() * 15 + 5;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        setStatusText(
          statuses[Math.min(Math.floor(next / 20), statuses.length - 1)],
        );
        return next;
      });
    }, 300);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-primary z-50 flex items-center justify-center"
    >
      <div className="text-center">
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-accent-gold text-display text-sm tracking-[0.3em] mb-8"
        >
          {'>>>'} DECRYPTING {'<<<'}
        </motion.div>

        {/* Progress bar */}
        <div className="w-64 h-1 bg-secondary mb-4">
          <motion.div
            className="h-full bg-accent-gold"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
          />
        </div>

        <div className="text-[10px] text-text/60 font-mono tracking-wider">
          {statusText}
        </div>

        <div className="mt-4 text-[8px] text-accent-blue/50 font-mono">
          {Math.floor(progress)}% COMPLETE
        </div>
      </div>
    </motion.div>
  );
}

export default DecryptionLoader;
