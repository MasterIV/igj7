function dialogue(lines, choices) {
	this.w = 1000;
	this.h = 24+32*(lines.length+choices.length);
	this.x = 140;
	this.y = (768-this.h)/2;

	for( var i = 0; i < choices.length; i++ )
		choices[i].area = new Rect(
			new V2( this.x+16, this.y+(i+lines.length)*32+11),
			new V2( this.x+this.w-16, this.y+(i+lines.length)*32+39)
		);

	this.lines = lines;
	this.choices = choices;
}

dialogue.prototype.box = function( ctx, x, y, w, h ) {
	ctx.fillStyle = "rgba( 0, 0, 50, .9 )";
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
	ctx.textAlign = 'left';
	ctx.fillStyle = 'white';


	for( var i = 0; i < this.lines.length; i++ )
		ctx.fillText( this.lines[i], this.x+16, this.y+32+i*32, this.w-32 );

	for( var i = 0; i < this.choices.length; i++ ) {
		ctx.fillStyle = "rgba( 255, 255, 255, .1 )"
		ctx.fillRect( this.choices[i].area.p1.x, this.choices[i].area.p1.y, this.choices[i].area.width(), this.choices[i].area.height());

		if( this.choices[i].area.inside( mouse )) {
			ctx.fillStyle = 'orange';
		} else {
			ctx.fillStyle = 'white';
		}

		ctx.fillText( ' » '+this.choices[i].text, this.choices[i].area.p1.x, this.choices[i].area.p1.y+21, this.w-32 );
	}
};

dialogue.prototype.click = function( pos ) {
	for( var i = 0; i < this.choices.length; i++ ) {
		if( this.choices[i].area.inside( pos ))
			this.choices[i].callback();
	}
}
