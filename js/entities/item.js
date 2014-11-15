function item(definition) {
	this.itemdefinition = definition;
	this.slot = definition.slot;
	this.sprite = new sprite(definition.sprite);
	this.name = definition.itemname;
	this.target = definition.target;
	this.effects = definition.effects;
}
