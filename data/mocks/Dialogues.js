vardialogDefinitions={
	"0":{
		"text":"Die Partei der strahlend polierten Dampfzwerg hat dich um Hilfe gebeten. Ein seit tausend Jahren schlafendes Monstrum hat sich erhoben, um ihr Urlaubsparadies Malorca zu vernichten. Du wurdest gerufen, um sie zu verteidigen. Angelika steht dir in ihrer vollen Pracht gegenüber und ist für den Kampf bereit!",
		"image":"boss.png",
		"replies":[
			
		],
		"rewards":[
			{
				"fight":"0"
			}
			
		]
		
	},
	"1":{
		"text":"Angelika hat geschafft, aber gerade als sie dich verschlingen wollte, kam eine kleine Fee und hat dir das Leben gerettet. Du bist auf die andere Seite der Insel katapultiert worden. Fee: 'Das war ja wohl mal nichts! Wie um Himmels Willen konnte dir jemand diesen Job geben? Ab zurück auf die Schulbank und sammle Erfahrung in diesem Land!' (Sie belohnt sich mit 14 Attributspunkten)",
		"image":"fee.png",
		"replies":[
			
		],
		"rewards":[
			{
				"int":4
			},
			{
				"str":4
			},
			{
				"dex":4
			}
			
		]
		
	},
	"2":{
		"text":"Du kommst an eine große Brücke, auf der dir ein Wächter den Weg versperrt. Er ruft dir entgegen: 'Haltet ein! Wer wandelt hier durch Nacht und Wind?'",
		"image":"bruecke.png",
		"replies":[
			{
				"text":"Denkst du ich bin ein Idiot? Ich kann von hier deine Beinhaarstoppel sehen! (Gewinn 4 Attributspunkte)",
				"reply":"Ich bin eine Prinzessin von Glitzerberg",
				"condition":{
					
				},
				"rewards":[
					{
						"fight":"brueckenwaechter"
					},
					{
						"int":2
					},
					{
						"str":2
					},
					{
						"dex":2
					}
					
				],
				"replies":[
					
				]
				
			},
			{
				"text":"Okay, Keeeeeevin! Nun beantwortet mir folgende Frage! Wie lautet eure Lieblingsfarbe?",
				"reply":"Kevin, nett dich kennzulernen!",
				"condition":{
					
				},
				"rewards":[
					
				],
				"replies":[
					{
						"text":"FALSCH!",
						"reply":"Ähm... Rot?",
						"condition":{
							
						},
						"rewards":[
							{
								"fight":"brueckenwaechter"
							},
							{
								"int":3
							},
							{
								"str":3
							},
							{
								"dex":3
							}
							
						],
						"replies":[
							
						]
						
					},
					{
						"text":"FALSCH!",
						"reply":"Defintiv Gelb!?",
						"condition":{
							
						},
						"rewards":[
							{
								"fight":"brueckenwaechter"
							},
							{
								"int":3
							},
							{
								"str":3
							},
							{
								"dex":3
							}
							
						],
						"replies":[
							
						]
						
					},
					{
						"text":"Wächter: 'Richtig! Nächste Frage. Was begehrt ihr?'",
						"reply":"Pink?",
						"condition":{
							
						},
						"rewards":[
							
						],
						"replies":[
							{
								"text":"So soll es sein!",
								"reply":"Schutz",
								"condition":{
									
								},
								"rewards":[
									{
										"item":"stdamulettdef"
									},
									{
										"int":3
									},
									{
										"str":3
									},
									{
										"dex":3
									}
									
								],
								"replies":[
									
								]
								
							},
							{
								"text":"So soll es sein!",
								"reply":"Wissen!",
								"condition":{
									
								},
								"rewards":[
									{
										"item":"stdamulettint"
									},
									{
										"int":3
									},
									{
										"str":3
									},
									{
										"dex":3
									}
									
								],
								"replies":[
									
								]
								
							},
							{
								"text":"So soll es sein!",
								"reply":"Gewandheit",
								"condition":{
									
								},
								"rewards":[
									{
										"item":"stdamulettdex"
									},
									{
										"int":3
									},
									{
										"str":3
									},
									{
										"dex":3
									}
									
								],
								"replies":[
									
								]
								
							},
							{
								"text":"So soll es sein!",
								"reply":"Stärke!",
								"condition":{
									
								},
								"rewards":[
									{
										"item":"stdamulettstr"
									},
									{
										"int":3
									},
									{
										"str":3
									},
									{
										"dex":3
									}
									
								],
								"replies":[
									
								]
								
							},
							,
							{
								"text":"",
								"reply":"Deinen Job!",
								"condition":{
									
								},
								"rewards":[
									{
										"fight":"brueckenwaechter"
									},
									{
										"int":4
									},
									{
										"str":4
									},
									{
										"dex":4
									}
									
								],
								"replies":[
									
								]
								
							}
							
						]
						
					}
					
				]
				
			}
			
		]
		
	},
	"3":{
		"text":"Als du gerade durch den dunklen Wald schleichst, siehst du auf dem Weg vor dir ein Seil auf dem Boden. Während du dich näherst, hörst du es hinter einem Baum glucksen!",
		"image":"boss.png",
		"replies":[
			{
				"text":"Du setzt einen Fuß hinter den anderen, bemerkst jedoch zu spät, dass du in eine klebrige, rosa Flüßigkeit getreten bist, welche einen erschreckend bekannten Geruch von Liebestrank verströmt! Die verliebt lächelnde Hexe greift dich erschrocken an!",
				"reply":"(Nachsehen)",
				"condition":{
					
				},
				"rewards":[
					{
						"fight":"hexe"
					},
					{
						"int":3
					},
					{
						"str":3
					},
					{
						"dex":3
					}
					
				],
				"replies":[
					
				]
				
			},
			{
				"text":"Du bemerkst sofort, dass die Hexe eine Falle gestellt und in ihrer Tollpatschigkeit sich selbst mit einem Liebestrank übergossen hat. Du gibst dich als auf Liebestränke spezialisierter Alchemist aus und bringst sie um ihren Schatz!",
				"reply":"Lage glasklar analysieren!",
				"condition":{
					"int":14
				},
				"rewards":[
					{
						"item":"stdamulettint"
					},
					{
						"xp":"1164"
					}
					
				],
				"replies":[
					
				]
				
			},
			{
				"text":"Das 'Arsch' entpuppt sich als Hexe, welche sich mit ihrem eigenen Liebestrank vergiftet hat. Zum Glück sie sie vollkommen mit ihrem Spiegelbild beschäftigt und bemerkt nicht, dass du ihr ein Amulett aus der Tasche mopst!",
				"reply":"Seil und komische Pfütze auf dem Boden! Ganz klar! Eine Falle! Schleich dich an und raub das Arsch aus!",
				"condition":{
					"dex":14
				},
				"rewards":[
					{
						"item":"stdamulettdex"
					},
					{
						"xp":"1164"
					}
					
				],
				"replies":[
					
				]
				
			},
			{
				"text":"Du entdeckst eine alte Hexe, dich direkt mit verliebten Augen ansieht. Ihr Held ist da und sie schenkt dir direkt ein Amulett als Verlobungsgeschenk!",
				"reply":"Ein entzückendes Glucksen in einem dunklen Wald. Vielleicht braucht hier eine Person einen starken Arm und eine harte Brust zum anschmiegen!",
				"condition":{
					"str":14
				},
				"rewards":[
					{
						"item":"stdamulettstr"
					},
					{
						"xp":"1164"
					}
					
				],
				"replies":[
					
				]
				
			}
			
		],
		"rewards":[
			
		]
		
	},
	"4":{
		"text":"Als du gerade durch den dunklen Wald schleichst, siehst du auf dem Weg vor dir ein Seil auf dem Boden. Während du dich näherst, hörst du es hinter einem Baum glucksen!",
		"image":"boss.png",
		"replies":[
			{
				"text":"Du setzt einen Fuß hinter den anderen, bemerkst jedoch zu spät, dass du in eine klebrige, rosa Flüßigkeit getreten bist, welche einen erschreckend bekannten Geruch von Liebestrank verströmt! Die verliebt lächelnde Hexe greift dich erschrocken an!",
				"reply":"(Nachsehen)",
				"condition":{
					
				},
				"rewards":[
					{
						"fight":"hexe"
					},
					{
						"int":3
					},
					{
						"str":3
					},
					{
						"dex":3
					}
					
				],
				"replies":[
					
				]
				
			},
			{
				"text":"Du bemerkst sofort, dass die Hexe eine Falle gestellt und in ihrer Tollpatschigkeit sich selbst mit einem Liebestrank übergossen hat. Du gibst dich als auf Liebestränke spezialisierter Alchemist aus und bringst sie um ihren Schatz!",
				"reply":"Lage glasklar analysieren!",
				"condition":{
					"int":14
				},
				"rewards":[
					{
						"item":"stdamulettint"
					},
					{
						"xp":"1164"
					}
					
				],
				"replies":[
					
				]
				
			},
			{
				"text":"Das 'Arsch' entpuppt sich als Hexe, welche sich mit ihrem eigenen Liebestrank vergiftet hat. Zum Glück sie sie vollkommen mit ihrem Spiegelbild beschäftigt und bemerkt nicht, dass du ihr ein Amulett aus der Tasche mopst!",
				"reply":"Seil und komische Pfütze auf dem Boden! Ganz klar! Eine Falle! Schleich dich an und raub das Arsch aus!",
				"condition":{
					"dex":14
				},
				"rewards":[
					{
						"item":"stdamulettdex"
					},
					{
						"xp":"1164"
					}
					
				],
				"replies":[
					
				]
				
			},
			{
				"text":"Du entdeckst eine alte Hexe, dich direkt mit verliebten Augen ansieht. Ihr Held ist da und sie schenkt dir direkt ein Amulett als Verlobungsgeschenk!",
				"reply":"Ein entzückendes Glucksen in einem dunklen Wald. Vielleicht braucht hier eine Person einen starken Arm und eine harte Brust zum anschmiegen!",
				"condition":{
					"str":14
				},
				"rewards":[
					{
						"item":"stdamulettstr"
					},
					{
						"xp":"1164"
					}
					
				],
				"replies":[
					
				]
				
			}
			
		],
		"rewards":[
			
		]
		
	},
	"31":{
		"text":"WIE?! Aus welchem Loch bist du denn wieder gekrochen gekommen? Na egal, ich werde dich weg rationalisieren!",
		"image":"boss.png",
		"replies":[
			
		],
		"rewards":[
			{
				"fight":"0"
			}
			
		]
		
	},
	
}
;