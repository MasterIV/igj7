function scene() {
	this.blocking = [];
	this.entities = [];
	this.tooltip = null;
};

scene.prototype.update = function (delta) {
	if (this.blocking.length) {
		if (this.blocking[0].update(delta))
			this.blocking.shift();
		return;
	}

	for (var i = 0; i < this.entities.length; i++)
		if (this.entities[i].update)
			this.entities[i].update(delta);
}

scene.prototype.draw = function (ctx) {
	if (this.bg)
		this.bg.draw(ctx, 0, 0);

	for (var i = 0; i < this.entities.length; i++)
		if (this.entities[i].draw)
			this.entities[i].draw(ctx);

	if (this.blocking.length && this.blocking[0].draw)
		this.blocking[0].draw(ctx);

	if (this.tooltip) {
		this.tooltip.showTooltip(ctx);
	}
}

scene.prototype.click = function (pos) {
	if (this.blocking.length) {
		if( this.blocking[0].click )
			this.blocking[0].click(pos);
		return;
	}

	for (var i = 0; i < this.entities.length; i++)
		if (this.entities[i].click)
			this.entities[i].click(pos);
}

scene.prototype.mousedown = function (pos) {
	if (this.blocking.length) {
		if( this.blocking[0].mousedown )
			this.blocking[0].mousedown(pos);
		return;
	}

	for (var i = 0; i < this.entities.length; i++)
		if (this.entities[i].mousedown)
			this.entities[i].mousedown(pos);
}

scene.prototype.mouseup = function (pos) {
	if (this.blocking.length) {
		if( this.blocking[0].mouseup )
			this.blocking[0].mouseup(pos);
		return;
	}

	for (var i = 0; i < this.entities.length; i++)
		if (this.entities[i].mouseup)
			this.entities[i].mouseup(pos);
}
