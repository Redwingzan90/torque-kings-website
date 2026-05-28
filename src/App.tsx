import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Phone, MapPin, Clock3, ShieldCheck, Leaf, ArrowRight } from 'lucide-react';

const nav = [
  { id: 'capabilities', label: 'Capabilities' },
  { id: 'safety', label: 'Safety' },
  { id: 'sustainability', label: 'Sustainability' },
  { id: 'contact', label: 'Contact' },
];

const hours = [
  ['Mon', '08:00 AM - 05:00 PM'],
  ['Tue', '08:00 AM - 05:00 PM'],
  ['Wed', '08:00 AM - 05:00 PM'],
  ['Thu', '08:00 AM - 05:00 PM'],
  ['Fri', '08:00 AM - 05:00 PM'],
  ['Sat', 'Closed'],
  ['Sun', 'Closed'],
];

export default function App() {
  const [open, setOpen] = useState(false);

  const jumpTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-stone-950/75 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-20 md:px-8">
          <button onClick={() => jumpTo('top')} className="flex items-center gap-3">
            <img src="/tq-logo.svg" alt="TQ logo" className="h-11 w-11" />
            <div className="text-left">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-300">GWS Permian Casing, LP dba</p>
              <p className="text-lg font-black tracking-tight">TQ Website</p>
            </div>
          </button>

          <nav className="hidden items-center gap-7 md:flex">
            {nav.map((item) => (
              <button
                key={item.id}
                onClick={() => jumpTo(item.id)}
                className="text-sm font-semibold text-stone-300 transition-colors hover:text-amber-300"
              >
                {item.label}
              </button>
            ))}
            <a href="tel:4325631820" className="rounded-full bg-amber-400 px-5 py-2.5 text-sm font-black text-stone-900 hover:bg-amber-300">
              (432) 563-1820
            </a>
          </nav>

          <button className="md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="border-t border-white/10 bg-stone-950 p-4 md:hidden">
            {nav.map((item) => (
              <button
                key={item.id}
                onClick={() => jumpTo(item.id)}
                className="block w-full rounded-lg px-3 py-2 text-left text-stone-300 hover:bg-white/5"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </header>

      <main id="top">
        <section className="relative flex min-h-screen items-end overflow-hidden pt-28 md:items-center md:pt-24">
          <motion.img
            initial={{ scale: 1.07 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.7, ease: 'easeOut' }}
            src="https://images.pexels.com/photos/18560234/pexels-photo-18560234.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1600&w=2600"
            alt="West Texas land drilling rig"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950/92 via-stone-950/70 to-stone-900/30" />

          <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-16 md:px-8 md:pb-0">
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <img src="/tq-logo.svg" alt="TQ" className="mb-6 h-36 w-auto" />
              <h1 className="text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">TQ Website</h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-stone-200 md:text-2xl">
                Professional oilfield services built on 15+ years of expertise, strict safety execution,
                and operational reliability in the Permian Basin.
              </p>
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
                West Texas Land Rigs · Field Operations · No Offshore Work
              </p>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.2 }}
                className="mt-8 flex flex-col gap-3 sm:flex-row"
              >
                <button
                  onClick={() => jumpTo('contact')}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-400 px-8 py-4 text-lg font-black text-stone-900 hover:bg-amber-300"
                >
                  Discover More <ArrowRight className="h-5 w-5" />
                </button>
                <a
                  href="tel:4325631820"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-8 py-4 text-lg font-semibold text-white hover:bg-white/20"
                >
                  <Phone className="h-5 w-5" /> Call Now
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section id="capabilities" className="bg-stone-900 py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl"
            >
              <p className="text-xs font-black uppercase tracking-[0.2em] text-amber-300">Our Expertise</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Experienced solutions for demanding operations</h2>
              <p className="mt-5 text-lg leading-relaxed text-stone-300">
                With over 15 years in oil and gas, Torque Kings supports clients with customized field solutions.
                Our team brings practical experience, responsive communication, and disciplined execution to every job.
              </p>
            </motion.div>
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              src="https://images.pexels.com/photos/16133914/pexels-photo-16133914.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400"
              alt="West Texas land pumpjack operations"
              className="mt-10 h-[320px] w-full rounded-3xl object-cover"
            />
          </div>
        </section>

        <section id="safety" className="bg-stone-950 py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl border-l-4 border-amber-300 pl-6"
            >
              <p className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-amber-300">
                <ShieldCheck className="h-4 w-4" /> Our Safety Standards
              </p>
              <p className="mt-4 text-lg leading-relaxed text-stone-300">
                Safety is our number one priority. We operate with rigorous procedures, regular training,
                and clear reporting standards that protect employees, clients, and worksites.
              </p>
            </motion.div>
          </div>
        </section>

        <section id="sustainability" className="bg-stone-900 py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl"
            >
              <p className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-amber-300">
                <Leaf className="h-4 w-4" /> Our Sustainability Efforts
              </p>
              <p className="mt-4 text-lg leading-relaxed text-stone-300">
                We are committed to lowering environmental impact by reducing emissions, minimizing waste,
                and applying responsible operating practices across our projects.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="bg-stone-950 py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <h2 className="text-4xl font-black tracking-tight md:text-5xl">Operational Gallery</h2>
            <p className="mt-3 text-stone-300">A look at West Texas style land-rig and pumpjack operations.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                'https://images.pexels.com/photos/18560234/pexels-photo-18560234.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
                'https://images.pexels.com/photos/16133914/pexels-photo-16133914.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
                'https://images.pexels.com/photos/20014443/pexels-photo-20014443.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
              ].map((src, i) => (
                <motion.img
                  key={src}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  src={src}
                  alt="Torque Kings operations"
                  className="h-56 w-full rounded-2xl object-cover"
                />
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-stone-900 py-20 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-2 md:px-8">
            <div>
              <h2 className="text-4xl font-black tracking-tight md:text-5xl">Contact Us</h2>
              <p className="mt-4 text-lg text-stone-300">Better yet, see us in person. We love our customers.</p>
              <div className="mt-8 space-y-5 text-stone-200">
                <p className="inline-flex items-start gap-2.5">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-amber-300" />
                  <span>
                    GWS Permian Casing, LP dba Torque Kings
                    <br />
                    7507 Andrews Highway, Odessa, Texas 79765, United States
                  </span>
                </p>
                <p className="inline-flex items-center gap-2.5">
                  <Phone className="h-5 w-5 text-amber-300" />
                  <a href="tel:4325631820" className="font-semibold hover:text-amber-300">(432) 563-1820</a>
                </p>
                <p className="inline-flex items-center gap-2.5">
                  <Clock3 className="h-5 w-5 text-amber-300" /> Open today: 08:00 AM - 05:00 PM
                </p>
                <p className="text-sm text-stone-400">Closed major holidays.</p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-stone-950/50 p-6">
              <h3 className="text-2xl font-bold">Hours</h3>
              <div className="mt-5 space-y-2 text-sm">
                {hours.map(([day, time]) => (
                  <p key={day} className="flex items-center justify-between border-b border-white/10 py-1.5">
                    <span className="font-semibold text-stone-300">{day}</span>
                    <span className={time === 'Closed' ? 'font-semibold text-rose-300' : 'text-white'}>{time}</span>
                  </p>
                ))}
              </div>
              <a
                href="https://maps.google.com/?q=7507+Andrews+Highway+Odessa+Texas+79765"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-amber-400 px-6 py-3 font-bold text-stone-900 hover:bg-amber-300"
              >
                <MapPin className="h-4 w-4" /> Get directions
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-stone-950 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 text-sm text-stone-400 md:flex-row md:px-8">
          <p>Copyright © 2024 TQ Website - All Rights Reserved.</p>
          <p>Powered by GoDaddy</p>
        </div>
      </footer>
    </div>
  );
}