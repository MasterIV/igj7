function looseScene() {
	this.bg = new sprite( 'img/maps/death.jpg' );
	var feeSprite = new sprite('img/characters/fee.png');
	var self = this;
	var fee = {
		draw: function (ctx) {
			feeSprite.draw(ctx, 800, 160)
		}
	};

	this.blocking = [];
	this.entities = [new HeroContainer(300,380)];

	this.blocking.push(new dialogue(
			'Verdammt noch mal! Schon wieder in die Pfanne gehauen. Wie soll ich das nur jemals schaffen... Dieses Spiel scheint einfach unmöglich. Was für Sadisten denken sich sowas aus?',
			[{text: 'Weiter', callback: function() { self.blocking.shift(); }}],
			600
	));

	this.blocking.push({update: function() { self.entities.push(fee);return true; }});
	this.blocking.push(new FadeIn(fee, 800));

	this.blocking.push(new dialogue(
			'Aber zum Glück wurde in dieses Spiel eine gute Fee eingebaut, die dich in die Vergangenheit schicken kann. Also schmeißt sie ihren Fluxkompensator an und schickt dich in eine Zeit zurück, in der du noch garnicht angefangen hattest, dieses Spiel zu spielen...',
			[{text: 'Weiter', callback: function() {
				scenes.map.reset();
				hero.reset();
				game.scene = scenes.map; 
			}}],
			560
	));
}

looseScene.prototype = new scene();


