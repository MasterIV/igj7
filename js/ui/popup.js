function popup() {
	this.popupTopSprite = new sprite('img/ui/');
	this.popupBottomSprite = new sprite('img/ui/');
}
popup.showPopup = function( ctx , headline, description, list) {

	var x = mouse.x + 100;
	var y = mouse.y + 0;

	var width = 286;
	var padding = 16;
	var widthWithouPadding = width - padding*2;

	popup.popupTop.draw(ctx, x, y);
	popup.popupBottom.draw(ctx, x, y);



	var words = description.split(' ');
	var lines = [words.shift()];

	for( var j = 0; j < words.length; j++ ) {
		if( (lines[lines.length-1]+words[j]).length < 68 )
			lines[lines.length-1] += ' '+words[j];
		else lines.push(words[j]);
	}



	ctx.font = '24px monospace';
	ctx.textAlign = 'left';
	ctx.fillStyle = 'black';

	ctx.fillText( headline, this.x+widthWithouPadding/2, this.y+32, widthWithouPadding);

	for( var i = 0; i < this.lines.length; i++ )
		ctx.fillText( this.lines[i], this.x+16, this.y+32+i*32, widthWithouPadding);


}
