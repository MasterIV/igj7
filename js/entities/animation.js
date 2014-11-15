function Animation( x, y, img, frames, duration ) {
	this.img = new AnimationSprite(img, frames);
	this.counter = new Framecounter(duration);
	this.frames = frames;
	this.x = x;
	this.y = y;
}

Animation.prototype.update = function(delta) {
	this.counter.update(delta);
	return this.counter.frame >= this.frames;
};

Animation.prototype.draw = function(ctx) {
	this.img.center(ctx, this.x, this.y, this.counter.frame);
};
