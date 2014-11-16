function menuScene() {
	this.entities = [
		new textButton('Start Game', 10, 10, 200, 30, function () {
			scenes.map.goToFinalScene();
			game.scene = new switchScene(scenes.map,2500,'Map');
		}, {}),

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
			game.scene = new switchScene(scenes.map,2500,'Charakter');
		}, {})
	];
}

menuScene.prototype = new scene();
