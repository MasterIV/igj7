function Hero() {
	this.equip = function( item ) {

	}

	this.getInventory = function() {
		return [
			new item(100,100,100,100,itemDefinitions[1]),
			new item(300,100,100,100,itemDefinitions[2]),
			new item(500,100,100,100,itemDefinitions[1]),
			new item(600,100,100,100,itemDefinitions[2]),
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
		var w = 200; var h = 400;
		ctx.fillStyle = 'purple';
		ctx.fillRect(x-w/2, y-h/2, w, h);
	}
}

var hero = new Hero();

function HeroContainer(x, y) {
	this.draw = function(ctx) {
		hero.center(ctx, x, y);
	}
}
