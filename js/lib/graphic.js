var g = {
	urls: [
			'img/ui/buttons.png',
			'img/ui/target.png',
			'img/animation/strike.png',
			'img/animation/destroy.png',
			'img/animation/barrier.png',
			'img/animation/healing.png',
			'img/characters/hero.png',
			'img/ui/buttons.png',
			'img/ui/target.png',
			'img/ui/back_button.png',
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
			'img/ui/tooltip_content.png',
			'img/ui/tooltip_header.png',
			'img/ui/hp_mp_bar.png',
			'img/maps/campaign_map.jpg',
			'img/items/neck.png',
			'img/items/boots.png',
			'img/items/chest.png',
			'img/items/helmet.png',
			'img/items/ring.png',
			'img/ui/gamestates.png'
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
