import { profile } from '../data/profile';
import { Section } from './Section';

export function About() {
  return (
    <Section id="about" eyebrow="Introduction" title="About">
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="glass rounded-3xl p-8 lg:col-span-2">
          {profile.about.map((p, i) => (
            <p key={i} className="mb-4 text-base leading-relaxed text-mist/85 last:mb-0">
              {p}
            </p>
          ))}
        </div>
        <div className="glass relative flex flex-col justify-between overflow-hidden rounded-3xl p-8">
          <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-leaf/[0.08] blur-3xl" />
          <div>
            <h3 className="font-display text-lg text-paper">At a glance</h3>
            <ul className="mt-4 space-y-3 text-sm text-mist/85">
              <li className="flex gap-2">
                <span className="text-leaf">▹</span>
                Cloud API Proxy, MCP Infra, Envoy & WASM at Google Cloud
              </li>
              <li className="flex gap-2">
                <span className="text-leaf">▹</span>
                Mathematical optimization & applied ML for energy/grid systems
              </li>
              <li className="flex gap-2">
                <span className="text-leaf">▹</span>
                UC Berkeley EECS M.S. & dual B.S. (EECS + Energy Engineering)
              </li>
            </ul>
          </div>
          {profile.topSkills && (
            <div className="mt-8 border-t border-white/10 pt-6">
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted">Top Skills</h4>
              <div className="flex flex-wrap gap-2">
                {profile.topSkills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-xl border border-leaf/25 bg-leaf/[0.08] px-3 py-1 text-xs font-medium text-paper"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
