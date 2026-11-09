import { profile } from '../data/profile';
import { Section } from './Section';

export function Contact({ onOpenResume }) {
  return (
    <Section id="contact" eyebrow="Hello" title="Contact">
      <div className="glass rounded-3xl p-8">
        <p className="max-w-3xl text-mist/85">
          Always open to connecting with engineers, founders, and researchers working on high-impact algorithmic problems, frontier AI infrastructure, distributed systems, and climate/energy computation.
        </p>
        <dl className="mt-8 space-y-4 text-sm">
          <div>
            <dt className="text-xs font-bold uppercase tracking-wide text-muted">Email</dt>
            <dd className="mt-1">
              <a href={profile.socials.email} className="font-medium text-leaf hover:underline">
                {profile.contact.email}
              </a>
            </dd>
          </div>
        </dl>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-white/15 bg-transparent px-5 py-2.5 font-barlow text-[0.9375rem] font-semibold uppercase tracking-[3px] text-paper transition hover:border-mist/35 hover:bg-white/5"
          >
            LinkedIn
          </a>
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-white/15 bg-transparent px-5 py-2.5 font-barlow text-[0.9375rem] font-semibold uppercase tracking-[3px] text-paper transition hover:border-mist/35 hover:bg-white/5"
          >
            GitHub
          </a>
          <button
            type="button"
            onClick={onOpenResume}
            className="rounded-xl bg-accent px-5 py-2.5 font-barlow text-[0.9375rem] font-semibold uppercase tracking-[3px] text-black transition hover:bg-accent-hover"
          >
            Open resume
          </button>
        </div>
      </div>
    </Section>
  );
}
