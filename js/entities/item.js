function item(x , y, sprite) {
    this.sprite = sprite;
    this.x = x;
    this.y = y;
}
item.prototype.draw = function(ctx) {
    this.sprite.draw( ctx,
        this.x, this.y, 60, 60,
        this.x, this.y, 60, 60);
}
item.prototype.update = function( delta) {

}