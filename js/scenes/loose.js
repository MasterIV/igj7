function looseScene() {
	this.bg = game.scene.map.bg;

	this.blocking.push(
		new dialogue('DU BIst leider gestorben',
			[	{text: 'OK',
				callback: function() {
					game.scene = scenes.menu;
				}},
				{text: 'NEIN!',
				callback: function() {
					game.scene = scenes.character;
				}}, ])
	)
}

looseScene.prototype = new scene();
