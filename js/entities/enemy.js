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

	this.counter = new Framecounter(100);
	this.stunani = new AnimationSprite('img/animation/stun.png',4);
}

Enemy.prototype.update = function(delta) {
	this.counter.update(delta);
};

Enemy.prototype.draw = function( ctx ) {
	this.img.center( ctx, this.x, this.y);

	ctx.lineWidth="1";
	ctx.strokeStyle = 'black';
	ctx.fillStyle = '#bb0408';
	ctx.fillRect( this.x - 50, this.y - 170, 100 * this.life / this.attrs.hp, 10 );
	ctx.strokeRect( this.x - 50, this.y - 170, 100, 10 );

	if( this.stunned )
		this.stunani.center( ctx, this.x, this.y-100, this.counter.frame%4 );
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
