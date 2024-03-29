const container = document.querySelector(".container")
const posters = [
	{ name: "2008 Poster", image: "images/posters/2008poster.webp", link: "images/posters/2008poster.webp", },
	{ name: "2009 Poster", image: "images/posters/2009poster.webp" },
	{ name: "2009 Poster", image: "images/posters/2009faces1.webp" },
	{ name: "2009 Poster", image: "images/posters/2009faces2.webp" },
	{ name: "2010 Flyer", image: "images/posters/2010flyer.webp" },
	{ name: "2010 Poster", image: "images/posters/2010poster.webp" },
	{ name: "2011 Flyer", image: "images/posters/2011flyer.webp" },
	{ name: "2012 Poster", image: "images/posters/2012poster.webp" },
	{ name: "2013 Flyer", image: "images/posters/2013flyer.webp" },
	{ name: "2013 Poster", image: "images/posters/2013poster.webp" },
	{ name: "2014 Poster", image: "images/posters/2014poster.webp" },
	{ name: "2015 Poster", image: "images/posters/2015poster.webp" },
	{ name: "2016 Poster", image: "images/posters/2016poster.webp" },
	{ name: "10 Year Anniversary Poster", image: "images/posters/201710yearposter.webp" },
	{ name: "2017 Poster", image: "images/posters/2017poster.webp" },
	{ name: "2018 Poster", image: "images/posters/2018poster.webp" },
	{ name: "2019 Poster", image: "images/posters/2019poster.webp" },
	{ name: "2022 Poster", image: "images/posters/2022poster.webp" },
]
const showPosters = () => {
  let output = ""
  posters.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="${image}">Large Version</a>
              </div>
              `)
  )
  container.innerHTML = output
}

document.addEventListener("DOMContentLoaded", showPosters)

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/Cwmfest/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}