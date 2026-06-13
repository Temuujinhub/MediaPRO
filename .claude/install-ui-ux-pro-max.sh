#!/usr/bin/env bash
#
# install-ui-ux-pro-max.sh
# -------------------------
# Vendors the FULL UI/UX Pro Max skill bundle (7 skills) into the CURRENT
# repository's .claude/skills/ so every Claude Code (web/desktop) session on
# this repo auto-discovers them. Cloud sessions are ephemeral, so a /plugin
# install does not persist — committing the skill files is the reliable way.
#
# Usage (inside any repo's Claude Code session terminal):
#     bash .claude/install-ui-ux-pro-max.sh
#     git add .claude/skills && git commit -m "Add UI/UX Pro Max skills" && git push
#
# Requirements: network access to github.com, git, and python3 (optional, for
# the smoke test). Designed to run in the Linux cloud session. Idempotent —
# safe to re-run; it always reinstalls a clean copy of the 7 skills.
#
# Two fixes are applied so the skills actually load (the raw upstream files do
# NOT work as project skills without them):
#   1. The 6 companion skills ship a "ckm:" prefix in their name: field. The
#      Agent Skills standard requires name == folder and forbids colons, so
#      Claude Code would skip them. We strip the prefix.
#   2. The core skill's data/ and scripts/ are symlinks into src/. Only
#      .claude/skills/ is copied, so they would dangle. We replace them with
#      real folders (the 16 CSV databases + BM25 search engine).
#
set -euo pipefail

UPSTREAM="https://github.com/nextlevelbuilder/ui-ux-pro-max-skill.git"
SKILLS=(ui-ux-pro-max design design-system brand ui-styling slides banner-design)

ROOT="$(git rev-parse --show-toplevel)"
DEST="$ROOT/.claude/skills"

TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT
SRC="$TMP/uupm/.claude/skills"

echo "==> Cloning upstream..."
git clone --depth 1 "$UPSTREAM" "$TMP/uupm" >/dev/null 2>&1

echo "==> Fix 1 (in staging): stripping 'ckm:' prefix from companion names..."
for d in banner-design brand design design-system slides ui-styling; do
  [ -f "$SRC/$d/SKILL.md" ] && sed -i 's/^name: ckm:/name: /' "$SRC/$d/SKILL.md"
done

echo "==> Fix 2 (in staging): materializing core data/ & scripts/ symlinks..."
rm -f "$SRC/ui-ux-pro-max/data" "$SRC/ui-ux-pro-max/scripts"
cp -R "$TMP/uupm/src/ui-ux-pro-max/data"    "$SRC/ui-ux-pro-max/data"
cp -R "$TMP/uupm/src/ui-ux-pro-max/scripts" "$SRC/ui-ux-pro-max/scripts"
find "$SRC" -name '__pycache__' -type d -prune -exec rm -rf {} + 2>/dev/null || true

echo "==> Installing into $DEST (clean copy of each skill)..."
mkdir -p "$DEST"
for d in "${SKILLS[@]}"; do
  rm -rf "$DEST/$d"
  cp -R "$SRC/$d" "$DEST/$d"
done

echo "==> Verifying..."
echo "    Broken symlinks (should be none):"
find "$DEST" -type l -print | sed 's/^/      /' || true
echo "    Installed skill names:"
grep -rh '^name:' "$DEST"/*/SKILL.md | sed 's/^/      /'

if command -v python3 >/dev/null 2>&1; then
  echo "==> Smoke-testing the search engine..."
  # -B prevents writing __pycache__/*.pyc into the repo
  ( cd "$DEST/ui-ux-pro-max/scripts" && \
    python3 -B search.py "glassmorphism dashboard" --domain style --max-results 1 \
      | head -4 | sed 's/^/      /' ) || echo "    (smoke test skipped)"
  find "$DEST" -name '__pycache__' -type d -prune -exec rm -rf {} + 2>/dev/null || true
fi

echo ""
echo "Done. Next:"
echo "    git add .claude/skills"
echo "    git commit -m 'Add UI/UX Pro Max design skills'"
echo "    git push"
echo "Then merge into your default branch so future sessions auto-load the skills."
