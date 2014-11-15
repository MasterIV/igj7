function Attack( scene, actor ) {
	this.scene = scene;
	this.actor = actor;
}

Attack.prototype.run = function( target ) {
	this.scene.blocking.push( new MoveTwards(this.actor, target.x-100, target.y, this.actor.x, this.actor.y, 500 ));

	var hit = ( 0.9 * this.actor.getStats().dex / target.getStats().dex ) > Math.random();
	if( hit ) {
		this.scene.blocking.push( new Animation(target.x, target.y, 'img/animation/strike1.png', 5, 100))
		this.scene.blocking.push( new AnimationDamage( target, 555 ));
	} else {
		this.scene.blocking.push(new AnimationText(target, 'Miss'));
	}

	this.scene.blocking.push(new MoveTwards(this.actor, this.actor.x, this.actor.y, target.x-100, target.y, 500 ));
};
