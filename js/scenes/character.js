function characterScene() {
	this.bg = new sprite( 'img/maps/mountain.jpg' );

	this.stats = new stats(658, 20);
	this.entities = [
		this.stats,
		new HeroContainer(300,320),
		new SpriteButton('img/ui/back_button.png', Rect.create(0,  0,161,133), Rect.create(161,  0,161,133),  10, 625, function(){
			game.scene = scenes.map;
		}, null)
	];


	this.initDropareas();
	this.initItems();
}

characterScene.prototype = new scene();
characterScene.prototype.initDropareas = function () {

	var x = 10;
	var y = 500;

	this.itemslots = [];

	for(var c =0;c<2;c++ )
		for(var i =0;i<9;i++ ) {
			var is = new itemslot(x + 130*i,y + 130*c,120,120,['item', 'helmet', 'chest','boots' , 'ring'],function (item) {
				console.log('drop');
			}, function (item) {
				console.log('remove');
			});

			this.entities.push(is);
			this.itemslots.push(is);
		}

	this.equipmentslots = {};

	var helmet = new equipslot(x+5*130,y - 130,120,120,'helmet',function (item) {
		hero.equip(item);
	}, function (item) {
		hero.unequip(item);
	});

	var chest = new equipslot(x+130+5*130,y - 130,120,120,'chest',function (item) {
		hero.equip(item);
	}, function (item) {
		hero.unequip(item);
	});

	var boots = new equipslot(x+260+5*130,y - 130,120,120,'boots',function (item) {
		hero.equip(item);
	}, function (item) {
		hero.unequip(item);
	});

	var ring = new equipslot(x+390+5*130,y - 130,120,120,'ring',function (item) {
		hero.equip(item);
	}, function (item) {
		hero.unequip(item);
	});

	this.equipmentslots.helmet = helmet;
	this.equipmentslots.chest = chest;
	this.equipmentslots.boots = boots;
	this.equipmentslots.ring = ring;
	this.entities.push(helmet, chest, boots, ring);
}

characterScene.prototype.showDiffrence = function (item) {
	var diff = {
		hp: 0,
		mana: 0,
		str: 0,
		def: 0,
		dex: 0,
		int: 0,
		"const": 0,
		blingbling: 0,
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

characterScene.prototype.initItems = function () {
	// Inventory
	var items = hero.getInventory();

	for(var i =0;i<items.length;i++) {
		var dg = new dragable(new itemContainer(this.itemslots[i].area.p1.x+this.itemslots[i].padding.x,
												this.itemslots[i].area.p1.y +this.itemslots[i].padding.y,
			100,100,items[i]), items[i].itemdefinition.slot);

		this.itemslots[i].content = dg.entity.item;
		this.itemslots[i].dragEntity = dg;
		dg.droparea = this.itemslots[i];

		this.entities.push(dg);
	}

	//Equipment
	for(var item in hero.equipment) {
		if (hero.equipment[item] != null) {

			var equipmentslot = this.equipmentslots[hero.equipment[item].itemdefinition.slot];

			var dg = new dragable(new itemContainer(equipmentslot.area.p1.x+equipmentslot.padding.x,
													equipmentslot.area.p1.y +equipmentslot.padding.y,
														100,100,hero.equipment[item]), hero.equipment[item].itemdefinition.slot);


			equipmentslot.content = dg.entity.item;
			equipmentslot.dragEntity = dg;

			dg.droparea = equipmentslot;
			this.entities.push(dg);
		}
	}

}
