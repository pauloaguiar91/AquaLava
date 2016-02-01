(function() {
	var aq_main = function() {

		function animate() {
			$('h2.title').velocity("transition.flipBounceXIn", {
				"duration": 1000,
			});
		}
		
		function setupEvents() {
			animate();
		}

		this.init = function() {
			setupEvents();
		};
	};

	var aq_main = new aq_main();
		aq_main.init();
})();