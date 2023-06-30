const staticCwmfest = "cwmfest-site-v1"
const assets = [
  "/",
  "/index.html",
  "/about.html",
  "/changes.html",
  "/lineup.html",
  "/map.html",
  "/posters.html",
  "/programme.html",
  "/sponsors.html",
  "/css/style.css",
  "/js/app.js",
  "/js/footer.js",
  "/js/header.js",
  "/js/posters.js",
  "/js/programme.js",
  "/js/sponsors.js",
  "images/Cover.png",
  "images/2023 Logo.jpg",
  "images/posters/2008poster.jpg",
  "images/posters/2009poster.jpg",
  "images/posters/2009faces1.jpg",
  "images/posters/2009faces2.jpg",
  "images/posters/2010flyer.jpg",
  "images/posters/2010poster.jpg",
  "images/posters/2011flyer.jpg",
  "images/posters/2012poster.jpg",
  "images/posters/2013flyer.jpg",
  "images/posters/2013poster.jpg",
  "images/posters/2014poster.jpg",
  "images/posters/2015poster.jpg",
  "images/posters/2016poster.jpg",
  "images/posters/201710yearposter.jpg",
  "images/posters/2017poster.jpg",
  "images/posters/2018poster.jpg",
  "images/posters/2019poster.jpg",
  "images/posters/2022Poster.jpg",
  "images/Sponsors/lottery.jpg",
  "images/Sponsors/windfarm.jpg",
  "images/Sponsors/kelray.jpg",
  "images/Programme/p4_prog.jpeg",
  "images/Programme/p3_prog.jpeg",
  "images/Programme/p2_prog.jpeg",
  "images/Programme/p1_prog.jpeg",
  
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