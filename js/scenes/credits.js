function creditsScene() {
	this.bg = new sprite( 'img/ui/credits.jpg' );


	this.entities = [
		new SpriteButton('img/ui/back_button.png', Rect.create(0,  0,161,133), Rect.create(161,  0,161,133),  10, 632, function(){
			game.scene = new switchScene(scenes.menu,2500,'Menu');
		}, null)
	]
}
creditsScene.prototype = new scene();
