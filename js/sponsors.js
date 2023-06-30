const container = document.querySelector(".container")
const sponsors = [
	{ name: "Kelray Ltd.", image: "images/Sponsors/kelray.jpg" },
	{ name: "Pen Y Cymoedd", image: "images/Sponsors/windfarm.jpg" },
	{ name: "The National Lottery", image: "images/Sponsors/lottery.jpg" },
]
const showSponsors = () => {
  let output = ""
  sponsors.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                
              </div>
              `)
  )
  container.innerHTML = output
}

document.addEventListener("DOMContentLoaded", showSponsors)

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/Cwmfest/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}