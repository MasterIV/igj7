var skillDefinitions = {
	"heal_self": {
		"name": "Heilung",
		"costs": 3,
		"target": "self",
		"effects": {
			"Heal": {"base": 20, "attr": "int", "rnd": .6 }
		}
	},
	"bandage": {
		"name": "Bandagieren",
		"costs": 1,
		"target": "self",
		"effects": {
			"Heal": {"base": 7, "attr": "int", "rnd": .3 }
		}
	},
	"oil": {
		"name": "Einölen",
		"costs": 2,
		"target": "self",
		"effects": {
			"Heal": {"base": 15, "attr": "int", "rnd": .6 },
			"Stun": {"duration": 1, "attr": "str" }
		}
	},
	"heal_enemy": {
		"name": "Gegner heilen (warum auch immer?!)",
		"costs": 1,
		"target": "single",
		"effects": {
			"Heal": {"base": 20, "attr": "int", "rnd": .6 }
		}
	},
	"heal_w_dmg": {
		"name": "Blaues Auge der Heilung",
		"costs": 1,
		"target": "self",
		"effects": {
			"Heal": {"base": 40, "attr": "int", "rnd": .6 },
			"Attack": {"factor": 1}
		}
	},
	"buff_cucumber": {
		"name": "Reib die Gurke",
		"costs": 2,
		"target": "self",
		"effects": {
			"Buff": {"duration": 3, "value": "-5" }
		}
	},
	"posioncloud": {
		"name": "Reib die Gurke",
		"costs": 2,
		"target": "all",
		"effects": {
			"Buff": {"duration": 3, "value": "20" }
		}
	},
	"attack_god": {
		"name": "Faust Gottes",
		"costs": 10,
		"target": "all",
		"effects": {
			"Attack": {"factor": 1.5}
		}
	},
	"attack_fist": {
		"name": "Mächtige Hand",
		"costs": 5,
		"target": "single",
		"effects": {
			"Attack": {"factor": 2.5}
		}
	},
	"attack_rage": {
		"name": "Rage!#$§!?%",
		"costs": 4,
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
	"roundhousekick": {
		"name": "Roundhousekick",
		"costs": "5",
		"target": "single",
		"effects": {
			"Attack": {"factor": 3}
		}
	},
	"stun_leg": {
		"name": "Bein stellen",
		"costs": 2,
		"target": "single",
		"effects": {
			"Stun": {"duration": 3, "attr": "dex" }
		}
	},
	"attack": {
		"name": "Angriff",
		"costs": 0,
		"target": "single",
		"effects": {
			"Attack": {"factor": 1}
		}
	},
	"heal": {
		"name": "Heilung",
		"costs": 1,
		"target": "self",
		"effects": {
			"Heal": {"base": 20, "attr": "int", "rnd": .6 }
		}
	},
	"greaterheal": {
		"name": "Große Heilung",
		"costs": 30,
		"target": "self",
		"effects": {
			"Heal": {"base": 70, "attr": "int", "rnd": .3 }
		}
	},
	"psychohit": {
		"name": "Psychoschlag",
		"costs": 15,
		"target": "all",
		"effects": {
			"Stun": {"duration": 2, "attr": "dex" }
		}
	},
	"singing": {
		"name": "Schräger Gesang",
		"costs": 5,
		"target": "all",
		"effects": {
			"Stun": {"duration": 3, "attr": "dex" }
		}
	},
	"thundershock": {
		"name": "Donnerschock",
		"costs": 20,
		"target": "all",
		"effects": {
			"Stun": {"duration": 3, "attr": "dex" },
			"Buff": {"duration": 2, "value": "15" }
		}
	}
};

