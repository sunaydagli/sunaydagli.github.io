import { profile } from '../data/profile';

export function Hero({ onOpenResume }) {
  return (
    <section id="top" className="relative overflow-hidden px-4 pb-24 pt-36 sm:px-6 sm:pt-40">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <h1 className="font-display text-4xl tracking-tight text-paper normal-case sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <p className="text-gradient mt-4 font-display text-xl font-normal uppercase tracking-tight sm:text-2xl">
            {profile.headline}
          </p>
          <p className="mt-2 text-lg text-muted">{profile.tagline}</p>
          <p className="mt-6 text-base leading-relaxed text-mist/85">{profile.location}</p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/15 bg-transparent px-6 py-3 font-barlow text-[0.9375rem] font-semibold uppercase tracking-[3px] text-paper transition hover:border-mist/40 hover:bg-white/5"
            >
              LinkedIn
            </a>
            <button
              type="button"
              onClick={onOpenResume}
              className="btn-cta rounded-2xl bg-accent px-6 py-3 shadow-lift transition hover:bg-accent-hover"
            >
              Resume PDF
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
