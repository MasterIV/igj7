function Hero() {
	var img = new sprite('img/characters/hero.png');

	var animImgOutline = new AnimationSprite('img/characters/hero_sprite_outline.png',4);
	var animImg = new AnimationSprite('img/characters/hero_spritesheet.png',4);

	this.counter = new Framecounter(200);


	this.inventory = [];
	this.skills = [];

	this.equipment = {
		helmet:null,
		neck: null,
		chest:null,
		boots:null,
		ring:null
	};

	this.attrs = clone(config.defaultAttributes);

	this.life = this.attrs.hp;

	this.use = function( item ) {
		arrayRemove(this.inventory, item);
	};

	this.equip = function( item ) {
		if(!item.slot) return;
		var slot = item.slot;

		this.use(item);
		if(this.equipment[slot])
			this.loot(this.equipment[slot]);

		this.equipment[slot] = item;
	};

	this.getSkills = function() {
		return this.skills;
	};

	this.getInventory = function() {
		return this.inventory;
	};

	this.loot = function( item ) {
		this.inventory.push( item );
	};

	this.reset = function() {
		this.inventory = [];
		this.skills = [];
		this.attrs = clone(config.defaultAttributes);
	};

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
	};

	this.center = function( ctx, x, y ) {
		if (game.scene == scenes.character) {
			animImgOutline.center(ctx, x, y, this.counter.frame%animImg.f);
		} else {
			animImg.center(ctx, x, y, this.counter.frame%animImg.f);
		}
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
			game.scene = new switchScene(new looseScene(), 2000, 'Game Over');
			backgroundsound.play('sound/map.mp3');
		}
	};

	this.replenish = function(mana) {
		this.mana += mana;
		if (this.mana > this.getStats().mana)
			this.mana = this.getStats().mana;
	};

	this.draw = function(ctx) {
		hero.center(ctx, this.x, this.y);
	};
	this.update = function( delta ) {
		hero.counter.update(delta);
	};

	this.getStats = function() {
		return hero.getStats();
	};

	this.reset();
}
