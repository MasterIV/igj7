function stats(x, y) {
	this.x = x;
	this.y = y;
	this.showDiffrence = false;
}

stats.prototype.draw = function (ctx) {
	ctx.font = '24px monospace';
	ctx.textAlign = 'left';
	ctx.fillStyle = 'black';

	var stats = hero.getStats();
	var offset = 30;
	var i = 1;

	this.printStat(ctx, this.x, this.y + (i++)*offset, 'Leben', stats.hp);
	this.printStat(ctx, this.x, this.y + (i++)*offset, 'Mana', stats.mana);
	this.printStat(ctx, this.x, this.y + (i++)*offset, 'Stärke', stats.str);
	this.printStat(ctx, this.x, this.y + (i++)*offset, 'Defense', stats.def);
	this.printStat(ctx, this.x, this.y + (i++)*offset, 'Agilität', stats.dex);
	this.printStat(ctx, this.x, this.y + (i++)*offset, 'Intelekt', stats.int);
	this.printStat(ctx, this.x, this.y + (i++)*offset, 'Bling Bling', stats.blingbling);

	if (this.showDiffrence) {
		this.drawDiffrence(ctx, this.showDiffrence);
	}
};

stats.prototype.drawDiffrence = function (ctx, attrs) {
	var offset = 30;
	var i = 1;

	this.printDiffStat(ctx, this.x, this.y + (i++)*offset, attrs.hp);
	this.printDiffStat(ctx, this.x, this.y + (i++)*offset, attrs.mana);
	this.printDiffStat(ctx, this.x, this.y + (i++)*offset, attrs.str);
	this.printDiffStat(ctx, this.x, this.y + (i++)*offset, attrs.def);
	this.printDiffStat(ctx, this.x, this.y + (i++)*offset, attrs.dex);
	this.printDiffStat(ctx, this.x, this.y + (i++)*offset, attrs.int);
	this.printDiffStat(ctx, this.x, this.y + (i++)*offset, attrs.blingbling);
};

stats.prototype.printStat = function (ctx, x, y, label, value) {
	ctx.fillText(label, x, y, 200);
	ctx.fillText(value, x + 200, y, 200);
}

stats.prototype.printDiffStat = function (ctx, x, y, value) {
	ctx.font = '24px monospace';
	ctx.textAlign = 'left';

	if (value > 0) {
		ctx.fillStyle = 'green';
	} else if (value < 0) {
		ctx.fillStyle = 'red';
		value = value * -1;
	} else if (value == 0) {
		ctx.fillStyle = 'white';
	}

	ctx.fillText(value, x + 270, y, 200);
};
