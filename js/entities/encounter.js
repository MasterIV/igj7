function encounter(imageSprite, imageX, imageY, imageWidth, imageHeight, paths, connectedEncounters) {
	this.image = {};
	this.isClickable = false;
	this.image.sprite = new sprite(imageSprite);
    this.image.area = Rect.create(imageX, imageY, imageWidth, imageHeight);

	this.paths = [];
	this.connectedEncounters = [];
	for(var i = 0, j = paths.length; i < j; i++) {
		var path = paths[i];
		var pathData = {};
		pathData.sprite = new sprite(path.image);
		pathData.area = Rect.create(path.x, path.y, path.width, path.height);
		this.paths.push(pathData);
		this.connectedEncounters.push(path.to);
	}
	
	this.prevEncounter = null;
    this.area = this.image.area;
	
	this.scale = 1;
}

encounter.prototype = new Entity();

encounter.prototype.draw = function(ctx) {
	for(var i = 0, j = this.paths.length; i < j; i++) {
		var path = this.paths[i];
	    path.sprite.draw(ctx, path.area.p1.x, path.area.p1.y);	
	}
	
    this.image.sprite.center(ctx, this.image.area.p1.x + this.image.area.width()/2, this.image.area.p1.y + this.image.area.height()/2, this.scale, this.scale);
}

encounter.prototype.update = function(delta) {
	if(this.isClickable) {
		if(this.area.inside(mouse)) {
			if(this.scale <= 1.6) {
				this.scale = Math.min(this.scale + delta / 500, 1.6);
			}
		} else {
			if(this.scale >= 1) {
				this.scale = Math.max(this.scale - delta / 500, 1);
			}
		}
	}
}

encounter.prototype.click = function(pos) {
	if(this.isClickable) {
		if(this.area.inside(pos)) {
			game.scene = scenes.combat; 
		}
	}
}