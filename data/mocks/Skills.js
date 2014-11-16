var skillDefinitions = {
	"heal_self": {
		"name": "Heilung",
		"costs": "3",
		"target": "self",
		"effects": {
			"Heal": {"base": 20, "attr": "int", "rnd": .6 }
		}
	},
	"heal_enemy": {
		"name": "Gegner heilen (warum auch immer?!)",
		"costs": "1",
		"target": "single",
		"effects": {
			"Heal": {"base": 20, "attr": "int", "rnd": .6 }
		}
	},
	"heal_w_dmg": {
		"name": "Blaues Auge der Heilung",
		"costs": "1",
		"target": "self",
		"effects": {
			"Heal": {"base": 40, "attr": "int", "rnd": .6 }
			"Attack": {"factor": 0.2}
		}
	},
	"buff_cucumber": {
		"name": "Reib die Gurke",
		"costs": "2",
		"target": "self",
		"effects": {
			"Buff": {"duration": 3, "value": "5" }
		}
	}
	"attack_god": {
		"name": "Faust Gottes",
		"costs": "10",
		"target": "all",
		"effects": {
			"Attack": {"factor": 1.5}
		}
	},
	"attack_fist": {
		"name": "Mächtige Hand",
		"costs": "5",
		"target": "single",
		"effects": {
			"Attack": {"factor": 2.5}
		}
	},
	"attack_rage": {
		"name": "Rage!#$§!?%",
		"costs": "4",
		"target": "single",
		"effects": {
			"Attack": {"factor": 2.3}
		}
	},
	"double_damage": {
		"name": "Doppelter Schaden",
		"costs": "3",
		"target": "single",
		"effects": {
			"Attack": {"factor": 2}
		}
	},
	"stun_leg": {
		"name": "Bein stellen",
		"costs": "2",
		"target": "single",
		"effects": {
			"Stun": {"duration": 3, "attr": "dex" }
		}
	}
};

