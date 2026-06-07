#!/bin/bash
# Deploy iostek-site su Plesk Node.js (stesso pattern di Mandascan).
# Uso in Plesk → Node.js → "Run Script": deploy.sh
set -e
shopt -s nullglob
cd "$(dirname "$0")"

NPM=""
for c in /opt/plesk/node/*/bin/npm /usr/local/bin/npm /usr/bin/npm; do
  [ -x "$c" ] && NPM="$c" && break
done
[ -z "$NPM" ] && { echo "ERROR: npm non trovato" >&2; exit 1; }

echo ">> npm: $NPM"; "$NPM" --version
echo ">> install dipendenze..."; "$NPM" ci --no-audit --no-fund --prefer-offline
echo ">> build Next.js...";      "$NPM" run build

# restart app Plesk Node.js
[ -d tmp ] || mkdir tmp
> tmp/restart.txt
echo ">> Deploy completato. App in restart."
