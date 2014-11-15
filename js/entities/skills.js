function Attack( scene, actor ) {
	this.scene = scene;
	this.actor = actor;
}

Attack.prototype.run = function( target ) {
	this.scene.blocking = [
		new MoveTwards(this.actor, target.x-100, target.y, this.actor.x, this.actor.y, 500 ),
		new Animation(target.x, target.y, 'img/animation/strike1.png', 5, 100),
		new MoveTwards(this.actor, this.actor.x, this.actor.y, target.x-100, target.y, 500 )
	]
};
