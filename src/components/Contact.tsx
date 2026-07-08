import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { supabase } from '../lib/supabase';

const contacts = [
  { icon: Mail, label: 'Email', value: 'kautsar53febia@gmail.com', href: 'mailto:kautsar53febia@gmail.com', color: 'pink' },
  { icon: Phone, label: 'WhatsApp', value: '+62 851-5683-7316', href: 'https://wa.me/6285156837316', color: 'cyan' },
  { icon: MapPin, label: 'Location', value: 'Tangerang, Indonesia', href: '#', color: 'pink' },
];

const colorMap: Record<string, string> = {
  pink: 'neon-text-pink',
  cyan: 'neon-text-cyan',
  purple: 'neon-text-purple',
  orange: 'neon-text-orange',
};

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Nama wajib diisi';
    if (!form.email.trim()) e.email = 'Email wajib diisi';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Format email tidak valid';
    if (!form.message.trim()) e.message = 'Pesan wajib diisi';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
  ev.preventDefault();

  if (!validate()) return;

  setStatus('sending');

  const { error } = await supabase
    .from('messages')
    .insert([
      {
        name: form.name,
        email: form.email,
        subject: form.subject,
        message: form.message,
      },
    ]);

  if (error) {
    console.error(error);
    setStatus('error');
    return;
  }

  setStatus('sent');
  setForm({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  setTimeout(() => setStatus('idle'), 4000);
};

  return (
    <section id="contact" className="relative py-24 px-5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="font-display text-sm tracking-[0.3em] neon-text-pink mb-2">GET IN TOUCH</p>
          <h2 className="font-display text-5xl md:text-6xl gradient-text">CONTACT</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {contacts.map(c => {
              const Icon = c.icon;
              return (
                <a key={c.label} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
                  className="glass rounded-2xl p-4 flex items-center gap-4 neon-border-pink hover:scale-[1.02] hover:neon-border-cyan transition-all group">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[var(--bg-soft)] group-hover:rotate-6 transition-transform">
                    <Icon size={22} className={colorMap[c.color]} />
                  </div>
                  <div>
                    <p className="text-xs text-[var(--text-soft)]">{c.label}</p>
                    <p className="text-sm font-semibold">{c.value}</p>
                  </div>
                </a>
              );
            })}
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-6 neon-border-cyan space-y-4"
          >
            <div>
              <input
                type="text" placeholder="Nama Lengkap" value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                className="w-full bg-[var(--bg-soft)] border border-[#FF2E93]/30 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-400 outline-none focus:border-[#FF2E93] focus:shadow-[0_0_15px_rgba(255,46,147,0.3)] transition-all"
              />
              {errors.name && <p className="text-xs neon-text-pink mt-1">{errors.name}</p>}
            </div>
            <div>
              <input
                type="email" placeholder="Email" value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                className="w-full bg-[var(--bg-soft)] border border-[#7C3AED]/30 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-400 outline-none focus:border-[#7C3AED] focus:shadow-[0_0_15px_rgba(124,58,237,0.3)] transition-all"
              />
              {errors.email && <p className="text-xs neon-text-pink mt-1">{errors.email}</p>}
            </div>
            <input
              type="text" placeholder="Subject (opsional)" value={form.subject}
              onChange={e => setForm({ ...form, subject: e.target.value })}
              className="w-full bg-[var(--bg-soft)] border border-[#22D3EE]/30 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-400 outline-none focus:border-[#22D3EE] focus:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all"
            />
            <div>
              <textarea
                placeholder="Pesan Anda..." rows={5} value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                className="w-full bg-[var(--bg-soft)] border border-[#FB923C]/30 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-400 outline-none focus:border-[#FB923C] focus:shadow-[0_0_15px_rgba(251,146,60,0.3)] transition-all resize-none"
              />
              {errors.message && <p className="text-xs neon-text-pink mt-1">{errors.message}</p>}
            </div>
            <button
              type="submit" disabled={status === 'sending'}
              className="neon-btn w-full neon-border-pink px-6 py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform disabled:opacity-60"
            >
              {status === 'sending' ? (
                <><span className="w-4 h-4 border-2 border-[#FF2E93] border-t-transparent rounded-full animate-spin" /> Mengirim...</>
              ) : status === 'sent' ? (
                <><CheckCircle2 size={18} className="neon-text-cyan" /> Pesan Terkirim!</>
              ) : status === 'error' ? (
                'Gagal mengirim, coba lagi'
              ) : (
                <><Send size={18} className="neon-text-pink" /> Kirim Pesan</>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
