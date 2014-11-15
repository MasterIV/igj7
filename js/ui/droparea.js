function droparea(x, y, width, height, types) {
	this.area = new Rect(new V2(x, y),
		new V2(x + width, y + height));
	this.types = types;

}
droparea.prototype.padding = new V2(10,10);


function itemslot(x, y, width, height, types) {
	this.area = new Rect(new V2(x, y),
			new V2(x + width, y + height));
	this.types = types;;

	this.inventoryId = null;

	this.dragging = false;
	this.dragPos = new V2(0,0);
	this.dragOffset = new V2(0,0);
}
itemslot.prototype = new droparea()
itemslot.prototype.draw = function(ctx) {
	var item = this.getItem();

	if (item) {
		if (!this.dragging) {
			item.sprite.draw(ctx, this.area.p1.x + this.padding.x, this.area.p1.y + this.padding.y);
		} else {
			item.sprite.draw(ctx, this.dragPos.x  + this.padding.x + this.dragOffset.x, this.dragPos.y  + this.padding.y + this.dragOffset.y);
		}
	}
}

itemslot.prototype.update = function ( delta ) {
	if (this.dragging) {
		this.dragPos = new V2(mouse.x, mouse.y)

		for (var i = 0; i < game.scene.entities.length; i++) {
			if (game.scene.entities[i].isEquipmentDropArea) {
				if (game.scene.entities[i].types.indexOf(this.getItem().slot) != -1)
					if (game.scene.entities[i].area.inside(new V2(mouse.x, mouse.y))) {

						if (game.scene == scenes.character) {
							scenes.character.showDiffrence(this.getItem());
						}

						return;
					}
			}
		}
	}
}
itemslot.prototype.mousedown = function (pos) {
	if (this.area.inside(pos)) {
		this.dragging = true;
		this.dragOffset = new V2(this.area.p1.x - pos.x,this.area.p1.y - pos.y)
	}
}
itemslot.prototype.mouseup = function (pos) {
	if (this.dragging) {
		this.dragging = false;

		for (var i = 0; i < game.scene.entities.length; i++) {
			if (game.scene.entities[i].isEquipmentDropArea) {
				var equipArea = game.scene.entities[i];
				if (equipArea.types.indexOf(this.getItem().slot) != -1)
					if (equipArea.area.inside(new V2(mouse.x, mouse.y))) {
						hero.equip(hero.inventory[this.inventoryId]);
						return;
					}
			}
		}
	}
}

itemslot.prototype.getItem = function() {
	return hero.inventory[this.inventoryId];
}



function equipslot(x, y, width, height, type) {
	this.area = new Rect(new V2(x, y),
			new V2(x + width, y + height));
	this.types = [];
	this.types.push(type);

	this.emptySprite = new sprite('img/ui/slot_'+type+'.png');
}

equipslot.prototype = new droparea();
equipslot.prototype.isEquipmentDropArea = true;
equipslot.prototype.draw = function( ctx ) {
	var item = hero.equipment[this.types[0]];

	if (item != null) {
		item.sprite.draw(ctx, this.area.p1.x + this.padding.x, this.area.p1.y + this.padding.x);
	} else {
		this.emptySprite.draw(ctx, this.area.p1.x + this.padding.y, this.area.p1.y + this.padding.y);
	}
};
