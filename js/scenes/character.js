function characterScene() {
	this.entities = [
		new stats(600, 20),
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

	this.entities.push(new equipslot(x,y + 130,120,120,'weapon',function (item) {
			hero.equip(item.item);
		}, function (item) {
			hero.unequip(item.item);
		})
	);
	this.entities.push(new equipslot(x+130,y + 130,120,120,'shield',function (item) {
			hero.equip(item.item);
		}, function (item) {
			hero.unequip(item.item);
		})
	);
}

characterScene.prototype.initItems = function () {
	var items = hero.getInventory();

	for(var i =0;i<items.length;i++) {

		var dg = new dragable(new itemContainer(this.itemslots[i].area.p1.x+this.itemslots[i].padding.x,this.itemslots[i].area.p1.y +this.itemslots[i].padding.y,100,100,items[i]), items[i].itemdefinition.type);

		this.itemslots[i].setContent(dg)
		this.entities.push(dg);
	}
}
