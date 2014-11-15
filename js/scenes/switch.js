function switchScene(targetScene, delay, title) {
	this.buffer = document.createElement('canvas');
	this.bufferCtx = this.buffer.getContext('2d');
	this.buffer.width = game.display.width;
	this.buffer.height = game.display.height;

	this.bufferCtx.drawImage( game.display, 0, 0 );

	this.boxheight = 250;

	this.title = title

	this.entities = [

	];
	this.blocking = [
	];

	this.blocking.push(
		new movingsprite(new sprite('img/ui/door_left.png'),0,0,game.display.width/2,0,5),
		new movingsprite(new sprite('img/ui/door_right.png'),game.display.width,0,game.display.width/2,0,5)
	);

	window.setTimeout(function () {
		game.screne = targetScene;
	}, delay);
}
switchScene.prototype = new scene();


switchScene.prototype.draw = function (ctx) {
	ctx.drawImage( this.buffer, 0, 0 );


	ctx.fillStyle = "rgba( 255, 255, 255, .9 )";
	ctx.fillRect(0,game.display.height/2 - this.boxheight/2, game.display.width,this.boxheight);


	var fontsize = 64;
	ctx.font = fontsize+'px monospace';
	ctx.textAlign = 'center';
	ctx.fillStyle = 'black';
	ctx.fillText( this.title, game.display.width/2, game.display.height/2, game.display.width);




	if (this.bg)
		this.bg.draw(ctx, 0, 0);

	for (var i = 0; i < this.entities.length; i++)
		if (this.entities[i].draw)
			this.entities[i].draw(ctx);

	if (this.blocking.length && this.blocking[0].draw)
		this.blocking[0].draw(ctx);
}