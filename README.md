# Isuru U. Senarathne - Portfolio

Clean, minimalist portfolio with a profile sidebar and timeline layout. Built with [Astro](https://astro.build).

## Run locally

```bash
pnpm install
pnpm dev      # http://localhost:4321
pnpm build    # output in dist/
```

## Edit content

All content lives in `src/content/`. Edit the JSON files and the page updates automatically. The build fails with a clear message if a required field is missing.

| File | What it holds |
| --- | --- |
| `profile.json` | Name, role, summary, contact, links, photo, Web3Forms key |
| `experience.json` | Jobs (omit `end` for "Present") |
| `projects.json` | Projects (`link` optional) |
| `skills.json` | Skill groups |
| `certifications.json` | Certifications (`year`, `link` optional) |
| `education.json` | Education (`details` optional) |

To add an item, append an object to the array; items show in file order.

**Photo:** put an image at `public/profile.jpg` and add `"photo": "/profile.jpg"` to `profile.json`. Without it, initials are shown.

**CV PDF:** replace `public/cv.pdf`.

**Contact form:** get a free access key at [web3forms.com](https://web3forms.com) and set `web3formsKey` in `profile.json`. If it is empty, only the email and phone links are shown.

## Deploy (GitHub Pages)

1. Push to the `main` branch of a GitHub repo.
2. In the repo, go to Settings > Pages > Source and select **GitHub Actions**.

Every push to `main` rebuilds and deploys. The site URL and base path are detected automatically.
