# Deploy — iostek.com (Next.js su Plesk/Hetzner)

Stesso pattern di Mandascan: Plesk Node.js, build con `npm ci && npm run build`, restart via `tmp/restart.txt`.

## 1. Repo
Push del progetto su un remote Git (GitHub) e collega il repo in Plesk (Git), oppure carica i file.

## 2. Plesk → dominio iostek.com
- Document root: la cartella del repo (dove sta `package.json`).
- Abilita **Node.js**:
  - Application Root = cartella del repo
  - **Application Startup File = `server.js`** (incluso nel repo: avvia Next in produzione su `PORT` di Plesk).
  - Node.js version: 20+ (il progetto gira con 20/22/25).

## 3. Variabili d'ambiente (Plesk → Node.js → Environment Variables)
```
RESEND_API_KEY = re_...           # la tua API key Resend
CONTACT_TO     = marco@iostek.com
CONTACT_FROM   = iOStek <noreply@iostek.com>
```

## 4. Resend
Verifica il dominio **iostek.com** in Resend (record DNS SPF/DKIM forniti da Resend) così `CONTACT_FROM` con `@iostek.com` è autorizzato. Senza dominio verificato il modulo non invia.

## 5. Build & avvio
Esegui `bash deploy.sh` (o "Run Script" in Plesk): fa `npm ci`, `npm run build` e tocca `tmp/restart.txt` per il restart. Plesk fa da reverse proxy sul dominio.

## 6. Verifica
- `https://iostek.com` carica (home, /servizi, /contatti, /privacy, /cookie).
- Invia il modulo contatti → arriva una mail a marco@iostek.com.

## Anteprima locale
```
npm install
npm run dev      # http://localhost:3000
# oppure produzione:
npm run build && npm run start
```
Il modulo in locale richiede `RESEND_API_KEY` in `.env.local` per inviare davvero (vedi `.env.example`).
