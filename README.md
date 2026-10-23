# Rob Perry — Portfolio

Senior UX Designer & Researcher portfolio, with case studies and embedded interactive prototypes.

## Development

Requires Node.js 22.13 or newer.

```sh
npm ci
npm run dev
```

```sh
npm run build
```

The GitHub/Vercel deployment uses Next.js. `vercel.json` selects the Next.js framework and output directory explicitly. The original Sites build remains available through `npm run dev:sites` and `npm run build:sites`; `.openai/hosting.json` preserves its identity.

## Previous portfolio

The previous implementation and its history are preserved on the `backup/portfolio-version3-2026-10-23` branch. The replacement commit also retains the existing main-branch history.

## Contact form

The published version currently uses direct email contact. The unfinished contact-form draft has not been included in this release.
