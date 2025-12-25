import { motion } from 'motion/react';
import { CONTACT_LINKS, type ContactChannel } from '../../data/ContactData';

function TransmissionChannels() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="mb-8"
    >
      {/* Section Label */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 bg-accent-blue" />
        <span className="text-[10px] text-accent-blue tracking-[0.3em]">
          SECURE CHANNELS
        </span>
        <div className="flex-1 h-px bg-accent-blue/30" />
        <span className="text-[8px] text-text/40 font-mono">
          {CONTACT_LINKS.length} AVAILABLE
        </span>
      </div>

      {/* Channels List */}
      <div className="space-y-2">
        {CONTACT_LINKS.map((channel, index) => (
          <ChannelLink key={channel.id} channel={channel} index={index} />
        ))}
      </div>
    </motion.section>
  );
}

// Individual channel link component
function ChannelLink({
  channel,
  index,
}: {
  channel: ContactChannel;
  index: number;
}) {
  const statusColors = {
    ACTIVE: 'bg-accent-gold',
    STANDBY: 'bg-accent-blue',
    OFFLINE: 'bg-accent-red/50',
  };

  return (
    <motion.a
      href={channel.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.4 + index * 0.1 }}
      className="group block p-4 bg-[#1B1E23] border border-accent-blue/20 clip-chamfer-sm
                 hover:border-accent-gold/50 hover:bg-[#1E2228] transition-all duration-300"
    >
      <div className="flex items-center justify-between gap-4">
        {/* Left side - Main info */}
        <div className="flex items-center gap-4 flex-1 min-w-0">
          {/* Access Code */}
          <div
            className="shrink-0 w-12 h-12 flex items-center justify-center 
                          bg-secondary border border-accent-blue/30 
                          group-hover:border-accent-gold/50 group-hover:bg-accent-gold/10 
                          transition-all duration-300"
          >
            <span className="text-lg font-mono text-accent-blue group-hover:text-accent-gold transition-colors">
              {channel.accessCode}
            </span>
          </div>

          {/* Label and sublabel */}
          <div className="min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <motion.span
                className="text-sm font-mono tracking-wider text-text group-hover:text-accent-gold transition-colors"
                animate={{
                  opacity: [1, 0.7, 1],
                }}
                transition={{
                  duration: 0.1,
                  repeat: 0,
                }}
                whileHover={{
                  opacity: [1, 0.5, 1, 0.8, 1],
                  transition: { duration: 0.3 },
                }}
              >
                {channel.label}
              </motion.span>
              <span className="text-[8px] text-accent-blue/50">
                // [ACCESS_CODE: {channel.accessCode}]
              </span>
            </div>
            <div className="text-[10px] text-text/40 font-mono truncate">
              {channel.sublabel}
            </div>
          </div>
        </div>

        {/* Right side - Status and protocol */}
        <div className="shrink-0 flex items-center gap-4">
          {/* Protocol */}
          <div className="hidden md:block text-right">
            <div className="text-[8px] text-text/30 tracking-wider mb-1">
              PROTOCOL
            </div>
            <div className="text-[10px] text-accent-blue/60 font-mono">
              {channel.protocol}
            </div>
          </div>

          {/* Status indicator */}
          <div className="flex items-center gap-2">
            <div
              className={`w-2 h-2 ${statusColors[channel.status]} ${
                channel.status === 'ACTIVE' ? 'animate-pulse-glow' : ''
              }`}
            />
            <span
              className={`text-[9px] tracking-wider ${
                channel.status === 'ACTIVE'
                  ? 'text-accent-gold'
                  : channel.status === 'STANDBY'
                    ? 'text-accent-blue'
                    : 'text-accent-red/70'
              }`}
            >
              {channel.status}
            </span>
          </div>

          {/* Arrow indicator */}
          <motion.span
            className="text-accent-blue group-hover:text-accent-gold transition-colors"
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
          >
            {'>>'}
          </motion.span>
        </div>
      </div>

      {/* Bottom connection line animation */}
      <motion.div
        className="absolute bottom-0 left-0 h-px bg-accent-gold/50 origin-left"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.a>
  );
}

export default TransmissionChannels;
