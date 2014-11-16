function TargetSelection( scene ) {
	this.scene = scene;
	this.counter = new Framecounter(200);
}

TargetSelection.prototype = new scene();

TargetSelection.prototype.init = function( enemies ) {
	var self = this;

	this.entities = [this.counter];
	for( var i = 0; i < enemies.length; i++ ) (function(e) {
		var button = new SpriteButton('img/ui/target.png',
				Rect.create(0, 0, 114, 122), Rect.create(0, 122, 114, 122),
				e.x - 55, e.y - 114, function () { self.select(e); }
		);

		e.button = button;
		self.entities.push(button);
	})(enemies[i]);

	this.entities.push({
		update: function() {
			var x = ( self.counter.frame % 4 ) * 114;
			for( var i = 0; i < self.entities.length; i++ )
				if( self.entities[i] instanceof SpriteButton ) {
					self.entities[i].position.p1.x = x;
					self.entities[i].position.p2.x = x+114;
					self.entities[i].hover.p1.x = x;
					self.entities[i].hover.p2.x = x+114;
				}
		}
	});
};


TargetSelection.prototype.start = function( action, callback ) {
	this.action = action;
	this.callback = callback;
	this.scene.blocking = [this];
};

TargetSelection.prototype.select = function( enemy ) {
	var self = this;
	this.scene.blocking.shift();
	this.action.run( enemy );
	this.scene.blocking.push({ update: function() {
		self.callback();
		return true;
	}});
};
