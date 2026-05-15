import { ParticlesField } from './ParticlesField';

export function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-grid-fade" />
      <div className="grid-bg absolute inset-0 opacity-70" />

      <div className="absolute -left-[20%] top-[-10%] h-[520px] w-[520px] animate-float rounded-full bg-mist/[0.06] blur-[120px]" />
      <div
        className="absolute -right-[15%] top-[25%] h-[480px] w-[480px] animate-pulse-slow rounded-full bg-leaf/[0.05] blur-[100px]"
        style={{ animationDelay: '1s' }}
      />
      <div className="absolute bottom-[-20%] left-[30%] h-[600px] w-[600px] animate-drift rounded-full bg-mist/[0.04] blur-[130px]" />

      <svg className="absolute inset-0 h-full w-full opacity-[0.07]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dots" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="#D9E3DA" opacity="0.4" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(167,190,169,0.05),transparent_55%)]" />

      <ParticlesField />
    </div>
  );
}
