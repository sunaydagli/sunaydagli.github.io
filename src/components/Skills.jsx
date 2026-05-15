import { profile } from '../data/profile';
import { Section } from './Section';

function PillGroup({ title, items }) {
  return (
    <div>
      <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((s) => (
          <span
            key={s}
            className="cursor-default rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent px-3 py-1.5 text-xs font-medium text-mist/90 transition hover:border-leaf/20"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  const { skills } = profile;
  return (
    <Section id="skills" eyebrow="Toolkit" title="Skills & languages">
      <div className="glass rounded-3xl p-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <PillGroup title="Languages" items={skills.languages} />
          <PillGroup title="Libraries & frameworks" items={skills.libraries} />
          <PillGroup title="Platforms & tools" items={skills.platforms} />
          <PillGroup title="Focus areas" items={skills.themes} />
        </div>

        <div className="mt-12 border-t border-white/10 pt-10">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted">Human languages</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {profile.languagesSpoken.map((l) => (
              <div key={l.name} className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3">
                <span className="font-medium text-paper">{l.name}</span>
                <span className="text-sm text-muted">{l.level}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
