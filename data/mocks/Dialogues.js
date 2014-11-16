var dialogDefinitions={
	"0":{
		"text":"Die Partei der strahlend polierten Dampfzwerg hat dich um Hilfe gebeten. Ein seit tausend Jahren schlafendes Monstrum hat sich erhoben, um ihr Urlaubsparadies Malorca zu vernichten. Du wurdest gerufen, um sie zu verteidigen. Angelika steht dir in ihrer vollen Pracht gegenüber und ist für den Kampf bereit!",
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
		"text":"Das letzte an das du dich noch erinnerst ist Angelika über dir und ein wildes Amazonenjodeln. Als du wieder zu dir kommst funkelt dir eine niedliche Fee entgegen, die jedoch absolut nicht zufrieden zu sein scheint. Fee: 'WAS ZUR HÖLLE WAS DAS DENN? So eine jämmerliche Show habe ich lange nicht mehr gesehen. Ab auf die Trainingsbank!'",
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
			},
			{
				"hp":100
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
						"fight":[
							"brueckenwaechter"
						]
						
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
								"fight":[
									"brueckenwaechter"
								]
								
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
								"fight":[
									"brueckenwaechter"
								]
								
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
										"int":9
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
										"int":3
									},
									{
										"str":3
									},
									{
										"dex":9
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
										"int":3
									},
									{
										"str":9
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
										"fight":[
											"brueckenwaechter"
										]
										
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
						"fight":[
							"hexe"
						]
						
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
				},
				"rewards":[
					{
						"int":9
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
						"str":9
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
		"text":"Schon von weitem erkennst du eine lange Schleifspur auf dem Boden, die recht schnell in einem Einschlagskrater endet. Als du näher kommst, humpelt dir aus den Überresten einer Rakete ein in Lumpen gekleideter Gnom entgegen. Gnom: 'Haltet ein Reisender, mein Interinselflug ist leider auf dieser Insel abgestürzt und ich habe kein Ticket, um weiter zu reisen! Kannst du mir helfen?'",
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
						"dex":9
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
						"str":3
					},
					{
						"dex":3
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
				"text":"Wenn dein Schulmathe richtig ist, geht das Wasservolumen gegen Null! Der Rest ist Schweiß.",
				"reply":"'Archimedes! Berechne das übrige Volumen!'",
				"condition":{
					"int":20
				},
				"rewards":[
					{
						"int":2
					}
					
				],
				"replies":[
					
				]
				
			},
			{
				"text":"(Questtext 2b)",
				"reply":"'Draußen verteilt wer goldene Minzblätter!'",
				"condition":{
					
				},
				"rewards":[
					{
						"str":3
					},
					{
						"dex":3
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
					
				],
				"replies":[
					
				]
				
			},
			{
				"text":"Du wusstest du hast Talent für sowas, aber wie zur Hölle konntest du selbst mit eingeflechtet?",
				"reply":"Helf ihm mit den Zöpfen.",
				"condition":{
					
				},
				"rewards":[
					
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
					
				],
				"replies":[
					
				]
				
			}
			
		],
		"rewards":[
			
		]
		
	},
	"7":{
		"text":"Du hast davon gehört. Spinnen sind grauselige Gegner, aber je mehr Beine, desto mehr Ringe, oder?",
		"image":"boss.png",
		"replies":[
			
		],
		"rewards":[
			{
				"fight":["spider","spider"]
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
				"fight":["roboter2"]
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
			}
		]
		
	},
	"13":{
		"text":"Du weißt von einem elfischen Versuchslabor, dass interessante Versuche an reitbaren Bienen durchführen soll. Als du dich jedoch frohen Mutes auf den Weg machst, kommt dir ein riesiger Schwarm mutierter Mücken in Form einer Person entgegen.",
		"image":"boss.png",
		"replies":[
			{
				"text":"Bei ihrer Schaffung haben die Elfen wohl einen Mali auf Bewegungsreichweite erwürfelt. Du hast keine Probleme abzuhauen. Gut für dich!",
				"reply":"Das ist mir nicht geheuer... lieber weg!",
				"condition":{
					
				},
				"rewards":[
					
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
					
				],
				"replies":[
					
				]
				
			}
			
		],
		"rewards":[
			
		]
		
	},
	"14":{
		"text":"Du weißt von einem elfischen Versuchslabor, dass interessante Versuche an reitbaren Bienen durchführen soll. Als du dich jedoch frohen Mutes auf den Weg machst, kommt dir ein riesiger Schwarm mutierter Mücken in Form einer Person entgegen.",
		"image":"boss.png",
		"replies":[
			{
				"text":"Bei ihrer Schaffung haben die Elfen wohl einen Mali auf Bewegungsreichweite erwürfelt. Du hast keine Probleme abzuhauen. Gut für dich!",
				"reply":"Das ist mir nicht geheuer... lieber weg!",
				"condition":{
					
				},
				"rewards":[
					
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
					
				],
				"replies":[
					
				]
				
			}
			
		],
		"rewards":[
			
		]
		
	},
	"15":{
		"text":"Du weißt von einem elfischen Versuchslabor, dass interessante Versuche an reitbaren Bienen durchführen soll. Als du dich jedoch frohen Mutes auf den Weg machst, kommt dir ein riesiger Schwarm mutierter Mücken in Form einer Person entgegen.",
		"image":"boss.png",
		"replies":[
			{
				"text":"Bei ihrer Schaffung haben die Elfen wohl einen Mali auf Bewegungsreichweite erwürfelt. Du hast keine Probleme abzuhauen. Gut für dich!",
				"reply":"Das ist mir nicht geheuer... lieber weg!",
				"condition":{
					
				},
				"rewards":[
					
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
					
				],
				"replies":[
					
				]
				
			}
			
		],
		"rewards":[
			
		]
		
	},
	"16":{
		"text":"Du weißt von einem elfischen Versuchslabor, dass interessante Versuche an reitbaren Bienen durchführen soll. Als du dich jedoch frohen Mutes auf den Weg machst, kommt dir ein riesiger Schwarm mutierter Mücken in Form einer Person entgegen.",
		"image":"boss.png",
		"replies":[
			{
				"text":"Bei ihrer Schaffung haben die Elfen wohl einen Mali auf Bewegungsreichweite erwürfelt. Du hast keine Probleme abzuhauen. Gut für dich!",
				"reply":"Das ist mir nicht geheuer... lieber weg!",
				"condition":{
					
				},
				"rewards":[
					
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
					
				],
				"replies":[
					
				]
				
			}
			
		],
		"rewards":[
			
		]
		
	},
	"17":{
		"text":"Du weißt von einem elfischen Versuchslabor, dass interessante Versuche an reitbaren Bienen durchführen soll. Als du dich jedoch frohen Mutes auf den Weg machst, kommt dir ein riesiger Schwarm mutierter Mücken in Form einer Person entgegen.",
		"image":"boss.png",
		"replies":[
			{
				"text":"Bei ihrer Schaffung haben die Elfen wohl einen Mali auf Bewegungsreichweite erwürfelt. Du hast keine Probleme abzuhauen. Gut für dich!",
				"reply":"Das ist mir nicht geheuer... lieber weg!",
				"condition":{
					
				},
				"rewards":[
					
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
					
				],
				"replies":[
					
				]
				
			}
			
		],
		"rewards":[
			
		]
		
	},
	"18":{
		"text":"Du weißt von einem elfischen Versuchslabor, dass interessante Versuche an reitbaren Bienen durchführen soll. Als du dich jedoch frohen Mutes auf den Weg machst, kommt dir ein riesiger Schwarm mutierter Mücken in Form einer Person entgegen.",
		"image":"boss.png",
		"replies":[
			{
				"text":"Bei ihrer Schaffung haben die Elfen wohl einen Mali auf Bewegungsreichweite erwürfelt. Du hast keine Probleme abzuhauen. Gut für dich!",
				"reply":"Das ist mir nicht geheuer... lieber weg!",
				"condition":{
					
				},
				"rewards":[
					
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
					
				],
				"replies":[
					
				]
				
			}
			
		],
		"rewards":[
			
		]
		
	},
	"19":{
		"text":"Du weißt von einem elfischen Versuchslabor, dass interessante Versuche an reitbaren Bienen durchführen soll. Als du dich jedoch frohen Mutes auf den Weg machst, kommt dir ein riesiger Schwarm mutierter Mücken in Form einer Person entgegen.",
		"image":"boss.png",
		"replies":[
			{
				"text":"Bei ihrer Schaffung haben die Elfen wohl einen Mali auf Bewegungsreichweite erwürfelt. Du hast keine Probleme abzuhauen. Gut für dich!",
				"reply":"Das ist mir nicht geheuer... lieber weg!",
				"condition":{
					
				},
				"rewards":[
					
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
					
				],
				"replies":[
					
				]
				
			}
			
		],
		"rewards":[
			
		]
		
	},
	"20":{
		"text":"Du weißt von einem elfischen Versuchslabor, dass interessante Versuche an reitbaren Bienen durchführen soll. Als du dich jedoch frohen Mutes auf den Weg machst, kommt dir ein riesiger Schwarm mutierter Mücken in Form einer Person entgegen.",
		"image":"boss.png",
		"replies":[
			{
				"text":"Bei ihrer Schaffung haben die Elfen wohl einen Mali auf Bewegungsreichweite erwürfelt. Du hast keine Probleme abzuhauen. Gut für dich!",
				"reply":"Das ist mir nicht geheuer... lieber weg!",
				"condition":{
					
				},
				"rewards":[
					
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
				"fight":[
					"angelika"
				]
				
			}
			
		]
		
	},
	
}
;