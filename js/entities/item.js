function item(itemdefinition) {
	this.sprite = new sprite(itemdefinition.sprite);
}

function itemContainer(x, y, width, height, item) {
	this.item = item


	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;

	this.area = new Rect(new V2(x, y),new V2(x + width, y + height));
}
itemContainer.prototype = new Entity();

itemContainer.prototype.draw = function (ctx) {
	this.item.sprite.draw(ctx,
		this.x, this.y, this.width, this.height,
		this.x, this.y, this.width, this.height);
}
itemContainer.prototype.update = function (delta) {

}