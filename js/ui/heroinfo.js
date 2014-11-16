function Heroinfo( hero ) {
	this.hero = hero;
	this.x = 10;
	this.y = 10;
	this.img = new sprite( 'img/ui/hp_mp_bar.png' );
}

Heroinfo.prototype.draw = function(ctx) {
	var w = 200;
	var h = 20;

	this.img.draw(ctx, 0, 0);
	ctx.strokeStyle = 'black';
	ctx.lineWidth="1";

	ctx.fillStyle = 'red';
	ctx.fillRect( this.x, this.y, w * this.hero.life / hero.getStats().hp, h );
	ctx.strokeRect( this.x, this.y, w, h );

	ctx.fillStyle = 'blue';
	ctx.fillRect( this.x, this.y + 30, w * this.hero.mana / hero.getStats().mana, h );
	ctx.strokeRect( this.x, this.y + 30, w, h );
};

