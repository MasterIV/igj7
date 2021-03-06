function mapScene() {
	var self = this;
	this.bg = new sprite("img/maps/campaign_map.jpg");
	
	this.entities = [
		new button("img/ui/character_button.png", "img/ui/character_button_hover.png", 10, 618, function(){
			game.scene = new switchScene(scenes.character,2500,'Charakter');;
		}, null),
		new SpriteButton('img/ui/back_button.png', Rect.create(0, 0, 161, 133), Rect.create(161, 0, 161, 133), 191, 632, function(){
			game.scene = new switchScene(scenes.menu,2500,'Menu');
		}, null)
	];
		
	this.encounterMap = {};
	for(var index in encounterMappings) {
		var enc = encounterMappings[index];
		this.encounterMap[index] = new encounter(index, enc.x, enc.y);
		this.entities.push(this.encounterMap[index]);
	}	

	this.dragStart = new V2(0,0);
	//this.dragOffset = new V2(-912,-906);
	this.dragOffset = new V2(-450, -150);

	this.scrolls = false;
}

mapScene.prototype = new scene();

mapScene.prototype.goToFinalScene = function() {
	this.dragOffset = new V2(-450, -150);
	this.setEncounter("31");
	this.encounterMap["31"].isVisited = true;
	this.setDialogue(dialogDefinitions["31"]);
}

mapScene.prototype.reset = function() {
//	this.dragOffset = new V2(-912,-906);
	this.dragOffset = new V2(-450, -150);

	for(var index in this.encounterMap) {
		var encounter = this.encounterMap[index];
		encounter.isVisited = false;
		encounter.isClickable = false;
	}
	this.encounterMap["1"].isClickable = true;
	this.currentEncounter = this.encounterMap["1"];


	this.blocking.push(
		new mapSlide()
	);
}

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
				var allowed = true;
				if(typeof(reply.condition)!="undefined") {
					for(var index in reply.condition) {
						if(reply.condition[index] > hero.attrs[index]) {
							allowed = false;
						}
					}
				}
				if(allowed) {
					answers.push({ data: reply, text: reply.reply, callback: function(){
						self.blocking.pop();
						self.setDialogue(this.data, nextId);
					} });
				}
			}
		}
		if(typeof(dialogueData.rewards) != "undefined") {
			for(var i = 0, j = dialogueData.rewards.length; i < j; i++) { 
				var reward = dialogueData.rewards[i];
				var fightImage = "img/maps/mountain.jpg";
				if(typeof(dialogueData.image) != "undefined") {
					if(dialogueData.image == 2) {
						fightImage = "img/maps/village.jpg";
					}
					if(dialogueData.image == 3) {
						fightImage = "img/maps/waterfall.jpg";
					}
					if(dialogueData.image == 4) {
						fightImage = "img/maps/death.jpg";
					}
				}	
				if(typeof(reward.fight) != "undefined") {
					scenes.combat.setEnemies(reward.fight, fightImage);
					answers = [{ text: "Zum Kampf", callback: function(){
						self.blocking.pop();
						self.encounterMap["1"].isClickable = false;
						self.setEncounter(nextId);
						//game.scene = scenes.combat;
						game.scene = new switchScene(scenes.combat, 2000, config.labels.switchScene.combat);
					}}]
				}	
				if(typeof(reward.item) != "undefined") {
					var loot = new item(itemDefinitions[reward.item]);
					this.blocking.unshift(new AnimationItemFound(loot));
					hero.loot(loot);
				}	
				if(typeof(reward.hp) != "undefined") {
					hero.attrs.hp += reward.hp;
				}	
				if(typeof(reward.mana) != "undefined") {
					hero.attrs.mana += reward.mana;
				}
				if(typeof(reward.str) != "undefined") {
					hero.attrs.str += reward.str;
				}	
				if(typeof(reward.dex) != "undefined") {
					hero.attrs.dex += reward.dex;
				}	
				if(typeof(reward.int) != "undefined") {
					hero.attrs.int += reward.int;
				}	
				if(typeof(reward.blingbling) != "undefined") {
					hero.attrs.blingbling += reward.blingbling;
				}	
				if(typeof(reward.skill) != "undefined") {
					var skill = skillDefinitions[reward.skill];
					this.blocking.unshift(new AnimationSkillFound(skill));
					hero.skills.push(skill);
				}	
			}
		}
	}
	if(answers.length == 0) {
		answers = [{ text: "Weiter", callback: function(){
			self.blocking.pop();
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
	if(this.blocking.length == 0) {
		this.dragStart = new V2(pos.x, pos.y);
		this.scrolls = true;
	}
}
mapScene.prototype.mouseup = function(pos) {
	if(this.blocking.length == 0) {
		this.dragOffset = this.calcOffset();
		this.scrolls = false;
	}
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
	var offset = this.dragOffset;
	if(this.blocking.length == 0) {
		offset = this.calcOffset();
	} 
	
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


function mapSlide() {
	this.start = new V2(-450, -150);
	this.end = new V2(-912,-906);

	this.duration = 2000;
	this.animtime = 0;
	this.progress = 0;
}
mapSlide.prototype.update = function (delta) {
	if (this.animtime == 0) {
		this._init();
	}

	this.animtime += delta;
	this.progress = this.animtime/this.duration;

	var length = this.start.dist(this.end);
	var direction = this.end.dif(this.start).quo(length);
	game.scene.dragOffset = this.start.sum(direction.mul(length*this.progress));

	if (this.progress > 1) {
		return true;
	}
}
mapSlide.prototype._init = function () {
	game.scene.dragOffset = this.start;
}
