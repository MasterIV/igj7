function item(definition) {
	this.itemdefinition = definition;
	this.slot = definition.slot;
}


function itemContainer(x, y, width, height, item) {
	this.item = item
	this.sprite = new sprite(item.itemdefinition.sprite);


	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;

	this.area = new Rect(new V2(x, y),new V2(x + width, y + height));
}

itemContainer.prototype = new Entity();

itemContainer.prototype.draw = function (ctx) {
	this.sprite.draw(ctx,this.x, this.y);
}
itemContainer.prototype.update = function (delta) {

}
