function combatScene() {
	this.bg = new sprite( 'mock/fight.png' );
	this.entities = [new dialogue([
			'lorem ipsum dolor sit amet ein', 'ist', 'ein', 'test'
	])];
}

combatScene.prototype = new scene();
