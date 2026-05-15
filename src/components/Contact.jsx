import { profile } from '../data/profile';
import { Section } from './Section';

export function Contact({ onOpenResume }) {
  return (
    <Section id="contact" eyebrow="Hello" title="Contact">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="glass rounded-3xl p-8">
          <p className="text-mist/85">
            Reach out for collaborations in cloud software, sustainability-informed systems, or research engineering.
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
            <div>
              <dt className="text-xs font-bold uppercase tracking-wide text-muted">Phone</dt>
              <dd className="mt-1 text-paper">{profile.contact.phone}</dd>
            </div>
          </dl>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/15 bg-transparent px-5 py-2.5 font-barlow text-[0.9375rem] font-semibold uppercase tracking-[3px] text-paper hover:border-mist/35"
            >
              LinkedIn
            </a>
            <button
              type="button"
              onClick={onOpenResume}
              className="rounded-xl bg-accent px-5 py-2.5 font-barlow text-[0.9375rem] font-semibold uppercase tracking-[3px] text-black hover:bg-accent-hover"
            >
              Open resume
            </button>
          </div>
        </div>
        <div className="glass relative flex items-center justify-center overflow-hidden rounded-3xl p-8">
          <div className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-leaf/[0.06] blur-3xl" />
          <a
            href={profile.resumePdfPath}
            download
            className="relative rounded-xl bg-accent px-8 py-3.5 font-barlow text-[0.9375rem] font-semibold uppercase tracking-[3px] text-black shadow-lift transition hover:bg-accent-hover"
          >
            Download PDF
          </a>
        </div>
      </div>
    </Section>
  );
}
