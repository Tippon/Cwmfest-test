const container = document.querySelector(".container")
const sponsors = [
	{ name: "Kelray Ltd. - www.kelray.co.uk", image: "images/Sponsors/kelray.png", link: "http://www.kelray.co.uk/" },
	{ name: "The Garage - Aberdare", image: "images/Sponsors/garage.jpg", link: "https://www.facebook.com/thegarageaberdare" },
	{ name: "The National Lottery Community Fund", image: "images/Sponsors/lottery.png", link: "https://www.tnlcommunityfund.org.uk/" },
	{ name: "Pen Y Cymoedd Wind Farm Community Fund", image: "images/Sponsors/windfarm.jpg", link: "https://penycymoeddcic.cymru/home/" }
]
const showSponsors = () => {
  let output = ""
  sponsors.forEach(
    ({ name, image, link }) =>
      (output += `
              <a class="card" href="${link}" target="_blank">
			  <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
              </div>
			  </a>
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