"use client";

import {
  ArrowRight,
  BrainCircuit,
  Briefcase,
  Calendar,
  Code,
  Cpu,
  Database,
  Download,
  ExternalLink,
  Flag,
  Gamepad2,
  Github,
  GraduationCap,
  House,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Server,
  Sparkles,
  Sun,
  Trophy,
  User,
  Wrench,
  X
} from 'lucide-react';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { navItems, skillGroups, projects, stats, experiences, achievements, certifications, competitiveProgramming } from '@/data/content';
import { PixelHeroArt, PixelPortrait, PixelThumb } from '@/components/PixelArt';
import { useLenis } from '@/hooks/useLenis';

const navIcons: Record<string, typeof House> = {
  Home: House,
  About: User,
  Skills: Code,
  Projects: Briefcase,
  CP: Gamepad2,
  Contact: Mail
};

const skillIcons: Record<string, typeof Code> = {
  'AI & ML': BrainCircuit,
  Frontend: Code,
  Backend: Server,
  Databases: Database,
  Tools: Wrench
};

const achievementIcons = [Trophy, Sparkles, Cpu, Github, Flag];

const heroTags = ['Building AI Products', 'Machine Learning', 'Web Development', 'Problem Solver', 'Hackathon Builder'];

function PixelDivider() {
  return (
    <div className="my-8 flex w-full justify-center">
      <div className="flex items-center space-x-2">
        {[0, 1, 2].map((dot) => (
          <div key={`l-${dot}`} className="h-2 w-2 bg-black shadow-[2px_2px_0_0_var(--pixel-gold)]" />
        ))}
        <div className="h-4 w-32 bg-black shadow-[4px_4px_0_0_var(--pixel-gold)]" />
        {[0, 1, 2].map((dot) => (
          <div key={`r-${dot}`} className="h-2 w-2 bg-black shadow-[2px_2px_0_0_var(--pixel-gold)]" />
        ))}
      </div>
    </div>
  );
}

function LogoMark({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-primary drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]"
      aria-hidden
    >
      <rect x="2" y="3" width="20" height="14" fill="currentColor" />
      <rect x="4" y="5" width="16" height="10" fill="white" className="dark:fill-zinc-950" />
      <rect x="10" y="17" width="4" height="3" fill="currentColor" />
      <rect x="7" y="20" width="10" height="2" fill="currentColor" />
      <rect x="6" y="7" width="2" height="2" fill="currentColor" />
    </svg>
  );
}

export function MainPortfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const headerRef = useRef<HTMLElement>(null);
  const [headerHeight, setHeaderHeight] = useState(112);
  useLenis();

  useLayoutEffect(() => {
    const stored = localStorage.getItem('theme');
    const next = stored === 'dark' ? 'dark' : 'light';
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(next);
    document.documentElement.style.colorScheme = next;
    setTheme(next);
  }, []);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    const update = () => setHeaderHeight(header.offsetHeight);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(header);
    return () => observer.disconnect();
  }, [menuOpen]);

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

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('theme', next);
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(next);
    document.documentElement.style.colorScheme = next;
  };

  const maxSkills = Math.max(...skillGroups.map((group) => group.items.length));

  const navLinkClass = (href: string) => {
    const active = activeSection === href.replace('#', '');
    return `pixel-button flex h-14 w-[5.5rem] flex-col items-center justify-center px-1 py-2 text-[8px] sm:text-[9px] ${
      active ? 'text-black' : 'pixel-outline hover:bg-primary/80 dark:bg-zinc-900 dark:text-white dark:hover:bg-primary dark:hover:text-black'
    }`;
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header ref={headerRef} className="fixed left-0 right-0 top-0 z-50 border-b-4 border-foreground bg-background">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4">
          <a href="#home" className="flex items-center gap-3">
            <LogoMark />
            <span className="font-pixel text-sm text-foreground sm:text-base">
              <span className="text-primary">M</span>H
            </span>
          </a>

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden items-center gap-1 lg:flex">
              {navItems.map((item) => {
                const Icon = navIcons[item.label] ?? House;
                return (
                  <a key={item.href} href={item.href} className={navLinkClass(item.href)}>
                    <Icon size={18} strokeWidth={2.5} />
                    <span>{item.label}</span>
                  </a>
                );
              })}
            </div>
            <button type="button" onClick={toggleTheme} className="pixel-button pixel-outline grid h-10 w-10 place-items-center p-0" aria-label="Toggle theme">
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className="pixel-button pixel-outline grid h-10 w-10 place-items-center p-0 lg:hidden"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
        {menuOpen && (
          <div className="border-t-4 border-foreground bg-background px-4 py-4 lg:hidden">
            <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 sm:grid-cols-3">
              {navItems.map((item) => {
                const Icon = navIcons[item.label] ?? House;
                const active = activeSection === item.href.replace('#', '');
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`pixel-button flex h-14 flex-col items-center justify-center px-2 py-2 text-[10px] ${
                      active ? 'text-black' : 'pixel-outline dark:bg-zinc-900 dark:text-white'
                    }`}
                  >
                    <Icon size={18} strokeWidth={2.5} />
                    <span>{item.label}</span>
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </header>

      <main className="pixel-grid" style={{ paddingTop: headerHeight }}>
        <section id="home" className="mx-auto max-w-7xl px-4 py-16 md:pb-16 md:pt-24">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <div className="inline-block border-2 border-black bg-primary px-4 py-2">
                <p className="font-bold text-black">AI Undergraduate • FAST NUCES Karachi</p>
              </div>
              <h1 className="pixel-hero">
                Hi, I&apos;m <span className="text-primary">Muhammad Hamdan</span>
              </h1>
              <p className="text-xl md:text-2xl">AI Engineer • Full Stack Developer • Building intelligent products that feel effortless.</p>
              <div className="flex flex-wrap gap-2">
                {heroTags.map((item) => (
                  <span key={item} className="pixel-chip">
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <a href="#projects" className="pixel-button inline-flex items-center justify-center px-4 py-3 text-[10px] sm:text-xs">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <a href="#contact" className="pixel-button pixel-outline inline-flex items-center justify-center px-4 py-3 text-[10px] sm:text-xs">
                  Contact Me
                </a>
                <a href="/Hamdan_CV.pdf" download className="pixel-button pixel-outline inline-flex items-center justify-center px-4 py-3 text-[10px] sm:text-xs">
                  <Download className="mr-2 h-4 w-4" /> Download CV
                </a>
              </div>
              <div className="flex flex-wrap gap-3">
                {stats.slice(2).map((stat) => (
                  <div key={stat.label} className="border-4 border-black bg-background p-4 shadow-pixel">
                    <p className="font-pixel text-[10px] leading-relaxed text-foreground sm:text-xs">
                      {stat.value}+ {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto h-[400px] w-full max-w-[520px] px-6 py-8">
              <div className="absolute inset-x-10 inset-y-12 z-0 border-4 border-black bg-primary/20" />
              <div className="pixel-card absolute inset-x-6 inset-y-8 overflow-hidden">
                <PixelHeroArt className="absolute inset-0 h-full w-full" />
              </div>
              <div className="absolute -left-1 bottom-2 z-10 sm:bottom-4">
                <div className="border-4 border-black bg-background p-4 shadow-pixel">
                  <p className="font-pixel text-[10px] leading-relaxed sm:text-xs">
                    {stats[1].value}+ {stats[1].label}
                  </p>
                </div>
              </div>
              <div className="absolute -right-1 top-2 z-10 sm:top-4">
                <div className="border-4 border-black bg-accent p-4 shadow-pixel">
                  <p className="font-pixel text-[10px] leading-relaxed text-white sm:text-xs">
                    {stats[0].value}+ {stats[0].label}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <PixelDivider />

        <section id="about" className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="mb-12 text-center pixel-title">About</h2>
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div className="relative h-[400px] w-full">
              <div className="absolute inset-4 z-0 border-4 border-primary" />
              <div className="pixel-card absolute inset-0 overflow-hidden">
                <PixelPortrait className="absolute inset-0 h-full w-full" />
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="pixel-subtitle">I&apos;m driven by intelligent systems, meaningful products, and constant growth.</h3>
              <p className="text-lg">
                I&apos;m an AI undergraduate at FAST NUCES Karachi with a strong interest in machine learning, full stack development, and building products that merge research with real-world impact.
              </p>
              <div id="skills" className="mt-8 space-y-4">
                <h4 className="pixel-subtitle">Crafting elegant AI and product experiences.</h4>
                <p className="font-pixel text-xs">Skills</p>
                <div className="space-y-4">
                  {skillGroups.map((group) => {
                    const percent = Math.round((group.items.length / maxSkills) * 100);
                    const filled = Math.round(percent / 10);
                    const Icon = skillIcons[group.title] ?? Code;
                    return (
                      <div key={group.title} className="space-y-2">
                        <div className="flex items-center justify-between gap-3">
                          <div className="flex items-center">
                            <div className="mr-2 border-2 border-black bg-primary p-2 text-black">
                              <Icon className="h-6 w-6" />
                            </div>
                            <span>{group.title}</span>
                          </div>
                          <span className="font-bold">{percent}%</span>
                        </div>
                        <div className="flex h-6 w-full border-2 border-black bg-gray-200 dark:bg-gray-700">
                          {Array.from({ length: 10 }).map((_, index) => (
                            <div
                              key={`${group.title}-${index}`}
                              className={`h-full flex-1 ${index < filled ? 'bg-primary' : 'bg-gray-200 dark:bg-gray-700'} ${
                                index < 9 ? 'border-r-2 border-black' : ''
                              }`}
                            />
                          ))}
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {group.items.map((item) => (
                            <span key={item} className="pixel-chip">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <PixelDivider />

        <section id="achievements" className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="mb-4 text-center pixel-title">Achievements</h2>
          <p className="mb-12 text-center text-lg">Recognition shaped by curiosity, execution, and impact.</p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {achievements.map((item, index) => {
              const Icon = achievementIcons[index % achievementIcons.length];
              return (
                <div
                  key={item.title}
                  className="pixel-card pixel-card-lift pixel-card-animate bg-white p-6 dark:bg-black"
                  style={{ animationDelay: `${index * 75}ms` }}
                >
                  <div className="mb-6 inline-block border-2 border-black bg-primary p-4 text-black">
                    <Icon className="h-10 w-10" />
                  </div>
                  <h3 className="pixel-subtitle mb-3">{item.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        <PixelDivider />

        <section id="projects" className="mx-auto max-w-7xl px-4 py-16">
          <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h2 className="pixel-title">Projects</h2>
              <p className="mt-3 text-lg">Selected work with depth, ambition, and bold UI.</p>
            </div>
            <a href="#projects" className="pixel-button pixel-outline inline-flex items-center px-4 py-2 text-[10px] sm:text-xs">
              View All <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {projects.map((project, index) => {
              const projectHref = project.demo || (project.github && project.github !== '#' ? project.github : '');
              return (
                <article
                  key={project.title}
                  className="pixel-card pixel-card-pop pixel-card-animate flex h-full flex-col overflow-hidden"
                  style={{ animationDelay: `${(index % 4) * 75}ms` }}
                >
                  <div className="group relative h-56 overflow-hidden">
                    <PixelThumb index={index} />
                    {projectHref && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                        <a
                          href={projectHref}
                          target="_blank"
                          rel="noreferrer"
                          className="flex translate-y-4 items-center border-2 border-black bg-primary px-6 py-3 font-bold text-black transition-transform duration-200 group-hover:translate-y-0"
                        >
                          View Project <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-grow flex-col p-6">
                    <h3 className="pixel-subtitle mb-2">{project.title}</h3>
                    <p className="mb-4 flex-grow text-muted-foreground">{project.description}</p>
                    <div className="mb-4 flex flex-wrap gap-2">
                      {project.features.map((feature) => (
                        <span key={feature} className="text-sm text-primary">
                          • {feature}
                        </span>
                      ))}
                    </div>
                    <div className="mb-4">
                      <span className={`inline-block border-2 border-black px-3 py-1 text-sm font-bold ${project.status === 'Deployed' ? 'bg-primary text-black' : 'bg-background text-foreground'}`}>
                        {project.status}
                      </span>
                    </div>
                    <div className="mt-auto flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span key={tech} className="pixel-chip">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="mt-5 flex flex-wrap gap-3">
                      {project.github && project.github !== '#' ? (
                        <a href={project.github} target="_blank" rel="noreferrer" className="pixel-button pixel-outline px-4 py-2 text-[10px]">
                          GitHub
                        </a>
                      ) : (
                        <span className="pixel-button pixel-outline px-4 py-2 text-[10px] opacity-70">GitHub soon</span>
                      )}
                      {project.demo ? (
                        <a href={project.demo} target="_blank" rel="noreferrer" className="pixel-button px-4 py-2 text-[10px] text-black">
                          Live Demo
                        </a>
                      ) : (
                        <span className="pixel-button pixel-outline px-4 py-2 text-[10px] opacity-70">Live demo soon</span>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <PixelDivider />

        <section id="experience" className="mx-auto max-w-7xl px-4 py-16">
          <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h2 className="pixel-title">Experience</h2>
              <p className="mt-3 text-lg">A timeline of growth and momentum.</p>
            </div>
            <a href="#experience" className="pixel-button pixel-outline inline-flex items-center px-4 py-2 text-[10px] sm:text-xs">
              Read All <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {experiences.map((item, index) => (
              <article
                key={item.title}
                className="pixel-card pixel-card-lift pixel-card-animate flex h-full flex-col overflow-hidden"
                style={{ animationDelay: `${(index % 3) * 75}ms` }}
              >
                <div className="relative h-48 overflow-hidden border-b-4 border-foreground">
                  <PixelThumb index={index + 3} />
                </div>
                <div className="flex flex-grow flex-col p-6">
                  <div className="mb-4 flex items-center text-sm text-muted-foreground">
                    <Calendar className="mr-1 h-4 w-4" />
                    {item.date}
                  </div>
                  <h3 className="pixel-subtitle mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <PixelDivider />

        <section id="cp" className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="mb-4 text-center pixel-title">Competitive Programming</h2>
          <p className="mb-12 text-center text-lg">I&apos;m actively sharpening my problem-solving skills on LeetCode and Codeforces.</p>
          <div className="grid gap-8 md:grid-cols-2">
            {competitiveProgramming.map((item, index) => (
              <div key={item.platform} className="pixel-card pixel-card-lift bg-white p-6 dark:bg-black" style={{ animationDelay: `${index * 75}ms` }}>
                <div className="mb-6 inline-block border-2 border-black bg-primary p-4 text-black">
                  <Gamepad2 className="h-10 w-10" />
                </div>
                <h3 className="pixel-subtitle mb-3">{item.platform}</h3>
                <p className="text-gray-700 dark:text-gray-300">{item.focus}</p>
                <a href={item.href} target="_blank" rel="noopener noreferrer" className="pixel-button pixel-outline mt-5 inline-flex px-4 py-2 text-[10px]">
                  View Profile
                </a>
              </div>
            ))}
          </div>
        </section>

        <PixelDivider />

        <section id="certifications" className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="mb-4 pixel-title">Certifications</h2>
          <p className="mb-12 text-lg">Learning at the frontier of AI and modern product engineering.</p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert, index) => (
              <div
                key={cert.title}
                className="pixel-card pixel-card-lift pixel-card-animate bg-white p-6 dark:bg-black"
                style={{ animationDelay: `${index * 75}ms` }}
              >
                <h3 className="pixel-subtitle">{cert.title}</h3>
                <p className="mt-3 text-muted-foreground">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </section>

        <PixelDivider />

        <section id="contact" className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="mb-12 text-center pixel-title">Contact</h2>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-6">
              <h3 className="pixel-subtitle">Let&apos;s build something thoughtful and unforgettable.</h3>
              <div className="space-y-4">
                <a href="mailto:muhammadhamdan@example.com" className="flex items-center gap-3">
                  <Mail size={18} /> muhammadhamdan@example.com
                </a>
                <a href="https://github.com" className="flex items-center gap-3">
                  <Github size={18} /> GitHub
                </a>
                <a href="https://linkedin.com" className="flex items-center gap-3">
                  <Linkedin size={18} /> LinkedIn
                </a>
              </div>
              <div className="border-4 border-foreground bg-primary/10 p-5 shadow-pixel">
                <div className="flex items-center gap-2 text-foreground">
                  <GraduationCap size={18} />
                  <p className="font-pixel text-[10px] leading-relaxed sm:text-xs">Available for Career Counseling &amp; Mentorship</p>
                </div>
                <p className="mt-3 text-lg">
                  Whether you&apos;re a student exploring CS/AI or someone looking to break into tech — I&apos;d love to help guide your journey. Reach out through the form or drop me an email.
                </p>
              </div>
            </div>
            <form className="pixel-card space-y-4 p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <input className="border-4 border-foreground bg-background px-4 py-3 text-foreground shadow-pixel outline-none placeholder:text-muted-foreground" placeholder="Name" />
                <input className="border-4 border-foreground bg-background px-4 py-3 text-foreground shadow-pixel outline-none placeholder:text-muted-foreground" placeholder="Email" />
              </div>
              <input className="w-full border-4 border-foreground bg-background px-4 py-3 text-foreground shadow-pixel outline-none placeholder:text-muted-foreground" placeholder="Subject" />
              <textarea rows={5} className="w-full border-4 border-foreground bg-background px-4 py-3 text-foreground shadow-pixel outline-none placeholder:text-muted-foreground" placeholder="Message" />
              <button className="pixel-button inline-flex items-center gap-2 px-5 py-3 text-[10px] sm:text-xs">
                Send Message <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="pixel-grid mt-16 border-t-4 border-foreground bg-primary/10 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 md:flex-row">
          <div className="flex flex-col items-center gap-4 text-center md:flex-row md:text-left">
            <a href="#home" className="flex items-center gap-3">
              <LogoMark size={24} />
              <span className="font-pixel text-sm">
                <span className="text-primary">M</span>H
              </span>
            </a>
            <span className="hidden text-zinc-400 md:inline">|</span>
            <p className="text-muted-foreground">© 2026 Muhammad Hamdan.</p>
          </div>
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <div className="flex gap-3">
              <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className="pixel-icon-btn">
                <Github size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="pixel-icon-btn">
                <Linkedin size={18} />
              </a>
              <a href="mailto:muhammadhamdan@example.com" aria-label="Email" className="pixel-icon-btn">
                <Mail size={18} />
              </a>
            </div>
            <p className="font-pixel text-[10px] leading-relaxed text-muted-foreground">Designed with intention.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
