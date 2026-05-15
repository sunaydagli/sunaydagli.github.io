import { useEffect, useState } from 'react';
import { profile } from '../data/profile';

const nav = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
  { id: 'photography', label: 'Photography' },
];

export function Navbar({ onOpenResume }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('about');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ids = nav.map((n) => n.id);
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (typeof IntersectionObserver === 'undefined' || els.length === 0) {
      return undefined;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled ? 'py-3' : 'py-4'
      }`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between px-4 transition-all sm:px-6 ${
          scrolled ? 'glass rounded-2xl px-3 sm:px-5' : ''
        }`}
      >
        <button
          type="button"
          onClick={() => scrollTo('top')}
          className="font-display text-lg tracking-tight text-paper"
        >
            SD<span className="text-leaf">.</span>
        </button>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollTo(item.id)}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                active === item.id
                  ? 'bg-white/10 text-paper'
                  : 'text-muted hover:bg-white/5 hover:text-paper'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-white/15 bg-transparent px-4 py-2 font-barlow text-[0.9375rem] font-semibold uppercase tracking-[3px] text-paper transition hover:border-mist/35 hover:bg-white/5"
          >
            LinkedIn
          </a>
          <button
            type="button"
            onClick={onOpenResume}
            className="rounded-xl bg-accent px-4 py-2 font-barlow text-[0.9375rem] font-semibold uppercase tracking-[3px] text-black shadow-lift transition hover:bg-accent-hover"
          >
            View resume
          </button>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Menu"
        >
          <span className="sr-only">Open menu</span>
          <div className="flex flex-col gap-1.5">
            <span className={`h-0.5 w-5 rounded bg-white transition ${open ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`h-0.5 w-5 rounded bg-white transition ${open ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-5 rounded bg-white transition ${open ? '-translate-y-2 -rotate-45' : ''}`} />
          </div>
        </button>
      </div>

      {open && (
        <div className="glass mx-4 mt-2 rounded-2xl p-4 md:hidden">
          <div className="flex flex-col gap-1">
            {nav.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollTo(item.id)}
                className="rounded-xl px-3 py-3 text-left text-sm font-medium text-paper hover:bg-white/10"
              >
                {item.label}
              </button>
            ))}
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl px-3 py-3 text-left font-barlow text-[0.9375rem] font-semibold uppercase tracking-[3px] text-leaf hover:bg-white/10"
            >
              LinkedIn profile
            </a>
            <button
              type="button"
              onClick={() => {
                onOpenResume();
                setOpen(false);
              }}
              className="rounded-xl bg-accent px-3 py-3 text-left font-barlow text-[0.9375rem] font-semibold uppercase tracking-[3px] text-black"
            >
              View resume PDF
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
