function Hero() {
	var img = new sprite('img/characters/hero.png');
	this.equip = function( item ) {
		this.equipment[item.itemdefinition.slot] = item;
	}

	this.unequip = function( item ) {
		this.equipment[item.itemdefinition.slot] = null;
	}

	this.equipment = {
		helmet:null,
		chest:null,
		boots:null,
		ring:null
	};

	this.getSkills = function() {
		return skillDefinitions;
	};

	this.inventory = [
	];

	console.log(itemDefinitions);
	console.log(itemDefinitions.length);

	var itemCounter =0;
	for(var key in itemDefinitions) {
		this.inventory.push(new item(itemDefinitions[key]));

		itemCounter ++;
		if (itemCounter == 9) {
			break;
		}
	}

	this.getInventory = function() {
		return this.inventory;
	};

	this.attrs = {
		hp: 150,
		mana: 12,
		str: 10,
		def: 6,
		dex: 10,
		int: 10,
		"const": 10,
		blingbling: 10
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
	this.buffs = [];

	this.reset = function() {
		var stats = hero.getStats();
		this.life = stats.hp;
		this.mana = stats.mana;
		this.def = stats.def;
	};

	this.harm = function(hp) {
		this.life -= hp;

		if (this.life > this.getStats().hp)
			this.life = this.getStats().hp;

		if (this.life <= 0) {
			this.life = 0;
			game.scene = scenes.loose;
		}
	};

	this.draw = function(ctx) {
		hero.center(ctx, this.x, this.y);
	};

	this.getStats = function() {
		return hero.getStats();
	};

	this.reset();
}
