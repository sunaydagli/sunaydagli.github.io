import { profile } from '../data/profile';
import { Section } from './Section';

export function Education() {
  return (
    <Section id="education" eyebrow="Academics" title="Education">
      <div className="grid gap-6 lg:grid-cols-2">
        {profile.education.map((edu) => (
          <article key={`${edu.school}-${edu.degree}`} className="glass rounded-3xl p-7">
            <h3 className="font-display text-lg text-paper">{edu.degree}</h3>
            <p className="mt-2 text-leaf">
              {edu.schoolUrl ? (
                <a href={edu.schoolUrl} target="_blank" rel="noreferrer" className="hover:underline">
                  {edu.school}
                </a>
              ) : (
                edu.school
              )}
            </p>
            <p className="mt-2 text-sm text-muted">
              {edu.start} — {edu.end}
              {edu.location ? ` · ${edu.location}` : ''}
            </p>
            {edu.highlights && (
              <ul className="mt-4 space-y-2">
                {edu.highlights.map((h) => (
                  <li key={h.slice(0, 40)} className="text-sm leading-relaxed text-mist/85">
                    {h}
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>

      <div className="glass mt-10 rounded-3xl p-8">
        <h3 className="font-display text-lg text-paper">Courses</h3>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {profile.courses.map((c) => (
            <div
              key={`${c.code}-${c.title}`}
              className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3"
            >
              <p className="font-mono text-sm font-medium text-leaf">{c.code}</p>
              <p className="mt-1 text-sm font-medium text-paper">{c.title}</p>
              <p className="mt-2 text-xs leading-snug text-muted">{c.affiliated}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
