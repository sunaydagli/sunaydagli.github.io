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
        <div className="glass relative overflow-hidden rounded-3xl p-8">
          <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-leaf/[0.08] blur-3xl" />
          <h3 className="font-display text-lg text-paper">At a glance</h3>
          <ul className="mt-4 space-y-3 text-sm text-mist/85">
            <li className="flex gap-2">
              <span className="text-leaf">▹</span>
              Cloud apps, tooling, and data-heavy systems
            </li>
            <li className="flex gap-2">
              <span className="text-leaf">▹</span>
              Energy & sustainability research (optimization / ML)
            </li>
            <li className="flex gap-2">
              <span className="text-leaf">▹</span>
              UC Berkeley EECS — M.S. & dual B.S. programs
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
