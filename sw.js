// HydroDiag — service worker: o app abre offline e as bibliotecas externas ficam em cache depois do primeiro uso online.
const VER = "hd-2.2.0";
const SHELL = ["./", "./index.html", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png", "./apple-touch-icon.png"];
const CDN = /(^|\.)(esm\.sh|cdnjs\.cloudflare\.com|cdn\.jsdelivr\.net|tessdata\.projectnaptha\.com)$/;

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(VER).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== VER && k !== "hd-cdn").map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin === self.location.origin) {
    // arquivos do app: rede primeiro (pega a versão nova); sem internet, usa o cache
    e.respondWith(fetch(req).then((r) => { if (r.ok) { const cp = r.clone(); caches.open(VER).then((c) => c.put(req, cp)); } return r; })
      .catch(() => caches.match(req).then((m) => m || caches.match("./index.html"))));
    return;
  }
  if (CDN.test(url.hostname)) {
    // bibliotecas externas (pdf.js, OCR, etc.): cache primeiro
    e.respondWith(caches.open("hd-cdn").then(async (c) => {
      const hit = await c.match(req);
      if (hit) return hit;
      const r = await fetch(req);
      if (r.ok || r.type === "opaque") c.put(req, r.clone());
      return r;
    }));
  }
  // demais endereços (Gemini, Supabase): não interceptar
});
