var dialogDefinitions = {
  "1": {
    "text": "Ich bin ein Dialog",
    "image": "npc.png",
    "background": "tavern.png",
    "replies": [
      {
		"reply": "Antwort 1",  
        "text": "Folgetext zu Antwort 1.",
        "condition": {
          "str": 30
        },
        "rewards": {
          "items": [
            "itemid"
          ]
        },
        "replies": [
          {
			"reply": "Antwort 11",
            "text": "Folgetext Antwort 11",
            "condition": {
              "dex": 15
            },
            "rewards": {
              "gold": [
                18
              ]
            },
            "replies": [
				{
					"reply": "Antwort 101",
		            "text": "Folgetext Antwort 101",
		            "condition": {
		              "dex": 15
		            },
		            "rewards": {
		              "gold": [
		                18
		              ]
	            	}
				}
            ]
          }
        ]
      },
      {
		"reply": "Antwort 2",
        "text": "Text zu Antwort 2",
        "condition": {
          "int": 10
        },
        "rewards": {
          "xp": [
            1500
          ]
        },
        "replies": [
        ]
      }
    ]
  }  
};

