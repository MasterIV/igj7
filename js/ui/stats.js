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

    for(var i =0; i<this.attrs.length; i++) {
        ctx.fillText( this.attrs[i].label, this.x, this.y + 20*i, 200);
        ctx.fillText( this.attrs[i].value, this.x+200, this.y + 20*i, 200);
    }
}

//stats.prototype.update = function( delta ) {
//
//}
