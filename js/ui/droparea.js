function droparea(x,y,width,height, onDrop, onRemove) {
    this.area =  new Rect(new V2(x,y),
						 new V2(x + width,y + height));

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
	if (this.onRemove)
		this.onRemove();
}