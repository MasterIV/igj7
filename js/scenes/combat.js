function combatScene() {
	this.bg = new sprite('mock/fight.png');
	this.entities = [new dialogue('Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.', [
		{
			text: "ja", callback: function () {
			console.log('ja');
		}
		},
		{
			text: "nein", callback: function () {
			console.log('nein');
		}
		}
	])];
}

combatScene.prototype = new scene();
