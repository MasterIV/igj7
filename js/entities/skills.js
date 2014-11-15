function dealDamage( scene, target, damage ) {
	scene.blocking.push( new AnimationDamage( target, damage ));
	if( damage >= target.life )
		scene.blocking.push(new AnimationDie( scene, target, 600 ));
}

function Attack( scene, actor, factor ) {
	this.scene = scene;
	this.actor = actor;
	this.factor = factor ? factor : 1;
}

Attack.prototype.run = function( target ) {
	var movex = target.x > this.actor.x ? target.x-100 : target.x+100;
	this.scene.blocking.push( new MoveTwards(this.actor, movex, target.y, this.actor.x, this.actor.y, 500 ));
	var actorStats = this.actor.getStats();

	var hit = ( 0.9 * actorStats.dex / target.getStats().dex ) > Math.random();
	if( hit ) {
		var damage = this.factor * ( actorStats.str + Math.round(( actorStats.str * 0.6 ) * (Math.random() - .5)));
		this.scene.blocking.push( new Animation(target.x, target.y, 'img/animation/strike1.png', 5, 100));
		dealDamage(this.scene, target, damage);
	} else {
		this.scene.blocking.push(new AnimationText(target, 'Miss'));
	}

	this.scene.blocking.push(new MoveTwards(this.actor, this.actor.x, this.actor.y, movex, target.y, 500 ));
};


function Heal( scene, actor, base, rnd, attr ) {
	this.scene = scene;
	this.actor = actor;

	var stats = actor.getStats();
	this.heal = Math.round( base*(1+stats[attr]/100) + base*rnd*(Math.random() -.5));
}

Heal.prototype.run = function( target ) {
	this.scene.blocking.push( new AnimationDamage( target, this.heal * -1 ));
};

function Stun() {

}

Stun.prototype.run = function( target ) {

};

function Shield() {

}




