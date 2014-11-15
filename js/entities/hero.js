function Hero() {
	var img = new sprite('img/characters/hero.png');
	this.equip = function( item ) {
		console.log(item);
		this.equipment[item.itemdefinition.slot] = item;
	}

	this.unequip = function( item ) {
		console.log(item)
		this.equipment[item.itemdefinition.slot] = null;
	}

	this.equipment = {
		helmet:new item(itemDefinitions[3]),
		chest:null,
		boots:null,
		ring:null
	};

	this.inventory = [
		new item(itemDefinitions[4]),
	];
	this.getInventory = function() {
		return this.inventory;
	};

	this.harm = function(hp) {
		this.life -= hp;

		if (this.life < 0)
			this.life = 0;
	}

	this.attrs = {
		hp: 150,
		mana: 12,
		str: 10,
		def: 13,
		dex: 10,
		int: 10
	};
	this.life = this.attrs.hp;

	this.getStats = function() {
		var currentStats = clone(this.attrs);

		for(var item in this.equipment) {
			if (this.equipment[item] != null) {
				for(var stat in currentStats) {
					if (this.equipment[item].itemdefinition[stat])
						currentStats[stat] += this.equipment[item].itemdefinition[stat];
				}

			}
		}

		return currentStats;
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

	this.getStats = function() {
		return hero.getStats();
	}

	this.harm = function(hp) {
		hero.harm(hp);
		return hero.life
	}
}
