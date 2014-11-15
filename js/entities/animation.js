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

function MoveTwards( entity, dx, dy, sx, sy, duration ) {
	this.elapsed = 0;
	this.duration = duration;

	this.entity = entity;
	this.x = dx;
	this.y = dy;
	this.width = dx-sx;
	this.height = dy-sy;
}

MoveTwards.prototype.update = function(delta) {
	this.elapsed += delta;

	if( this.elapsed > this.duration ) {
		this.entity.x = this.x;
		this.entity.y = this.y;
		return true;
	}

	var percent = delta / this.duration;
	this.entity.x += percent * this.width;
	this.entity.y += percent * this.height;
};
