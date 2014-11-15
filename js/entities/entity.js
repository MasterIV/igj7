function Entity() {

}
Entity.prototype.area = new Rect(new V2(0,0), new V2(0,0))
Entity.prototype.draw = function () {};
Entity.prototype.update = function (delta) {};
Entity.prototype.setPosition = function ( x, y) {
	this.x = x;
	this.y = y;

	if (this.area) {
		this.area = new Rect(new V2(x,y), new V2(x + this.width, y + this.height));
	}
}
