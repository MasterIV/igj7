function characterScene() {
	this.entities = [
		new stats(600, 20),
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
		var is = new itemslot(x + 130*i,y,120,120,['item', 'weapon', 'shield'],function (item) {
			console.log('drop');
		}, function (item) {
			console.log('remove');
		});

		this.entities.push(is);
		this.itemslots.push(is);
	}

	this.equipmentslots = {};

	var helmet = new equipslot(x,y + 130,120,120,'weapon',function (item) {
		hero.equip(item);
	}, function (item) {
		hero.unequip(item);
	});

	var ring = new equipslot(x+130,y + 130,120,120,'shield',function (item) {
		hero.equip(item);
	}, function (item) {
		hero.unequip(item);
	});

	this.equipmentslots.helmet = helmet;
	this.equipmentslots.ring = ring;
	this.entities.push(helmet, ring);
}

characterScene.prototype.initItems = function () {
	// Inventory
	var items = hero.getInventory();

	for(var i =0;i<items.length;i++) {
		var dg = new dragable(new itemContainer(this.itemslots[i].area.p1.x+this.itemslots[i].padding.x,
												this.itemslots[i].area.p1.y +this.itemslots[i].padding.y,
			100,100,items[i]), items[i].itemdefinition.type);

		this.itemslots[i].content = dg.entity.item;
		dg.droparea = this.itemslots[i];

		this.entities.push(dg);
	}

	//Equipment
	for(var item in hero.equipment) {
		if (hero.equipment[item] != null) {

			var dg = new dragable(new itemContainer(this.equipmentslots[hero.equipment[item].itemdefinition.slot].area.p1.x+this.equipmentslots[hero.equipment[item].itemdefinition.slot].padding.x,
													this.equipmentslots[hero.equipment[item].itemdefinition.slot].area.p1.y +this.equipmentslots[hero.equipment[item].itemdefinition.slot].padding.y,
														100,100,hero.equipment[item]), hero.equipment[item].itemdefinition.type);


			this.equipmentslots[hero.equipment[item].itemdefinition.slot].content = dg.entity.item;
			dg.droparea = this.equipmentslots[hero.equipment[item].itemdefinition.slot];

			this.entities.push(dg);
		}
	}

}
