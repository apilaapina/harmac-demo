# Machine photos

Product photos shown on the site, mapped to each machine by `lib/machines.ts`
(`machineImages`). Filenames match the machine slug.

## Current photos

The 8 PFM Group machines use **official PFM product photos** (sourced from pfm.it —
Harmac is an authorized PFM representative):

| File             | Machine   | File          | Machine   |
| ---------------- | --------- | ------------- | --------- |
| `shamal.jpg`     | Shamal    | `zenith.jpg`  | Zenith    |
| `swift.jpg`      | Swift     | `bg-vetta.jpg`| BG Vetta  |
| `falcon.jpg`     | Falcon    | `mbp-c2.png`  | MBP-C2    |
| `pearl.jpg`      | Pearl     | `mbp-c1.png`  | MBP C1    |

The 4 **accessories** (Teippauskoneet, Vakuumipakkaus, Metallinpaljastimet,
Painotarkkailu) still load their distinct partner-brand photos from harmac.fi.
To localise those too (roadmap item h4), drop files here named
`teippauskoneet.jpg`, `vakuumipakkaus.jpg`, `metallinpaljastin.jpg`,
`painotarkkailu.png` and update `machineImages` in `lib/machines.ts`.

## Replacing a photo

To use a different/higher-res image for any machine, just **overwrite the file here
with the same filename** — no code change needed. Recommended: ~1000–1600 px on the
long edge, white or transparent background, under ~400 KB (Next/Image optimises
delivery automatically, so source quality is what matters).
