function pageLoaded() {
        document.querySelector(".body-wrapper").style.opacity = 1;
}
window.onload = pageLoaded;




(function() {

	var hamburger = {
		navToggle: document.querySelector('.tcon'),
		nav: document.querySelector('.main-nav'),

		doToggle: function(e) {
			e.preventDefault();
			this.navToggle.classList.toggle('expanded');
      
     this.navToggle.classList.toggle('tcon-transform');
			this.nav.classList.toggle('expanded');
		}
	};

	hamburger.navToggle.addEventListener('click', function(e) { hamburger.doToggle(e); });

}());
