function tooltip(headline, description, list, owner) {
	this.tooltipTopSprite = new sprite('img/ui/tooltip_header.png');
	this.tooltipBottomSprite = new sprite('img/ui/tooltip_content.png');

	this.owner = owner;

	this.lines = this._splitString(this.description);
	this.headlines = this._splitString(this.headline);
	this.list = list;
}
tooltip.prototype._splitString = function (str) {
	var words = str.split(' ');
	var lines = [words.shift()];

	var charsPerLine = 22;
	for( var j = 0; j < words.length; j++ ) {
		if( (lines[lines.length-1]+words[j]).length < charsPerLine )
			lines[lines.length-1] += ' '+words[j];
		else lines.push(words[j]);
	}

	return lines;
}
tooltip.prototype.showTooltip = function( ctx ) {
	var x = mouse.x + 20;
	var y = mouse.y - 50;


	var topPadding = 55;

	var width = 260;
	var length = this.lines.length * 32 + this.lines.length * 32 + this.list.length * 32 + topPadding+12;

	if ( (y + length + 60) > game.display.height) {
		y = y - length;
	}
	if ( (x + width + 70) > game.display.width) {
		x = x - width - 140;
	}


	this.tooltipTopSprite.draw(ctx, x, y);
	this.tooltipBottomSprite.drawImage(ctx, x, y + 65, 371 ,length);




	ctx.font = '32px monospace';
	ctx.textAlign = 'center';
	ctx.fillStyle = 'black';

	for( var i = 0; i < this.headlines.length; i++ )
		ctx.fillText( this.headlines[i], x+width/2 + 16 + 30, y+topPadding+i*32, width);

	ctx.font = '20px monospace';
	ctx.textAlign = 'left';

	for( var i = 0; i < this.lines.length; i++ )
		ctx.fillText( this.lines[i], x + 16 + 30, y+topPadding+32+i*32, width);

	var offsetY = this.lines.length * 32 + topPadding+32 +32;
	for( var i = 0; i < this.list.length; i++ ) {
		ctx.fillText( this.list[i].label, x + 16 + 30, y+offsetY + i*32, width);
		ctx.fillText( this.list[i].value, x + 200 + 30, y+offsetY + i*32, width);

	}


}
