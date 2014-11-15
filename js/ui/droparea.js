function droparea(x, y, width, height, types, onDrop, onRemove) {
    this.area =  new Rect(new V2(x,y),
						 new V2(x + width,y + height));
	this.types = types;
	this.content = null;
	this.onDrop = onDrop;
	this.onRemove = onRemove;

	this.entity = null;
}

droparea.prototype.isDroparea = true;
droparea.prototype.padding = new V2(10,10);
droparea.prototype.drop = function(entity) {
	this.content = entity.item;

	if (this.onDrop)
		this.onDrop( this.content );
}
droparea.prototype.remove = function() {
	if (this.onRemove)
		this.onRemove( this.content );

	this.content = null;
}
droparea.prototype.setContent = function(dragEntity) {
	if (dragEntity.droparea) {
		dragEntity.droparea.remove();
	}

	dragEntity.droparea = this;
	this.drop(dragEntity.entity);
	this.dragEntity = dragEntity;

	dragEntity.entity.setPosition(this.area.p1.x + this.padding.x,
								  this.area.p1.y + this.padding.y);
}
droparea.prototype.switchContent = function (otherDroparea) {


}

function drawedDroparea(e) {
}
drawedDroparea.prototype = new droparea()
drawedDroparea.prototype.draw = function ( ctx ) {
	this.sprite.draw(ctx, this.area.p1.x, this.area.p1.y);
}

function itemslot(x, y, width, height, types, onDrop, onRemove) {
	this.area =  new Rect(new V2(x,y),
		new V2(x + width,y + height));
	this.types = types;
	this.content = null;
	this.onDrop = onDrop;
	this.onRemove = onRemove;

	this.sprite = new sprite('mock/itemslot.png');
}
itemslot.prototype = new drawedDroparea()


function equipslot(x, y, width, height, type, onDrop, onRemove) {
	this.area =  new Rect(new V2(x,y),
						  new V2(x + width,y + height));
	this.types = [];this.types.push(type);
	this.content = null;
	this.onDrop = onDrop;
	this.onRemove = onRemove;

	this.sprite = new sprite('mock/itemslot_'+type+'.png');
}
equipslot.prototype = new drawedDroparea();
equipslot.prototype.isEquipmentDropArea = true;
