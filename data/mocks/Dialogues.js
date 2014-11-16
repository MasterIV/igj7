var dialogDefinitions={
	"0":{
		"text":"(Dummy)",
		"image":"boss.png",
		"replies":[
			
		],
		"rewards":[
			{
				"fight":[
					"angelika"
				]
				
			}
			
		]
		
	},
	"1":{
		"text":"Das Letzte, an das du dich noch erinnerst, ist Angelika über dir und ein wildes Amazonenjodeln in deinen Ohren, bis das Dunkel dich umhüllt. Als du wieder zur Besinnung kommst, funkelt dir eine niedliche Fee entgegen, welche jedoch mit deiner Leistung absolut nicht zufrieden zu sein scheint. Fee: 'WAS ZUR HÖLLE WAR DAS DENN? So eine jämmerliche Darbietung habe ich lange nicht mehr gesehen. Ab zurück auf die Trainingsbank! Und bevor du dich in die Welt stürzt, mach dich mit deinen Attributen und dem Inventar vertraut! GOD DAMN IT!",
		"image":"fee.png",
		"replies":[
			
		],
		"rewards":[
			{
				"int":8
			},
			{
				"str":8
			},
			{
				"dex":8
			},
			{
				"hp":45
			},
			{
				"skill":"stun_leg"
			}
			
		]
		
	},
	"2":{
		"text":"Du erreichst eine monumentale Brücke, auf der dir ein Wächter den Weg versperrt. Er ruft: 'Haltet ein! Wer wandelt hier durch Nacht und Wind?'",
		"image":"bruecke.png",
		"replies":[
			{
				"text":"Denkt Ihr, ich bin ein Idiot? Ich kann von hier aus Eure Beinhaarstoppeln sehen!",
				"reply":"Ich bin eine Prinzessin vom Glitzerberg",
				"condition":{
					
				},
				"rewards":[
					{
						"fight":[
							"brueckenwaechter"
						]
						
					},
					{
						"int":1
					},
					{
						"str":1
					},
					{
						"dex":1
					}
					
				],
				"replies":[
					
				]
				
			},
			{
				"text":"Okay, Keeeeeevin! Nun beantwortet mir doch folgende Frage! Wie lautet Eure Lieblingsfarbe?",
				"reply":"Kevin, nett dich kennzulernen!",
				"condition":{
					
				},
				"rewards":[
					
				],
				"replies":[
					{
						"text":"HA! FALSCH! *räusper* Ich meine 'Ihr liegt leider falsch!'",
						"reply":"Ähm... Rot?",
						"condition":{
							
						},
						"rewards":[
							{
								"fight":[
									"brueckenwaechter"
								]
								
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
						"text":"FALSCH!",
						"reply":"Defintiv Gelb!?",
						"condition":{
							
						},
						"rewards":[
							{
								"fight":[
									"brueckenwaechter"
								]
								
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
						"text":"Wächter: 'Richtig! Nächste Frage. Was begehrt Ihr?'",
						"reply":"Pink?",
						"condition":{
							
						},
						"rewards":[
							
						],
						"replies":[
							{
								"text":"So soll es sein!",
								"reply":"Wissen!",
								"condition":{
									
								},
								"rewards":[
									{
										"int":2
									},
									{
										"str":1
									},
									{
										"dex":1
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
										"int":1
									},
									{
										"str":1
									},
									{
										"dex":2
									}
									
								],
								"replies":[
									
								]
								
							},
							{
								"text":"Alt und grau könnt Ihr werden, aber nicht frech! Zieht Eure Waffen, Rotzlümmel!",
								"reply":"Deinen Job!",
								"condition":{
									
								},
								"rewards":[
									{
										"fight":[
											"brueckenwaechter"
										]
										
									},
									{
										"int":1
									},
									{
										"str":6
									},
									{
										"dex":1
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
		"text":"Als du gerade durch den dunklen Wald schleichst, siehst du auf dem Weg vor dir ein Seil auf dem Boden und hörst ein vergnügtes Glucksen aus dem Gebüsch!",
		"image":"boss.png",
		"replies":[
			{
				"text":"Du setzt einen Fuß hinter den anderen, bemerkst jedoch zu spät, dass du in eine klebrige, rosa Flüßigkeit getreten bist. Diese verströmt einen vertrauten Geruch von Liebestrank! Plötzlich attackiert dich eine verliebt aussehende Hexe aus dem Gebüsch!",
				"reply":"(Nachsehen)",
				"condition":{
					
				},
				"rewards":[
					{
						"fight":[
							"hexe"
						]
						
					},
					{
						"int":1
					},
					{
						"str":1
					},
					{
						"dex":1
					}
					
				],
				"replies":[
					
				]
				
			},
			{
				"text":"Du bemerkst sofort, dass dir eine Hexe eine Falle gestellt hat und sich daraufhin in ihrer eigenen Tollpatschigkeit selbst mit einem Liebestrank übergossen hat. Du gibst dich als ein auf Liebestränke spezialisierter Alchemist aus und überredest sie, dir ihre restlichen Wertgegenstände für eine Heilung zu geben!",
				"reply":"Situation glasklar analysiert!",
				"condition":{
				},
				"rewards":[
					{
						"int":6
					},
					{
						"str":1
					},
					{
						"dex":1
					}
					
				],
				"replies":[
					
				]
				
			},
			{
				"text":"Du entdeckst eine alte Hexe, die dich unmittelbar mit verliebten Augen ansieht. Ihr Held ist da, so denkt sie, und legt selbstlos einen stärkenden Zauber als Verlobungsgeschenk auf dich!",
				"reply":"Gewiss eine holde Maid! Sie braucht meine harte Brust zum Anschmiegen!",
				"condition":{
				},
				"rewards":[
					{
						"int":1
					},
					{
						"str":2
					},
					{
						"dex":1
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
		"text":"Schon von weitem erkennst du eine lange Schleifspur auf dem Boden, die recht früh in einem Einschlagskrater mündet. Als du näher kommst, humpelt dir aus den Überresten einer Rakete ein in Lumpen gekleideter Gnom entgegen. Gnom: 'Haltet ein Reisender, mein Interinselflug ist leider auf dieser Insel abgestürzt und ich habe kein Ticket, um weiter zu reisen! Könnt Ihr mir helfen?'",
		"image":"boss.png",
		"replies":[
			{
				"text":"Gnome:'Habt dank!' Auch wenn Eure Beine viel länger sind, so kann ich Euch sicher beibringen, wie Ihr sie effektiv jemandem in den Weg stellt! ",
				"reply":"Aber sicher! Gnome in Not sind genau mein Ding!",
				"condition":{
					
				},
				"rewards":[
					{
						"skill":"stun_leg"
					},
					{
						"int":2
					},
					{
						"str":1
					},
					{
						"dex":1
					}
					
				],
				"replies":[
					
				]
				
			},
			{
				"text":"Gnome von anderen Inseln sind anscheinend leichter gebaut, da dieser besser fliegt, als jeder Dampfball! Du gehst die Reste der Rakete inspizieren!",
				"reply":"(Kick den Zwerg von der Insel und geh plündern!)",
				"condition":{
					
				},
				"rewards":[
					{
						"int":1
					},
					{
						"str":1
					},
					{
						"dex":6
					}
					
				],
				"replies":[
					
				]
				
			},
			{
				"text":"Du verprügelst den Gnom nach allen Regeln der Kunst, aber er hatte Recht. Er war wirklich abgebrannt! Außer ein paar Erfahrungen im Polo bleibt dir nichts!",
				"reply":"(Der is ja kleiner, als mein Hammer!)",
				"condition":{
					
				},
				"rewards":[
					{
						"int":1
					},
					{
						"str":2
					},
					{
						"dex":1
					}
					
				],
				"replies":[
					
				]
				
			}
			
		],
		"rewards":[
			
		]
		
	},
	"5":{
		"text":"Heißer Dampf schlägt dir entgegen und du merkst, dass dein Weg dich in das städtische Badehaus geführt hat. Aber die Gilde der verboten reichen Füllereiliebhaber hat alle Wasserbecken belegt. Sie sehen dich fragend an, als du hinzusteigen willst.",
		"image":"boss.png",
		"replies":[
			{
				"text":"'Mit Gewalt geht alles!' Du nimmst Anlauf und springst kopfüber in die Falte vom Vorsitzenden. Ein wenig Platz schaffen und die Sache passt. Klasse Training!",
				"reply":"'Da ist noch Platz!'",
				"condition":{
					
				},
				"rewards":[
					{
						"int":1
					},
					{
						"str":2
					},
					{
						"dex":1
					},
					{
						"item":["das_gewisse_nichts"]
					},
					{
						"hp":80
					},
					{
						"mana":10
					},
					{
						"item":["hp_potion"]
					}
					
				],
				"replies":[
					
				]
				
			},
			{
				"text":"Wenn dein Schulmathe richtig ist, geht das Wasservolumen gegen Null! Der Rest ist Schweiß.",
				"reply":"'Archimedes! Berechne das übrige Volumen!'",
				"condition":{
					"int":20
				},
				"rewards":[
					{
						"int":2
					},
					{
						"str":1
					},
					{
						"dex":1
					},
					{
						"item":["standardt_outfit_int"]
					},
					{
						"hp":80
					},
					{
						"mana":10
					},
					{
						"item":["hp_potion"]
					}
					
				],
				"replies":[
					
				]
				
			},
			{
				"text":"Du kannst garnicht so schnell gucken, wie die Becken leer sind, aber leider auch das Wasser...",
				"reply":"'Draußen verteilt jemand goldene Minzblätter!'",
				"condition":{
					
				},
				"rewards":[
					{
						"int":1
					},
					{
						"str":1
					},
					{
						"dex":2
					},
					{
						"item":["borats_lieblingsfetzen"]
					},
					{
						"hp":80
					},
					{
						"mana":10
					},
					{
						"item":["hp_potion"]
					}
					
				],
				"replies":[
					
				]
				
			},
			{
				"text":"Wie es der Natur dieser reichen Säcke entspricht, respektieren sie nur Klunker und dein 'Bling Bling' ist stärker!",
				"reply":"'Sonst bade ich nur in Geld, aber...'",
				"condition":{
					
				},
				"rewards":[
					{
						"int":2
					},
					{
						"str":1
					},
					{
						"dex":2
					},
					{
						"item":["erotisches_outfit"]
					},
					{
						"hp":80
					},
					{
						"mana":10
					},
					{
						"item":["hp_potion"]
					}
					
				],
				"replies":[
					
				]
				
			}
			
		],
		"rewards":[
			
		]
		
	},
	"6":{
		"text":"Du kommst an eine Farm. Im Hintergrund hüpfen glückliche Schäfchen und jäh begrüßt dich freundlich pfeifender Elf! Während er seinem Lieblingsbock einnen Pferdeschwanz flechtet, guckt er dich neugierig an.",
		"image":"boss.png",
		"replies":[
			{
				"text":"Erstaunlicherweise ist der Elf schnell auf den Beinen und bekommt sogar Hilfe von seinen Schafen!",
				"reply":"'Ab aufs Feld, fauler Bauer!'",
				"condition":{
					
				},
				"rewards":[
					{
						"fight":[
							"farmerelf",
							"sheep",
							"sheep"
						]
						
					},
					{
						"int":1
					},
					{
						"str":2
					},
					{
						"dex":2
					},
					{
						"item":["das_gewisse_nichts"]
					},
					{
						"hp":80
					},
					{
						"mana":10
					},
					{
						"item":["hp_potion"]
					}
					
				],
				"replies":[
					
				]
				
			},
			{
				"text":"Nachdem du ihn eine halbe Stunde eingelullt und sogar 'Liebe und Harmonie' als Deutungstanz vorgeführt hast, gibt er nach!",
				"reply":"'In der Natur braucht man keine Schätze!'",
				"condition":{
					
				},
				"rewards":[
					{
						"int":1
					},
					{
						"str":1
					},
					{
						"dex":2
					},
					{
						"item":["erotisches_outfit"]
					},
					{
						"hp":80
					},
					{
						"mana":10
					},
					{
						"item":["hp_potion"]
					}
				],
				"replies":[
					
				]
				
			},
			{
				"text":"Du wusstest, du hast Talent für sowas, aber wie zur Hölle konntest du dich selbst mit einflechten?",
				"reply":"Hilf ihm mit den Zöpfen.",
				"condition":{
					
				},
				"rewards":[
					{
						"int":2
					},
					{
						"str":1
					},
					{
						"dex":1
					},
					{
						"item":["standardt_outfit_int"]
					},
					{
						"hp":80
					},
					{
						"mana":10
					},
					{
						"item":["hp_potion"]
					}
				],
				"replies":[
					
				]
				
			},
			{
				"text":"Er ist geblendet von soviel Naturkompetenz. Nachdem ihr auch die neuesten Goblin-Sammelkarten ausgetauscht habt, ziehst du von dannen!",
				"reply":"Zeig ihm deine Abzeichen der Pfadfinder.",
				"condition":{
					
				},
				"rewards":[
					{
						"int":1
					},
					{
						"str":1
					},
					{
						"dex":2
					},
					{
						"item":["borats_lieblingsfetzen"]
					},
					{
						"hp":80
					},
					{
						"mana":10
					},
					{
						"item":["hp_potion"]
					}
				],
				"replies":[
					
				]
				
			}
			
		],
		"rewards":[
			
		]
		
	},
	"7":{
		"text":"Du hast davon gehört. Spinnen sind grauselige Gegner, aber je mehr Beine, desto mehr Klunker, oder?",
		"image":"boss.png",
		"replies":[
			
		],
		"rewards":[
			{
				"hp":80
			},
			{
				"mana":10
			},
			{
				"fight":["spider","spider"]
			},
			{
				"int":1
			},
			{
				"str":1
			},
			{
				"dex":2
			},
			{
				"item":["borats_lieblingsfetzen"]
			},
			{
				"item":["hp_potion"]
			}
		]
		
	},
	"8":{
		"text":"Du machst dich bereit und spürst die Vorfreude einer Schlacht in dir aufflammen, als in der Ferne das Klirren von Waffen und das Knallen von Musketen ertönt. Als du jedoch durch das Gebüsch auf eine Lichtung trittst, stehen dort nur drei schäbig bewaffnete Leute. Naja, Schlacht ist Schlacht!",
		"image":"boss.png",
		"replies":[
			
		],
		"rewards":[
			{
				"fight":["minischlacht","minischlacht","minischlacht"]
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
		]
		
	},
	"9":{
		"text":"In einer Taverne hast du von einer heißen Quelle in der Nähe erfahren, in der sich gegen Abend die Schönheiten der Umgebung treffen sollen. Du schleichst dich heran und...",
		"image":"boss.png",
		"replies":[
			{
				"text":"Du bist nicht allein! Als du dich in einem hohen Bogen den wabernden Schwaden näherst, siehst du schähmenhafte Umrisse. Aber Herrje, sie entpuppen sich als ein behaarter Holzfäller, sein Pferd und die zwei angepissten Schafe Jeff und Tom aus Connecticut.",
				"reply":"...springst nackt in die Quelle.",
				"condition":{
					
				},
				"rewards":[
					{
						"fight":["roboter","sheep","sheep"]
					},
					{
						"int":1
					},
					{
						"str":2
					},
					{
						"dex":1
					}
				],
				"replies":[
					
				]
				
			},
			{
				"text":"Die in Dampf verhüllten Gestalten bemerken dich nicht und du kannst gefahrlos alles mitnehmen, was von Wert ist.",
				"reply":"...durchsuchst die Sachen.",
				"condition":{
					
				},
				"rewards":[
					{
						"int":1
					},
					{
						"str":1
					},
					{
						"dex":2
					}
				],
				"replies":[
					
				]
				
			},
			{
				"text":"Du kriechst bis auf wenige Meter heran, wirst aber von einem Hinweisschild aufgehalten, das unmissverständlich erklärt, dass dies eine FKK-Quelle ist. Schade, aber immerhin konntest du die Gespräche belauschen und etwas orkisch lernen...",
				"reply":"...riskierst einen Blick.",
				"condition":{
					
				},
				"rewards":[
					{
						"int":2
					},
					{
						"str":1
					},
					{
						"dex":1
					}
				],
				"replies":[
					
				]
				
			}
			
		],
		"rewards":[
			
		]
		
	},
	"10":{
		"text":"Du weißt von einem elfischen Versuchslabor, das interessante Versuche an reitbaren Bienen durchführen soll. Als du dich jedoch frohen Mutes auf den Weg machst, kommt dir ein riesiger Schwarm mutierter Mücken in Form einer Person entgegen.",
		"image":"boss.png",
		"replies":[
			{
				"text":"Bei ihrer Schaffung haben die Elfen wohl einen Malus auf Bewegungsreichweite erwürfelt. Du hast keine Probleme damit abzuhauen. Gut für dich!",
				"reply":"Das ist mir nicht geheuer... lieber weg!",
				"condition":{
					
				},
				"rewards":[
					{
						"int":1
					},
					{
						"str":1
					},
					{
						"dex":2
					}
				],
				"replies":[
					
				]
				
			},
			{
				"text":"Sie sind nicht nur mutiert, sondern auch verdammt angepisst!",
				"reply":"Multirieerrrt, was? HAUEN!",
				"condition":{
					
				},
				"rewards":[
					{
						"int":1
					},
					{
						"str":2
					},
					{
						"dex":1
					}
				],
				"replies":[
					
				]
				
			},
			{
				"text":"Als du ohne Drohgebärden an den Schwarm herantrittst, erweisen sie sich als sehr kultiviert und außerordentlich gebildet! Sie erörtern mit dir die Vorteile von Schwarmintelligenz und blutreicher Nahrung.",
				"reply":"Nach dem Weg fragen.",
				"condition":{
					
				},
				"rewards":[
					{
						"int":2
					},
					{
						"str":1
					},
					{
						"dex":1
					}
				],
				"replies":[
					
				]
				
			}
			
		],
		"rewards":[
			
		]
		
	},
	"11":{
		"text":"'Wuuuhuuuuuuuu...' ein schrilles Rufen weckt dich aus deinen Reiseträumen. Du schaust dich um, kannst aber niemanden ausmachen, bis dir etwas großes Rundes vor die Linsen fliegt. Aber was zum Teufel ist das? Es ist eine Miniform der guten Fee, aber sie scheint diese gegessen zu haben. Gut gelaunt erfüllt sie dir einen Wünsch.",
		"image":"boss.png",
		"replies":[
			{
				"text":"Ein klasse Wunsch! Sie erzählt dir stundenlang Anekdoten aus ihrer Zeit als Wirtin in Goldwalds Kneipe 'Zum geknickten Löwen'",
				"reply":"Das Wissen der Welt",
				"condition":{
					
				},
				"rewards":[
					{
						"int":3
					},
					{
						"str":1
					},
					{
						"dex":1
					},
					{
						"item":["klostein_amulett"]
					},
					{
						"hp":80
					}
				],
				"replies":[
					
				]
				
			},
			{
				"text":"Kein Problem. Madame Tickerbell hat den besten Stoff.",
				"reply":"Ost-Mallorcanisches Vitamin B",
				"condition":{
					
				},
				"rewards":[
					{
						"int":1
					},
					{
						"str":3
					},
					{
						"dex":1
					},
					{
						"item":["standard_amulett_str"]
					},
					{
						"hp":80
					},
					{
						"mana":10
					}
				],
				"replies":[
					
				]
				
			},
			{
				"text":"Eine harte Nuss, da sie offenbar viel Erfahrung damit hat, Leute übers Ohr zu hauen, aber keine Fee kann etwas gegen eine Doppelwunsch-Versicherung einwenden!",
				"reply":"Sie soll eine Versicherung abkaufen",
				"condition":{
					
				},
				"rewards":[
					{
						"int":1
					},
					{
						"str":1
					},
					{
						"dex":3
					},
					{
						"item":["standard_amulett_dex"]
					},
					{
						"hp":80
					},
					{
						"mana":10
					}
				],
				"replies":[
					
				]
				
			},
			{
				"text":"Sie hat da noch so eine dicke Uhr von ihrer Tante TingelTangelbob. Die kannst du haben!",
				"reply":"Mehr Reichtum!",
				"condition":{
					
				},
				"rewards":[
					{
						"int":1
					},
					{
						"str":1
					},
					{
						"dex":2
					},
					{
						"item":["getrockneter_tigerhoden"]
					},
					{
						"hp":80
					},
					{
						"mana":10
					}
				],
				"replies":[
					
				]
				
			}
			
		],
		"rewards":[
			
		]
		
	},
	"12":{
		"text":"Niemand weiß, wie es Alibaba und seine tausend Kumpels es auf diese Insel verschlagen hat, aber es scheint hart gewesen zu sein. Sie sind nur noch zu dritt.",
		"image":"boss.png",
		"replies":[
			
		],
		"rewards":[
			{
				"fight":[
					"roboter3","roboter","roboter"
				]
			},
			{
				"int":2
			},
			{
				"str":3
			},
			{
				"dex":2
			},
			{
				"item":["standard_amulett_str"]
			},
			{
				"hp":80
			},
			{
				"mana":10
			}
		]
		
	},
	"13":{
		"text":"Eine friedliche, unschuldige, blumige Wiese in reinem Sonnenlicht. Hier passiert dir nichts Böses! Du solltest hier das Spiel beenden, wenn du es mit Friedlichkeit in Erinnerung behalten willst.",
		"image":"boss.png",
		"replies":[
			
		],
		"rewards":[
			
		]
		
	},
	"14":{
		"text":"Eine Bande aus Händlern belagert die Straße. Aus dem Durcheinander aus Beatboxing und 'Digga' vermeinst du zu hören, dass du 'fett krass was abkaufen musst, um auf die Westside zu kommen'. Zum Glück hast du noch etwas Taschengeld übrig. Was soll es sein?",
		"image":"boss.png",
		"replies":[
			{
				"text":"Auf Elfen ist verlass, ihr Stoff gibt Erinnerungen aus mindestens sieben Leben, so glaubst du.",
				"reply":"Voll deeper shit",
				"condition":{
					
				},
				"rewards":[
					{
						"int":3
					},
					{
						"str":1
					},
					{
						"dex":1
					},
					{
						"item":["klostein_amulett"]
					},
					{
						"hp":80
					},
					{
						"mana":10
					}
				],
				"replies":[
					
				]
				
			},
			{
				"text":"Tiefer gelegte Lasttiere haben seit jeher zu langen Staus geführt, aber was soll's... sitzen die Puschen tight, ist alles alright!",
				"reply":"Krasse Maultierfelgen",
				"condition":{
					
				},
				"rewards":[
					{
						"int":2
					},
					{
						"str":1
					},
					{
						"dex":2
					},
					{
						"item":["getrockneter_tigerhoden"]
					},
					{
						"hp":80
					},
					{
						"mana":10
					}
				],
				"replies":[
					
				]
				
			},
			{
				"text":"Der sagenhafte Text des geforderten Buches: 'Ich bin raus...'",
				"reply":"Thug's Handbuch of life",
				"condition":{
					
				},
				"rewards":[
					{
						"int":1
					},
					{
						"str":1
					},
					{
						"dex":3
					},
					{
						"item":["standard_amulett_dex"]
					},
					{
						"hp":80
					},
					{
						"mana":10
					}
				],
				"replies":[
					
				]
				
			},
			{
				"text":"Mutti wäre stolz auf diesen Bizeps!",
				"reply":"Pumpsession mit Snoop Ork",
				"condition":{
					
				},
				"rewards":[
					{
						"int":1
					},
					{
						"str":3
					},
					{
						"dex":1
					},
					{
						"item":["standard_amulett_str"]
					},
					{
						"hp":80
					},
					{
						"mana":10
					}
				],
				"replies":[
					
				]
				
			}
			
		],
		"rewards":[
			
		]
		
	},
	"15":{
		"text":"El'Orko del Diablo hat sein Lager am Wegesrand aufgeschlagen. An dieser Gelegenheit kommst du noch vorbei!",
		"image":"boss.png",
		"replies":[
			
		],
		"rewards":[
			{
				"fight":[
					"elorko"
				]
			},
			{
				"int":2
			},
			{
				"str":3
			},
			{
				"dex":2
			},
			{
				"item":["standard_amulett_str"]
			},
			{
				"hp":80
			},
			{
				"mana":10
			}
		]
		
	},
	"16":{
		"text":"Je weiter des Weges du kommst, desto größere Scharen an Menschen umgeben dich. Als du dich gerade fragst, ob du immernoch etwas Liebestrank von der Hexe am Schuh hast, siehst du die Fahnen und Schilder vom großen Dampflasterrennen. Es werden noch lebensmüde Fahrer gesucht. Was tust du?",
		"image":"boss.png",
		"replies":[
			{
				"text":"Zu deiner eigenen Überraschung wirst du unzählige Male zum Recall eingeladen und schließlich zu einem Test vorgelassen. Deine Aufgabe besteht in einer Runde 'Angsthase' gegen einen Dachs. Bremst du, oder hälst du drauf?",
				"reply":"Fahrer? ICH ICH ICH!",
				"condition":{
					
				},
				"rewards":[
					
				],
				"replies":[
					{
						"text":"Du hast nicht mehr alle Tassen im Schrank! Jeder weiß, das Dachse sie Berseker der Straße sind. Es wird niemand erfahren, ob es daher rührt, dass er nicht ans Lenkrad kam, oder ob er die Welt einfach nur brennen sehen wollte. Auf jeden Fall kracht ihr hart zusammen und du kannst dich glücklich schätzen, mit dem Leben davongekommen zu sein!",
						"reply":"(Draufhalten)",
						"condition":{
							
						},
						"rewards":[
							{
								"int":1
							},
							{
								"str":2
							},
							{
								"dex":1
							}	
						],
						"replies":[
							
						]
					},
					{
						"text":"Zwei Idioten, ein Gedanke. Ihr beiden weicht beide aus und kracht in die Leitplanken. Zu deinem Glück warst du eine Sekunde langsamer und hast so gewonnen!",
						"reply":"(Bist du irre?)",
						"condition":{
							
						},
						"rewards":[
							{
								"int":1
							},
							{
								"str":1
							},
							{
								"dex":2
							}
						],
						"replies":[
							
						]
					}
				]
				
			},
			{
				"text":"Das Preisgeld wäre größer, aber in fremden Taschen finden sich durchaus interessante Sachen.",
				"reply":"Massen an Menschen schaffen Möglichkeiten",
				"condition":{
					
				},
				"rewards":[
					{
						"int":2
					},
					{
						"str":1
					},
					{
						"dex":1
					}
				],
				"replies":[
					
				]
				
			}
			
		],
		"rewards":[
			
		]
		
	},
	"17":{
		"text":"Die Straße wird von einer Meute wütender Goblinangesteller belagert. Der Rädelsführer stellt sich als Vorsitzender der Gewerkschaft 'Goblinische Diener Lebenslang' vor und fordert von allen Durchreisenden drei Prozent mehr Wegsteuer plus das Recht, auch Orks vertreten zu dürfen.",
		"image":"boss.png",
		"replies":[
			{
				"text":"Trotz ihrer Größe haben Goblins erstaunlich scharfe Zähne. Sie stürzen sich auf dich!",
				"reply":"'Drei Prozent von Nichts bedeutet Haue. Auf sie!'",
				"condition":{
					
				},
				"rewards":[
					{
						"fight":[
							"goblinprotester","goblinprotester","spider"
						]
					},
					{
						"int":1
					},
					{
						"str":2
					},
					{
						"dex":1
					}
				],
				"replies":[
					
				]
				
			},
			{
				"text":"Goblins lieben Gold. Du BIST Gold! Sie nehmen dich mit...",
				"reply":"'Bekomme ich für sechs Prozent zwei Goblins oben drauf?'",
				"condition":{
					
				},
				"rewards":[
					{
						"int":2
					},
					{
						"str":1
					},
					{
						"dex":1
					}
				],
				"replies":[
					
				]
				
			}
			
		],
		"rewards":[
			
		]
		
	},
	"18":{
		"text":"Du erreichst eine zerstörte Burg, in welcher der ehemalige Burgherr von Söldnern belagert wird. Hilfst du den Söldnern oder dem Burgherren?",
		"image":"boss.png",
		"replies":[
			{
				"text":"Der Burgherr scheint sehr erleichert über dein Auftreten.",
				"reply":"(Hilf dem Burgherrn)",
				"condition":{
					
				},
				"rewards":[
					{
						"fight":[
							"roboter","villian","roboter"
						]
					},
					{
						"int":2
					},
					{
						"str":1
					},
					{
						"dex":1
					}
				],
				"replies":[
					
				]
				
			},
			{
				"text":"Ein lautes Gröhlen tönt auf, als du dich den Heerscharen anschließt!",
				"reply":"(Hilf den Söldnern)",
				"condition":{
					
				},
				"rewards":[
					{
						"fight":[
							"roboter3"
						]
					},
					{
						"int":1
					},
					{
						"str":2
					},
					{
						"dex":1
					}
				],
				"replies":[
					
				]
				
			}
			
		],
		"rewards":[
			
		]
		
	},
	"19":{
		"text":"Als du unbesorgt deines Weges gehst, hörst du einen kläglichen Hilferuf aus der Nähe. Deine Suche endet in der Entdeckung eines Zauberers, der in einer magischen Blase gefangen ist. Zauberer: 'Stop... Stop. Bitte lauft nicht weg! Ich hatte leider ein kleines Missgeschick bei meinem letzten Experiment. Könnt Ihr mir helfen? Ihr müsst nur diesen Hebel dort betätigen!'",
		"image":"boss.png",
		"replies":[
			{
				"text":"Ihr legt den Hebel um, bemerkt jedoch zu spät, dass um den Hebel herum ein Haufen Menschenknochen verstreut liegt. Mit einem Knall erscheinen drei blutrünstige Schafe und sie fallen dich an. Während ihr in den Kampf stürzt, hörst du noch die gehässige Stimme des Zauberers: 'Jaaa, meine Lieblinge. Es ist Fressizeit!'",
				"reply":"(Hebel umlegen)",
				"condition":{
					
				},
				"rewards":[
					{
						"fight":[
							"sheep","sheep","sheep"
						]
					},
					{
						"int":1
					},
					{
						"str":3
					},
					{
						"dex":1
					},
					{
						"item":["vikinger_helm"]	
					},
					{
						"hp":80
					},
					{
						"mana":10
					}					
				],
				"replies":[
					
				]
				
			},
			{
				"text":"Rechtzeitig bemerkst du, dass um den Hebel herum ein Haufen Menschenknochen liegt. Du lässt den Zauberer in seiner Blase und durchwühlst stattdessen den Haufen.",
				"reply":"(Hebel betrachten)",
				"condition":{
					
				},
				"rewards":[,
					{
						"int":1
					},
					{
						"str":2
					},
					{
						"dex":1
					},
					{
						"item":["standard_helm_def"]	
					},
					{
						"hp":80
					},
					{
						"mana":10
					}	
					
				],
				"replies":[
					
				]
				
			},
			{
				"text":"Zauberer in magischen Blasen waren dir schon immer suspekt!",
				"reply":"(Weggehen)",
				"condition":{
					
				},
				"rewards":[
					{
						"int":3
					},
					{
						"str":1
					},
					{
						"dex":1
					},
					{
						"item":["panfloetenmaske"]	
					},
					{
						"hp":80
					},
					{
						"mana":10
					}	
				],
				"replies":[
					
				]
				
			}
			
		],
		"rewards":[
			
		]
		
	},
	"20":{
		"text":"Beim Durchschreiten des Waldes hörst du das Gelächter junger Leute. Niemand sollte hier draußen sein...",
		"image":"boss.png",
		"replies":[
			{
				"text":"Es ist eine Gruppe Rollenspieler, die eine Runde 'Dolchbären & Drachensabber' spielen. Sie laden dich ein, als der kluge Ritter 'Ser Rotzalot' mitzuspielen.",
				"reply":"(Inspizieren)",
				"condition":{
					
				},
				"rewards":[
					
				],
				"replies":[
					{
						"text":"Der Spielleiter bemerkt deinen Versuch und sagt: 'Oh, Ihr spielt Eure Rolle aber großartig! Ihr habt einen Wert von 203.000 in Stehlen, nicht wahr? Wohlan denn, fahrt nur fort.' Etwas irritiert machst du weiter und kommst unbehelligt davon.",
						"reply":"Beim Spielen könnte man unauffällig die Nerds bestehlen...",
						"condition":{
							
						},
						"rewards":[						,
							{
								"int":1
							},
							{
								"str":3
							},
							{
								"dex":1
							},
							{
								"item":["vikinger_helm"]	
							},
							{
								"hp":80
							},
							{
								"mana":10
							}	
							
						],
						"replies":[
							
						]
					},
					{
						"text":"Der Spielleiter ist so beeindruckt, dass er vor Aufregung einem Herzinfarkt erliegt.",
						"reply":"Das kann ich! Megahart abgehen und die Nerds beeindrucken!",
						"condition":{
							
						},
						"rewards":[
							{
								"int":1
							},
							{
								"str":1
							},
							{
								"dex":3
							},
							{
								"item":["panfloetenmaske"]	
							},
							{
								"hp":80
							},
							{
								"mana":10
							}
							
						],
						"replies":[
							
						]
					}
				]
				
			},
			{
				"text":"Du hast offenbar eine Gruppe rollenspielender Nerds erwischt. Astrein, jetzt ist hier wieder unberührte Natur! Vom verursachten Sprengkrater Mal abgesehen...",
				"reply":"Man sollte prophylaktisch die einzige heilige Granate auf die Lichtung werfen.",
				"condition":{
					
				},
				"rewards":[
					{
						"int":1
					},
					{
						"str":1
					},
					{
						"dex":1
					},
					{
						"item":["mauszeigerhut"]
					},
					{
						"hp":80
					},
					{
						"mana":10
					}
					
				],
				"replies":[
					
				]
				
			}
			
		],
		"rewards":[
			
		]
		
	},
	"21":{
		"text":"Eine extrem heiße Elfe in knappem Outfit stürmt auf dich zu und macht Anstalten, dich zu verführen.",
		"image":"boss.png",
		"replies":[
			{
				"text":"Nach einigen Stunden der Debatte stimmt sie dir nickend zu und kleidet sich in die schwere Rüstung eines Ritters. Sie erleidet einen Hitzestau und fällt tot um.",
				"reply":"Sexismus ist schlimm, das sollte man mit ihr debattieren!",
				"condition":{
					
				},
				"rewards":[
					{
						"fight":[
							"sheep","sheep","sheep"
						]
					},
					{
						"int":1
					},
					{
						"str":3
					},
					{
						"dex":1
					},
					{
						"item":["vikinger_helm"]
					},
					{
						"hp":80
					},
					{
						"mana":10
					}	
				],
				"replies":[
					
				]
				
			},
			{
				"text":"Sie ist überrascht, aber wild entschlossen, sich dir entgegenzustellen!",
				"reply":"Für diesen Frevel hat sie einen abgehackten Kopf verdient!",
				"condition":{
					
				},
				"rewards":[
					{
						"int":1
					},
					{
						"str":1
					},
					{
						"dex":1
					},
					{
						"item":["standard_helm_def"]
					},
					{
						"hp":80
					},
					{
						"mana":10
					},
					{
						"fight":["hotelf"]
					}
				],
				"replies":[
					
				]
				
			},
			{
				"text":"Sie weint und verzweifelt. Du hast ein Leben zerstört, Glückwunsch!",
				"reply":"Ich bin selbst viel heißer. Sie ist meiner nicht würdig!",
				"condition":{
					
				},
				"rewards":[
					{
						"int":1
					},
					{
						"str":1
					},
					{
						"dex":3
					},
					{
						"item":["panfloetenmaske"]
					},
					{
						"hp":80
					},
					{
						"mana":10
					}
				],
				"replies":[
					
				]
				
			}
			
		],
		"rewards":[
			
		]
		
	},
	"22":{
		"text":"Der alte und zugegebenermaßen hässlige Meister Yoddar begegnet dir in einer Taverne. Er bildete schon viele Jedi aus und bietet dir seine Weisheiten an.",
		"image":"boss.png",
		"replies":[
			{
				"text":"Yoddar denkt nach und entgegnet schließlich: 'Merkel sein schlimmer Gegner. Du nie wirst besiegen ohne fett krasse Items!'",
				"reply":"Etwas über Politik erfahren",
				"condition":{
					
				},
				"rewards":[
					{
						"int":2
					},
					{
						"str":1
					},
					{
						"dex":1
					}
				],
				"replies":[
					
				]
				
			},
			{
				"text":"Er geht in den Tech-Babble-Modus über und klingt wie Gordi La Forge: 'Wir müssen die phasische Amplitüde über die kausal-algorithmische Phalanxmatrix hyperventilieren!' Er blickt zufrieden drein.",
				"reply":"Quaternion-Berechnung beibringen lassen",
				"condition":{
					
				},
				"rewards":[
					{
						"int":1
					},
					{
						"str":1
					},
					{
						"dex":2
					}
				],
				"replies":[
					
				]
				
			},
			{
				"text":"Er fängt an zu sabbern. Seine Hose färbt sich dunkel... von dem erfährst du wohl nichts Interessantes, verdammter Spinner!",
				"reply":"Nach seiner wichtigsten Weisheit fragen",
				"condition":{
					
				},
				"rewards":[
					{
						"int":1
					},
					{
						"str":1
					},
					{
						"dex":2
					}
				],
				"replies":[
					
				]
				
			},
			{
				"text":"Er steht auf und erleuchtet mit seinem Laserschwert die Taverne. Beinahe angsterfüllt stellst du dich ihm gegenüber. Als er ausholt, erleidet er einen Hexenschuss. Du gewinnst, du alter Lucker!",
				"reply":"Ihn zum Jedikampf fordern",
				"condition":{
					
				},
				"rewards":[
					{
						"int":1
					},
					{
						"str":2
					},
					{
						"dex":1
					}
				],
				"replies":[
					
				]
				
			}
			
		],
		"rewards":[
			
		]
		
	},
	"23":{
		"text":"Der blaue Dschinn aus Alladin erscheint und beginnt die Konversation: 'Jajaja, blablablaaaar... du hast einen Wunsch, das ist wahr!' Was wünschst du dir denn?!",
		"image":"boss.png",
		"replies":[
			{
				"text":"Der Dschinn guckt genervt: 'Das wurde noch nicht erfunden, du Vollpfosten. Aber hier hast du ein iPhone 6 Plus mit eingebauter Herdplatte!'",
				"reply":"Einen Tic Tac",
				"condition":{
					
				},
				"rewards":[
					{
						"int":2
					},
					{
						"str":1
					},
					{
						"dex":1
					}
				],
				"replies":[
					
				]
				
			},
			{
				"text":"Der Dschinn versucht, deinen Wunsch ohne überraschte Mine zu erwirken. Nachdem du das Zeug tatsächlich gegessen hast, fühlst du dich bereit, Merkel in den Arsch zu treten... oder ihr den Kopf mit sandpapier-artiger Zunge kaputtzulecken.",
				"reply":"Zwiebelsuppe mit 5kg Salz",
				"condition":{
					
				},
				"rewards":[
					{
						"int":1
					},
					{
						"str":2
					},
					{
						"dex":1
					}
				],
				"replies":[
					
				]
				
			},
			{
				"text":"Der Dschinn ist empört darüber, dass du mächtiger sein willst als er. Er verwandelt dich aus Rache versehentlich in einen Titanen. Du stampfst ihn daraufhin tot und verwandelst dich zurück. Diesen Dschinn konnte eh niemand leiden!",
				"reply":"Unendliche Macht und Magie",
				"condition":{
					
				},
				"rewards":[
					{
						"int":1
					},
					{
						"str":1
					},
					{
						"dex":2
					}
				],
				"replies":[
					
				]
				
			}
			
		],
		"rewards":[
			
		]
		
	},
	"24":{
		"text":"Schon einmal vom den angepissten Hausfrauen der Raktagron-Ebene gehört? Die auch nicht, ABER sie schlagen genauso hart zu, wie sie unwissend sind! Sie sind verdammt wütend, dass du den Müll nicht rausgebracht hast!",
		"image":"boss.png",
		"replies":[
			
		],
		"rewards":[
			{
				"fight":[
					"witch","witch"
				]
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
		]
		
	},
	"25":{
		"text":"Das geilste Reittier, dass es in Rollenspielen zu finden gibt, liegt tot vor dir - ein schwarzer übergroßer Panther.",
		"image":"boss.png",
		"replies":[
			{
				"text":"Für einige Sekunden fühlst du dich wie ein wahrer Cowboy, doch dann fällt dir auf, dass dich eine Gruppe Kindergartenkinder beobachtet. Peinlich berührt ziehst du weiter.",
				"reply":"Ignorieren, dass er tot ist und trotzdem auf ihm reiten.",
				"condition":{
					
				},
				"rewards":[
					{
						"int":1
					},
					{
						"str":1
					},
					{
						"dex":2
					},
					{
						"item":["trabbelhufe_des_trippers"]
					},
					{
						"hp":80
					},
					{
						"mana":10
					}
				],
				"replies":[
					
				]
				
			},
			{
				"text":"Luke Skywalker hat es damals aus der Not heraus gemacht. Du machst es, weil du ein total kranker Typ bist. Erfahrungspunkte gibt es trotzdem!",
				"reply":"Ihn aufschneiden und reinlegen.",
				"condition":{
					
				},
				"rewards":[
					{
						"int":1
					},
					{
						"str":2
					},
					{
						"dex":1
					},
					{
						"item":["mettwurststiefeletten"]
					},
					{
						"hp":80
					},
					{
						"mana":10
					}
				],
				"replies":[
					
				]
				
			},
			{
				"text":"Stinkt, blutet und verursacht Angst. Es ist aber kein Item namens 'Verwester Panther-Kopf-Helm' vorgesehen, tut uns leid.",
				"reply":"Aus seinem Kopf einen Helm schnitzen.",
				"condition":{
					
				},
				"rewards":[
					{
						"int":3
					},
					{
						"str":1
					},
					{
						"dex":1
					},
					{
						"item":["standard_boots_int"]
					},
					{
						"hp":80
					},
					{
						"mana":10
					}
				],
				"replies":[
					
				]
				
			},
			{
				"text":"Dir fällt auf halbem Wege auf, dass du gar nicht Zorro bist. Du willst aus dem 'Z' erst ein 'F' und dann doch wieder ein 'W' machen. Am Ende ist der Leib völlig zerfetzt und dein Unterfangen scheitert.",
				"reply":"Als Warnung aufhängen und ein 'Z' in ihn schnitzen.",
				"condition":{
					
				},
				"rewards":[
					{
						"int":2
					},
					{
						"str":1
					},
					{
						"dex":1
					},
					{
						"item":["sandalen_mit_socken"]
					},
					{
						"hp":80
					},
					{
						"mana":10
					}
				],
				"replies":[
					
				]
				
			}
			
		],
		"rewards":[
			
		]
		
	},
	"26":{
		"text":"Im Untergeschoss einer verfallenen Tavernenruine findest du ein düsteres, mit grünen Kerzen beleuchtetes Kellergewölbe. Beim Betreten wendet sich eine schwarz vermummte Person an dich. Person:'Seid gegrüßt, wir sind ehemalige Totenbeschwörer, die alles für einen Schu... äh... Schluck Schwarzwein tun. ALLES!'",
		"image":"boss.png",
		"replies":[
			{
				"text":"Du erinnerst dich daran, dass du auf deinem letzten Auftrag noch diese Probe aus dem verseuchten Teich eingesammelt hast. Konsistenz und Farbe stimmen überein. Der merkt das nie!",
				"reply":"Fake-Wein verkaufen",
				"condition":{
					
				},
				"rewards":[
					{
						"int":2
					},
					{
						"str":1
					},
					{
						"dex":2
					},
					{
						"item":["sandalen_mit_socken"]
					},
					{
						"hp":80
					},
					{
						"mana":10
					}
				],
				"replies":[
					
				]
				
			},
			{
				"text":"Mit Schwarzwein kannst du nicht dienen, aber du hast einen halbgelutschten Pfefferminz in der Tasche!",
				"reply":"Kein Schwarzwein, aber Pfefferminz!",
				"condition":{
					
				},
				"rewards":[
					{
						"int":1
					},
					{
						"str":2
					},
					{
						"dex":1
					},
					{
						"item":["mettwurststiefeletten"]
					},
					{
						"hp":80
					},
					{
						"mana":10
					}
				],
				"replies":[
					
				]
				
			},
			{
				"text":"Du dachtest schon, die Schuhe könntest du wegschmeißen, aber was diese Totenbeschwörer mit ein wenig Spucke und einem Lappen alles hinbekommen. Sagenhaft! Sogar der Kaugummi ist raus!",
				"reply":"Wirklich ALLES?",
				"condition":{
					
				},
				"rewards":[
					{
						"int":1
					},
					{
						"str":1
					},
					{
						"dex":2
					},
					{
						"item":["trabbelhufe_des_trippers"]
					},
					{
						"hp":80
					},
					{
						"mana":10
					}
				],
				"replies":[
					
				]
				
			}
			
		],
		"rewards":[
			
		]
		
	},
	"27":{
		"text":"Du bist in eine Ratsitzung von Golems gestolpert. Sie diskutieren seit 15.000 Jahren und brauchen Monate für einen Satz. Zu deinem Unglück hast du sie mittendrin unterbrochen. Schlechte Idee!",
		"image":"boss.png",
		"replies":[
			
		],
		"rewards":[
			{
				"fight":[
					"golem","golemlead","golem"
				]
			},
			{
				"int":2
			},
			{
				"str":2
			},
			{
				"dex":2
			},
			{
				"item":["trabbelhufe_des_trippers"]
			},
			{
				"hp":80
			},
			{
				"mana":10
			}
]
		
	},
	"28":{
		"text":"Du steigst die letzten Stufen den Berg hinauf und hast es fast geschafft, da erscheint die gute Fee. Fee: 'Ich bin stolz auf dich! Wenn ich ehrlich bin, hätte ich nicht gedacht, dass du es soweit schaffst. Wollen wir doch mal sehen, was du drauf hast!' Mit diesen Worten holt sie einen riesigen Knüppel hevor und drischt auf dich ein.",
		"image":"boss.png",
		"replies":[
			
		],
		"rewards":[
			{
				"fight":[
					"fairy"
				]
			},
			{
				"int":2
			},
			{
				"str":2
			},
			{
				"dex":2
			},
			{
				"item":["moebiusstreifen"]
			},
			{
				"item":["der_eine_ring"]
			},
			{
				"hp":80
			},
			{
				"mana":10
			}
		]
		
	},
	"29":{
		"text":"Du steigst die letzten Stufen den Berg hinauf und hast es fast geschafft, da erscheint die gute Fee. Fee: 'Ich bin stolz auf dich! Wenn ich ehrlich bin, hätte ich nicht gedacht, dass du es soweit schaffst. Wollen wir doch mal sehen, was du drauf hast!' Mit diesen Worten holt sie einen riesigen Knüppel hevor und drischt auf dich ein.",
		"image":"boss.png",
		"replies":[
			
		],
		"rewards":[
			{
				"fight":[
					"fairy"
				]
			},
			{
				"int":2
			},
			{
				"str":2
			},
			{
				"dex":2
			},
			{
				"item":["dampfhammeruhr"]
			},
			{
				"item":["der_eine_ring"]
			},
			{
				"hp":80
			},
			{
				"mana":10
			}
		]
		
	},
	"30":{
		"text":"Du steigst die letzten Stufen den Berg hinauf und hast es fast geschafft, da erscheint die gute Fee. Fee: 'Ich bin stolz auf dich! Wenn ich ehrlich bin, hätte ich nicht gedacht, dass du es soweit schaffst. Wollen wir doch mal sehen, was du drauf hast!' Mit diesen Worten holt sie einen riesigen Knüppel hevor und drischt auf dich ein.",
		"image":"boss.png",
		"replies":[
			
		],
		"rewards":[
			{
				"fight":[
					"fairy"
				]
			},
			{
				"int":2
			},
			{
				"str":2
			},
			{
				"dex":2
			},
			{
				"item":["dubstep-ring"]
			},
			{
				"item":["der_eine_ring"]
			},
			{
				"hp":80
			},
			{
				"mana":10
			}
		]
		
	},
	"31":{
		"text":"WIE?! Aus welchem Loch bist du denn gekrochen gekommen? Na egal, ich werde dich wegrationalisieren und Neuland aus dir machen!",
		"image":"boss.png",
		"replies":[
			
		],
		"rewards":[
			{
				"fight":[
					"angelika"
				]
				
			}
			
		]
		
	},
	
}
;