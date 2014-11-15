function combatScene() {
	var self = this;
	this.bg = new sprite( 'img/maps/mountain.jpg' );
	this.targetSelection = new TargetSelection( self );
	this.hero = new HeroContainer(200,380);

	this.defaults = [
			this.hero,
			new SpriteButton('img/ui/buttons.png', Rect.create(0,  0,120,90), Rect.create(120,  0,120,90), 0, 678, function() { self.attack(); }),
			new SpriteButton('img/ui/buttons.png', Rect.create(0, 90,120,90), Rect.create(120, 90,120,90), 130, 678, function() { self.spell(); }),
			new SpriteButton('img/ui/buttons.png', Rect.create(0,180,120,90), Rect.create(120,180,120,90), 260, 678, function() { self.item(); }),
			new SpriteButton('img/ui/buttons.png', Rect.create(0,270,120,90), Rect.create(120,270,120,90), 390, 678, function() { self.defend(); })
	];

	this.setEnemies([1,2,3]);
}

combatScene.prototype = new scene();

combatScene.prototype.attack = function() {
	var self = this;
	this.targetSelection.start(new Attack( this, this.hero ), function() { self.enemyTurn(); });
};

combatScene.prototype.enemyTurn = function() {
	for (var i = 0; i < this.entities.length; i++)
		if (this.entities[i] instanceof Enemy) {
			var a = new Attack(this, this.entities[i]);
			a.run( this.hero );
		}
}

combatScene.prototype.getEffect = function(type, args) {
	if( type == 'Heal')
		return new Heal( this, this.hero, args.base, args.rnd, args.attr );
	if( type == 'Attack')
		return new Attack( this, this.hero, args.factor );

};

combatScene.prototype.spell = function() {
	var choices = [];
	var skills = hero.getSkills();
	var self = this;

	for(var i in skills) (function(s) {
		if( this.hero.mana < s.costs ) return;
		choices.push({text: s.name, callback: function() {
			self.blocking.shift();

			if(s.target != 'single' ) {
				for( var j in s.effects ) {
					var e = self.getEffect(j, s.effects[j]);
					e.run( self.hero );
				}

				self.blocking.push({ update: function() {
					self.enemyTurn();
					return true;
				}});
			} else {
				for( var j in s.effects );
				self.targetSelection.start(self.getEffect(j, s.effects[j]), function() { self.enemyTurn(); });
			}
		}});
	})(skills[i]);

	choices.push({text: "Abbrechen", callback: function() { self.blocking.shift(); }});
	this.blocking.unshift(new dialogue('Fertigkeit auswählen:', choices));
};

combatScene.prototype.item = function() {
	console.log('item');
};

combatScene.prototype.defend = function() {
	console.log('defend');
};

combatScene.prototype.setEnemies = function( definitions ) {
	this.entities = [];

	var d = definitions.shift();
	this.entities.push( new Enemy( 900, 320, d));
	if(d = definitions.shift())
		this.entities.push( new Enemy(1100, 480, d));
	if(d = definitions.shift())
		this.entities.push( new Enemy( 800, 560, d));

	this.targetSelection.init( this.entities );
	this.hero.reset();

	for( var i = 0; i < this.defaults.length; i++ )
		this.entities.push( this.defaults[i] );
};
