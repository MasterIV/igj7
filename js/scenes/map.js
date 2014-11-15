function mapScene() {
	this.bg = new sprite("mock/map.png");

	var btn = new button("mock/button.png", "mock/button.png", 10, 10, function () {
		alert("Hallo Welt");
	}, null);

	this.entities.push(btn);
}

mapScene.prototype = new scene();
