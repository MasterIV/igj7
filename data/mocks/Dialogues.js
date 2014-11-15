var dialogDefinitions = {
  "1": {
    "text": "Ich bin ein Dialog",
    "image": "npc.png",
    "background": "tavern.png",
    "replies": [
      {
        "text": "Antwort 1",
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
            "text": "Antwort 11",
            "condition": {
              "dex": 15
            },
            "rewards": {
              "gold": [
                18
              ]
            },
            "replies": [
            ]
          }
        ]
      },
      {
        "text": "Antwort 2",
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

