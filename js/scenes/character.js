function characterScene() {
	this.entities = [
		new stats(600, 20),
	];

	this.dropareas = []

	this.initItems();
	this.initDropareas();
}
characterScene.prototype = new scene();

characterScene.prototype.initDropareas = function () {
	this.dropareas.push(new droparea(300, 100, 100, 100, ['item'], function () {
		console.log('drop place 2')
	}, function () {
		console.log('remove place 2')
	}));
	this.dropareas.push(new droparea(100, 100, 100, 100, ['item'], function () {
		console.log('drop place 1')
	}, function () {
		console.log('remove place 1')
	}));
	this.dropareas.push(new droparea(100, 300, 100, 100, ['aaaa'], function () {
		console.log('drop place 1')
	}, function () {
		console.log('remove place 1')
	}));
}

characterScene.prototype.initItems = function () {
	var items = hero.getInventory();

	for(var i =0;i<items.length;i++) {
		this.entities.push(new dragable(new itemContainer(100 + 120*i,100,100,100,items[i]), 'item'));
	}
}
