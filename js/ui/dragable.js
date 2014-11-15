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

		if (game.scene.dropareas) {
			for(var i =0;i < game.scene.dropareas.length;i++) {
				if (game.scene.dropareas[i].content == null)
					if (game.scene.dropareas[i].types.indexOf(this.type) != -1)
						if (game.scene.dropareas[i].area.inside(pos)) {

							if (this.droparea) {
								this.droparea.remove();
							}

							this.droparea = game.scene.dropareas[i];
							game.scene.dropareas[i].drop(this.entity);

							this.entity.setPosition(game.scene.dropareas[i].area.p1.x,game.scene.dropareas[i].area.p1.y)

							return;
						}
			}
		}

        this.entity.x = this.startx;
        this.entity.y = this.starty;
    }
}