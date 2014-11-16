function credits() {
	this.topSprite = new sprite('img/ui/tooltip_header.png');
	this.bottomSprite = new sprite('img/ui/tooltip_content.png');

	this.data = [
		{name: 'Tobias Rojahn',
		 func: 'Developer'},
		{name: 'Anni Runge',
		 func: 'Grafik'},
		{name: 'Heike Paierl',
		 func: 'Grafik'},
		{name: 'Marcel Zons',
		 func: 'Grafik/Game Dev'},
		{name: 'Simon Pontius',
		 func: 'Game dev/Sound'},
		{name: 'Kevin Kub',
		 func: 'Developer'},
		{name: 'Andre Michels',
		 func: 'Developer'},
		{name: 'Hauke Mettendorf',
		 func: 'Game Dev'},
		{name: 'Max Vinke',
		 func: 'Sound'},
		{name: 'Henning Behrendt',
		 func: 'Sound'},
	];

	var self = this;

	game.scene.entities.push(
		new SpriteButton('img/ui/back_button.png', Rect.create(0, 0, 161, 133), Rect.create(161, 0, 161, 133), 620, 632, function(){
			arrayRemove(game.scene.entities, self);
			arrayRemove(game.scene.entities, this);
		}, null));
}

credits.prototype.update = function() {

};


credits.prototype.draw = function( ctx ) {
	var x = game.display.width/2 - this.topSprite.width/2 + 290;
	var y = game.display.height/2 - this.bottomSprite.height/2 - 130;
	var width = 260;




	this.topSprite.draw(ctx, x, y);
	this.bottomSprite.drawImage(ctx, x, y + 65, 371 , 650);


	ctx.font = '32px monospace';
	ctx.textAlign = 'center';
	ctx.fillStyle = 'black';
	ctx.fillText( 'Credits', x + 40 + 130, y + 60 , width);

	console.log(this.data);
	for(var i=0;i<this.data.length;i++) {
		ctx.font = '22px monospace';
		ctx.textAlign = 'left';
		ctx.fillStyle = 'black';
		ctx.fillText( this.data[i].name, x + 40, y + 100 + i * 56, width);

		ctx.textAlign = 'right';
		ctx.fillText( this.data[i].func, x + 40 + 260, y + 100 + i * 56 + 22, width);
	}

};
