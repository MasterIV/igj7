function sprite( img ) {
	this.img = g[img];
	this.width = this.img.width;
	this.height = this.img.height;
}

sprite.prototype.draw = function( ctx, x, y ) {
	ctx.drawImage( this.img, x|0, y|0 );
};

sprite.prototype.center = function( ctx, x, y ) {
	ctx.drawImage( this.img, (x-this.img.width/2)|0, (y-this.img.height/2)|0 );
};

sprite.prototype.area = function( ctx, sx, sy, sw, sh, x, y ) {
	ctx.drawImage( this.img, sx, sy, sw, sh, x|0, y|0, sw, sh );
};

function AnimationSprite( img, frames ) {
	this.img = g[img];
	this.h = g[img].height;
	this.w = g[img].width / frames;
	this.f = frames;
}

AnimationSprite.prototype.draw = function( ctx, x, y, f ) {
	ctx.drawImage( this.img, f*this.w, 0, this.w, this.h, x|0, y|0, this.w, this.h );
};

AnimationSprite.prototype.center = function( ctx, x, y, f ) {
	ctx.drawImage( this.img, f*this.w, 0, this.w, this.h, (x-this.w/2)|0, (y-this.h/2)|0, this.w, this.h );
};
