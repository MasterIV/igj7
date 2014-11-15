function combatScene() {
	var self = this;
	this.bg = new sprite( 'mock/fight.png' );
	this.targetSelection = new TargetSelection( self );

	this.defaults = [
			new HeroContainer(200,380),
			new SpriteButton('img/ui/buttons.png', Rect.create(0,  0,120,90), Rect.create(120,  0,120,90), 0, 678, function() { self.attack(); }),
			new SpriteButton('img/ui/buttons.png', Rect.create(0, 90,120,90), Rect.create(120, 90,120,90), 130, 678, function() { self.spell(); }),
			new SpriteButton('img/ui/buttons.png', Rect.create(0,180,120,90), Rect.create(120,180,120,90), 260, 678, function() { self.item(); }),
			new SpriteButton('img/ui/buttons.png', Rect.create(0,270,120,90), Rect.create(120,270,120,90), 390, 678, function() { self.defend(); })
	];

	this.setEnemies([1,2,3]);
}

combatScene.prototype = new scene();

combatScene.prototype.attack = function() {
	this.targetSelection.start(new Attack( this ));
}

combatScene.prototype.spell = function() {
	console.log('spell');
}

combatScene.prototype.item = function() {
	console.log('item');
}

combatScene.prototype.defend = function() {
	console.log('defend');
}

combatScene.prototype.selectEnemy = function() {
	console.log('defend');
}

combatScene.prototype.setEnemies = function( definitions ) {
	this.entities = [];

	var d = definitions.shift();
	this.entities.push( new Enemy( 870, 200, d));
	if(d = definitions.shift())
		this.entities.push( new Enemy(1100, 380, d));
	if(d = definitions.shift())
		this.entities.push( new Enemy( 870, 560, d));

	this.targetSelection.init( this.entities );

	for( var i = 0; i < this.defaults.length; i++ )
		this.entities.push( this.defaults[i] );
}
