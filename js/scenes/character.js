function characterScene() {
	this.bg = new sprite( 'img/ui/character_sheet_background.jpg' );

	this.hero = new HeroContainer(200,410);

	this.stats = new stats(58, 65);
	this.entities = [
		this.stats,
		this.hero,
		new SpriteButton('img/ui/back_button.png', Rect.create(0,  0,161,133), Rect.create(161,  0,161,133),  10, 632, function(){
			game.scene = scenes.map;
		}, null)
	];


	this.initDropareas();
}

characterScene.prototype = new scene();
characterScene.prototype.initDropareas = function () {

	var x = 430;
	var y = 220;

	this.itemslots = [];

	for(var c =0;c<4;c++ )
		for(var i =0;i<5;i++ ) {
			var is = new itemslot(x + 168*i,y + 135*c,120,120,['item', 'helmet', 'chest', 'gloves', 'boots' ,'ring']);
			is.inventoryId = c*5 + i;

			this.entities.push(is);
			this.itemslots.push(is);
		}

	this.equipmentslots = {};

	var helmet = new equipslot(430,27,120,120,'helmet');

	var chest = new equipslot(596,27,120,120,'chest');

	var boots = new equipslot(763,27,120,120,'boots');

	var neck = new equipslot(932,27,120,120,'neck');

	var ring = new equipslot(1100,27,120,120,'ring');

	this.equipmentslots.helmet = helmet;
	this.equipmentslots.chest = chest;
	this.equipmentslots.boots = boots;
	this.equipmentslots.neck = neck;
	this.equipmentslots.ring = ring;
	this.entities.push(helmet, chest, boots, neck, ring);
}

characterScene.prototype.showDiffrence = function (item) {
	var diff = {
		hp: 0,
		mana: 0,
		str: 0,
		def: 0,
		dex: 0,
		int: 0,
		blingbling: 0
	};

	var eqItem = hero.equipment[item.itemdefinition.slot];
	if (eqItem != item) {
		if (eqItem) {
			for(var stat in diff) {
				if (eqItem.itemdefinition[stat])
					diff[stat] -= eqItem.itemdefinition[stat];
			}
		}

		for(var stat in diff) {
			if (item.itemdefinition[stat])
				diff[stat] += item.itemdefinition[stat];
		}

		this.stats.showDiffrence = diff;

		window.setTimeout(function () {
			scenes.character.hideDiffrence();
		},1000);
	}
}
characterScene.prototype.hideDiffrence = function () {
	this.stats.showDiffrence = false;
}