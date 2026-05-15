/**
 * Amateur photography gallery — edit this file to manage your collection.
 *
 * Steps:
 * 1. Add image files under `public/photos/` (e.g. `public/photos/my-sunset.jpg`).
 * 2. Add an object below with:
 *    - `src`: URL path starting with `/photos/...` (or a full URL if hosted elsewhere).
 *    - `description`: Short caption shown under the image (plain text).
 *    - `alt` (optional): Accessible description; defaults to your caption.
 *
 * The homepage shows at most 3 images at a time and rotates through this list automatically.
 * Remove the sample entries once your own files are in place.
 */

export const photographyIntro =
  'An amateur hobby: shooting for fun on weekends and trips — light, texture, and whatever catches the eye.';

/** @type {{ src: string; description: string; alt?: string }[]} */
export const photographyPhotos = [
  {
    src: 'https://picsum.photos/seed/sd-gallery-1/960/720',
    description: 'Sample image — replace by adding your photos to public/photos/ and updating this file.',
    alt: 'Sample photograph placeholder',
  },
  {
    src: 'https://picsum.photos/seed/sd-gallery-2/960/720',
    description: 'Second sample — swap src for /photos/your-file.jpg when ready.',
    alt: 'Sample photograph placeholder',
  },
  {
    src: 'https://picsum.photos/seed/sd-gallery-3/960/720',
    description: 'Third sample — keep descriptions to one or two short lines.',
    alt: 'Sample photograph placeholder',
  },
  {
    src: 'https://picsum.photos/seed/sd-gallery-4/960/720',
    description: 'Fourth sample — the gallery cycles so longer lists still work.',
    alt: 'Sample photograph placeholder',
  },
];
