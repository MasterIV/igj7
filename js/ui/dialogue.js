function dialogue(lines) {
	this.lines = lines;
	this.x = 10;
	this.y = 10;
	this.w = 500;
	this.h = 500;
}

dialogue.prototype.box = function( ctx, x, y, w, h ) {
	ctx.fillStyle = "rgb( 0, 0, 50 )";
	ctx.fillRect( x, y, w, h );
	ctx.strokeStyle = "rgb( 90, 90, 90 )";
	ctx.strokeRect( x, y, w, h );
	ctx.strokeStyle = "rgb( 200,255,200 )";
	ctx.strokeRect( x + 1, y + 1, w - 2, h - 2 );
	ctx.strokeStyle = "rgb( 255,255,255 )";
	ctx.strokeRect( x + 2, y + 2, w - 4, h - 4);
	ctx.strokeStyle = "rgb( 90, 90, 90 )";
	ctx.strokeRect( x + 3, y + 3, w - 6, h - 6);
};

dialogue.prototype.draw = function( ctx ) {
	this.box( ctx, this.x, this.y, this.w, this.h );


	ctx.font = '24px monospace';
	ctx.textAlign = 'left'


	for( var i = 0; i < this.lines.length; i++ ) {
		//if( i == selected ) ctx.fillStyle = config.system.selected;
		//else

		ctx.fillStyle = 'white';
		ctx.fillText( this.lines[i], this.x+16, this.y+32+i*32, this.w-32 );
	}

};
