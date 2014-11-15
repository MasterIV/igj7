function droparea(x, y, width, height, types, onDrop, onRemove) {
    this.area =  new Rect(new V2(x,y),
						 new V2(x + width,y + height));
	this.types = types;
	this.content = null;
	this.onDrop = onDrop;
	this.onRemove = onRemove;
}

droparea.prototype.drop = function(entity) {
	this.content = entity;

	if (this.onDrop)
		this.onDrop();
}
droparea.prototype.remove = function() {
	this.content = null;

	if (this.onRemove)
		this.onRemove();
}