function menuScene() {
	this.entities = [
		new textButton('Map', 10, 10, 200, 30, function () {
			game.scene = scenes.map;
		}, {}),
		new textButton('Kampf', 10, 50, 200, 30, function () {
			/** debug code to have items from beginning */
			//for(var key in itemDefinitions)
			//	hero.loot(new item(itemDefinitions[key]));
			for(var key in skillDefinitions)
				hero.skills.push(skillDefinitions[key]);

			scenes.combat.setEnemies(['roboter','roboter','roboter']);
			game.scene = scenes.combat;
		}, {}),
		new textButton('Character', 10, 90, 200, 30, function () {
			game.scene = scenes.character;
		}, {}),
		new textButton('TOD', 10, 130, 200, 30, function () {
			game.scene =  new looseScene();;
		}, {}),
		new textButton('switch', 10, 170, 200, 30, function () {
			game.scene =  new switchScene(scenes.map, 2000, 'MAP');
		}, {})
	];
}

menuScene.prototype = new scene();
