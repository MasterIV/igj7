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
	this.bg = new sprite("img/maps/campaign_map_w_dots.jpg");
	
	this.entities = [
		new button("img/ui/character_button.png", "img/ui/character_button_hover.png", 10, 618, function(){
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
	
	//this.dragpos = V2(0,0);
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

mapScene.prototype.setDialogue = function(dialogueData) {
	var self = this;
	var answers = [];
	console.log(dialogueData);
	if(dialogueData["replies"] != null && dialogueData.replies.length > 0) {
		for(var i = 0, j = dialogueData.replies.length; i < j; i++) {
			var reply = dialogueData.replies[i];
			answers.push({ data: reply, text: reply.reply, callback: function(){
				self.entities.pop();
				self.setDialogue(this.data);
			} });
		}
	}
	if(answers.length == 0) {
		answers = [{ text: "Weiter", callback: function(){
			self.entities.pop();
		}}]
	}
	var visibleDialogue = new dialogue(dialogueData.text, answers);
	this.entities.push(visibleDialogue);
}
mapScene.prototype.onmousedown = function(pos) {
	//this.dragpos = this.dragpos.sub(pos);
}
mapScene.prototype.onmouseup = function(pos) {
	//this.dragpos = pos.sub(this.dragpos);
}
mapScene.prototype.draw = function (ctx) {
	if (this.bg)
		this.bg.draw(ctx, -300, 0);

	for (var i = 0; i < this.entities.length; i++)
		if (this.entities[i].draw)
			this.entities[i].draw(ctx);

	if (this.blocking.length && this.blocking[0].draw)
		this.blocking[0].draw(ctx);
}