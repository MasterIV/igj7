function item(x , y, width, height, sprite) {
    this.sprite = sprite;
    this.x = x;
    this.y = y;
	this.width = width;
	this.height = height;

    this.area.p1 = new V2(x,y);
    this.area.p2 = new V2(x+width,y+height);

	console.log(this.area);
}
item.prototype = new Entity();
item.prototype.draw = function(ctx) {
    this.sprite.draw( ctx,
        this.x, this.y, this.width,  this.height,
        this.x, this.y, this.width, this.height);
}
item.prototype.update = function( delta) {

}