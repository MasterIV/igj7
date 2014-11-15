function Hero() {
	this.equip = function( item ) {

	}

	this.getInventory = function() {
		return [
			new item(),
			new item(),
			new item(),
			new item()
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
}

var hero = new Hero();
