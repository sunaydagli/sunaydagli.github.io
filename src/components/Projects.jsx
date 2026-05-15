import { profile } from '../data/profile';
import { Section } from './Section';

export function Projects() {
  return (
    <Section id="projects" eyebrow="Builds" title="Projects">
      <div className="grid gap-6 md:grid-cols-2">
        {profile.projects.map((proj) => (
          <article
            key={proj.name}
            className="group glass flex h-full flex-col rounded-3xl p-7 transition hover:border-leaf/25"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-display text-lg text-paper">{proj.name}</h3>
              <span className="shrink-0 rounded-full bg-white/5 px-3 py-1 text-xs text-muted">{proj.period}</span>
            </div>
            {proj.links && (
              <div className="mt-4 flex flex-wrap gap-2">
                {proj.links.map((l) => (
                  <a
                    key={l.url}
                    href={l.url}
                    target="_blank"
                    rel="noreferrer"
                    className="font-barlow text-sm font-semibold uppercase tracking-wider text-leaf underline-offset-4 hover:underline"
                  >
                    {l.label} ↗
                  </a>
                ))}
              </div>
            )}
            <ul className="mt-4 flex-1 space-y-2">
              {proj.bullets.map((b) => (
                <li key={b.slice(0, 40)} className="text-sm leading-relaxed text-mist/85">
                  {b}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
