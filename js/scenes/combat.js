function combatScene() {
	this.bg = new sprite( 'mock/fight.png' );
	this.entities = [
			new HeroContainer(200,380),
			new Enemy( 870, 200),
			new Enemy(1100, 380),
			new Enemy( 870, 560),

			new spriteButton('img/ui/buttons.png', Rect.create(0,  0,120,90), Rect.create(120,  0,120,90), 0, 678, function() { console.log('attack') }),
			new spriteButton('img/ui/buttons.png', Rect.create(0, 90,120,90), Rect.create(120, 90,120,90), 130, 678, function() { console.log('spell') }),
			new spriteButton('img/ui/buttons.png', Rect.create(0,180,120,90), Rect.create(120,180,120,90), 260, 678, function() { console.log('item') }),
			new spriteButton('img/ui/buttons.png', Rect.create(0,270,120,90), Rect.create(120,270,120,90), 390, 678, function() { console.log('defend') }),
	]

}

combatScene.prototype.setEnemies = function( definitions ) {

}

combatScene.prototype = new scene();
