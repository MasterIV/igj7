function Enemy( x, y, definition ) {
	this.x = x;
	this.y = y;

}

Enemy.prototype.draw = function( ctx ) {
	var w = 200; var h = 340;
	ctx.fillStyle = '#6666FF';
	ctx.fillRect(this.x-w/2, this.y-h/2, w, h);
}

Enemy.prototype.getStats = function( ) {
	return {
		hp: 150,
		mana: 12,
		str: 10,
		def: 13,
		dex: 10,
		int: 10
	}
}