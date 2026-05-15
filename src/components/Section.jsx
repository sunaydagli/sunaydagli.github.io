export function Section({ id, title, eyebrow, children }) {
  return (
    <section id={id} className="scroll-mt-28 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          {eyebrow && (
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-leaf">{eyebrow}</p>
          )}
          <h2 className="font-display text-3xl tracking-tight text-paper sm:text-4xl">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}
