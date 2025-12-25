import { motion } from 'motion/react';
import { NavLink, useLocation } from 'react-router-dom';

interface NavItem {
  id: string;
  label: string;
  path: string;
}

const navItems: NavItem[] = [
  { id: '01', label: 'HOME', path: '/' },
  { id: '02', label: 'ABOUT', path: '/about' },
  { id: '03', label: 'PROJECTS', path: '/projects' },
  { id: '04', label: 'CONTACT', path: '/contact' },
];

function NavIndicator({ isActive }: { isActive: boolean }) {
  return (
    <div className="relative w-2 h-2 mr-2">
      {isActive ? (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-full h-full bg-accent-gold animate-pulse-glow"
          style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
        />
      ) : (
        <div
          className="w-full h-full border border-accent-blue/50"
          style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
        />
      )}
    </div>
  );
}

export default function NavHUD() {
  const location = useLocation();

  return (
    <motion.nav
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="fixed left-4 md:left-6 top-1/2 -translate-y-1/2 z-50"
    >
      {/* Nav container with industrial styling */}
      <div className="relative">
        {/* Vertical line connector */}
        <div className="absolute left-0.75 top-4 bottom-4 w-px bg-accent-blue/30" />

        {/* Nav header */}
        <div className="text-[8px] text-accent-gold/60 tracking-[0.2em] mb-4 pl-4">
          NAV.SYS
        </div>

        {/* Nav items */}
        <ul className="space-y-4">
          {navItems.map((item, index) => {
            const isActive = location.pathname === item.path;

            return (
              <motion.li
                key={item.id}
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
              >
                <NavLink
                  to={item.path}
                  className={({ isActive: linkActive }) => `
                    group flex items-center transition-all duration-200
                    ${linkActive ? 'text-accent-gold' : 'text-text/60 hover:text-text'}
                  `}
                >
                  <NavIndicator isActive={isActive} />

                  <div className="flex items-baseline gap-2">
                    <span className="text-[10px] text-accent-red/80 font-mono">
                      {item.id}
                    </span>
                    <span
                      className={`
                      text-xs tracking-[0.15em] font-mono
                      ${isActive ? 'text-accent-gold' : 'group-hover:text-accent-gold/80'}
                    `}
                    >
                      {item.label}
                    </span>
                  </div>

                  {/* Active bracket indicator */}
                  {isActive && (
                    <motion.span
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="ml-2 text-accent-gold text-xs"
                    >
                      {'<'}
                    </motion.span>
                  )}
                </NavLink>
              </motion.li>
            );
          })}
        </ul>

        {/* Nav footer status */}
        <div className="mt-6 pt-4 border-t border-accent-blue/20">
          <div className="text-[7px] text-accent-blue/50 tracking-wider">
            SECTOR: 7-G
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
