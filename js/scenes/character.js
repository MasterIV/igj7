function characterScene() {
	this.stats = new stats(600, 20);
	this.entities = [
		this.stats,
		new HeroContainer(200,200),
		new button("mock/button_menu.png", "mock/button_menu.png", 1150, 678, function(){
			game.scene = scenes.menu;
		}, null)
	];


	this.initDropareas();

	this.initItems();
}
characterScene.prototype = new scene();

characterScene.prototype.initDropareas = function () {

	var x = 20;
	var y = 400;

	this.itemslots = [];

	for(var i =0;i<6;i++ ) {
		var is = new itemslot(x + 130*i,y,120,120,['item', 'helmet', 'chest','boots' , 'ring'],function (item) {
			console.log('drop');
		}, function (item) {
			console.log('remove');
		});

		this.entities.push(is);
		this.itemslots.push(is);
	}

	this.equipmentslots = {};

	var helmet = new equipslot(x,y + 130,120,120,'helmet',function (item) {
		hero.equip(item);
	}, function (item) {
		hero.unequip(item);
	});

	var chest = new equipslot(x+130,y + 130,120,120,'chest',function (item) {
		hero.equip(item);
	}, function (item) {
		hero.unequip(item);
	});

	var boots = new equipslot(x+260,y + 130,120,120,'boots',function (item) {
		hero.equip(item);
	}, function (item) {
		hero.unequip(item);
	});

	var ring = new equipslot(x+390,y + 130,120,120,'ring',function (item) {
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
		int: 0
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
		dg.droparea = this.itemslots[i];

		this.entities.push(dg);
	}

	//Equipment
	for(var item in hero.equipment) {
		if (hero.equipment[item] != null) {

			var dg = new dragable(new itemContainer(this.equipmentslots[hero.equipment[item].itemdefinition.slot].area.p1.x+this.equipmentslots[hero.equipment[item].itemdefinition.slot].padding.x,
													this.equipmentslots[hero.equipment[item].itemdefinition.slot].area.p1.y +this.equipmentslots[hero.equipment[item].itemdefinition.slot].padding.y,
														100,100,hero.equipment[item]), hero.equipment[item].itemdefinition.slot);


			this.equipmentslots[hero.equipment[item].itemdefinition.slot].content = dg.entity.item;
			dg.droparea = this.equipmentslots[hero.equipment[item].itemdefinition.slot];

			this.entities.push(dg);
		}
	}

}
