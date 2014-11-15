function combatScene() {
	var self = this;
	this.bg = new sprite( 'img/maps/mountain.jpg' );
	this.targetSelection = new TargetSelection( self );
	this.hero = new HeroContainer(200,380);

	this.defaults = [
			this.hero,
			new SpriteButton('img/ui/buttons.png', Rect.create(0,  0,161,133), Rect.create(161,  0,161,133),  10, 625, function() { self.attack(); }),
			new SpriteButton('img/ui/buttons.png', Rect.create(0,133,161,133), Rect.create(161,133,161,133), 180, 625, function() { self.spell(); }),
			new SpriteButton('img/ui/buttons.png', Rect.create(0,266,161,133), Rect.create(161,266,161,133), 350, 625, function() { self.item(); }),
			new SpriteButton('img/ui/buttons.png', Rect.create(0,399,161,133), Rect.create(161,399,161,133), 520, 625, function() { self.defend(); }),
			new Heroinfo(this.hero)
	];

	this.setEnemies([1,2,3]);
}

combatScene.prototype = new scene();

combatScene.prototype.attack = function() {
	var self = this;
	this.targetSelection.start(new Attack( this, this.hero ), function() { self.enemyTurn(); });
};

combatScene.prototype.enemyTurn = function() {
	var enemyCount = 0, e;

	for (var i = 0; i < this.entities.length; i++)
		if (this.entities[i] instanceof Enemy) {
			enemyCount++
			e = this.entities[i];

			if( e.stunned ) {
				e.stunned--;
			} else {
				var a = new Attack(this, e);
				a.run( this.hero );
			}

			if(e.buffs) {

			}
		}

	if( enemyCount == 0 )
		game.scene = scenes.map;
};

combatScene.prototype.getEffect = function(type, args) {
	if( type == 'Heal')
		return new Heal( this, this.hero, args.base, args.rnd, args.attr );
	if( type == 'Attack')
		return new Attack( this, this.hero, args.factor );
	if( type == 'Stun')
		return new Stun( this, this.hero, args.duration, args.attr );

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
