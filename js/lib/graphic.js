var g = {
	urls: [
			'img/ui/buttons.png',
			'img/ui/target.png',
			'img/animation/strike.png',
			'img/animation/destroy.png',
			'img/characters/hero.png',
			'mock/map.png',
			'mock/sword.png',
			'mock/shield.png',
			'img/ui/buttons.png',
			'img/ui/target.png',
			'mock/settings.png',
			'mock/button_menu.png',
			'mock/button_character.png',
			'mock/button_paywall.png',
			'img/ui/back_button.png',
			'mock/encounter.png',
			'mock/path.png',
			'img/characters/roboter.png',
			'img/characters/fee.png',
			'img/maps/mountain.jpg',
			'img/maps/death.jpg',
			'img/ui/slot_helmet.png',
			'img/ui/slot_chest.png',
			'img/ui/slot_boots.png',
			'img/ui/slot_neck.png',
			'img/ui/slot_ring.png',
			'img/ui/character_button.png',
			'img/ui/character_button_hover.png',
			'img/ui/character_sheet_background.jpg',
			'img/maps/campaign_map.jpg',
			'img/items/neck.png',
			'img/items/boots.png',
			'img/items/chest.png',
			'img/items/helmet.png',
			'img/items/ring.png',
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
