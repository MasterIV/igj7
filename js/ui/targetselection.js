function TargetSelection( scene ) {
	this.scene = scene;
}

TargetSelection.prototype = new scene();

TargetSelection.prototype.init = function( enemies ) {
	var self = this;

	this.entities = [];
	for( var i = 0; i < enemies.length; i++ ) (function(e) {
		var button = new SpriteButton('img/ui/target.png',
				Rect.create(0, 0, 228, 228), Rect.create(0, 228, 228, 228),
				e.x - 114, e.y - 114, function () { self.select(e); }
		);

		e.button = button;
		self.entities.push(button);
	})(enemies[i]);
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
