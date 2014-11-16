function winScene() {
	this.bg = new sprite( 'img/maps/death.jpg' );
	var feeSprite = new sprite('img/characters/fee.png');
	var self = this;
	var fee = {
		draw: function (ctx) {
			feeSprite.draw(ctx, 800, 160)
		}
	};

		this.entities = [new HeroContainer(300,380)];

	this.blocking.push(new dialogue(
			'Wir gratulieren dir zu deiner Ausdauer. Wir hätten nicht gedacht, dass das jemand so lange durchhält.',
			[{text: 'Weiter', callback: function() { self.blocking.shift(); }}],
			600
	));

	this.blocking.push({update: function() { self.entities.push(fee);return true; }});
	this.blocking.push(new FadeIn(fee, 800));

	this.blocking.push(new dialogue(
			'... but it is kind of fun to do the impossible!',
			[{text: 'Weiter', callback: function() {
				scenes.map.reset();
				game.scene = scenes.map; 
			}}],
			560
	));
}

winScene.prototype = new scene();


