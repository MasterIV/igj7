function encounter(imageSprite, imageX, imageY, imageWidth, imageHeight, paths, connectedEncounters) {
	this.image = {};
	this.isClickable = false;
	this.image.sprite = new sprite(imageSprite);
    this.image.area = Rect.create(imageX - imageWidth/2, imageY - imageHeight/2, imageWidth, imageHeight);

	this.paths = paths;
	
	this.prevEncounter = null;
    this.area = this.image.area;
	
	this.scale = 1;
}

encounter.prototype = new Entity();

encounter.prototype.draw = function(ctx, offset) {
	var x = this.image.area.p1.x + this.image.area.width()/2 + offset.x;
	var y = this.image.area.p1.y + this.image.area.height()/2 + offset.y;
	for(var i = 0, j = this.paths.length; i < j; i++) {
		var otherEncounter = encounters[this.paths[i]];
		ctx.beginPath();
		ctx.moveTo(x, y);
		ctx.lineTo(otherEncounter.x + offset.x, otherEncounter.y + offset.y);
		ctx.stroke();
	}
	
    this.image.sprite.center(ctx, x, y, this.scale, this.scale);
}

encounter.prototype.update = function(delta) {
	if(this.isClickable) {
		if(this.area.inside(mouse.dif(scenes.map.calcOffset()))) {
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
		if(this.area.inside(pos.dif(scenes.map.calcOffset()))) {
			game.scene.setDialogue(dialogDefinitions["1"]);
			//game.scene = scenes.combat; 
		}
	}
}