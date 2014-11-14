function dragable(entity) {
    this.entity = entity
    this.dragging = false;

    this.offset = V2(0,0);
}
dragable.prototype.draw = function ( ctx ) {
    if (this.entity.draw)
        this.entity.draw( ctx );
}
dragable.prototype.update = function ( delta ) {
    if (this.entity.update) {
        if (this.dragging) {
            this.x = mouse.x + this.offset.x;
            this.y = mouse.y + this.offset.y;
        }
        this.entity.update( delta );
    }
}
dragable.prototype.mousedown = function ( pos ) {
    //if (inarea && !this.dragging) {
    this.dragging = true;
    this.startx = this.entity.x;
    this.starty = this.entity.y;

    this.offset = V2(pos.x - this.entity.x,
                     pos.y - this.entity.y);

    // }
}
dragable.prototype.mouseup = function ( pos ) {
    this.endx = pos.x;
    this.endy = pos.y;

    if (this.dragging) {
        this.dragging = false;

        this.entity.x = this.startx;
        this.entity.y = this.starty;
    }
}