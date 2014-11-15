function Attack( scene ) {
	this.scene = scene;
}

Attack.prototype.run = function( target ) {
	this.scene.blocking = [
			new Animation(target.x, target.y, 'img/animation/strike1.png', 5, 100)
	]
};
