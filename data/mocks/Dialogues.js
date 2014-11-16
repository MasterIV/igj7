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
		"text":"Das Letzte, an das du dich noch erinnerst, ist Angelika über dir und ein wildes Amazonenjodeln in deinen Ohren, bis das Dunkeln dich umhüllt. Als du wieder zu Besinnung kommst, funkelt dir eine niedliche Fee entgegen, welche jedoch mit deiner Leistung absolut nicht zufrieden zu sein scheint. Fee: 'WAS ZUR HÖLLE WAR DAS DENN? So eine jämmerliche Darbietung habe ich lange nicht mehr gesehen. Ab zurück auf die Trainingsbank! Und bevor du dich in die Welt stürzt, mach dich mit deinen Attributen und dem Inventar vertraut! GOD DAMN IT!",
		"image":"fee.png",
		"replies":[
			
		],
		"rewards":[
			{
				"int":13
			},
			{
				"str":13
			},
			{
				"dex":13
			},
			{
				"hp":45
			}
			
		]
		
	},
	"2":{
		"text":"Du kommst an eine große Brücke, auf der dir ein Wächter den Weg versperrt. Er ruft: 'Haltet ein! Wer wandelt hier durch Nacht und Wind?'",
		"image":"bruecke.png",
		"replies":[
			{
				"text":"Denkst du ich bin ein Idiot? Ich kann von hier deine Beinhaarstoppel sehen!",
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
						"text":"Wächter: 'Richtig! Nächste Frage. Was begehrt ihr?'",
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
				"text":"Du setzt einen Fuß hinter den anderen, bemerkst jedoch zu spät, dass du in eine klebrige, rosa Flüßigkeit getreten bist. Diese verströmt einen vertrauten Geruch von Liebestrank! Plötzlich attackiert euch eine verliebt aussehende Hexe aus dem Gebüsch an!",
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
				"text":"Du bemerkst sofort, dass die Hexe eine Falle gestellt und sich daraufhin in ihrer eigenen Tollpatschigkeit selbst mit einem Liebestrank übergossen hat. Du gibst dich als auf Liebestränke spezialisierter Alchemist aus und überredest sie dir ihre restlichen Wertgegenstände für eine Heilung zu geben!",
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
				"text":"Du entdeckst eine alte Hexe, dich direkt mit verliebten Augen ansieht. Ihr Held ist da und sie schenkt dir direkt ein Amulett als Verlobungsgeschenk!",
				"reply":"Gewiss eine holde Maid! Sie braucht meine harte Brust zum anschmiegen!",
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
		"text":"Schon von weitem erkennst du eine lange Schleifspur auf dem Boden, die recht schnell in einem Einschlagskrater mündet. Als du näher kommst, humpelt dir aus den Überresten einer Rakete ein in Lumpen gekleideter Gnom entgegen. Gnom: 'Haltet ein Reisender, mein Interinselflug ist leider auf dieser Insel abgestürzt und ich habe kein Ticket, um weiter zu reisen! Kannst du mir helfen?'",
		"image":"boss.png",
		"replies":[
			{
				"text":"Gnome:'Habt dank!' Auch wenn deine Beine viel länger sind, kann ich dir sicher beibringen sie jemanden in den Weg zu stellen! ",
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
		"text":"Heißer Dampf schlägt dir entgegen und du merkst, dass dein Weg dich in das städtische Badehaus geführt hat. Aber die Gilde der verboten reichen Füllereiliebhaber hat alle Wasserbecken belegt. Sie sehen dich fragend an, als du hinsteigen willst.",
		"image":"boss.png",
		"replies":[
			{
				"text":"'Mit Gewalt geht alles!' Du holst Anlauf und springst kopfüber in die Falte vom Vorsitzenden. Ein wenig Platz schaffen und die Sache passt. Klasse Training!",
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
						"item":["hp_potion"]
					}
					
				],
				"replies":[
					
				]
				
			},
			{
				"text":"Du kannst garnicht so schnell gucken, wie die Becken leer sind, aber leider auch das Wasser...",
				"reply":"'Draußen verteilt wer goldene Minzblätter!'",
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
						"item":["hp_potion"]
					}
					
				],
				"replies":[
					
				]
				
			},
			{
				"text":"Wie es der Natur dieser reichen Säcke entspricht, respektieren sie nur Klunker und dein einfach 'Bling Bling' ist stärker!",
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
		"text":"Du kommst an eine Farm. Im Hintergrund hüpfen glückliche Schäfchen und ein pfeifender Elf begrüßt euch freundlich! Während er seinem Lieblingssbock einnen Pferdeschwanz flechtet, guckt er dich neugierig an.",
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
						"item":["hp_potion"]
					}
					
				],
				"replies":[
					
				]
				
			},
			{
				"text":"Nachdem du ihn eine halbe Stunde eingelullet und sogar 'Liebe und Harmonie' in Deutungstanz vorgführt hast gibt er nach!",
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
						"item":["hp_potion"]
					}
				],
				"replies":[
					
				]
				
			},
			{
				"text":"Du wusstest du hast Talent für sowas, aber wie zur Hölle konntest du selbst mit eingeflechtet?",
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
						"item":["hp_potion"]
					}
				],
				"replies":[
					
				]
				
			},
			{
				"text":"Er ist geblendet von soviel Naturkompetenz. Nachdem ich auch die neusten Goblin-Sammelkarten ausgetauscht habt, ziehst du von Dannen!",
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
				"hp":80
			},
			{
				"item":["hp_potion"]
			}
		]
		
	},
	"8":{
		"text":"Du machst dich bereit und spürst die Vorfreude einer Schlacht in dir aufflammen, als in der Ferne das Klirren von Waffen und Knallen von Musketen ertönt. Als du jedoch durch das Gebüsch auf eine Lichtung tritts stehen dort nur drei schäbig bewaffnete Menschen. Naja, Schlacht ist Schlacht!",
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
				"text":"Du bist nicht allein! Als du dich in einem hohen Bogen den wabernden Schwaden näherst siehst du schähmenhafte Umrisse. Aber Herje, es entpuppen sich als ein behaarter Holzfäller, sein Pferd und die zwei angepissten Schafe Jeff und Tom aus Connecticut.",
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
				"text":"Die in Dampf verhüllten Gestalten bemerken dich nicht und kannst ruhig alles mitnehmen, was von Wert ist.",
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
				"text":"Du kriechst bist auf wenige Meter heran, wirst aber von einem Hinweisschild aufgehalten, dass unmissverständlich erklärt, dass dies eine FKK-Quelle ist. Schade, aber immerhin konntest du die Gespräche belauschen und etwas orkisch lernen...",
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
		"text":"Du weißt von einem elfischen Versuchslabor, dass interessante Versuche an reitbaren Bienen durchführen soll. Als du dich jedoch frohen Mutes auf den Weg machst, kommt dir ein riesiger Schwarm mutierter Mücken in Form einer Person entgegen.",
		"image":"boss.png",
		"replies":[
			{
				"text":"Bei ihrer Schaffung haben die Elfen wohl einen Mali auf Bewegungsreichweite erwürfelt. Du hast keine Probleme abzuhauen. Gut für dich!",
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
				"text":"Als du ohne Drohgebärden an den Schwarm herantritts, erweisen sich diese als sehr kultiviert und außerordentlich gebildet! Sie erörtern mit dir die Vorteile von Schwarmintelligenz und blutreicher Nahrung.",
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
		"text":"'Wuuuhuuuuuuuu...' ein schrillendes Rufen weckt dich aus deinen Reiseträumen. Du schaust dich um, kannst aber niemand finden bis dir etwas großes Rundes vor die Linsen fliegt. Aber was zum Teufel ist das? Es ist eine Miniform der guten Fee, aber scheint diese gegessen zu haben. Gut gelaunt erfüllt sie dir einen Wünsch.",
		"image":"boss.png",
		"replies":[
			{
				"text":"Ein klasse Wunsch! Sie erzählt dir stundenlang Anekdoten außer ihrer Zeit als Wirtin Goldwalds Kneipe 'Zum stolzen Löwen'",
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
					}
				],
				"replies":[
					
				]
				
			},
			{
				"text":"Eine harte Nuss, da sich viel Erfahrung damit hat Leute übers Ohr zu hauen, aber keine Fee kann etwas gegen eine Doppelwunsch-Versicherung einwenden!",
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
					}
				],
				"replies":[
					
				]
				
			},
			{
				"text":"Sie hat da noch so eine dicke Uhr von ihrer Tante TingelTangelbob. Die kannst haben!",
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
		"text":"Niemand weiß, wie es Alibaba und seine tausend Kumpels es auf diese Insel verschlagen hat, aber es scheint hart gewesen zu sein. Sie sind nurnoch zu dritt.",
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
			}
		]
		
	},
	"13":{
		"text":"Eine friedliche, unschuldige, blumige Wiese in reinem Sonnenlicht. Hier passiert dir nichts böses!",
		"image":"boss.png",
		"replies":[
			
		],
		"rewards":[
			
		]
		
	},
	"14":{
		"text":"Eine Gang aus Händlern belagert die Straße. Aus dem Durcheinander aus Beatboxing und 'Digga' vermeinst du zu hören, dass du 'fett krass was abkaufen musst, um auf die Westside zu kommen'. Zum Glück hast du noch etwas Taschengeld übrig. Was soll es sein?",
		"image":"boss.png",
		"replies":[
			{
				"text":"Auf Elfen ist verlass, ihr Stoff gibt Erinnerungen aus mindestens sieben Leben.",
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
					}
				],
				"replies":[
					
				]
				
			},
			{
				"text":"Tiefer gelegte Lasttiere haben seit jeher zu langen Stauß geführt, aber damn... sitzen die Puschen tight!",
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
					}
				],
				"replies":[
					
				]
				
			},
			{
				"text":"Ich bin raus...",
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
		"text":"El'Orko del diablo hat sein Lager am Wegesrand aufgeschlagen. An dieser Gelegenheit kommst du noch vorbei!",
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
			}
		]
		
	},
	"16":{
		"text":"Je weiter des Weges du kommst, desto größere Scharen an Menschen umgeben dich. Als du dich gerade fragst, ob du immernoch etwas Liebestrank von der Hexe am Schuh hast, siehst du die Fahnen und Schilder vom großen Dampflasterrennen. Es werden noch lebensmüde Fahrer gesucht. Was tust du?",
		"image":"boss.png",
		"replies":[
			{
				"text":"Zur deiner Überraschung wirst du genommen. Deine Aufgabe besteht in einer Runde 'Angsthase' gegen einen Dachs. Bremst du, oder hälst du drauf?",
				"reply":"Fahrer? ICH ICH ICH!",
				"condition":{
					
				},
				"rewards":[
					
				],
				"replies":[
					{
						"text":"Du hast nicht mehr alle Tassen im Schrank! Jeder weiß, was Dachse sie Berseker der Straße sind. Es wird niemand erfahren, ob es daher rührt, dass er nicht ans Lenkrad kam, oder die Welt einfach nur brennen sehen wollte. Auf jeden Fall kracht ihr voll zusammen und du kannst dich glücklich schätzen mit dem Leben davon zu kommen!",
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
						"text":"Zwei Idioten, ein Gedanke. Ihr beiden weicht beide aus und kracht in die Beplankung. Zu deinem Glück warst du eine Sekunde langsamer und hast so gewonnen!",
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
				"text":"Das Preisgeld wäre größer, aber in fremden Taschen finden sich auch interessante Sachen.",
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
		"text":"Die Straße wird von einer Meute wütender Goblinangesteller belagert. Ihr Vorsitzender stellt sich als Vorsitzender der Gewerkschaft 'Goblinische Diener Lebenslang' vor und fordert von allen Durchreisenden drei Prozent mehr Wegsteuer plus das Recht auch Orks vertreten zu dürfen.",
		"image":"boss.png",
		"replies":[
			{
				"text":"Trotz ihrer Größe haben Goblins erstaunlich scharfe Zähne. Sie stürzen sich auf dich!",
				"reply":"'Drei Prozent von Nichts sind Haue. Auf sie!'",
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
				"text":"Goblins lieben Gold. Du BIST Gold! Nimm mit...",
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
		"text":"Du kommst an eine zerstörte Burg, in welcher der ehemalige Burgherr von Söldnern belagert wird. Hilfst du den Söldnern, oder dem Burgherrn?",
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
				"text":"Ein lautes Gröhlen erscheint, als du dich den Herrscharen anschließt!",
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
		"text":"Als du unbesorgt deines Weges gehst, hörst du einen kläglichen Hilferuf aus der Nähe. Eine Suche bringt einen Zauberer in einer magischen Blase zu Tage. Zauberer:'Stop... Stop. Bitte lauft nicht weg! Ich hatte leider ein kleines Missgeschick bei meinem letzten Experiment. Könnt ihr mir helfen? Ihr müsst nur diesen Hebel dort betätigen!'",
		"image":"boss.png",
		"replies":[
			{
				"text":"Ihr legt den Hebel um, bemerkt jedoch zu spät, dass um den Hebel herum ein Haufen Menschenknochen verstreut liegt. Mit einem Knall erscheinen drei blutrünstige Schafe und fallen euch an. Während ihr in den Kampf stürtzt hört ihr noch die gehässige Stimme des Zauberers: 'Jaaa, meine Lieblings. Es ist Fressizeit!'",
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
					}					
				],
				"replies":[
					
				]
				
			},
			{
				"text":"Rechtzeitig bemerkt ihr, dass um den Hebel herum ein Haufen Menschenknochen liegt. Ihr lasst den Zauberer hocken und durchwühlt stattdessen den Haufen.",
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
					}	
					
				],
				"replies":[
					
				]
				
			},
			{
				"text":"Zauberer in magischen Blasen waren dir immer suspekt!",
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
		"text":"Je weiter des Weges du kommst, desto größere Scharen an Menschen umgeben dich. Als du dich gerade fragst, ob du immernoch etwas Liebestrank von der Hexe am Schuh hast, siehst du die Fahnen und Schilder vom großen Dampflasterrennen. Es werden noch lebensmüde Fahrer gesucht. Was tust du?",
		"image":"boss.png",
		"replies":[
			{
				"text":"Zur deiner Überraschung wirst du genommen. Deine Aufgabe besteht in einer Runde 'Angsthase' gegen einen Dachs. Bremst du, oder hälst du drauf?",
				"reply":"Fahrer? ICH ICH ICH!",
				"condition":{
					
				},
				"rewards":[
					
				],
				"replies":[
					{
						"text":"Du hast nicht mehr alle Tassen im Schrank! Jeder weiß, was Dachse sie Berseker der Straße sind. Es wird niemand erfahren, ob es daher rührt, dass er nicht ans Lenkrad kam, oder die Welt einfach nur brennen sehen wollte. Auf jeden Fall kracht ihr voll zusammen und du kannst dich glücklich schätzen mit dem Leben davon zu kommen!",
						"reply":"(Draufhalten)",
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
							}	
							
						],
						"replies":[
							
						]
					},
					{
						"text":"Zwei Idioten, ein Gedanke. Ihr beiden weicht beide aus und kracht in die Beplankung. Zu deinem Glück warst du eine Sekunde langsamer und hast so gewonnen!",
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
								"dex":3
							},
							{
								"item":["panfloetenmaske"]	
							},
							{
								"hp":80
							}
							
						],
						"replies":[
							
						]
					}
				]
				
			},
			{
				"text":"Das Preisgeld wäre größer, aber in fremden Taschen finden sich auch interessante Sachen.",
				"reply":"Massen an Menschen schaffen Möglichkeiten",
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
		"text":"Als du unbesorgt deines Weges gehst, hörst du einen kläglichen Hilferuf aus der Nähe. Eine Suche bringt einen Zauberer in einer magischen Blase zu Tage. Zauberer:'Stop... Stop. Bitte lauft nicht weg! Ich hatte leider ein kleines Missgeschick bei meinem letzten Experiment. Könnt ihr mir helfen? Ihr müsst nur diesen Hebel dort betätigen!'",
		"image":"boss.png",
		"replies":[
			{
				"text":"Ihr legt den Hebel um, bemerkt jedoch zu spät, dass um den Hebel herum ein Haufen Menschenknochen verstreut liegt. Mit einem Knall erscheinen drei blutrünstige Schafe und fallen euch an. Während ihr in den Kampf stürtzt hört ihr noch die gehässige Stimme des Zauberers: 'Jaaa, meine Lieblings. Es ist Fressizeit!'",
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
					}	
				],
				"replies":[
					
				]
				
			},
			{
				"text":"Rechtzeitig bemerkt ihr, dass um den Hebel herum ein Haufen Menschenknochen liegt. Ihr lasst den Zauberer hocken und durchwühlt stattdessen den Haufen.",
				"reply":"(Hebel betrachten)",
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
					}
				],
				"replies":[
					
				]
				
			},
			{
				"text":"Zauberer in magischen Blasen waren dir immer suspekt!",
				"reply":"(Weggehen)",
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
		"text":"Eine Gang aus Händlern belagert die Straße. Aus dem Durcheinander aus Beatboxing und 'Digga' vermeinst du zu hören, dass du 'fett krass was abkaufen musst, um auf die Westside zu kommen'. Zum Glück hast du noch etwas Taschengeld übrig. Was soll es sein?",
		"image":"boss.png",
		"replies":[
			{
				"text":"Auf Elfen ist verlass, ihr Stoff gibt Erinnerungen aus mindestens sieben Leben.",
				"reply":"Voll deeper shit",
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
				"text":"Tiefer gelegte Lasttiere haben seit jeher zu langen Stauß geführt, aber damn... sitzen die Puschen tight!",
				"reply":"Krasse Maultierfelgen",
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
				"text":"Ich bin raus...",
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
						"dex":2
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
		"text":"'Wuuuhuuuuuuuu...' ein schrillendes Rufen weckt dich aus deinen Reiseträumen. Du schaust dich um, kannst aber niemand finden bis dir etwas großes Rundes vor die Linsen fliegt. Aber was zum Teufel ist das? Es ist eine Miniform der guten Fee, aber scheint diese gegessen zu haben. Gut gelaunt erfüllt sie dir einen Wünsch.",
		"image":"boss.png",
		"replies":[
			{
				"text":"Ein klasse Wunsch! Sie erzählt dir stundenlang Anekdoten außer ihrer Zeit als Wirtin Goldwalds Kneipe 'Zum stolzen Löwen'",
				"reply":"Das Wissen der Welt",
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
				"text":"Kein Problem. Madame Tickerbell hat den besten Stoff.",
				"reply":"Ost-Mallorcanisches Vitamin B",
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
				"text":"Eine harte Nuss, da sich viel Erfahrung damit hat Leute übers Ohr zu hauen, aber keine Fee kann etwas gegen eine Doppelwunsch-Versicherung einwenden!",
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
		"text":"Schon einmal vom den angepissten Hausfrauen der Raktagron-Ebene gehört? Die auch nicht, ABER sie schlagen genauso zu! Denn sie sind verdammt wütend, dass du den Müll nicht rausgebracht hast!",
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
		"text":"Du weißt von einem elfischen Versuchslabor, dass interessante Versuche an reitbaren Bienen durchführen soll. Als du dich jedoch frohen Mutes auf den Weg machst, kommt dir ein riesiger Schwarm mutierter Mücken in Form einer Person entgegen.",
		"image":"boss.png",
		"replies":[
			{
				"text":"Bei ihrer Schaffung haben die Elfen wohl einen Mali auf Bewegungsreichweite erwürfelt. Du hast keine Probleme abzuhauen. Gut für dich!",
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
					},
					{
						"item":["trabbelhufe_des_trippers"]
					},
					{
						"hp":80
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
					},
					{
						"item":["mettwurststiefeletten"]
					},
					{
						"hp":80
					}
				],
				"replies":[
					
				]
				
			},
			{
				"text":"Als du ohne Drohgebärden an den Schwarm herantritts, erweisen sich diese als sehr kultiviert und außerordentlich gebildet! Sie erörtern mit dir die Vorteile von Schwarmintelligenz und blutreicher Nahrung.",
				"reply":"Nach dem Weg fragen.",
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
					}
				],
				"replies":[
					
				]
				
			},
			{
				"text":"Das Gold interessiert sie nicht, aber deine Zähne sondern soviel Wasserstoff-Peroxid ab, dass diese ganz nebelt auf deine Wünsche eingehen.",
				"reply":"Mücken stehen auf Gold. Weiß jeder!",
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
		"text":"Im Untergeschoss einer verfallenen Tavernenruine findest du ein düsteres, mit grünen Kerzen beleuchtetes Kellergewölbe. Beim Betreten wendet sich eine schwarz vermummte Person auch euch: Person:'Seid gegrüßt, wir sind ehemalige Totenbeschwörer die alles für einen Schu... äh... Schluck Schwarzwein tun. ALLES!'",
		"image":"boss.png",
		"replies":[
			{
				"text":"Ihr erinnert euch daran, dass ihr auf eurem letzten Auftrag noch diese Probe aus dem verseuchten Teich einsammeln solltet. Konsistenz und Farbe stimmen überein. Der merkt das nie!",
				"reply":"Fakewein verkaufen",
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
					}
				],
				"replies":[
					
				]
				
			},
			{
				"text":"Mit Schwarzwein könnt ihr nicht dienen, aber ihr habt einen halbgelutschten Pfefferminz in der Tasche!",
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
					}
				],
				"replies":[
					
				]
				
			},
			{
				"text":"Ihr dachtet schon die Schuhe könnt ihr wegschmeißen, aber was diese Totenbeschwörer mit ein wenig Spucke und einem Lappen alles hinbekommen. Sagenhaft! Sogar der Kaugummi ist raus!",
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
			}
]
		
	},
	"28":{
		"text":"Du steigst die letzten Stufen den Berg hinauf und hast es fast geschafft, da erscheint die gute Fee. Fee:'Ich bin stolz auf dich! Wenn ich ehrlich bin, hätte ich nicht gedacht, dass du es soweit schaffst. Wollen wir doch mal sehen, was du drauf hast' Mit diesen Worten holt sie einen riesigen Knüppel hevor und drischt auf dich ein.",
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
			}
		]
		
	},
	"29":{
		"text":"Du steigst die letzten Stufen den Berg hinauf und hast es fast geschafft, da erscheint die gute Fee. Fee:'Ich bin stolz auf dich! Wenn ich ehrlich bin, hätte ich nicht gedacht, dass du es soweit schaffst. Wollen wir doch mal sehen, was du drauf hast' Mit diesen Worten holt sie einen riesigen Knüppel hevor und drischt auf dich ein.",
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
			}
		]
		
	},
	"30":{
		"text":"Du steigst die letzten Stufen den Berg hinauf und hast es fast geschafft, da erscheint die gute Fee. Fee:'Ich bin stolz auf dich! Wenn ich ehrlich bin, hätte ich nicht gedacht, dass du es soweit schaffst. Wollen wir doch mal sehen, was du drauf hast' Mit diesen Worten holt sie einen riesigen Knüppel hevor und drischt auf dich ein.",
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
			}
		]
		
	},
	"31":{
		"text":"WIE?! Aus welchem Loch bist du denn gekrochen gekommen? Na egal, ich werde dich weg rationalisieren!",
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