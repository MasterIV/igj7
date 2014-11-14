function combatScene() {
	this.bg = new sprite( 'mock/fight.png' );
	this.entities = [new dialogue([
			'lorem ipsum dolor sit amet ein', 'ist', 'ein', 'test'
	],[
		{ text: "ja", callback: function() { console.log('ja'); }},
		{ text: "nein", callback: function() { console.log('nein'); }}
	])];
}

combatScene.prototype = new scene();
