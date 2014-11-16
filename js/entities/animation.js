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

function AnimationDamage( target, damage ) {
	this.target = target;
	this.damage = String(Math.abs( damage )).split('');
	this.total = damage;
	this.done = 0;
	this.duration = 700;
	this.anitime = 0;

	this.x = target.x;
	this.y = target.y;
}

AnimationDamage.prototype.update = function( delta ) {
	var prog = this.anitime / this.duration;

	var dmg = this.total > 0
			? Math.max( 0, Math.round( this.total * prog ) - this.done )
			: Math.max( this.total, Math.round( this.total * prog ) - this.done );

	this.done += dmg;
	this.target.harm( dmg );

	return ( this.anitime += delta ) > this.duration;
}

AnimationDamage.prototype.draw = function( ctx ){
	ctx.font = '18pt Verdana, sans-serif';
	ctx.textAlign = 'left';

	var x = this.x - (this.damage.length * 12 ) / 2;

	for (var i=0; i < this.damage.length; i++ ) {
		var y = this.y + 45 * Math.cos( Math.PI*2*(this.anitime+50*i)/(this.duration+50*i));
		ctx.fillStyle = "rgba(30,30,30,0.5)";
		ctx.fillText(this.damage[i], x+16*i, y);
		ctx.fillStyle = this.total > 0 ? "rgb(230,150,150)" : "rgb(150,230,150)";
		ctx.fillText(this.damage[i], x+16*i-1, y-1 );
	}
};

function AnimationText( target, text ){
	this.target = target;
	this.text = text;
	this.duration = 700;
	this.anitime = 0;

	this.x = target.x;
	this.y = target.y;
}

AnimationText.prototype.update = function( delta ) {
	return ( this.anitime += delta ) > this.duration;
};

AnimationText.prototype.draw = function( ctx ){
	ctx.font = '18pt Verdana, sans-serif';
	ctx.textAlign = 'center';

	var x = this.x - ctx.measureText(this.text).width / 2;
	var y = this.y + 45 * Math.cos( Math.PI*2*(this.anitime+50)/(this.duration+50));

	ctx.fillStyle = "rgba(30,30,30,0.5)";
	ctx.fillText(this.text, x, y);
	ctx.fillStyle = "rgba(230,230,230,1)";
	ctx.fillText(this.text, x-1, y-1 );
};


function AnimationDie( scene, target, duration ) {
	this.scene = scene;
	this.target = target;
	this.duration = duration;
	this.anitime = 0;
}


AnimationDie.prototype.update = function( delta ) {
	//if(( this.anitime += delta ) > this.duration) {
		arrayRemove( this.scene.entities, this.target );
		if( this.target.button )
			arrayRemove( this.scene.targetSelection.entities, this.target.button );
		return true;
	//}
};



function FadeIn( target, duration ) {
	this.target = target;
	this.duration = duration;
	this.anitime = 0;
}

FadeIn.prototype.update = function( delta ) {
	return ( this.anitime += delta ) > this.duration;
};

FadeIn.prototype.draw = function( ctx ){
	ctx.globalCompositeOperation = 'lighter';
	ctx.globalAlpha = 1-(this.anitime / this.duration);
	this.target.draw( ctx );
	ctx.globalAlpha = 1;
	ctx.globalCompositeOperation = 'source-over';
};

function AnimationItemFound( item ) {
	this.counter = new Framecounter(75);
	this.item = item;
	this.bg = new AnimationSprite('img/animation/newitem.png', 4);
}

AnimationItemFound.prototype.update = function( delta ) {
	this.counter.update(delta);
	return this.counter.frame > 20;
};

AnimationItemFound.prototype.draw = function( ctx ) {
	this.bg.center(ctx, 640, 384, this.counter.frame%4 );
	this.item.sprite.center(ctx, 640, 384);
};
