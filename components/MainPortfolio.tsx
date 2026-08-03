"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Github, Linkedin, Sparkles, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { navItems, skillGroups, projects, stats, experiences, achievements, certifications, competitiveProgramming } from '@/data/content';
import { AnimatedSphere } from '@/components/AnimatedSphere';
import { CursorGlow } from '@/components/CursorGlow';
import { ScrollProgress } from '@/components/ScrollProgress';
import { useLenis } from '@/hooks/useLenis';

export function MainPortfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  useLenis();

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.45 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="relative overflow-x-hidden">
      <CursorGlow />
      <ScrollProgress />
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute left-[-10%] top-[-5%] h-72 w-72 rounded-full bg-cyan/20 blur-3xl" />
        <div className="absolute right-[-5%] top-[20%] h-96 w-96 rounded-full bg-violet/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-blue/20 blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#home" className="text-lg font-semibold tracking-[0.3em] text-white/90">
            MH
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm transition ${activeSection === item.href.replace('#', '') ? 'text-cyan' : 'text-white/70 hover:text-white'}`}
              >
                {item.label}
              </a>
            ))}
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="rounded-full border border-white/15 p-2 md:hidden">
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>
        {menuOpen && (
          <div className="border-t border-white/10 bg-black/80 px-6 py-4 md:hidden">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block py-2 text-sm text-white/80"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </header>

      <section id="home" className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-24 lg:px-8">
        <div className="absolute inset-0 grid-overlay opacity-30" />
        <div className="relative grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div initial={{ opacity: 0, y: 42 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan/20 bg-cyan/10 px-4 py-2 text-sm text-cyan">
              <Sparkles size={14} /> AI Undergraduate • FAST NUCES Karachi
            </div>
            <h1 className="text-4xl font-semibold leading-[0.95] sm:text-6xl lg:text-7xl">
              Hi, I&apos;m <span className="bg-gradient-to-r from-cyan via-blue to-violet bg-clip-text text-transparent">Muhammad Hamdan</span>
            </h1>
            <p className="mt-6 text-xl text-white/70 sm:text-2xl">
              AI Engineer • Full Stack Developer • Building intelligent products that feel effortless.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#contact" className="rounded-full border border-cyan/30 bg-cyan/10 px-6 py-3 text-sm font-medium text-cyan transition hover:scale-105">Contact Me</a>
              <a href="#projects" className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 transition hover:scale-105">View Projects</a>
            </div>
            <div className="mt-10 flex flex-wrap gap-3 text-sm text-white/60">
              {['Building AI Products', 'Machine Learning', 'Web Development', 'Problem Solver', 'Hackathon Builder'].map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-2">{item}</span>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9 }} className="relative mx-auto flex h-[420px] w-full max-w-[420px] items-center justify-center">
            <div className="absolute inset-0 rounded-full border border-cyan/20" />
            <div className="absolute inset-8 rounded-full border border-violet/20" />
            <div className="glass relative h-72 w-72 rounded-full p-8 shadow-glow">
              <div className="absolute inset-4 rounded-full border border-white/10" />
              <div className="absolute inset-0 animate-[spin_20s_linear_infinite] rounded-full border border-cyan/20 border-t-transparent" />
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-cyan/40 via-blue/30 to-violet/40 blur-2xl" />
              <div className="relative h-full w-full overflow-hidden rounded-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1),_transparent_55%)]">
                <AnimatedSphere />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="glass relative overflow-hidden rounded-[2rem] p-8 sm:p-10 lg:p-14">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan/10 via-transparent to-violet/10" />
          <div className="relative grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan">About</p>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">I&apos;m driven by intelligent systems, meaningful products, and constant growth.</h2>
              <p className="mt-6 text-lg leading-8 text-white/70">
                I&apos;m an AI undergraduate at FAST NUCES Karachi with a strong interest in machine learning, full stack development, and building products that merge research with real-world impact.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {stats.map((stat, index) => (
                <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="rounded-2xl border border-white/10 bg-black/25 p-6">
                  <p className="text-4xl font-semibold text-white">{stat.value}+</p>
                  <p className="mt-2 text-white/60">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan">Skills</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Crafting elegant AI and product experiences.</h2>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => (
            <motion.div key={group.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="glass rounded-[1.6rem] p-6">
              <h3 className="text-xl font-semibold text-white">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80">{item}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan">Projects</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Selected work with depth, ambition, and bold UI.</h2>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article key={project.title} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="glass group overflow-hidden rounded-[1.8rem] p-6">
              <div className="h-44 rounded-[1.2rem] bg-gradient-to-br from-cyan/30 via-blue/20 to-violet/30" />
              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((tech) => <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/70">{tech}</span>)}
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-white">{project.title}</h3>
              <p className="mt-3 text-white/70">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                {project.features.map((feature) => <span key={feature} className="text-sm text-cyan">• {feature}</span>)}
              </div>
              <div className="mt-5 flex flex-wrap items-center gap-2">
                <span className={`rounded-full px-3 py-1 text-xs font-medium ${project.status === 'Deployed' ? 'bg-cyan/15 text-cyan' : 'bg-white/10 text-white/70'}`}>
                  {project.status}
                </span>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {project.github && project.github !== '#' ? (
                  <a href={project.github} target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/80">GitHub</a>
                ) : (
                  <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/50">GitHub soon</span>
                )}
                {project.demo ? (
                  <a href={project.demo} target="_blank" rel="noreferrer" className="rounded-full bg-white/10 px-4 py-2 text-sm text-white/90">Live Demo</a>
                ) : (
                  <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-white/60">Live demo soon</span>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="cp" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="glass rounded-[1.8rem] p-8 sm:p-10">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan">Competitive Programming</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">I&apos;m actively sharpening my problem-solving skills on LeetCode and Codeforces.</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {competitiveProgramming.map((item) => (
              <div key={item.platform} className="rounded-[1.2rem] border border-white/10 bg-black/20 p-6">
                <p className="text-xl font-semibold text-white">{item.platform}</p>
                <p className="mt-2 text-sm leading-7 text-white/70">{item.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="glass rounded-[1.8rem] p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan">Experience</p>
            <h2 className="mt-3 text-3xl font-semibold">A timeline of growth and momentum.</h2>
          </div>
          <div className="glass rounded-[1.8rem] p-8">
            <div className="space-y-6">
              {experiences.map((item, index) => (
                <motion.div key={item.title} initial={{ opacity: 0, x: 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="border-l border-white/10 pl-6">
                  <p className="text-sm text-cyan">{item.date}</p>
                  <h3 className="mt-1 text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-white/70">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="glass rounded-[1.8rem] p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan">Certifications</p>
            <h2 className="mt-3 text-3xl font-semibold">Learning at the frontier of AI and modern product engineering.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {certifications.map((cert, index) => (
              <motion.div key={cert.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="glass rounded-[1.4rem] p-6">
                <p className="text-lg font-semibold text-white">{cert.title}</p>
                <p className="mt-2 text-sm text-white/60">{cert.issuer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan">Achievements</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Recognition shaped by curiosity, execution, and impact.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {achievements.map((item, index) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="glass rounded-[1.4rem] p-6">
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/70">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="glass rounded-[2rem] p-8 sm:p-10 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan">Contact</p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Let&apos;s build something thoughtful and unforgettable.</h2>
              <div className="mt-8 space-y-4 text-white/70">
                <a href="mailto:muhammadhamdan@example.com" className="flex items-center gap-3"><Mail size={18} /> muhammadhamdan@example.com</a>
                <a href="https://github.com" className="flex items-center gap-3"><Github size={18} /> GitHub</a>
                <a href="https://linkedin.com" className="flex items-center gap-3"><Linkedin size={18} /> LinkedIn</a>
              </div>
            </div>
            <form className="space-y-4 rounded-[1.4rem] border border-white/10 bg-black/25 p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <input className="rounded-full border border-white/10 bg-white/5 px-4 py-3 outline-none" placeholder="Name" />
                <input className="rounded-full border border-white/10 bg-white/5 px-4 py-3 outline-none" placeholder="Email" />
              </div>
              <input className="w-full rounded-full border border-white/10 bg-white/5 px-4 py-3 outline-none" placeholder="Subject" />
              <textarea rows={5} className="w-full rounded-[1.2rem] border border-white/10 bg-white/5 px-4 py-3 outline-none" placeholder="Message" />
              <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan to-violet px-5 py-3 text-sm font-medium text-white">Send Message <ArrowRight size={16} /></button>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-white/60 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
          <p>© 2026 Muhammad Hamdan. Designed with intention.</p>
          <a href="#home" className="rounded-full border border-white/10 px-4 py-2">Back to Top</a>
        </div>
      </footer>
    </main>
  );
}
