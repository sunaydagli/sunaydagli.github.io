import { useEffect, useMemo, useState } from 'react';
import { Section } from './Section';
import { photographyIntro, photographyPhotos } from '../data/photography';

const ROTATION_MS = 5500;
const MAX_VISIBLE = 3;

function ChevronLeft({ className }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronRight({ className }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);
  return reduced;
}

export function PhotoGallery() {
  const photos = photographyPhotos;
  const visibleCount = Math.min(MAX_VISIBLE, Math.max(1, photos.length));
  const [start, setStart] = useState(0);
  const [autoRotateNonce, setAutoRotateNonce] = useState(0);
  const reducedMotion = usePrefersReducedMotion();

  const goPrev = () => {
    if (photos.length <= 1) return;
    setStart((s) => (s - 1 + photos.length) % photos.length);
    setAutoRotateNonce((n) => n + 1);
  };

  const goNext = () => {
    if (photos.length <= 1) return;
    setStart((s) => (s + 1) % photos.length);
    setAutoRotateNonce((n) => n + 1);
  };

  useEffect(() => {
    if (photos.length <= 1 || reducedMotion) return undefined;

    const tick = () => {
      if (typeof document !== 'undefined' && document.visibilityState !== 'visible') return;
      setStart((s) => (s + 1) % photos.length);
    };

    const id = window.setInterval(tick, ROTATION_MS);
    return () => window.clearInterval(id);
  }, [photos.length, reducedMotion, autoRotateNonce]);

  const visible = useMemo(() => {
    if (photos.length === 0) return [];
    return Array.from({ length: visibleCount }, (_, i) => {
      const idx = (start + i) % photos.length;
      return { ...photos[idx], slotIndex: i, listIndex: idx };
    });
  }, [photos, start, visibleCount]);

  const showNav = photos.length > 1;

  return (
    <Section id="photography" eyebrow="Hobby" title="Photography">
      <p className="mb-10 max-w-2xl text-base leading-relaxed text-mist/85">{photographyIntro}</p>

      {photos.length === 0 ? (
        <div className="glass rounded-3xl p-10 text-mist/80">
          <p className="font-barlow text-[0.9375rem] font-semibold uppercase tracking-[3px] text-leaf">
            No photos yet
          </p>
          <p className="mt-4 text-sm leading-relaxed">
            Add files under{' '}
            <code className="rounded bg-white/10 px-1.5 py-0.5 text-paper">public/photos/</code> and list them
            in{' '}
            <code className="rounded bg-white/10 px-1.5 py-0.5 text-paper">src/data/photography.js</code>
            — each entry needs a <code className="text-paper">src</code> path and a{' '}
            <code className="text-paper">description</code>.
          </p>
        </div>
      ) : (
        <>
          <div className="flex items-center gap-3 sm:gap-4">
            {showNav && (
              <button
                type="button"
                onClick={goPrev}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 text-paper transition hover:border-leaf/50 hover:bg-white/5"
                aria-label="Show previous photos"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
            )}

            <div
              className={`min-w-0 flex-1 grid gap-6 sm:gap-8 ${
                visibleCount === 1 ? 'max-w-2xl sm:mx-auto' : visibleCount === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'
              }`}
            >
              {visible.map((item) => (
                <figure
                  key={`${item.src}-${start}-${item.slotIndex}`}
                  className="photo-gallery-slot group flex flex-col"
                >
                  <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/40">
                    <img
                      src={item.src}
                      alt={item.alt ?? item.description}
                      className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <figcaption className="mt-3 text-sm leading-snug text-mist/80">{item.description}</figcaption>
                </figure>
              ))}
            </div>

            {showNav && (
              <button
                type="button"
                onClick={goNext}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 text-paper transition hover:border-leaf/50 hover:bg-white/5"
                aria-label="Show next photos"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            )}
          </div>

          {showNav && (
            <p className="mt-8 text-center text-xs text-mist/50">
              <span className="uppercase tracking-[0.2em]">
                {reducedMotion ? 'Use arrows to browse' : 'Auto-rotates'} · {photos.length} photos
              </span>
              {!reducedMotion && (
                <>
                  {' '}
                  <span className="text-mist/40">·</span>{' '}
                  <span className="normal-case tracking-normal">Arrows to jump ahead or back</span>
                </>
              )}
            </p>
          )}
        </>
      )}
    </Section>
  );
}
