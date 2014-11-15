var globalDragging = false;

function dragable(entity, type) {
    this.entity = entity
    this.type = type;
	this.dragging = false;


    this.offset = new V2(0,0);
	this.droparea = null;

}
dragable.prototype.draw = function ( ctx ) {
    if (this.entity.draw) {

		this.entity.draw( ctx );
	}
}
dragable.prototype.update = function ( delta ) {
    if (this.entity.update) {

		if (this.dragging) {
            this.entity.x = mouse.x + this.offset.x;
            this.entity.y = mouse.y + this.offset.y;


			for(var i =0;i < game.scene.entities.length;i++) {
				if (game.scene.entities[i].isEquipmentDropArea) {
					if (game.scene.entities[i].types.indexOf(this.type) != -1)
						if (game.scene.entities[i].area.inside(new V2(mouse.x,mouse.y))) {

							if (game.scene == scenes.character) {
								scenes.character.showDiffrence(this.entity.item);
							}

							return;
						}
				}
			}

        }
        this.entity.update( delta );
    }
}
dragable.prototype.mousedown = function ( pos ) {
    if (this.entity.area.inside(pos) && !this.dragging && !globalDragging) {
        this.dragging = true;globalDragging = true;
        this.startx = this.entity.x;
        this.starty = this.entity.y;

        this.offset = new V2(this.entity.x - pos.x,
							 this.entity.y - pos.y);
     }
}

dragable.prototype.mouseup = function ( pos ) {
    if (this.dragging) {
        this.dragging = false;globalDragging = false;

		for(var i =0;i < game.scene.entities.length;i++) {
			var entity = game.scene.entities[i];
			if (entity.isDroparea)
				if (entity.types.indexOf(this.type) != -1)
						if (entity.area.inside(pos)) {
							if (entity.content == null) {

							if (this.droparea) {
								this.droparea.remove();
							}

							this.droparea = entity;
							entity.drop(this.entity);
							entity.entity = this;

							this.entity.setPosition(entity.area.p1.x + entity.padding.x,
								entity.area.p1.y + entity.padding.y)

							return;
							} else {

							}
						}


		}

        this.entity.x = this.startx;
        this.entity.y = this.starty;
    }
}