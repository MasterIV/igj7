function Enemy( x, y, definition ) {
	this.x = x;
	this.y = y;

	this.attrs = {
		hp: 150,
		mana: 12,
		str: 10,
		def: 13,
		dex: 10,
		int: 10
	}
	this.life = this.attrs.hp;

}

Enemy.prototype.draw = function( ctx ) {
	var w = 200; var h = 340;
	ctx.fillStyle = '#6666FF';
	ctx.fillRect(this.x-w/2, this.y-h/2, w, h);
}

Enemy.prototype.getStats = function( ) {
	return this.attrs;
}



Enemy.prototype.harm = function(hp) {
	this.life -= hp;

	if (this.life < 0)
		this.life = 0;
}