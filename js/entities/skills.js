function dealDamage( scene, target, damage ) {
	if( damage > 0 ) damage -= Math.floor( target.def*.4 );
	if( damage < 0 ) damage = 0;

	scene.blocking.push( new AnimationDamage( target, damage ));
	if( damage >= target.life ) {
		scene.blocking.push(new AnimationDie(scene, target, 600));
		scene.blocking.push( new Animation(target.x, target.y, 'img/animation/destroy.png', 18, 50));
	}
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
	var crit = ( 0.2 * actorStats.dex / target.getStats().dex ) > Math.random();
	if(crit) this.factor *= 1.5;

	var damage = Math.round(this.factor * ( actorStats.str + ( actorStats.str * 0.6 ) * (Math.random() - .5)));
	this.scene.blocking.push( new Animation(target.x, target.y, 'img/animation/strike.png', 6, 100));
	dealDamage(this.scene, target, damage);

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

function Stun( scene, actor, duration, attr ) {
	this.scene = scene;
	this.actor = actor;
	this.duration = duration;
	this.attr = attr;
}

Stun.prototype.run = function( target ) {
	var movex = target.x > this.actor.x ? target.x-100 : target.x+100;
	this.scene.blocking.push( new MoveTwards(this.actor, movex, target.y, this.actor.x, this.actor.y, 500 ));

	var actorStats = this.actor.getStats();
	var hit = ( 0.9 * actorStats[this.attr] / target.getStats()[this.attr] ) > Math.random();
	if( hit ) {
		target.stunned = this.duration;
		this.scene.blocking.push(new AnimationText(target, 'Stunned'));
	} else {
		this.scene.blocking.push(new AnimationText(target, 'Miss'));
	}

	this.scene.blocking.push(new MoveTwards(this.actor, this.actor.x, this.actor.y, movex, target.y, 500 ));
};

function Shield(scene, actor, duration, value) {
	this.scene = scene;
	this.actor = actor;
	this.duration = duration;
	this.value = value;
}

Shield.prototype.run = function( target ) {
	this.target = target;
	target.def *= this.value;
	target.buffs.push( this );
};

Shield.prototype.apply = function() {
	this.duration--;
	if( this.duration < 1 ) {
		arrayRemove(this.target.buffs, this);
		this.target.def /= this.value
	}
};

function Buff(scene, actor, duration, value) {
	this.scene = scene;
	this.actor = actor;
	this.duration = duration;
	this.value = value;
}

Buff.prototype.apply = function() {
	this.duration--;
	dealDamage( this.scene, this.target, this.value );
	if( this.duration < 1 ) arrayRemove(this.target.buffs, this);
};

Buff.prototype.run = function( target ) {
	this.target = target;
	target.buffs.push( this );
};



