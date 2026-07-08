import { motion } from 'framer-motion';
import { Download, FolderGit2, Mail, MapPin } from 'lucide-react';


export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 px-5">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left: text */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1"
        >
          <p className="text-lg text-[var(--text-soft)] mb-2 flicker">Halo, Saya</p>
          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl leading-[0.9] mb-3">
            <span className="glitch gradient-text-sunset" data-text="KAUTSAR">KAUTSAR</span>
            <br />
            <span className="glitch neon-text-pink" data-text="FEBIA NADHA">FEBIA NADHA</span>
          </h1>
          <p className="text-xl font-semibold gradient-text mb-1">Information Technology Student</p>
          <p className="text-sm text-[var(--text-soft)] mb-6">
            Web Developer <span className="neon-text-pink">•</span> Mobile Developer <span className="neon-text-cyan">•</span> Game Developer <span className="neon-text-purple">•</span> IT Support
          </p>
          <p className="text-sm md:text-base text-[var(--text-soft)] max-w-xl mb-8 leading-relaxed">
            Mahasiswa Semester 6 Teknologi Informasi Universitas Bina Sarana Informatika dengan pengalaman lebih dari 3 tahun di bidang penjualan laptop, troubleshooting perangkat, customer service, serta memiliki pengalaman mengembangkan aplikasi berbasis Web, Mobile, dan Augmented Reality.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="/cv-kautsar.pdf" download className="neon-btn neon-border-pink px-6 py-3 rounded-xl font-semibold text-sm flex items-center gap-2 hover:scale-105 transition-transform">
              <Download size={18} className="neon-text-pink" /> Download CV
            </a>
            <a href="#projects" className="neon-btn neon-border-cyan px-6 py-3 rounded-xl font-semibold text-sm flex items-center gap-2 hover:scale-105 transition-transform">
              <FolderGit2 size={18} className="neon-text-cyan" /> Lihat Project
            </a>
            <a href="#contact" className="neon-btn neon-border-purple px-6 py-3 rounded-xl font-semibold text-sm flex items-center gap-2 hover:scale-105 transition-transform">
              <Mail size={18} className="neon-text-purple" /> Hubungi Saya
            </a>
          </div>

          <div className="flex items-center gap-2 mt-8 text-sm text-[var(--text-soft)]">
            <MapPin size={16} className="neon-text-orange" /> Tangerang, Indonesia
          </div>
        </motion.div>

        {/* Right: profile image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 lg:order-2 flex justify-center"
        >
          <div className="relative">
            {/* Glow ring */}
            <div className="absolute -inset-4 rounded-full blur-2xl opacity-70" style={{ background: 'conic-gradient(from 0deg, #FF2E93, #7C3AED, #22D3EE, #FB923C, #FF2E93)' }} />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-2 rounded-full"
              style={{ background: 'conic-gradient(from 0deg, transparent, #FF2E93, transparent 30%, #22D3EE, transparent 60%, #FB923C, transparent)', padding: '3px' }}
            >
              <div className="w-full h-full rounded-full bg-[var(--bg)]" />
            </motion.div>
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-2 border-[#FF2E93]/50" style={{ boxShadow: '0 0 40px rgba(255,46,147,0.4)' }}>
              <img src="/images/profile2.jpg" loading="lazy" decoding="async" alt="Kautsar Febia Nadha" className="w-full h-full object-cover" />
            </div>
            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-2 -right-2 glass px-4 py-2 rounded-2xl neon-border-cyan"
            >
              <p className="text-xs text-[var(--text-soft)]">Available for</p>
              <p className="text-sm font-bold neon-text-cyan">Collab / Intern</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
