function Enemy( x, y, definition ) {
	this.x = x;
	this.y = y;
	this.stunned = 0;
	this.buffs = [];
	this.attrs = definition;
	this.life = this.attrs.hp;
	this.def = this.attrs.def;
	this.img = new sprite(definition.image);
	this.skills = definition.skills;
}

Enemy.prototype.draw = function( ctx ) {
	this.img.center( ctx, this.x, this.y);

	ctx.lineWidth="1";
	ctx.strokeStyle = 'black';
	ctx.fillStyle = 'bb0408';
	ctx.fillRect( this.x - 50, this.y - 170, 100 * this.life / this.attrs.hp, 10 );
	ctx.strokeRect( this.x - 50, this.y - 170, 100, 10 );

	if( this.stunned ) {
		ctx.fillStyle = 'yellow';
		ctx.fillRect( this.x - 20, this.y - 20, 40, 40 );
	}
};

Enemy.prototype.getStats = function( ) {
	return this.attrs;
};

Enemy.prototype.harm = function(hp) {
	this.life -= hp;

	if (this.life < 0)
		this.life = 0;
	if (this.life > this.attrs.hp)
		this.life = this.attrs.hp;
};
