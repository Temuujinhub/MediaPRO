# UI/UX Pro Max — installed skills (source & attribution)

These skills were vendored into this repository from the upstream
**UI/UX Pro Max** project so they are available to Claude Code in every
session (the cloud/web execution environment is ephemeral, so a `/plugin`
install would not persist — copying the skill files into the repo does).

## Source

- Repo: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill
- Homepage: https://uupm.cc
- Author: NextLevelBuilder (companion `ckm:*` skills authored by claudekit)
- License: MIT — see `_LICENSE-ui-ux-pro-max.txt`
- Vendored from commit: `b7e3af8` (plugin v2.5.0)
- Vendored on: 2026-06-13

## How these are wired

Claude Code auto-discovers any project skill at `.claude/skills/<name>/SKILL.md`.
All 7 skill folders below are therefore active automatically — no plugin
marketplace registration or settings change is required. Each skill activates
by its `description:` (model-invoked) or can be called explicitly by its `name:`.

| Folder            | Skill name / invocation | What it does |
|-------------------|-------------------------|--------------|
| `ui-ux-pro-max`   | `/ui-ux-pro-max`        | Core design intelligence: 67 styles, 161 palettes, 57 font pairings, 99 UX rules, 25 chart types, 15 stacks. This is the officially registered plugin skill. |
| `design`          | `/design`               | Logo, corporate identity (CIP), HTML slides, banners, icons, social photos. |
| `design-system`   | `/design-system`        | Design tokens (primitive→semantic→component), component specs, slide generation. |
| `brand`           | `/brand`                | Brand voice, visual identity, messaging frameworks, asset management. |
| `ui-styling`      | `/ui-styling`           | shadcn/ui + Tailwind UI building; canvas-based visual designs (ships ~5.5 MB of bundled fonts). |
| `slides`          | `/slides`               | Strategic HTML presentations with Chart.js. |
| `banner-design`   | `/banner-design`        | Banners for social/ads/web/print. |

## Local modifications vs. upstream

The 6 companion skills shipped upstream with a `ckm:` prefix in their
`name:` field (e.g. `name: ckm:brand`). Claude Code follows the Agent Skills
standard, which requires a skill's `name` to contain only lowercase letters,
numbers and hyphens **and to match its parent directory name** — a `ckm:`
prefix (and the colon) fails both rules, so those skills would silently not
load. The `ckm:` prefix was therefore stripped from each `name:` field so all
7 skills register correctly (e.g. `name: ckm:brand` → `name: brand`). The
`ui-ux-pro-max` skill's `name` was already standard-compliant and is unchanged.

Upstream, the core skill's `ui-ux-pro-max/data` and `ui-ux-pro-max/scripts`
are symlinks pointing at `src/ui-ux-pro-max/{data,scripts}` in the repo root.
Only `.claude/skills/` was vendored here, so those symlinks would dangle — they
have been **materialized into real directories** (the 16 CSV databases and the
BM25 search engine) so the skill is self-contained under `.claude/skills/`.
`scripts/core.py` locates its data via `Path(__file__).parent.parent / "data"`,
so the sibling `data/`/`scripts/` layout keeps working. Verified with
`python3 scripts/search.py "glassmorphism dashboard" --domain style`.
No skill body content was otherwise changed.

## Runtime requirements & notes

- **Python 3** is required for the search/generation scripts under several
  `scripts/` folders (e.g. `ui-ux-pro-max` slide/style search).
- **Node.js** is used by the `*.cjs` token scripts in `design-system` / `brand`.
- The **image-generation** paths in `design` / `banner-design` (logo, icon,
  banner, social photos) call **Google Gemini** and need a Gemini/Google API
  key in the environment to actually render images. The text/intelligence parts
  of every skill work without any key.

## Updating

To refresh to a newer upstream version:

```bash
git clone --depth 1 https://github.com/nextlevelbuilder/ui-ux-pro-max-skill.git /tmp/uupm
rm -rf .claude/skills/ui-ux-pro-max .claude/skills/design .claude/skills/design-system \
       .claude/skills/brand .claude/skills/ui-styling .claude/skills/slides .claude/skills/banner-design
cp -r /tmp/uupm/.claude/skills/* .claude/skills/
```

Or use the upstream CLI: `npm i -g uipro-cli && uipro init --ai claude`.
