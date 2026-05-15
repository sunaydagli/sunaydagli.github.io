import { useState } from 'react';
import { AnimatedBackground } from './components/AnimatedBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { PhotoGallery } from './components/PhotoGallery';
import { ResumeModal } from './components/ResumeModal';
import { profile } from './data/profile';

function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-12 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} {profile.name}. Built with React & Tailwind.
        </p>
        <div className="flex flex-wrap gap-4 text-sm font-semibold">
          <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="text-leaf hover:underline">
            LinkedIn
          </a>
          <a href={profile.socials.github} target="_blank" rel="noreferrer" className="text-paper hover:text-leaf">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <>
      <AnimatedBackground />
      <Navbar onOpenResume={() => setResumeOpen(true)} />
      <main className="relative z-0">
        <Hero onOpenResume={() => setResumeOpen(true)} />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <Contact onOpenResume={() => setResumeOpen(true)} />
        <PhotoGallery />
      </main>
      <Footer />
      <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  );
}
