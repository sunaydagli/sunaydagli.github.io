import { profile } from '../data/profile';
import { Section } from './Section';

export function Experience() {
  return (
    <Section id="experience" eyebrow="Career" title="Experience">
      <div className="relative">
        <div className="absolute bottom-3 left-[11px] top-3 hidden w-px bg-gradient-to-b from-leaf/50 via-mist/25 to-transparent md:block" />
        <ul className="space-y-10">
          {profile.experience.map((job) => (
            <li key={`${job.company}-${job.title}-${job.start}`} className="relative md:pl-10">
              <span className="absolute left-0 top-2 hidden h-3 w-3 rounded-full border-2 border-leaf bg-black md:block" />
              <div className="glass rounded-3xl p-6 sm:p-8">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="font-display text-xl text-paper">{job.title}</h3>
                    <p className="mt-1 text-leaf">
                      {job.companyUrl ? (
                        <a href={job.companyUrl} target="_blank" rel="noreferrer" className="hover:underline">
                          {job.company}
                        </a>
                      ) : (
                        job.company
                      )}
                      {job.team ? <span className="text-mist/55"> — {job.team}</span> : null}
                    </p>
                  </div>
                  <div className="text-sm text-muted">
                    <p>
                      {job.start} — {job.end}
                    </p>
                    <p>{job.location}</p>
                  </div>
                </div>
                {job.meta && (
                  <p className="mt-3 text-xs font-medium uppercase tracking-wide text-mist/45">{job.meta}</p>
                )}
                <ul className="mt-4 list-none space-y-2">
                  {job.description.map((line) => (
                    <li key={line.slice(0, 48)} className="flex gap-3 text-mist/85">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-leaf/90" />
                      <span className="leading-relaxed">{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
