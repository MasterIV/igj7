function stats(x, y) {
    this.x = x;
    this.y = y;

    this.attrs = [
        {label: 'str', value: 10},
        {label: 'dex', value: 11},
        {label: 'int', value: 12},
        {label: 'def', value: 13},
        {label: 'punk', value: 14},
    ]
}
stats.prototype.draw = function( ctx ) {
    ctx.fillStyle = 'black';

    ctx.fillText( 'stats', this.x, this.y, 200);

	var stats = hero.getStats();

    //str
    this.printStat(200,200,'Mukikraft',stats.str);
    //int
    this.printStat(200,220,'nerdigkeit',stats.int);
    //dex
    this.printStat(200,240,'dex',stats.dex);

}
stats.prototype.printStat = function (x,y,label,value) {
    ctx.fillText( this.attrs[i].label, x, y, 200);
    ctx.fillText( this.attrs[i].value, x+200, y, 200);
}