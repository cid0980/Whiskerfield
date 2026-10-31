#!/usr/bin/env bash
# Commit everything in the working tree and push it to GitHub (cid0980/Whiskerfield, main).
# The token lives outside the tracked tree in .git/push-token (never committed).
#   usage: scripts/push.sh "message"        (message defaults to a WIP stamp)
set -euo pipefail
cd "$(dirname "$0")/.."
TOKEN_FILE=.git/push-token
[ -f "$TOKEN_FILE" ] || { echo "no token in $TOKEN_FILE"; exit 1; }
MSG="${1:-wip: $(date -u +'%Y-%m-%d %H:%M UTC')}"
git add -A
if ! git diff --cached --quiet; then
  git -c user.name=Whiskerfield -c user.email=whiskerfield@users.noreply.github.com commit -q -m "$MSG"
fi
ASK=$(mktemp); printf '#!/bin/sh\ncase "$1" in *sername*) echo cid0980;; *) cat %s;; esac\n' "$PWD/$TOKEN_FILE" > "$ASK"; chmod +x "$ASK"
GIT_TERMINAL_PROMPT=0 GIT_ASKPASS="$ASK" git push -q origin main
rm -f "$ASK"
echo "pushed $(git rev-parse --short HEAD): $MSG"
