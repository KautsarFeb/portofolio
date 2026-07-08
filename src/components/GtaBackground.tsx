import { motion } from 'framer-motion';

/** Animated GTA-style background: grid, floating neon blobs, sunset gradient */
export default function GtaBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse at 50% 120%, rgba(251,146,60,0.18), transparent 50%), radial-gradient(ellipse at 20% 0%, rgba(255,46,147,0.12), transparent 50%), radial-gradient(ellipse at 80% 10%, rgba(124,58,237,0.12), transparent 50%)'
      }} />

      {/* GTA grid */}
      <div className="absolute inset-0 gta-grid" style={{ maskImage: 'linear-gradient(to bottom, transparent, black 30%, black 70%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 30%, black 70%, transparent)' }} />

      {/* Floating neon shapes */}
      <motion.div
        className="absolute top-[15%] left-[8%] w-72 h-72 rounded-full blur-3xl"
        style={{ background: 'rgba(255,46,147,0.25)' }}
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-[50%] right-[10%] w-96 h-96 rounded-full blur-3xl"
        style={{ background: 'rgba(34,211,238,0.18)' }}
        animate={{ y: [0, 40, 0], x: [0, -25, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[10%] left-[40%] w-80 h-80 rounded-full blur-3xl"
        style={{ background: 'rgba(124,58,237,0.2)' }}
        animate={{ y: [0, -35, 0], x: [0, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}
