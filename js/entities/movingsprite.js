function movingsprite(sprite, startx, starty, endx, endy, speed) {
	this.sprite = sprite;
	this.startx = startx;
	this.starty = starty;
	this.endx = endx;
	this.endxy = endy;

	this.x = startx;
	this.y = starty;
}
movingsprite.prototype = new Entity()
movingsprite.prototype.draw = function ( ctx ) {
	this.sprite.draw(ctx, this.x, this.y)
}
movingsprite.prototype.update = function (delta) {
	var moving = false;
	if ((this.x-this.startx) > (this.x-this.endx+this.speed)) {
		this.x += this.speed * delta;
		moving = true;
	}
	if ((this.y-this.starty) > (this.y-this.endy+this.speed)) {
		this.y += this.speed * delta;
		moving = true;
	}

	return moving;
}