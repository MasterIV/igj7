function encounter(id, imageX, imageY) {
	this.id = id;
	this.image = {};
	this.isClickable = false;
	this.image.sprite = new sprite("img/ui/gamestates.png");
		
    this.image.area = Rect.create(imageX - 51, imageY - 53, 102, 107);

	this.prevEncounter = null;
    this.area = this.image.area;
	this.isVisited = false;	
}

encounter.prototype = new Entity();

encounter.prototype.draw = function(ctx, offset) {
	var x = this.image.area.p1.x + offset.x;
	var y = this.image.area.p1.y + offset.y - 15;
	/*for(var i = 0, j = this.paths.length; i < j; i++) {
		var otherEncounter = encounters[this.paths[i]];
		ctx.beginPath();
		ctx.moveTo(x, y);
		ctx.lineTo(otherEncounter.x + offset.x, otherEncounter.y + offset.y);
		ctx.stroke();
	}*/
	var style = 1;
	var scale = 1;
	if(this.isVisited) {
		style = 0;
	}
	if(this.isClickable) {
		style = 3;
	}
	if(this.isClickable && this.area.inside(mouse.dif(scenes.map.calcOffset()))) {
		style = 2;
	}
	if(style == 1) {
		scale = 0.5;
	}
    this.image.sprite.area(ctx, 0, 107 * style, this.image.area.width(), this.image.area.height(), x + this.image.area.width() * (1-scale) / 2, y + this.image.area.height() * (1-scale) / 2, scale, scale);
}

encounter.prototype.update = function(delta) {
	if(this.isVisited && this.id == 31) {
		game.scene = new winScene();	
	}
}

encounter.prototype.click = function(pos) {
	if(this.isClickable) {
		if(this.area.inside(pos.dif(scenes.map.calcOffset()))) {
			this.isVisited = true;
			game.scene.setDialogue(dialogDefinitions[this.id], this.id);
		}
	}
}