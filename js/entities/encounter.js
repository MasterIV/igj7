function encounter(imageSprite, imageX, imageY, imageWidth, imageHeight, paths, connectedEncounters) {
	this.image = {};
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
	
	console.log(this.area);
}

encounter.prototype = new Entity();

encounter.prototype.draw = function(ctx) {
    this.image.sprite.draw(ctx, this.image.area.p1.x, this.image.area.p1.y);
	
	for(var i = 0, j = this.paths.length; i < j; i++) {
		var path = this.paths[i];
	    path.sprite.draw(ctx,
        	path.area.p1.x, path.area.p1.y
		);	
	}
}

encounter.prototype.update = function(delta) {

}

encounter.prototype.click = function(pos) {
	if(this.area.inside(pos)) {
		game.scene = scenes.combat; 
	}
}