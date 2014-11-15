function stats(x, y) {
    this.x = x;
    this.y = y;
	this.showDiffrence = false;

    this.attrs = [
        {label: 'str', value: 10},
        {label: 'dex', value: 11},
        {label: 'int', value: 12},
        {label: 'def', value: 13},
        {label: 'punk', value: 14},
    ]
}
stats.prototype.draw = function( ctx ) {

	this.box(ctx, this.x,this.y,400,300)



	ctx.font = '24px monospace';
	ctx.textAlign = 'left';
	ctx.fillStyle = 'white';

	var stats = hero.getStats();

    //hp
    this.printStat(ctx,this.x + 20,this.y + 60,'HP',stats.hp);
    //mana
    this.printStat(ctx,this.x + 20,this.y + 90,'MP',stats.mana);
    //str
    this.printStat(ctx,this.x + 20,this.y + 120,'STR',stats.str);
    //def
    this.printStat(ctx,this.x + 20,this.y + 150,'DEF',stats.def);
    //dex
    this.printStat(ctx,this.x + 20,this.y + 180,'DEX',stats.dex);
    //int
    this.printStat(ctx,this.x + 20,this.y + 210,'INT',stats.int);
;
	if (this.showDiffrence) {
		this.drawDiffrence(ctx, this.showDiffrence);
	}
}
stats.prototype.drawDiffrence = function(ctx, attrs) {
	//hp
	this.printDiffStat(ctx,this.x + 20,this.y + 60,attrs.hp);
	//mana
	this.printDiffStat(ctx,this.x + 20,this.y + 90,attrs.mana);
	//str
	this.printDiffStat(ctx,this.x + 20,this.y + 120,attrs.str);
	//def
	this.printDiffStat(ctx,this.x + 20,this.y + 150,attrs.def);
	//dex
	this.printDiffStat(ctx,this.x + 20,this.y + 180,attrs.dex);
	//int
	this.printDiffStat(ctx,this.x + 20,this.y + 210,attrs.int);
}

stats.prototype.printStat = function (ctx,x,y,label,value) {
    ctx.fillText( label, x, y, 200);
    ctx.fillText( value, x+200, y, 200);
}

stats.prototype.printDiffStat = function (ctx,x,y,value) {
	ctx.font = '24px monospace';
	ctx.textAlign = 'left';
	if (value > 0) {
		ctx.fillStyle = 'green';
	} else if (value < 0) {
		ctx.fillStyle = 'red';
		value = value *-1;

	} else if (value = 0) {
		ctx.fillStyle = 'whited';
	}
    ctx.fillText( value, x+100, y, 200);
}


stats.prototype.box = function( ctx, x, y, w, h ) {
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