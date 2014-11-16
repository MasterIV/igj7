/*var encounters = {
	"1": {
		image: "mock/encounter.png",
		x: 150,
		y: 250,
		width: 120,
		height: 80,
		paths: [ "2", "3" ]
	},
	"2": {
		image: "mock/encounter.png",
		x: 400,
		y: 200,
		width: 120,
		height: 80,
		paths: [
		]
	}, 
	"3": {
		image: "mock/encounter.png",
		x: 600,
		y: 500,
		width: 120,
		height: 80,
		paths: [
		]
	}
	
};
*/
function mapScene() {
	var self = this;
	this.bg = new sprite("img/maps/campaign_map.jpg");
	
	this.entities = [
		new button("img/ui/character_button.png", "img/ui/character_button_hover.png", 10, 618, function(){
			game.scene = scenes.character;
		}, null),
		new SpriteButton('img/ui/back_button.png', Rect.create(0, 0, 161, 133), Rect.create(161, 0, 161, 133), 191, 632, function(){
			game.scene = scenes.menu;
		}, null)
	];
		
	this.encounterMap = {};
	for(var index in encounterMappings) {
		var enc = encounterMappings[index];
		this.encounterMap[index] = new encounter(index, enc.x, enc.y);
		this.entities.push(this.encounterMap[index]);
	}	
	
	this.encounterMap["1"].isClickable = true;

	this.dragStart = new V2(0,0);
	this.dragOffset = new V2(-912,-906);
	
	this.scrolls = false;
	
	this.currentEncounter = this.encounterMap["1"];
}

mapScene.prototype = new scene();

mapScene.prototype.setEncounter = function(id) {
	this.setClickable(false);
	this.currentEncounter = this.encounterMap[id];
	this.setClickable(true);
}

mapScene.prototype.setClickable = function(b) {
	if(this.currentEncounter != null){
		var encIds = encounterMappings[this.currentEncounter.id].connected;
		for(var i = 0, j = encIds.length; i < j; i++) {
			this.encounterMap[encIds[i]].isClickable = b;
		}
	}
}

mapScene.prototype.setDialogue = function(dialogueData, nextId) {
	var self = this;
	var answers = [];	
	if(typeof(dialogueData) != "undefined"){
		if(typeof(dialogueData.replies) != "undefined" && dialogueData.replies.length > 0) {
			for(var i = 0, j = dialogueData.replies.length; i < j; i++) {
				var reply = dialogueData.replies[i];
				answers.push({ data: reply, text: reply.reply, callback: function(){
					self.blocking.pop();
					self.setDialogue(this.data, nextId);
				} });
			}
		}
		if(typeof(dialogueData.rewards) != "undefined") {
			for(var i = 0, j = dialogueData.rewards.length; i < j; i++) { 
				var reward = dialogueData.rewards[i];
				if(typeof(reward.fight) != "undefined") {
					scenes.combat.setEnemies(reward.fight);
					answers = [{ text: "Zum Kampf", callback: function(){
						self.blocking.pop();
						//self.currentEncounter.isVisited = true;
						self.encounterMap["1"].isClickable = false;
						self.setEncounter(nextId);
						game.scene = scenes.combat;
					}}]
				}	
				if(typeof(reward.item) != "undefined") {
					console.log(reward.item);
					hero.loot(new item(itemDefinitions[reward.item]));
				}	
				if(typeof(reward.exp) != "undefined") {
					// Toby fragen
				}	
			}
		}
	}
	if(answers.length == 0) {
		answers = [{ text: "Weiter", callback: function(){
			self.blocking.pop();
			//self.currentEncounter.isVisited = true;
			self.encounterMap["1"].isClickable = false;
			self.setEncounter(nextId);
		}}]
	}
	var text = "Hier gibt es nichts zu sehen."
	if(typeof(dialogueData) != "undefined" && typeof(dialogueData.text) != "undefined") {
		text = dialogueData.text;
	}
	var visibleDialogue = new dialogue(text, answers);
	this.blocking.push(visibleDialogue);
}

mapScene.prototype.mousedown = function(pos) {
	this.dragStart = new V2(pos.x, pos.y);
	this.scrolls = true;
}
mapScene.prototype.mouseup = function(pos) {
	this.dragOffset = this.calcOffset();
	this.scrolls = false;
}
mapScene.prototype.calcOffset = function() {
	var offset;
	if(this.scrolls) {
		offset = this.dragOffset.dif(this.dragStart.dif(mouse));
	} else {
		offset = this.dragOffset;
	}
	return new V2(Math.max(Math.min(0, offset.x), -this.bg.width+game.buffer.width), Math.max(Math.min(0, offset.y), -this.bg.height+game.buffer.height));
}
mapScene.prototype.draw = function (ctx) {
	var offset = this.calcOffset();
	
	if (this.bg)
		this.bg.draw(ctx, offset.x, offset.y);
	
	for(var index in encounterMappings) {
		var mapping = encounterMappings[index];
		for(var secondIndex in mapping.connected) {
			secondIndex = mapping.connected[secondIndex];
			var target = encounterMappings[secondIndex];
			ctx.beginPath();
			ctx.moveTo(mapping.x + offset.x, mapping.y + offset.y);
			ctx.lineTo(target.x + offset.x, target.y + offset.y);
			ctx.strokeStyle="rgba(237,195,111,.6)";
			ctx.lineWidth="5";
			ctx.stroke();
		}
	}

	for (var i = this.entities.length-1; i >= 0; i--)
		if (this.entities[i].draw)
			this.entities[i].draw(ctx, offset);

	if (this.blocking.length && this.blocking[0].draw)
		this.blocking[0].draw(ctx, offset);
}