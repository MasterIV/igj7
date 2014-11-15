var skillDefinitions = {
	"heal": {
		"name": "Heilung",
		"costs": "1",
		"target": "self",
		"effects": {
			"Heal": {"base": 20, "attr": "int", "rnd": .6 }
		}
	},
	"double_damage": {
		"name": "Doppelter Schaden",
		"costs": "1",
		"target": "all",
		"effects": {
			"Attack": {"factor": 2}
		}
	},
	"heal_enemy": {
		"name": "Gegner Heilen",
		"costs": "1",
		"target": "all",
		"effects": {
			"Heal": {"base": 20, "attr": "int", "rnd": .6 }
		}
	},
	"stun": {
		"name": "Stunnen",
		"costs": "1",
		"target": "all",
		"effects": {
			"Stun": {"duration": 3, "attr": "dex" }
		}
	},
	"hot": {
		"name": "Hot",
		"costs": "1",
		"target": "all",
		"effects": {
			"Buff": {"duration": 3, "value": -15 }
		}
	},
	"dot": {
		"name": "Dot",
		"costs": "1",
		"target": "all",
		"effects": {
			"Buff": {"duration": 3, "value": "5" }
		}
	},
	"shield": {
		"name": "Shield",
		"costs": "1",
		"target": "all",
		"effects": {
			"Buff": {"duration": 3, "value": "5" }
		}
	}

};

