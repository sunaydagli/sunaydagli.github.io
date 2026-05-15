import { useEffect } from 'react';
import { profile } from '../data/profile';

export function ResumeModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-stretch justify-center p-0 sm:p-6">
      <button
        type="button"
        className="absolute inset-0 bg-black/85 backdrop-blur-sm"
        aria-label="Close resume"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Resume PDF"
        className="relative z-10 flex h-full w-full max-w-5xl flex-col overflow-hidden rounded-none border border-mist/12 bg-surface-900 shadow-lift sm:my-auto sm:max-h-[90vh] sm:rounded-2xl"
      >
        <div className="flex shrink-0 items-center justify-between gap-3 border-b border-mist/12 px-4 py-3 sm:px-5">
          <p className="truncate font-display text-sm text-paper">SUNAY DAGLI — RESUME</p>
          <div className="flex items-center gap-2">
            <a
              href={profile.resumePdfPath}
              download
              className="rounded-lg border border-white/15 px-3 py-1.5 text-xs font-semibold text-paper hover:bg-white/10"
            >
              Download
            </a>
            <a
              href={profile.resumePdfPath}
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-lg border border-white/15 px-3 py-1.5 text-xs font-semibold text-paper hover:bg-white/10 sm:inline-block"
            >
              New tab
            </a>
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg bg-white/10 px-3 py-1.5 text-xs font-semibold text-paper hover:bg-white/20"
            >
              Close
            </button>
          </div>
        </div>
        <div className="min-h-0 flex-1 bg-black">
          <iframe title="Resume PDF" src={`${profile.resumePdfPath}#view=FitH`} className="h-full w-full min-h-[70vh]" />
        </div>
      </div>
    </div>
  );
}
