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
		"target": "single",
		"effects": {
			"Attack": {"factor": 2}
		}
	},
	"heal_enemy": {
		"name": "Gegner Heilen",
		"costs": "1",
		"target": "single",
		"effects": {
			"Heal": {"base": 20, "attr": "int", "rnd": .6 }
		}
	},
	"stun": {
		"name": "Stunnen",
		"costs": "1",
		"target": "single",
		"effects": {
			"Stun": {"duration": 3, "attr": "dex" }
		}
	}

};

