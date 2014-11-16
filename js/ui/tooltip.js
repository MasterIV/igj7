function tooltip(headline, description, list, owner) {
	this.tooltipTopSprite = new sprite('img/ui/tooltip_header.png');
	this.tooltipBottomSprite = new sprite('img/ui/tooltip_content.png');

	this.owner = owner;

	this.lines = []
	if (description)
		this.lines = this._splitString(description, 22);
	this.headlines = [];
	if (headline)
		this.headlines = this._splitString(headline, 14);
	this.list = list;
}
tooltip.prototype._splitString = function (str,charsPerLine ) {
	var words = str.split(' ');
	var lines = [words.shift()];

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
	var length = this.headlines.length * 32 + this.lines.length * 22 + this.list.length * 32 + topPadding - 30;

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
		ctx.fillText( this.lines[i], x + 16 + 30, y+topPadding+this.headlines.length * 32+i*22, width);

	var offsetY = this.headlines.length * 32 + this.lines.length * 22 + topPadding+16;
	for( var i = 0; i < this.list.length; i++ ) {
		ctx.fillText( this.list[i].label, x + 16 + 30, y+offsetY + i*32, width);
		ctx.fillText( this.list[i].value, x + 200 + 30, y+offsetY + i*32, width);

	}


}
