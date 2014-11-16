function switchScene(targetScene, delay, title) {
	this.buffer = document.createElement('canvas');
	this.bufferCtx = this.buffer.getContext('2d');
	this.buffer.width = game.display.width;
	this.buffer.height = game.display.height;

	this.bufferCtx.drawImage( game.display, 0, 0 );

	this.leftSide = new sprite('img/ui/tuer_links.png');
	this.rightSide = new sprite('img/ui/tuer_rechts.png');

	this.boxheight = 250;

	this.lifetime = 0;
	this.progress = 0;
	this.delay = delay

	this.title = title

	this.targetScene = targetScene;

	this.entities = [

	];
	this.blocking = [
	];

}
switchScene.prototype = new scene();

switchScene.prototype.update = function (delta) {

	this.lifetime += delta;
	this.progress = this.lifetime/this.delay;

	if (this.progress >1) {
		game.scene = this.targetScene;
	}

	if (this.blocking.length) {
		if (this.blocking[0].update(delta))
			this.blocking.shift();
		return;
	}

	for (var i = 0; i < this.entities.length; i++)
		if (this.entities[i].update)
			this.entities[i].update(delta);
}


switchScene.prototype.draw = function (ctx) {
	ctx.drawImage( this.buffer, 0, 0 );


	/*
	ctx.fillStyle = "rgba( 255, 255, 255, .9 )";
	ctx.fillRect(0,game.display.height/2 - this.boxheight/2, game.display.width,this.boxheight);


	var fontsize = 64;
	ctx.font = fontsize+'px monospace';
	ctx.textAlign = 'center';
	ctx.fillStyle = 'black';
	ctx.fillText( this.title, game.display.width/2, game.display.height/2, game.display.width);
	*/

	var pixelProgress = 640 * this.progress*3;
	if (pixelProgress > 640) pixelProgress = 640;
	this.leftSide.draw(ctx, -640 + pixelProgress,0);
	this.rightSide.draw(ctx, game.display.width - pixelProgress,0);

	//ctx.fillStyle = 'black';
	//ctx.fillRect(0,0,(game.display.width/2)*this.progress*3,768);
	//ctx.fillRect(game.display.width,0,-1*(game.display.width/2)*this.progress*3,768);





	if (this.bg)
		this.bg.draw(ctx, 0, 0);

	for (var i = 0; i < this.entities.length; i++)
		if (this.entities[i].draw)
			this.entities[i].draw(ctx);

	if (this.blocking.length && this.blocking[0].draw)
		this.blocking[0].draw(ctx);
}
