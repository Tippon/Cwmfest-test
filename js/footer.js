const footerContent = `<br>
<h2 class="w3-wide">#MusicInTheVillage</h2>
<h2 class="w3-wide">#Cwmfest23</h2>
<h2 class="w3-wide">#ForMartyn</h2>
<br>
<!-- Footer -->
<footer class="w3-container w3-padding-64 w3-center w3-black w3-xlarge">
	<a href="https://www.facebook.com/CwmamanMusicFestival/" target="_blank"><i class="fa-brands fa-facebook fa-2x"></i></a>
	<a href="https://www.instagram.com/cwmaman_music_festival/" target="_blank"><i class="fa-brands fa-instagram fa-2x"></i></a>
	<a href="https://twitter.com/CwmFest" target="_blank"><i class="fa-brands fa-twitter fa-2x"></i></a>
	<a href="https://www.flickr.com/photos/127740634@N02/" target="_blank"><i class="fa-brands fa-flickr fa-2x"></i></a>
	<a href="https://www.youtube.com/user/CwmFest" target="_blank"><i class="fa-brands fa-youtube fa-2x"></i></a>
</footer>
<br>
<credits class="w3-container w3-center w3-content">
	<h5 class="w3-wide">Website and app design by Ryan at GPD Music</h5>
	<h5 class="w3-wide">Artwork and programmes by Su at Bizarre Dragonz</h5>
	<h5 class="w3-wide">Videos from 2022 onwards by <a href="https://www.youtube.com/channel/UC6WOsXwN3l3s8kUbQgT0DeQ" target="_blank">@PaskyWales</a></h5>
</credits>`;

class Footer extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = footerContent;
  }
}

customElements.define("footer-component", Footer);