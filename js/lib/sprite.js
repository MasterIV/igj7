function sprite( img ) {
	this.img = g[img];
	this.width = this.img.width;
	this.height = this.img.height;
}

sprite.prototype.draw = function( ctx, x, y, scaleX, scaleY ) {
	ctx.drawImage( this.img, x|0, y|0, this.width * (scaleX||1), this.height * (scaleY||1));
};

sprite.prototype.center = function( ctx, x, y, scaleX, scaleY ) {
	ctx.drawImage( this.img, (x-this.img.width*(scaleX||1)/2)|0, (y-this.img.height*(scaleY||1)/2)|0, this.img.width*scaleX, this.img.height*scaleY );
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

AnimationSprite.prototype.draw = function( ctx, x, y, f, scaleX, scaleY ) {
	ctx.drawImage( this.img, f*this.w, 0, this.w * (scaleX||1), this.h * (scaleY||1), x|0, y|0, this.w, this.h );
};

AnimationSprite.prototype.center = function( ctx, x, y, f, scaleX, scaleY ) {
	ctx.drawImage( this.img, f*this.w, 0, this.w * (scaleX||1), this.h * (scaleY||1), (x-this.w/2)|0, (y-this.h/2)|0, this.w, this.h );
};
