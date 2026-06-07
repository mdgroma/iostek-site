#!/bin/bash
# Deploy iostek-site su Plesk Node.js.
# La shell di deploy di Plesk è molto limitata (niente dirname/ls/sort...),
# quindi usiamo path assoluti (relativi alla subscription: /httpdocs).
set -e
shopt -s nullglob
cd /httpdocs

NPM=""
for c in /opt/plesk/node/*/bin/npm /usr/local/bin/npm /usr/bin/npm; do
  [ -x "$c" ] && NPM="$c" && break
done
[ -z "$NPM" ] && { echo "ERROR: npm non trovato"; exit 1; }

echo ">> npm: $NPM"; "$NPM" --version
"$NPM" ci --no-audit --no-fund --prefer-offline
"$NPM" run build

[ -d tmp ] || mkdir tmp
> tmp/restart.txt
echo ">> Deploy completato."
