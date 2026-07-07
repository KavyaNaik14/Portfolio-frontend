import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiCheckCircle, FiSend } from 'react-icons/fi';
import { personal } from '../data/portfolioData';
import Reveal from './Reveal';

const API_URL = 'https://portfolio-backend-pwcl.vercel.app';

const initialForm = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');
    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || 'Something went wrong. Please try again.');
      }
      setStatus('success');
      setForm(initialForm);
      setTimeout(() => setStatus('idle'), 4000);
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.message || 'Unable to send message right now.');
    }
  };

  return (
    <section id="contact" className="container-px py-24">
      <Reveal>
        <p className="eyebrow">06 · contact.js</p>
        <h2 className="section-heading mt-2">Let's Work Together</h2>
        <p className="mt-3 max-w-xl text-ink/60 dark:text-paper/60">
          Have a project in mind or just want to say hi? My inbox is always open.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-10 md:grid-cols-5">
        <Reveal className="md:col-span-2 space-y-5">
          <a href={`mailto:${personal.email}`} className="card flex items-center gap-4 p-5">
            <FiMail className="text-amber-accent" size={20} />
            <div>
              <p className="text-xs text-ink/50 dark:text-paper/50">Email</p>
              <p className="text-sm font-medium text-ink dark:text-paper">{personal.email}</p>
            </div>
          </a>
          <a href={`tel:+91${personal.phone}`} className="card flex items-center gap-4 p-5">
            <FiPhone className="text-amber-accent" size={20} />
            <div>
              <p className="text-xs text-ink/50 dark:text-paper/50">Phone</p>
              <p className="text-sm font-medium text-ink dark:text-paper">+91 {personal.phone}</p>
            </div>
          </a>
          <div className="card flex items-center gap-4 p-5">
            <FiMapPin className="text-amber-accent" size={20} />
            <div>
              <p className="text-xs text-ink/50 dark:text-paper/50">Location</p>
              <p className="text-sm font-medium text-ink dark:text-paper">{personal.location}</p>
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="flex h-11 w-11 items-center justify-center rounded-lg border border-ink/10 dark:border-white/10 text-ink dark:text-paper hover:border-amber-accent hover:text-amber-accent"
            >
              <FiGithub size={18} />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="flex h-11 w-11 items-center justify-center rounded-lg border border-ink/10 dark:border-white/10 text-ink dark:text-paper hover:border-amber-accent hover:text-amber-accent"
            >
              <FiLinkedin size={18} />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="md:col-span-3">
          <form onSubmit={handleSubmit} className="card space-y-4 p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                required
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="rounded-lg border border-ink/10 dark:border-white/10 bg-transparent px-4 py-3 text-sm outline-none focus:border-amber-accent"
              />
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your email"
                className="rounded-lg border border-ink/10 dark:border-white/10 bg-transparent px-4 py-3 text-sm outline-none focus:border-amber-accent"
              />
            </div>
            <input
              required
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="w-full rounded-lg border border-ink/10 dark:border-white/10 bg-transparent px-4 py-3 text-sm outline-none focus:border-amber-accent"
            />
            <textarea
              required
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              placeholder="Your message"
              className="w-full resize-none rounded-lg border border-ink/10 dark:border-white/10 bg-transparent px-4 py-3 text-sm outline-none focus:border-amber-accent"
            />

            <button
              type="submit"
              disabled={status === 'sending'}
              className="btn-primary w-full justify-center disabled:opacity-60"
            >
              {status === 'sending' ? 'Sending...' : (<><FiSend /> Send Message</>)}
            </button>

            <AnimatePresence>
              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2 text-sm text-teal-accent"
                >
                  <FiCheckCircle /> Message sent — I'll get back to you soon!
                </motion.p>
              )}
              {status === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-sm text-red-400"
                >
                  {errorMsg}
                </motion.p>
              )}
            </AnimatePresence>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
