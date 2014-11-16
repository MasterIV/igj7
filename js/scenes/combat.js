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
}
combatScene.prototype = new scene();

combatScene.prototype.attack = function() {
	var self = this;
	this.targetSelection.start(new Attack( this, this.hero ), function() { self.enemyTurn(); });
};

combatScene.prototype.enemyTurn = function() {
	var enemyCount = 0, e;
	var self = this;

	for(var j = 0; j< this.hero.buffs.length; j++ )
		this.hero.buffs[j].apply();

	for (var i = 0; i < this.entities.length; i++)
		if (this.entities[i] instanceof Enemy) {
			enemyCount++
			e = this.entities[i];

			if( e.stunned ) {
				e.stunned--;
			} else {
				var rnd = Math.random();
				var sum  = 0;

				for(var j in e.skills )
					if(( sum += e.skills[j] ) > rnd ) {
						var s = skillDefinitions[j];

						for( var k in s.effects ) {
							var eff = self.getEffect(k, s.effects[k], e);
							eff.run(s.target == 'self' ? e : self.hero );
						}

						break;
					}
			}

			for(var j = 0; j< e.buffs.length; j++ )
				e.buffs[j].apply();
		}

	if( enemyCount == 0 )
		this.blocking.push(new dialogue('Victory!',[{'text': 'Weiter', callback: function() {
			backgroundsound.play('sound/map.mp3');
			if(scenes.map.currentEncounter.id != "31") {
				game.scene = new switchScene(scenes.map,2500,'Map');
			} else {
				game.scene = new switchScene(new winScene(),2500,'Gewonnen');
			}
		}}]));
};

combatScene.prototype.getEffect = function(type, args, actor) {
	if( type == 'Heal')
		return new Heal( this, actor, args.base, args.rnd, args.attr );
	if( type == 'Mana')
		return new Mana( this, actor, args.value );
	if( type == 'Attack')
		return new Attack( this, actor, args.factor );
	if( type == 'Stun')
		return new Stun( this, actor, args.duration, args.attr );
	if( type == 'Buff')
		return new Buff( this, actor, args.duration, args.value );
};

combatScene.prototype.getChoice = function(s) {
	var self = this;
	return { text: s.name, callback: function() {
		self.blocking.shift();

		if(s.costs)
			self.hero.mana -= s.costs;
		if(s instanceof item)
			hero.use(item);

		if(s.target != 'single' ) {
			var targets = [];

			if(s.target == 'self' ) {
				targets.push(self.hero);
			} else {
				for (var i = 0; i < self.entities.length; i++)
					if (self.entities[i] instanceof Enemy)
						targets.push(self.entities[i]);
			}

			for( var i = 0; i < targets.length; i++ )
				for( var j in s.effects ) {
					var e = self.getEffect(j, s.effects[j], self.hero);
					e.run( targets[i] );
				}

			self.blocking.push({ update: function() {
				self.enemyTurn();
				return true;
			}});
		} else {
			for( var j in s.effects );
			self.targetSelection.start(self.getEffect(j, s.effects[j], self.hero), function() { self.enemyTurn(); });
		}
	}}
};

combatScene.prototype.spell = function() {
	var choices = [];
	var skills = hero.getSkills();
	var self = this;

	for(var i in skills) (function(s) {
		if( self.hero.mana < s.costs ) return;
		choices.push(self.getChoice(s));
	})(skills[i]);

	choices.push({text: "Abbrechen", callback: function() { self.blocking.shift(); }});
	this.blocking.unshift(new dialogue('Fertigkeit auswählen:', choices));
};

combatScene.prototype.item = function() {
	var choices = [];
	var items = hero.getInventory();
	var self = this;

	for(var i in items) if(items[i].effects) (function(s) {
		choices.push(self.getChoice(s));
	})(items[i]);

	choices.push({text: "Abbrechen", callback: function() { self.blocking.shift(); }});
	this.blocking.unshift(new dialogue('Gegenstände auswählen:', choices));
};

combatScene.prototype.defend = function() {
	var shield = new Shield( this, this.hero, 2, 2 );
	shield.run( this.hero );
	this.enemyTurn();
};

combatScene.prototype.setEnemies = function( definitions, bg ) {
	this.entities = [];
	this.blocking = [];

	var d = definitions[0];
	this.entities.push( new Enemy(1100, 480, npcDefinitions[d]));
	if(d = definitions[1])
		this.entities.unshift( new Enemy( 900, 320, npcDefinitions[d] ));
	if(d = definitions[2])
		this.entities.push( new Enemy( 800, 560, npcDefinitions[d]));

	this.targetSelection.init( this.entities );
	this.hero.reset();

	for( var i = 0; i < this.defaults.length; i++ )
		this.entities.push( this.defaults[i] );

	if( bg ) this.bg = new sprite(bg);

	if( scenes.map.currentEncounter && scenes.map.currentEncounter.id == 31 )
		backgroundsound.play('sound/boss.mp3');
	else backgroundsound.play('sound/battle.mp3');
};

