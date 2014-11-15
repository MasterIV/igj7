function item(x, y, width, height, itemdefinition) {
	this.sprite = new sprite(itemdefinition.sprite);
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;

	this.area = new Rect(new V2(x, y),new V2(x + width, y + height));

}
item.prototype = new Entity();
item.prototype.draw = function (ctx) {
	this.sprite.draw(ctx,
		this.x, this.y, this.width, this.height,
		this.x, this.y, this.width, this.height);
}
item.prototype.update = function (delta) {

}