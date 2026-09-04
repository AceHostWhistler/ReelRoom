#!/usr/bin/env bash
# Sync Cotswolds photos from AceHostWebsite into ReelRoom (cotswoldsvacation.com).
# Run from ReelRoom root after adding photos to the AceHost Drive folder.
set -euo pipefail

ACEHOST="${ACEHOST_REPO:-$HOME/Documents/GitHub/AceHostWebsite}"
SRC="$ACEHOST/public/photos/properties/Cotswolds UK - Soho Farm House"
DEST="$(cd "$(dirname "$0")/.." && pwd)/public/photos/listings/Cotswolds Luxury Retreat"

if [[ ! -d "$SRC" ]]; then
  echo "AceHost photo folder not found: $SRC"
  echo "Set ACEHOST_REPO to your AceHostWebsite clone path."
  exit 1
fi

mkdir -p "$DEST"
rsync -av --delete "$SRC/" "$DEST/"
echo "Synced $(find "$DEST" -type f | wc -l | tr -d ' ') photos to ReelRoom."
