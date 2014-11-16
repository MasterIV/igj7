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
itemslot.prototype = new droparea();
itemslot.prototype.draw = function(ctx) {
	var item = this.getItem();

	if (item) {
		if (!this.dragging) {
			item.sprite.draw(ctx, this.area.p1.x + this.padding.x, this.area.p1.y + this.padding.y);
		} else {
			item.sprite.draw(ctx, this.dragPos.x  + this.padding.x + this.dragOffset.x, this.dragPos.y  + this.padding.y + this.dragOffset.y);
		}
	}

	if (this.getItem() && this.area.inside(mouse) && (!this.dragging || (this.dragging && this.area.p1.sum(this.area.p2.dif(this.area.p2).mul(0.2)).dist(mouse) < 100  ))) {
		if (!game.scene.tooltip) {
			var list = [];
			if (this.getItem().slot)
				list.push({label:'Slot',value:config.slotLabels[this.getItem().slot]})
			for(var key in hero.attrs) {
				var val = this.getItem().itemdefinition[key];
				if (val)
					list.push({label:config.attrsLabels[key],value:val})
			}

			game.scene.tooltip = new tooltip(this.getItem().itemdefinition.itemname, this.getItem().itemdefinition.description,list, this);
		}
	} else {
		if (game.scene.tooltip && game.scene.tooltip.owner == this) {
			game.scene.tooltip = null;
		}
	}
}

itemslot.prototype.update = function ( delta ) {
	if (this.dragging) {
		this.dragPos = new V2(mouse.x, mouse.y)

		for (var i = 0; i < game.scene.entities.length; i++) {
			if (game.scene.entities[i].isEquipmentDropArea) {
				if (game.scene.entities[i].area.inside(mouse)) {
					if (game.scene.entities[i].types.indexOf(this.getItem().slot) != -1) {

						if (game.scene == scenes.character) {
							scenes.character.showDiffrence(this.getItem());
						}

						return;
					}
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
					if (equipArea.area.inside(mouse)) {
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
	var item = this.getItem();
	if (item != null) {
		item.sprite.draw(ctx, this.area.p1.x + this.padding.x, this.area.p1.y + this.padding.x);
	} else {
		this.emptySprite.draw(ctx, this.area.p1.x + this.padding.y, this.area.p1.y + this.padding.y);
	}

	if (this.getItem() && this.area.inside(mouse)) {
		if (!game.scene.tooltip) {
			var list = [];
			if (this.getItem().slot)
				list.push({label:'Slot',value:config.slotLabels[this.getItem().slot]});
			for(var key in hero.attrs) {
				var val = this.getItem().itemdefinition[key];
				if (val)
					list.push({label:key,value:val})
			}
			game.scene.tooltip = new tooltip(this.getItem().itemdefinition.itemname, this.getItem().itemdefinition.description,list, this);
		}
	} else {
		if (game.scene.tooltip && game.scene.tooltip.owner == this) {
			game.scene.tooltip = null;
		}
	}
};
equipslot.prototype.getItem = function() {
	return hero.equipment[this.types[0]];
}

