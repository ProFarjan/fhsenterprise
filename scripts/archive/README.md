# Archived one-off scripts

Kept for reference only; none of this is part of the application, the build or CI
(it is excluded from ESLint). Run them from the **repository root**, e.g.
`python scripts/archive/crop.py`, since they use root-relative paths.

| File | What it does |
|---|---|
| `crop.py` | Python/PIL helper that auto-crops the background border off an image (the background colour is taken from the top-left pixel). |
| `crop_better.py` | The same, with a colour-difference threshold so near-background pixels are cropped as well. |
| `generate_svg_logos.js` | Writes the placeholder SVG logos for Vehicle Solutions and Daily Bazar. |

Two tiny debug scripts that only printed the `Company` rows (`query.js`, `query.ts`)
were deleted; `npm run prisma:studio` does that better. They remain in git history.
