/*
 * iOStek — cookie banner minimale e GDPR-friendly.
 * Stato attuale del sito: nessun cookie di profilazione, nessun analytics.
 * Risorse di terze parti caricate: Google Fonts e Tailwind CDN (jsDelivr/unpkg)
 * — non impostano cookie ma possono ricevere l'indirizzo IP.
 *
 * La scelta dell'utente è salvata in localStorage (storage tecnico, non un
 * cookie di tracciamento). Quando in futuro si aggiungeranno strumenti di
 * statistica, gateare il loro caricamento su window.iostekConsent.accepted.
 */
(function () {
  var KEY = 'iostek_cookie_consent_v1';

  function load() {
    try { return JSON.parse(localStorage.getItem(KEY) || 'null'); } catch (e) { return null; }
  }
  function save(accepted) {
    try { localStorage.setItem(KEY, JSON.stringify({ accepted: accepted, ts: Date.now() })); } catch (e) {}
    window.iostekConsent = { accepted: accepted };
  }

  function remove(el) { if (el && el.parentNode) el.parentNode.removeChild(el); }

  function render() {
    if (document.getElementById('iostek-cookie-banner')) return;
    var wrap = document.createElement('div');
    wrap.id = 'iostek-cookie-banner';
    wrap.setAttribute('role', 'dialog');
    wrap.setAttribute('aria-label', 'Informativa cookie');
    wrap.style.cssText =
      'position:fixed;left:16px;right:16px;bottom:16px;z-index:9999;max-width:560px;margin:0 auto;' +
      'background:#0A1020;color:#e6edf7;border:1px solid rgba(255,255,255,.12);border-radius:18px;' +
      'box-shadow:0 24px 60px rgba(8,15,35,.45);padding:18px 20px;font-family:Inter,system-ui,sans-serif;';
    wrap.innerHTML =
      '<div style="font-weight:700;font-size:15px;margin-bottom:6px">Cookie e privacy</div>' +
      '<p style="font-size:13px;line-height:1.5;color:#aebbd2;margin:0 0 14px">' +
      'Questo sito usa solo strumenti tecnici necessari al funzionamento e <strong>non</strong> usa ' +
      'cookie di profilazione. Carichiamo font e librerie da CDN esterne che possono ricevere il tuo ' +
      'indirizzo IP. Dettagli nella <a href="cookie.html" style="color:#3B8DF0;text-decoration:underline">Cookie Policy</a> ' +
      'e nella <a href="privacy.html" style="color:#3B8DF0;text-decoration:underline">Privacy Policy</a>.</p>' +
      '<div style="display:flex;gap:10px;flex-wrap:wrap">' +
      '<button id="iostek-cookie-ok" style="flex:1;min-width:130px;background:#1F6FEB;color:#fff;border:0;border-radius:11px;padding:10px 14px;font-weight:600;font-size:14px;cursor:pointer">Accetta</button>' +
      '<button id="iostek-cookie-min" style="flex:1;min-width:130px;background:transparent;color:#e6edf7;border:1px solid rgba(255,255,255,.25);border-radius:11px;padding:10px 14px;font-weight:600;font-size:14px;cursor:pointer">Solo necessari</button>' +
      '</div>';
    document.body.appendChild(wrap);
    document.getElementById('iostek-cookie-ok').addEventListener('click', function () { save(true); remove(wrap); });
    document.getElementById('iostek-cookie-min').addEventListener('click', function () { save(false); remove(wrap); });
  }

  // Riapri il banner dal footer ("Gestisci cookie")
  window.iostekCookieSettings = function () {
    try { localStorage.removeItem(KEY); } catch (e) {}
    render();
    return false;
  };

  var existing = load();
  window.iostekConsent = existing ? { accepted: !!existing.accepted } : { accepted: false };
  if (!existing) {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', render);
    else render();
  }
})();
