var g = {
	urls: [
			'img/ui/buttons.png',
			'img/ui/target.png',
			'img/animation/strike.png',
			'img/animation/destroy.png',
			'img/animation/barrier.png',
			'img/animation/healing.png',
			'img/animation/newitem.png',
			'img/animation/stun.png',
			'img/characters/hero.png',
			'img/characters/hero_spritesheet.png',
			'img/characters/hero_sprite_outline.png',
			'img/ui/buttons.png',
			'img/ui/target.png',
			'img/ui/back_button.png',
			'img/characters/roboter.png',
			'img/characters/fee.png',
			'img/maps/mountain.jpg',
			'img/maps/waterfall.jpg',
			'img/maps/village.jpg',
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
			'img/ui/tuer_links.png',
			'img/ui/tuer_rechts.png',
			'img/ui/hp_mp_bar.png',
			'img/ui/menu.jpg',
			'img/maps/campaign_map.jpg',
			'img/items/neck.png',
			'img/items/boots.png',
			'img/items/chest.png',
			'img/items/helmet.png',
			'img/items/ring.png',
			'img/ui/gamestates.png',
			'img/characters/villain.png',
			'img/items/tigerhoden.png',
			'img/items/klosteinamulett.png',
			'img/items/mettwurststiefeletten.png',
			'img/items/sandalensocken.png',
			'img/items/trabbelhufedestrippers.png',
			'img/items/dampfhammeruhr3000.png',
			'img/items/dubstepring.png',
			'img/items/moebiusstreifen.png',
			'img/items/dasgewissenichts.png',
			'img/items/erotischesoutfit.png',
			'img/items/boratslieblingsfetzen.png',
			'img/items/geilervikingerhelm.png',
			'img/items/panfloetenmaske.png',
			'img/items/mauszeigerhut.png',
			'img/items/dereinering.png',
			'img/characters/roboter3.png',
			'img/characters/sheep.png',
			'img/characters/merkel.png',
			'img/characters/witch.png',
			'img/characters/spider.png',
			'img/characters/hotelf.png'
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
