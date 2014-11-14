function item(x , y, width, height, sprite) {
    this.sprite = sprite;
    this.x = x;
    this.y = y;

    this.area.p2 = new V2(width,height);
}
item.prototype = new Entity();
item.prototype.draw = function(ctx) {
    this.sprite.draw( ctx,
        this.x, this.y, 60, 60,
        this.x, this.y, 60, 60);
}
item.prototype.update = function( delta) {

}