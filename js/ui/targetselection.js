function TargetSelection( scene ) {

}

TargetSelection.prototype = new scene();

TargetSelection.prototype.init = function( enemies ) {
	var self = this;
	this.entities = [];
	for( var i = 0; i < enemies.length; i++ ) (function(e) {
		self.entities.push(new SpriteButton('img/ui/target.png',
				Rect.create(0, 0, 100, 100), Rect.create(100, 0, 100, 100),
				e.x - 50, e.y - 50, function () { self.select(e); }
		));
	})(enemies[i]);
};

TargetSelection.prototype.select = function( enemy ) {

};
