function menuScene() {
	this.bg = new sprite( 'img/ui/menu.jpg' );

	this.entities = [
		new SpriteButton('img/ui/continue_button.png', Rect.create(0, 0, 342, 87), Rect.create(161, 0, 342, 87), 191, 432, function(){
			scenes.map.goToFinalScene();
			game.scene = new switchScene(scenes.map,2500,'Map');
		}, null),
		new SpriteButton('img/ui/credits_button.png', Rect.create(0, 0, 342, 87), Rect.create(161, 0, 342, 87), 751, 432, function(){
			game.scene.entities.push(new credits());
		}, null),




		new textButton('Debug', 10, 50, 200, 30, function () {
			/** debug code to have items from beginning */
			for(var key in itemDefinitions)
				hero.loot(new item(itemDefinitions[key]));
			for(var key in skillDefinitions)
				hero.skills.push(skillDefinitions[key]);

			scenes.combat.setEnemies(['roboter','roboter','roboter']);
			game.scene = new switchScene(scenes.combat, 2000, config.labels.switchScene.combat);
		}, {}),

		new textButton('Debug Inventori', 10, 90, 200, 30, function () {
			/** debug code to have items from beginning */
			for(var key in itemDefinitions)
				hero.loot(new item(itemDefinitions[key]));
			for(var key in skillDefinitions)
				hero.skills.push(skillDefinitions[key]);

			scenes.combat.setEnemies(['roboter','roboter','roboter']);
			game.scene = new switchScene(scenes.character,2500,'Charakter');
		}, {})
	]
}

menuScene.prototype = new scene();
