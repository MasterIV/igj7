var g = {
	urls: [
			'mock/map.png',
			'mock/char.png',
			'mock/fight.png',
			'mock/button.png',
			'mock/itemslot.png',
			'mock/itemslot_weapon.png',
			'mock/itemslot_shield.png',
			'mock/sword.png',
			'mock/shield.png',
			'img/ui/buttons.png',
			'img/ui/target.png'
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
