const staticCwmfest = "cwmfest-site-v1"
const assets = [
  "/",
  "/about.html",
  "/changes.html",
  "/index.html",
  "/lineup.html",
  "/map.html",
  "/posters.html",
  "/programme.html",
  "/serviceWorker.js",
  "/sponsors.html",
  "/css/style.css",
  "/js/app.js",
  "/js/footer.js",
  "/js/header.js",
  "/js/posters.js",
  "/js/programme.js",
  "/js/sponsors.js",
  "images/2023 Lineup Poster v1.webp",
  "images/2023 Logo.webp",
  "images/Cover.webp",
  "images/Schedule Yellow.webp",
  "images/posters/2008poster.webp",
  "images/posters/2009faces1.webp",
  "images/posters/2009faces2.webp",
  "images/posters/2009poster.webp",
  "images/posters/2010flyer.webp",
  "images/posters/2010poster.webp",
  "images/posters/2011flyer.webp",
  "images/posters/2012poster.webp",
  "images/posters/2013flyer.webp",
  "images/posters/2013poster.webp",
  "images/posters/2014poster.webp",
  "images/posters/2015poster.webp",
  "images/posters/2016poster.webp",
  "images/posters/201710yearposter.webp",
  "images/posters/2017poster.webp",
  "images/posters/2018poster.webp",
  "images/posters/2019poster.webp",
  "images/posters/2022Poster.webp",
  "images/Sponsors/garage.webp",
  "images/Sponsors/kelray.webp",
  "images/Sponsors/lottery.png",
  
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticCwmfest).then(cache => {
      cache.addAll(assets)
    })
  )
})
self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})