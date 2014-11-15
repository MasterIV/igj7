var encounters = {
	"1": {
		image: "mock/encounter.png",
		x: 150,
		y: 250,
		width: 120,
		height: 80,
		paths: [
			{
				to: "2",
				image: "mock/path.png",
				x: 170,
				y: 200,
				width: 230,
				height: 90
			}
		]
	},
	"2": {
		image: "mock/encounter.png",
		x: 400,
		y: 200,
		width: 120,
		height: 80,
		paths: [
		]
	}
};

function mapScene() {
	var self = this;
	this.bg = new sprite("img/maps/campaign_map.jpg");
	
	this.entities = [
		new button("mock/button_paywall.png", "mock/button_paywall.png", 10, 678, function(){ 
			var pw = new dialogue("Yo. This is paywall. Pay or die, bitch.", [
				{ 
					text:"Pay", 
					callback:function(){
						self.entities.pop();
					}
				},
				{ 
					text:"Die", 
					callback:function(){
						self.entities.pop();
					}
				}
				]);
				self.entities.push(pw);
				
		}, null),
		new button("mock/button_character.png", "mock/button_character.png", 140, 678, function(){
			game.scene = scenes.character;
		}, null),
		new button("mock/button_menu.png", "mock/button_menu.png", 1150, 678, function(){
			game.scene = scenes.menu;
		}, null)
	];
		
	this.encounterMap = {};
	for(var index in encounters) {
		var enc = encounters[index];
		var connectedEncounters = [];
		for(var index in encounter.paths) {
			connectedEncounters.push(encounter.paths[index].to)
		}
		this.encounterMap[index] = new encounter(
			enc.image, enc.x, enc.y, enc.width, enc.height, enc.paths, connectedEncounters
		);
		this.entities.push(this.encounterMap[index]);
	}	
	
	this.encounterMap["1"].isClickable = true;
}

mapScene.prototype = new scene();
mapScene.prototype.setEncounter = function(id) {
	this.setClickable(false);
	this.currentEncounter = this.encounterMap[id];
	this.setClickable(true);
}
mapScene.prototype.setClickable = function(b) {
	if(this.currentEncounter != null){
		var encIds = this.currentEncounter.connectedEncounters;
		console.log(encIds);
		for(var i = 0, j = encIds.length; i < j; i++) {
			this.encounterMap[encIds[i]].isClickable = b;
		}
	}
}