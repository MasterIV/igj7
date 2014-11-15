function Enemy( x, y, definition ) {
	this.x = x;
	this.y = y;

}

Enemy.prototype.draw = function( ctx ) {
	var w = 200; var h = 340;
	ctx.fillStyle = 'darkorange';
	ctx.fillRect(this.x-w/2, this.y-h/2, w, h);
}
