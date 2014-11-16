function menuScene() {
	this.bg = new sprite( 'img/ui/menu.jpg' );

	this.firstStart = true;

	this.startButton = new SpriteButton('img/ui/start_button.png', Rect.create(0, 0, 330, 87), Rect.create(330, 0, 330, 87), 191, 432, function(){
		scenes.map.goToFinalScene();
		game.scene = new switchScene(scenes.map,2500,'Map');

		scenes.menu.firstStart = false;
	}, null);



	this.entities = [
		this.startButton,
		new SpriteButton('img/ui/credits_button.png', Rect.create(0, 0, 330, 87), Rect.create(330, 0, 330, 87), 751, 432, function(){
			game.scene = new switchScene(scenes.credits,2500,'Credits');
		}, null),
	]
}
menuScene.prototype = new scene();


menuScene.prototype.draw = function (ctx) {
	if (this.firstStart) {
		this.startButton.img = g['img/ui/start_button.png'];
	} else {
		this.startButton.img = g['img/ui/continue_button.png'];
	}

	if (this.bg)
		this.bg.draw(ctx, 0, 0);

	for (var i = 0; i < this.entities.length; i++)
		if (this.entities[i].draw)
			this.entities[i].draw(ctx);

	if (this.blocking.length && this.blocking[0].draw)
		this.blocking[0].draw(ctx);

	if (this.tooltip) {
		this.tooltip.showTooltip(ctx);
	}
}