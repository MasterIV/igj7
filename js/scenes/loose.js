function looseScene() {
	this.bg = new sprite( 'img/maps/mountain.jpg' );

	this.entities = [];

	var fee = new sprite('img/characters/fee.png');
	this.entities.push({
		draw: function (ctx) {
			fee.draw(ctx, 800,200)
		}
	});

	var messageBox = new dialogue('DU BIst leider gestorben',
			[{text: 'OK',
				callback: function() {
					game.scene = scenes.menu;
			}},
			{text: 'NEIN!',
				callback: function() {
					game.scene = scenes.character;
				}}, ], (game.display.height/4)*3);

	this.blocking.push(messageBox);
}

looseScene.prototype = new scene();


