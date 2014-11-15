function Hero() {
	var img = new sprite('img/characters/hero.png');
	this.equip = function( item ) {

	}

	this.getInventory = function() {
		return [
			new item(itemDefinitions[1]),
			new item(itemDefinitions[2]),
			new item(itemDefinitions[1]),
			new item(itemDefinitions[2]),
		];
	}

	this.getStats = function() {
		return {
			dex: 10,
			str: 10,
			int: 10,
			dmg: [15,20],
			def: 13,
			hp: 150,
			mana: 12
		}
	}

	this.center = function( ctx, x, y ) {
		img.center(ctx, x, y);
	}
}

function HeroContainer(x, y) {
	this.x = x;
	this.y = y;

	this.draw = function(ctx) {
		hero.center(ctx, this.x, this.y);
	}
}
