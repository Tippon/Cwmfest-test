const container = document.querySelector(".container")
const programme = [
	{ name: "Programme Cover", image: "images/Programme/p1_prog.jpeg" },
	{ name: "Programme Page 2", image: "images/Programme/p2_prog.jpeg" },
	{ name: "Programme Page 3", image: "images/Programme/p3_prog.jpeg" },
	{ name: "Programme Sponsors", image: "images/Programme/p4_prog.jpeg" },
]
const showProgramme = () => {
  let output = ""
  programme.forEach(
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

document.addEventListener("DOMContentLoaded", showProgramme)

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/Cwmfest/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}