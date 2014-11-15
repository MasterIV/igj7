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
	this.img = new sprite('img/characters/roboter.png');
}

Enemy.prototype.draw = function( ctx ) {
	this.img.center( ctx, this.x, this.y);
}

Enemy.prototype.getStats = function( ) {
	return this.attrs;
}



Enemy.prototype.harm = function(hp) {
	this.life -= hp;

	if (this.life < 0)
		this.life = 0;
}
