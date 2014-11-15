var g = {
	urls: [
			'img/ui/buttons.png',
			'img/ui/target.png',
			'img/animation/strike1.png',
			'img/characters/hero.png',
			'mock/map.png',
			'mock/char.png',
			'mock/fight.png',
			'mock/button.png',
			'mock/settings.png',
			'mock/button_menu.png',
			'mock/button_character.png',
			'mock/button_paywall.png',
			'mock/encounter.png',
			'mock/path.png'
			],

	add: function( url ) {
		this.urls.push( url );
	},

	load: function( callback ) {
		var total = 0, loaded = 0;

		function complete() {
			if( ++loaded >= total ) callback();
		}

		while( this.urls.length ) {
			var url = this.urls.shift();
			if( typeof this[url] == 'undefined' ) {
				total++;
				this[url] = new Image();
				this[url].onload = complete;
				this[url].src = url;
			}
		}

		if( total == 0 ) callback();
	}
}
