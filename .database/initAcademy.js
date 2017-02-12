/*
Run file to Init the database with dummy data

Do
Step 1 -> meteor mongo
Step 2 -> use meteor
Step 3-> load(".database/initAcademy.js")

*/

//Academy
db.academy.drop();
db.createCollection("academy");
db.academy.insert({
	"name": "2016 Fevereiro",
    "date": "2017-02-03T11:51:25.593Z",
    "energyLevel": 0,
    "dailyMessage": "Bem Vindos a Kroilon",
    "homeMessage": "Quarta-feira temos caminhada e não piscina.  Começamos as 8h na porta do hotel ",
    "currentRoom": "Kalu Hall",
    "countDays": 6,
    "teamScore": [
        {
            "date": "Mon Feb 06 2017",
            "countType": "ACTIVITY",
            "name": "Team Balance",
            "points": -200,
            "pointsType": "TP"
        },
        {
            "date": "Wed Feb 08 2017",
            "countType": "ACTIVITY",
            "name": "Scrum da manhã",
            "points": 50,
            "pointsType": "TP"
        },
        {
            "date": "Wed Feb 08 2017",
            "countType": "ACTIVITY",
            "name": "Scrum da tarde",
            "points": 50,
            "pointsType": "TP"
        },
        {
            "date": "Thu Feb 09 2017",
            "countType": "ACTIVITY",
            "name": "Scrum da manhã",
            "points": 50,
            "pointsType": "TP"
        },
        {
            "date": "Thu Feb 09 2017",
            "countType": "ACTIVITY",
            "name": "Penalização ",
            "points": -50,
            "pointsType": "TP"
        },
        {
            "date": "Thu Feb 09 2017",
            "countType": "ACTIVITY",
            "name": "Penalização ",
            "points": -50,
            "pointsType": "TP"
        },
        {
            "date": "Thu Feb 09 2017",
            "countType": "ACTIVITY",
            "name": "Todos a horas",
            "points": 100,
            "pointsType": "TP"
        },
        {
            "date": "Fri Feb 10 2017",
            "countType": "ACTIVITY",
            "name": "Scrum da manhã",
            "points": 50,
            "pointsType": "TP"
        },
        {
            "date": "Fri Feb 10 2017",
            "countType": "ACTIVITY",
            "name": "Todos a horas",
            "points": 50,
            "pointsType": "TP"
        },
        {
            "date": "Sat Feb 11 2017",
            "countType": "ACTIVITY",
            "name": "Scrum da tarde",
            "points": 50,
            "pointsType": "TP"
        }
    ],
    "users": [
        {
            "nb": "13471",
            "name": "Pedro Crespo",
            "avatar": "/february2017/13471.PNG",
            "email": "pedro.crespo@novabase.pt",
            "password": "patricia_",
            "profile": "Admin"
        },
        {
            "nb": "21725",
            "name": "Diogo Carril Alves",
            "avatar": "/february2017/21725.PNG",
            "email": "diogo.carril.alves@novabase.pt",
            "password": "sara",
            "profile": "Admin"
        },
        {
            "nb": "20150",
            "name": "Raquel Jimenez",
            "avatar": "/february2017/20150.PNG",
            "email": "raquel.jimenez@novabase.pt",
            "password": "paniagua",
            "profile": "Admin"
        },
        {
            "nb": "23050",
            "name": "Filipa Lobão",
            "avatar": "/february2017/nb23050.jpg",
            "email": "af.lobao@gmail.com",
            "password": "03111991",
            "profile": "Player",
            "dateOfBirth": "03-11-1991",
            "contact": " 96 744 52 05 ",
            "businessUnit": "GTE",
            "mbti": "ENTJ",
            "counter": 2,
            "voted": "Nobody",
            "tardiness": 0,
            "skills": [
                {
                    "people": 7,
                    "communication": 8,
                    "problemSolving": 7,
                    "management": 6,
                    "android": 1
                }
            ],
            "score": [
                {
                    "date": "Tue Feb 07 2017",
                    "countType": "ACTIVITY",
                    "name": "Duck Race",
                    "points": 40,
                    "pointsType": "XP"
                },
                {
                    "date": "Tue Feb 07 2017",
                    "countType": "ACTIVITY",
                    "name": "Inserir segredo",
                    "points": 200,
                    "pointsType": "HP"
                },
                {
                    "date": "Tue Feb 07 2017",
                    "countType": "ACTIVITY",
                    "name": "Adivinhar segredo",
                    "points": -200,
                    "pointsType": "HP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "ACTIVITY",
                    "name": "Adivinhar segredo",
                    "points": -50,
                    "pointsType": "HP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "ACTIVITY",
                    "name": "Adivinhar segredo",
                    "points": -50,
                    "pointsType": "HP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "ACTIVITY",
                    "name": "Adivinhar segredo",
                    "points": 50,
                    "pointsType": "HP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "ACTIVITY",
                    "name": "Adivinhar segredo",
                    "points": -50,
                    "pointsType": "HP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "ACTIVITY",
                    "name": "Adivinhar segredo",
                    "points": 50,
                    "pointsType": "HP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "ACTIVITY",
                    "name": "Adivinhar segredo",
                    "points": 50,
                    "pointsType": "HP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "ACTIVITY",
                    "name": "Chain of Claws",
                    "points": -100,
                    "pointsType": "XP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "BADGE",
                    "name": "WATCH",
                    "points": 20,
                    "pointsType": "HP"
                },
                {
                    "date": "Sat Feb 11 2017",
                    "countType": "ACTIVITY",
                    "name": "Night challenge",
                    "points": 370,
                    "pointsType": "XP"
                }
            ]
        },
        {
            "nb": "22863",
            "name": "Ana Caldeira",
            "avatar": "/february2017/nb22863.jpg",
            "email": "ana.caldeira@tecnico.ulisboa.pt",
            "password": "08011993",
            "profile": "Player",
            "dateOfBirth": "",
            "contact": "967917592",
            "businessUnit": "CF",
            "mbti": "ISTJ",
            "counter": 4,
            "voted": "Nobody",
            "tardiness": 0,
            "skills": [
                {
                    "people": 7,
                    "communication": 7,
                    "problemSolving": 8,
                    "management": 7,
                    "android": 6
                }
            ],
            "score": [
                {
                    "date": "Mon Feb 06 2017",
                    "countType": "ACTIVITY",
                    "name": "3º lugar no threasure hunt",
                    "points": 100,
                    "pointsType": "XP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "ACTIVITY",
                    "name": "Adivinhar segredo",
                    "points": -50,
                    "pointsType": "HP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "ACTIVITY",
                    "name": "Adivinhar segredo",
                    "points": -50,
                    "pointsType": "HP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "ACTIVITY",
                    "name": "Chain of Claws",
                    "points": 350,
                    "pointsType": "XP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "ACTIVITY",
                    "name": "Adivinhar segredo",
                    "points": -50,
                    "pointsType": "HP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "ACTIVITY",
                    "name": "2º lugar no kahoot",
                    "points": 50,
                    "pointsType": "KP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "BADGE",
                    "name": "WATCH",
                    "points": 20,
                    "pointsType": "HP"
                },
                {
                    "date": "Fri Feb 10 2017",
                    "countType": "ACTIVITY",
                    "name": "Adivinhar segredo",
                    "points": -50,
                    "pointsType": "HP"
                },
                {
                    "date": "Sat Feb 11 2017",
                    "countType": "ACTIVITY",
                    "name": "Night challenge",
                    "points": 190,
                    "pointsType": "XP"
                }
            ]
        },
        {
            "nb": "22912",
            "name": "André Carvalho Reis",
            "avatar": "/february2017/nb22912.jpg",
            "email": "andrefcdreis5@gmail.com",
            "password": "18041992",
            "profile": "Player",
            "dateOfBirth": "18/04/1992",
            "contact": "919541918",
            "businessUnit": "GTE",
            "mbti": "ESTP",
            "counter": 3,
            "voted": "Nobody",
            "tardiness": 0,
            "skills": [
                {
                    "people": 6,
                    "communication": 5,
                    "problemSolving": 8,
                    "management": 5,
                    "android": 8
                }
            ],
            "score": [
                {
                    "date": "Mon Feb 06 2017",
                    "countType": "ACTIVITY",
                    "name": "Voluntário APP",
                    "points": 100,
                    "pointsType": "KP"
                },
                {
                    "date": "Mon Feb 06 2017",
                    "countType": "ACTIVITY",
                    "name": "Bónus",
                    "points": 50,
                    "pointsType": "KP"
                },
                {
                    "date": "Mon Feb 06 2017",
                    "countType": "ACTIVITY",
                    "name": "2º lugar no threasure hunt",
                    "points": 200,
                    "pointsType": "XP"
                },
                {
                    "date": "Tue Feb 07 2017",
                    "countType": "ACTIVITY",
                    "name": "3º lugar no kahoot",
                    "points": 25,
                    "pointsType": "KP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "ACTIVITY",
                    "name": "Chain of Claws",
                    "points": -150,
                    "pointsType": "XP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "BADGE",
                    "name": "WATCH",
                    "points": 20,
                    "pointsType": "HP"
                },
                {
                    "date": "Sat Feb 11 2017",
                    "countType": "ACTIVITY",
                    "name": "Night challenge",
                    "points": 640,
                    "pointsType": "XP"
                }
            ]
        },
        {
            "nb": "22926",
            "name": "André Henggeler",
            "avatar": "/february2017/nb22926.jpg",
            "email": "andrehenggelerdemoura@gmail.com",
            "password": "02071991",
            "profile": "Player",
            "dateOfBirth": "02/07/1991",
            "contact": "918570852",
            "businessUnit": "GTE",
            "mbti": "ESTJ",
            "counter": 6,
            "voted": "22953",
            "tardiness": 0,
            "skills": [
                {
                    "people": 7,
                    "communication": 9,
                    "problemSolving": 8,
                    "management": 7,
                    "android": 1
                }
            ],
            "score": [
                {
                    "date": "Mon Feb 06 2017",
                    "countType": "ACTIVITY",
                    "name": "2º lugar no threasure hunt",
                    "points": 200,
                    "pointsType": "XP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "ACTIVITY",
                    "name": "Adivinhar segredo",
                    "points": -50,
                    "pointsType": "HP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "ACTIVITY",
                    "name": "Adivinhar segredo",
                    "points": 50,
                    "pointsType": "HP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "ACTIVITY",
                    "name": "Chain of Claws",
                    "points": -150,
                    "pointsType": "XP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "ACTIVITY",
                    "name": "3º lugar no kahoot",
                    "points": 25,
                    "pointsType": "KP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "BADGE",
                    "name": "WATCH",
                    "points": 20,
                    "pointsType": "HP"
                },
                {
                    "date": "Thu Feb 09 2017",
                    "countType": "ACTIVITY",
                    "name": "Adivinhar segredo",
                    "points": 200,
                    "pointsType": "HP"
                },
                {
                    "date": "Thu Feb 09 2017",
                    "countType": "ACTIVITY",
                    "name": "Landing Project",
                    "points": 400,
                    "pointsType": "XP"
                },
                {
                    "date": "Thu Feb 09 2017",
                    "countType": "ACTIVITY",
                    "name": "2º lugar no kahoot",
                    "points": 50,
                    "pointsType": "KP"
                },
                {
                    "date": "Thu Feb 09 2017",
                    "countType": "ACTIVITY",
                    "name": "Atraso",
                    "points": -10,
                    "pointsType": "HP"
                },
                {
                    "date": "Fri Feb 10 2017",
                    "countType": "ACTIVITY",
                    "name": "Adivinhar segredo",
                    "points": -50,
                    "pointsType": "HP"
                },
                {
                    "date": "Fri Feb 10 2017",
                    "countType": "ACTIVITY",
                    "name": "Adivinhar segredo",
                    "points": -50,
                    "pointsType": "HP"
                },
                {
                    "date": "Sat Feb 11 2017",
                    "countType": "ACTIVITY",
                    "name": "Night challenge",
                    "points": 190,
                    "pointsType": "XP"
                },
                {
                    "date": "Sat Feb 11 2017",
                    "countType": "ACTIVITY",
                    "name": "Attacker",
                    "points": 90,
                    "pointsType": "HP"
                }
            ]
        },
        {
            "nb": "23015",
            "name": "Bruno Cerqueira",
            "avatar": "/february2017/nb23015.jpg",
            "email": "bmdcerqueira@gmail.com",
            "password": "14021993",
            "profile": "Player",
            "dateOfBirth": "14/02/1993",
            "contact": "967320333",
            "businessUnit": "CF",
            "mbti": "ENTP",
            "counter": 3,
            "voted": "Nobody",
            "tardiness": 0,
            "skills": [
                {
                    "people": 8,
                    "communication": 8,
                    "problemSolving": 7,
                    "management": 7,
                    "android": 2
                }
            ],
            "score": [
                {
                    "date": "Mon Feb 06 2017",
                    "countType": "ACTIVITY",
                    "name": "2º lugar no kahoot",
                    "points": 50,
                    "pointsType": "KP"
                },
                {
                    "date": "Mon Feb 06 2017",
                    "countType": "ACTIVITY",
                    "name": "Voluntário medley",
                    "points": 100,
                    "pointsType": "HP"
                },
                {
                    "date": "Mon Feb 06 2017",
                    "countType": "ACTIVITY",
                    "name": "Bónus",
                    "points": 50,
                    "pointsType": "KP"
                },
                {
                    "date": "Mon Feb 06 2017",
                    "countType": "ACTIVITY",
                    "name": "Atraso no Avatar",
                    "points": -50,
                    "pointsType": "HP"
                },
                {
                    "date": "Mon Feb 06 2017",
                    "countType": "ACTIVITY",
                    "name": "Atraso na auto-avaliação",
                    "points": -50,
                    "pointsType": "KP"
                },
                {
                    "date": "Mon Feb 06 2017",
                    "countType": "ACTIVITY",
                    "name": "4º lugar no threasure hunt",
                    "points": 50,
                    "pointsType": "XP"
                },
                {
                    "date": "Mon Feb 06 2017",
                    "countType": "ACTIVITY",
                    "name": "Marshmallow Ladder",
                    "points": 400,
                    "pointsType": "XP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "ACTIVITY",
                    "name": "Adivinhar segredo",
                    "points": 50,
                    "pointsType": "HP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "ACTIVITY",
                    "name": "Adivinhar segredo",
                    "points": -50,
                    "pointsType": "HP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "ACTIVITY",
                    "name": "Chain of Claws",
                    "points": -150,
                    "pointsType": "XP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "BADGE",
                    "name": "WATCH",
                    "points": 20,
                    "pointsType": "HP"
                },
                {
                    "date": "Thu Feb 09 2017",
                    "countType": "ACTIVITY",
                    "name": "3º lugar no kahoot",
                    "points": 25,
                    "pointsType": "KP"
                },
                {
                    "date": "Fri Feb 10 2017",
                    "countType": "ACTIVITY",
                    "name": "Adivinhar segredo",
                    "points": -50,
                    "pointsType": "HP"
                },
                {
                    "date": "Fri Feb 10 2017",
                    "countType": "ACTIVITY",
                    "name": "1º lugar no Blind Quest",
                    "points": 400,
                    "pointsType": "XP"
                },
                {
                    "date": "Fri Feb 10 2017",
                    "countType": "ACTIVITY",
                    "name": "3º lugar no kahoot",
                    "points": 25,
                    "pointsType": "KP"
                },
                {
                    "date": "Fri Feb 10 2017",
                    "countType": "ACTIVITY",
                    "name": "Adivinhar segredo",
                    "points": -50,
                    "pointsType": "HP"
                },
                {
                    "date": "Fri Feb 10 2017",
                    "countType": "ACTIVITY",
                    "name": "Adivinhar segredo",
                    "points": -50,
                    "pointsType": "HP"
                },
                {
                    "date": "Sat Feb 11 2017",
                    "countType": "ACTIVITY",
                    "name": "Night challenge",
                    "points": 640,
                    "pointsType": "XP"
                }
            ]
        },
        {
            "nb": "22953",
            "name": "Bruno Figueiredo Ramos",
            "avatar": "/february2017/nb22953.jpg",
            "email": "brunomiguel_fr@hotmail.com",
            "password": "05011994",
            "profile": "Player",
            "dateOfBirth": "05/01/1994",
            "contact": "935147362",
            "businessUnit": "FSI",
            "mbti": "ENFJ",
            "counter": 3,
            "voted": "22926",
            "tardiness": 0,
            "skills": [
                {
                    "people": 9,
                    "communication": 9,
                    "problemSolving": 8,
                    "management": 8,
                    "android": 8
                }
            ],
            "score": [
                {
                    "date": "Mon Feb 06 2017",
                    "countType": "ACTIVITY",
                    "name": "Voluntário APP",
                    "points": 100,
                    "pointsType": "KP"
                },
                {
                    "date": "Mon Feb 06 2017",
                    "countType": "ACTIVITY",
                    "name": "Bónus",
                    "points": 50,
                    "pointsType": "KP"
                },
                {
                    "date": "Mon Feb 06 2017",
                    "countType": "ACTIVITY",
                    "name": "4º lugar no threasure hunt",
                    "points": 50,
                    "pointsType": "XP"
                },
                {
                    "date": "Tue Feb 07 2017",
                    "countType": "ACTIVITY",
                    "name": "Adivinhar segredo",
                    "points": 50,
                    "pointsType": "HP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "ACTIVITY",
                    "name": "Chain of Claws",
                    "points": -150,
                    "pointsType": "XP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "BADGE",
                    "name": "WATCH",
                    "points": 20,
                    "pointsType": "HP"
                },
                {
                    "date": "Thu Feb 09 2017",
                    "countType": "ACTIVITY",
                    "name": "Landing Project",
                    "points": 400,
                    "pointsType": "XP"
                },
                {
                    "date": "Fri Feb 10 2017",
                    "countType": "ACTIVITY",
                    "name": "Adivinhar segredo",
                    "points": -50,
                    "pointsType": "HP"
                },
                {
                    "date": "Sat Feb 11 2017",
                    "countType": "ACTIVITY",
                    "name": "Night challenge",
                    "points": 1000,
                    "pointsType": "XP"
                }
            ]
        },
        {
            "nb": "23051",
            "name": "Carlos André Filipe",
            "avatar": "/february2017/nb23051.jpg",
            "email": "c.filipe@campus.fct.unl.pt",
            "password": "22101991",
            "profile": "Player",
            "dateOfBirth": "22/10/1991",
            "contact": "925848812",
            "businessUnit": "GTE",
            "mbti": "ISTP",
            "counter": 0,
            "voted": "Nobody",
            "tardiness": 0,
            "skills": [
                {
                    "people": 7,
                    "communication": 6,
                    "problemSolving": 8,
                    "management": 7,
                    "android": 3
                }
            ],
            "score": [
                {
                    "date": "Tue Feb 07 2017",
                    "countType": "ACTIVITY",
                    "name": "Duck Race",
                    "points": 35,
                    "pointsType": "XP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "ACTIVITY",
                    "name": "Adivinhar segredo",
                    "points": -50,
                    "pointsType": "HP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "ACTIVITY",
                    "name": "Chain of Claws",
                    "points": 350,
                    "pointsType": "XP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "BADGE",
                    "name": "WATCH",
                    "points": 20,
                    "pointsType": "HP"
                },
                {
                    "date": "Fri Feb 10 2017",
                    "countType": "ACTIVITY",
                    "name": "Adivinhar segredo",
                    "points": -50,
                    "pointsType": "HP"
                },
                {
                    "date": "Sat Feb 11 2017",
                    "countType": "ACTIVITY",
                    "name": "Night challenge",
                    "points": 550,
                    "pointsType": "XP"
                },
                {
                    "date": "Sat Feb 11 2017",
                    "countType": "ACTIVITY",
                    "name": "Attacker",
                    "points": 500,
                    "pointsType": "HP"
                }
            ]
        },
        {
            "nb": "22835",
            "name": "Daniel Vicente Batista",
            "avatar": "/february2017/nb22835.jpg",
            "email": "d.batista@campus.fct.unl.pt",
            "password": "22121990",
            "profile": "Player",
            "dateOfBirth": "22/12/1990",
            "contact": "926055488",
            "businessUnit": "GTE",
            "mbti": "ISTP",
            "counter": 0,
            "voted": "23027",
            "tardiness": 0,
            "skills": [
                {
                    "people": 6,
                    "communication": 5,
                    "problemSolving": 8,
                    "management": 6,
                    "android": 6
                }
            ],
            "score": [
                {
                    "date": "Mon Feb 06 2017",
                    "countType": "ACTIVITY",
                    "name": "1º lugar no kahoot",
                    "points": 100,
                    "pointsType": "KP"
                },
                {
                    "date": "Mon Feb 06 2017",
                    "countType": "ACTIVITY",
                    "name": "Bónus",
                    "points": 50,
                    "pointsType": "KP"
                },
                {
                    "date": "Mon Feb 06 2017",
                    "countType": "ACTIVITY",
                    "name": "1º lugar no threasure hunt",
                    "points": 600,
                    "pointsType": "XP"
                },
                {
                    "date": "Mon Feb 06 2017",
                    "countType": "ACTIVITY",
                    "name": "Marshmallow Ladder",
                    "points": 400,
                    "pointsType": "XP"
                },
                {
                    "date": "Tue Feb 07 2017",
                    "countType": "ACTIVITY",
                    "name": "Duck Race",
                    "points": 120,
                    "pointsType": "XP"
                },
                {
                    "date": "Tue Feb 07 2017",
                    "countType": "ACTIVITY",
                    "name": "Duck Race",
                    "points": -100,
                    "pointsType": "XP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "ACTIVITY",
                    "name": "Adivinhar segredo",
                    "points": 50,
                    "pointsType": "HP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "ACTIVITY",
                    "name": "Adivinhar segredo",
                    "points": 50,
                    "pointsType": "HP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "ACTIVITY",
                    "name": "Chain of Claws",
                    "points": -150,
                    "pointsType": "XP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "BADGE",
                    "name": "WATCH",
                    "points": 20,
                    "pointsType": "HP"
                },
                {
                    "date": "Thu Feb 09 2017",
                    "countType": "ACTIVITY",
                    "name": "Atraso",
                    "points": -10,
                    "pointsType": "HP"
                },
                {
                    "date": "Fri Feb 10 2017",
                    "countType": "ACTIVITY",
                    "name": "Adivinhar segredo",
                    "points": -50,
                    "pointsType": "HP"
                },
                {
                    "date": "Fri Feb 10 2017",
                    "countType": "ACTIVITY",
                    "name": "Adivinhar segredo",
                    "points": 200,
                    "pointsType": "HP"
                },
                {
                    "date": "Fri Feb 10 2017",
                    "countType": "ACTIVITY",
                    "name": "1º lugar no Blind Quest",
                    "points": 400,
                    "pointsType": "XP"
                },
                {
                    "date": "Fri Feb 10 2017",
                    "countType": "BADGE",
                    "name": "BOSS",
                    "points": 50,
                    "pointsType": "HP"
                },
                {
                    "date": "Fri Feb 10 2017",
                    "countType": "BADGE",
                    "name": "TEAM PLAYER",
                    "points": 50,
                    "pointsType": "HP"
                },
                {
                    "date": "Sat Feb 11 2017",
                    "countType": "ACTIVITY",
                    "name": "Night challenge",
                    "points": 820,
                    "pointsType": "XP"
                }
            ]
        },
        {
            "nb": "23024",
            "name": "Daniel Arrais",
            "avatar": "/february2017/nb23024.jpg",
            "email": "daniel.arrais@tecnico.ulisboa.pt",
            "password": "06031992",
            "profile": "Player",
            "dateOfBirth": "06/03/1992",
            "contact": "963435768",
            "businessUnit": "CF",
            "mbti": "ESTJ",
            "counter": 0,
            "voted": "Nobody",
            "tardiness": 0,
            "skills": [
                {
                    "people": 7,
                    "communication": 8,
                    "problemSolving": 8,
                    "management": 7,
                    "android": 5
                }
            ],
            "score": [
                {
                    "date": "Mon Feb 06 2017",
                    "countType": "ACTIVITY",
                    "name": "Voluntário APP",
                    "points": 100,
                    "pointsType": "KP"
                },
                {
                    "date": "Mon Feb 06 2017",
                    "countType": "ACTIVITY",
                    "name": "3º lugar no threasure hunt",
                    "points": 100,
                    "pointsType": "XP"
                },
                {
                    "date": "Tue Feb 07 2017",
                    "countType": "ACTIVITY",
                    "name": "2º lugar no kahoot",
                    "points": 50,
                    "pointsType": "KP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "ACTIVITY",
                    "name": "Chain of Claws",
                    "points": -100,
                    "pointsType": "XP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "BADGE",
                    "name": "WATCH",
                    "points": 20,
                    "pointsType": "HP"
                },
                {
                    "date": "Sat Feb 11 2017",
                    "countType": "ACTIVITY",
                    "name": "Night challenge",
                    "points": 820,
                    "pointsType": "XP"
                }
            ]
        },
        {
            "nb": "23016",
            "name": "Élio Santos",
            "avatar": "/february2017/nb23016.jpg",
            "email": "eliofsantos@hotmail.com",
            "password": "03041992",
            "profile": "Player",
            "dateOfBirth": "03/04/1992",
            "contact": "924123326",
            "businessUnit": "CF",
            "mbti": "ESTJ",
            "counter": 3,
            "voted": "Nobody",
            "tardiness": 0,
            "skills": [
                {
                    "people": 8,
                    "communication": 9,
                    "problemSolving": 9,
                    "management": 8,
                    "android": 8
                }
            ],
            "score": [
                {
                    "date": "Mon Feb 06 2017",
                    "countType": "ACTIVITY",
                    "name": "Voluntário APP",
                    "points": 100,
                    "pointsType": "KP"
                },
                {
                    "date": "Mon Feb 06 2017",
                    "countType": "ACTIVITY",
                    "name": "Bónus",
                    "points": 50,
                    "pointsType": "KP"
                },
                {
                    "date": "Mon Feb 06 2017",
                    "countType": "ACTIVITY",
                    "name": "1º lugar no threasure hunt",
                    "points": 600,
                    "pointsType": "XP"
                },
                {
                    "date": "Tue Feb 07 2017",
                    "countType": "ACTIVITY",
                    "name": "Adivinhar segredo",
                    "points": 200,
                    "pointsType": "HP"
                },
                {
                    "date": "Tue Feb 07 2017",
                    "countType": "ACTIVITY",
                    "name": "Duck Race",
                    "points": -150,
                    "pointsType": "XP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "ACTIVITY",
                    "name": "Adivinhar segredo",
                    "points": -50,
                    "pointsType": "HP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "ACTIVITY",
                    "name": "Vencedor do ninjamotherfucker",
                    "points": 50,
                    "pointsType": "XP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "ACTIVITY",
                    "name": "Adivinhar segredo",
                    "points": -50,
                    "pointsType": "HP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "ACTIVITY",
                    "name": "Inserir segredo",
                    "points": 200,
                    "pointsType": "HP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "ACTIVITY",
                    "name": "Adivinhar segredo",
                    "points": -200,
                    "pointsType": "HP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "ACTIVITY",
                    "name": "Chain of Claws",
                    "points": -150,
                    "pointsType": "XP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "BADGE",
                    "name": "WATCH",
                    "points": 20,
                    "pointsType": "HP"
                },
                {
                    "date": "Thu Feb 09 2017",
                    "countType": "ACTIVITY",
                    "name": "Adivinhar segredo",
                    "points": 50,
                    "pointsType": "HP"
                },
                {
                    "date": "Thu Feb 09 2017",
                    "countType": "ACTIVITY",
                    "name": "Inserir segredo",
                    "points": 200,
                    "pointsType": "HP"
                },
                {
                    "date": "Thu Feb 09 2017",
                    "countType": "ACTIVITY",
                    "name": "Adivinhar segredo",
                    "points": -200,
                    "pointsType": "HP"
                },
                {
                    "date": "Thu Feb 09 2017",
                    "countType": "ACTIVITY",
                    "name": "Vencedor do ninjamotherfucker",
                    "points": 50,
                    "pointsType": "XP"
                },
                {
                    "date": "Sat Feb 11 2017",
                    "countType": "ACTIVITY",
                    "name": "Night challenge",
                    "points": 820,
                    "pointsType": "XP"
                }
            ]
        },
        {
            "nb": "22839",
            "name": "Filipe Dionísio",
            "avatar": "/february2017/nb22839.jpg",
            "email": "fcrdo@hotmail.com",
            "password": "15111994",
            "profile": "Player",
            "dateOfBirth": "15/11/1994",
            "contact": "916608148",
            "businessUnit": "GTE",
            "mbti": "INTJ",
            "counter": 0,
            "voted": "Nobody",
            "tardiness": 0,
            "skills": [
                {
                    "people": 6,
                    "communication": 3,
                    "problemSolving": 8,
                    "management": 6,
                    "android": 6
                }
            ],
            "score": [
                {
                    "date": "Mon Feb 06 2017",
                    "countType": "ACTIVITY",
                    "name": "Bónus",
                    "points": 50,
                    "pointsType": "KP"
                },
                {
                    "date": "Mon Feb 06 2017",
                    "countType": "ACTIVITY",
                    "name": "4º lugar no threasure hunt",
                    "points": 50,
                    "pointsType": "XP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "ACTIVITY",
                    "name": "Chain of Claws",
                    "points": -150,
                    "pointsType": "XP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "BADGE",
                    "name": "WATCH",
                    "points": 20,
                    "pointsType": "HP"
                },
                {
                    "date": "Fri Feb 10 2017",
                    "countType": "ACTIVITY",
                    "name": "Adivinhar segredo",
                    "points": 50,
                    "pointsType": "HP"
                },
                {
                    "date": "Fri Feb 10 2017",
                    "countType": "ACTIVITY",
                    "name": "Adivinhar segredo",
                    "points": 50,
                    "pointsType": "HP"
                },
                {
                    "date": "Sat Feb 11 2017",
                    "countType": "ACTIVITY",
                    "name": "Night challenge",
                    "points": 550,
                    "pointsType": "XP"
                }
            ]
        },
        {
            "nb": "23027",
            "name": "João Gonçalo Neto",
            "avatar": "/february2017/nb23027.jpg",
            "email": "joaogoncaloneto@hotmail.com",
            "password": "10031993",
            "profile": "Player",
            "dateOfBirth": "10/03/1993",
            "contact": "919358528",
            "businessUnit": "GTE",
            "mbti": "ENTJ",
            "counter": 1,
            "voted": "Nobody",
            "tardiness": 0,
            "skills": [
                {
                    "people": 4,
                    "communication": 4,
                    "problemSolving": 5,
                    "management": 4,
                    "android": 2
                }
            ],
            "score": [
                {
                    "date": "Mon Feb 06 2017",
                    "countType": "ACTIVITY",
                    "name": "Penalização ",
                    "points": -50,
                    "pointsType": "HP"
                },
                {
                    "date": "Mon Feb 06 2017",
                    "countType": "ACTIVITY",
                    "name": "Voluntário medley",
                    "points": 100,
                    "pointsType": "HP"
                },
                {
                    "date": "Mon Feb 06 2017",
                    "countType": "ACTIVITY",
                    "name": "3º lugar no threasure hunt",
                    "points": 100,
                    "pointsType": "XP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "ACTIVITY",
                    "name": "Adivinhar segredo",
                    "points": 50,
                    "pointsType": "HP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "ACTIVITY",
                    "name": "Adivinhar segredo",
                    "points": -50,
                    "pointsType": "HP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "ACTIVITY",
                    "name": "Adivinhar segredo",
                    "points": 200,
                    "pointsType": "HP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "ACTIVITY",
                    "name": "Adivinhar segredo",
                    "points": -50,
                    "pointsType": "HP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "ACTIVITY",
                    "name": "Adivinhar segredo",
                    "points": 200,
                    "pointsType": "HP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "ACTIVITY",
                    "name": "Chain of Claws",
                    "points": 350,
                    "pointsType": "XP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "BADGE",
                    "name": "WATCH",
                    "points": 20,
                    "pointsType": "HP"
                },
                {
                    "date": "Thu Feb 09 2017",
                    "countType": "ACTIVITY",
                    "name": "Adivinhar segredo",
                    "points": -50,
                    "pointsType": "HP"
                },
                {
                    "date": "Thu Feb 09 2017",
                    "countType": "ACTIVITY",
                    "name": "Adivinhar segredo",
                    "points": -50,
                    "pointsType": "HP"
                },
                {
                    "date": "Thu Feb 09 2017",
                    "countType": "ACTIVITY",
                    "name": "Adivinhar segredo",
                    "points": 200,
                    "pointsType": "HP"
                },
                {
                    "date": "Thu Feb 09 2017",
                    "countType": "ACTIVITY",
                    "name": "Landing Project",
                    "points": 400,
                    "pointsType": "XP"
                },
                {
                    "date": "Fri Feb 10 2017",
                    "countType": "ACTIVITY",
                    "name": "Adivinhar segredo",
                    "points": 50,
                    "pointsType": "HP"
                },
                {
                    "date": "Sat Feb 11 2017",
                    "countType": "ACTIVITY",
                    "name": "Night challenge",
                    "points": 820,
                    "pointsType": "XP"
                }
            ]
        },
        {
            "nb": "23052",
            "name": "João Cerejeira",
            "avatar": "/february2017/nb23052.jpg",
            "email": "cerejeirajoao@outlook.com",
            "password": "26081991",
            "profile": "Player",
            "dateOfBirth": "",
            "contact": "910601218",
            "businessUnit": "FSI",
            "mbti": "ENTJ",
            "counter": 0,
            "voted": "Nobody",
            "tardiness": 0,
            "skills": [
                {
                    "people": 9,
                    "communication": 9,
                    "problemSolving": 8,
                    "management": 8,
                    "android": 8
                }
            ],
            "score": [
                {
                    "date": "Mon Feb 06 2017",
                    "countType": "ACTIVITY",
                    "name": "Bónus",
                    "points": 50,
                    "pointsType": "KP"
                },
                {
                    "date": "Mon Feb 06 2017",
                    "countType": "ACTIVITY",
                    "name": "1º lugar no threasure hunt",
                    "points": 600,
                    "pointsType": "XP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "ACTIVITY",
                    "name": "Adivinhar segredo",
                    "points": -50,
                    "pointsType": "HP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "ACTIVITY",
                    "name": "Chain of Claws",
                    "points": 350,
                    "pointsType": "XP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "BADGE",
                    "name": "WATCH",
                    "points": 20,
                    "pointsType": "HP"
                },
                {
                    "date": "Thu Feb 09 2017",
                    "countType": "ACTIVITY",
                    "name": "Vencedor do ninjamotherfucker",
                    "points": -50,
                    "pointsType": "XP"
                },
                {
                    "date": "Fri Feb 10 2017",
                    "countType": "BADGE",
                    "name": "BOSS",
                    "points": 50,
                    "pointsType": "HP"
                },
                {
                    "date": "Sat Feb 11 2017",
                    "countType": "ACTIVITY",
                    "name": "Night challenge",
                    "points": 0,
                    "pointsType": "XP"
                }
            ]
        },
        {
            "nb": "23026",
            "name": "João Ferreira Gomes",
            "avatar": "/february2017/nb23026.jpg",
            "email": "joaorgomes@gmail.com",
            "password": "10121992",
            "profile": "Player",
            "dateOfBirth": "10/12/1992",
            "contact": "916393439",
            "businessUnit": "CF",
            "mbti": "ISTJ",
            "counter": 0,
            "voted": "Nobody",
            "tardiness": 0,
            "skills": [
                {
                    "people": 6,
                    "communication": 7,
                    "problemSolving": 7,
                    "management": 7,
                    "android": 3
                }
            ],
            "score": [
                {
                    "date": "Mon Feb 06 2017",
                    "countType": "ACTIVITY",
                    "name": "Bónus",
                    "points": 50,
                    "pointsType": "KP"
                },
                {
                    "date": "Tue Feb 07 2017",
                    "countType": "ACTIVITY",
                    "name": "Duck Race",
                    "points": 85,
                    "pointsType": "XP"
                },
                {
                    "date": "Tue Feb 07 2017",
                    "countType": "ACTIVITY",
                    "name": "Adivinhar segredo",
                    "points": 50,
                    "pointsType": "HP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "ACTIVITY",
                    "name": "Adivinhar segredo",
                    "points": 50,
                    "pointsType": "HP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "ACTIVITY",
                    "name": "Adivinhar segredo",
                    "points": 50,
                    "pointsType": "HP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "ACTIVITY",
                    "name": "Chain of Claws",
                    "points": -100,
                    "pointsType": "XP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "BADGE",
                    "name": "WATCH",
                    "points": 20,
                    "pointsType": "HP"
                },
                {
                    "date": "Sat Feb 11 2017",
                    "countType": "ACTIVITY",
                    "name": "Night challenge",
                    "points": 1000,
                    "pointsType": "XP"
                }
            ]
        },
        {
            "nb": "22928",
            "name": "João Pião Martins",
            "avatar": "/february2017/nb22928.jpg",
            "email": "joao2593@gmail.com",
            "password": "25031993",
            "profile": "Player",
            "dateOfBirth": "25/03/1993",
            "contact": "916939727",
            "businessUnit": "GTE",
            "mbti": "ESFP",
            "counter": 3,
            "voted": "Nobody",
            "tardiness": 0,
            "skills": [
                {
                    "people": 6,
                    "communication": 6,
                    "problemSolving": 6,
                    "management": 5,
                    "android": 1
                }
            ],
            "score": [
                {
                    "date": "Mon Feb 06 2017",
                    "countType": "ACTIVITY",
                    "name": "Bónus",
                    "points": 50,
                    "pointsType": "KP"
                },
                {
                    "date": "Mon Feb 06 2017",
                    "countType": "ACTIVITY",
                    "name": "Atraso no Avatar",
                    "points": -50,
                    "pointsType": "HP"
                },
                {
                    "date": "Mon Feb 06 2017",
                    "countType": "ACTIVITY",
                    "name": "Atraso na auto-avaliação",
                    "points": -50,
                    "pointsType": "KP"
                },
                {
                    "date": "Mon Feb 06 2017",
                    "countType": "ACTIVITY",
                    "name": "1º lugar no threasure hunt",
                    "points": 600,
                    "pointsType": "XP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "ACTIVITY",
                    "name": "Chain of Claws",
                    "points": -100,
                    "pointsType": "XP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "BADGE",
                    "name": "WATCH",
                    "points": 20,
                    "pointsType": "HP"
                },
                {
                    "date": "Sat Feb 11 2017",
                    "countType": "ACTIVITY",
                    "name": "Night challenge",
                    "points": 370,
                    "pointsType": "XP"
                }
            ]
        },
        {
            "nb": "22990",
            "name": "Jorge Matos",
            "avatar": "/february2017/nb22990.jpg",
            "email": "jorgep.s.matos@gmail.com",
            "password": "21071993",
            "profile": "Player",
            "dateOfBirth": "21/07/1993",
            "contact": "916683048",
            "businessUnit": "GTE",
            "mbti": "ISTJ",
            "counter": 1,
            "voted": "Nobody",
            "tardiness": 0,
            "skills": [
                {
                    "people": 5,
                    "communication": 6,
                    "problemSolving": 7,
                    "management": 5,
                    "android": 1
                }
            ],
            "score": [
                {
                    "date": "Mon Feb 06 2017",
                    "countType": "ACTIVITY",
                    "name": "Bónus",
                    "points": 50,
                    "pointsType": "KP"
                },
                {
                    "date": "Mon Feb 06 2017",
                    "countType": "ACTIVITY",
                    "name": "1º lugar no threasure hunt",
                    "points": 600,
                    "pointsType": "XP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "ACTIVITY",
                    "name": "Chain of Claws",
                    "points": 350,
                    "pointsType": "XP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "ACTIVITY",
                    "name": "Adivinhar segredo",
                    "points": -50,
                    "pointsType": "HP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "BADGE",
                    "name": "WATCH",
                    "points": 20,
                    "pointsType": "HP"
                },
                {
                    "date": "Fri Feb 10 2017",
                    "countType": "ACTIVITY",
                    "name": "Adivinhar segredo",
                    "points": 50,
                    "pointsType": "HP"
                },
                {
                    "date": "Fri Feb 10 2017",
                    "countType": "ACTIVITY",
                    "name": "Inserir segredo",
                    "points": 200,
                    "pointsType": "HP"
                },
                {
                    "date": "Fri Feb 10 2017",
                    "countType": "ACTIVITY",
                    "name": "Adivinhar segredo",
                    "points": -200,
                    "pointsType": "HP"
                },
                {
                    "date": "Sat Feb 11 2017",
                    "countType": "ACTIVITY",
                    "name": "Night challenge",
                    "points": 370,
                    "pointsType": "XP"
                },
                {
                    "date": "Sat Feb 11 2017",
                    "countType": "ACTIVITY",
                    "name": "Attacker",
                    "points": 420,
                    "pointsType": "HP"
                }
            ]
        },
        {
            "nb": "22945",
            "name": "Liliana Pereira",
            "avatar": "/february2017/nb22945.jpg",
            "email": "liliana.fnpereira@gmail.com",
            "password": "13061993",
            "profile": "Player",
            "dateOfBirth": " 13/06/1993 ",
            "contact": "915283708",
            "businessUnit": "FSI",
            "mbti": "ESTP",
            "counter": 4,
            "voted": "Nobody",
            "tardiness": 0,
            "skills": [
                {
                    "people": 7,
                    "communication": 8,
                    "problemSolving": 7,
                    "management": 7,
                    "android": 1
                }
            ],
            "score": [
                {
                    "date": "Mon Feb 06 2017",
                    "countType": "ACTIVITY",
                    "name": "Bónus",
                    "points": 50,
                    "pointsType": "KP"
                },
                {
                    "date": "Mon Feb 06 2017",
                    "countType": "ACTIVITY",
                    "name": "3º lugar no threasure hunt",
                    "points": 100,
                    "pointsType": "XP"
                },
                {
                    "date": "Tue Feb 07 2017",
                    "countType": "ACTIVITY",
                    "name": "Adivinhar segredo",
                    "points": -50,
                    "pointsType": "HP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "ACTIVITY",
                    "name": "Adivinhar segredo",
                    "points": -50,
                    "pointsType": "HP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "ACTIVITY",
                    "name": "Adivinhar segredo",
                    "points": -50,
                    "pointsType": "HP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "ACTIVITY",
                    "name": "Adivinhar segredo",
                    "points": 50,
                    "pointsType": "HP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "ACTIVITY",
                    "name": "Adivinhar segredo",
                    "points": 50,
                    "pointsType": "HP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "ACTIVITY",
                    "name": "Chain of Claws",
                    "points": -150,
                    "pointsType": "XP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "BADGE",
                    "name": "WATCH",
                    "points": 20,
                    "pointsType": "HP"
                },
                {
                    "date": "Fri Feb 10 2017",
                    "countType": "ACTIVITY",
                    "name": "Adivinhar segredo",
                    "points": 50,
                    "pointsType": "HP"
                },
                {
                    "date": "Fri Feb 10 2017",
                    "countType": "ACTIVITY",
                    "name": "Adivinhar segredo",
                    "points": 50,
                    "pointsType": "HP"
                },
                {
                    "date": "Fri Feb 10 2017",
                    "countType": "ACTIVITY",
                    "name": "Adivinhar segredo",
                    "points": 50,
                    "pointsType": "HP"
                },
                {
                    "date": "Fri Feb 10 2017",
                    "countType": "ACTIVITY",
                    "name": "1º lugar no Blind Quest",
                    "points": 400,
                    "pointsType": "XP"
                },
                {
                    "date": "Sat Feb 11 2017",
                    "countType": "ACTIVITY",
                    "name": "Night challenge",
                    "points": 640,
                    "pointsType": "XP"
                }
            ]
        },
        {
            "nb": "22842",
            "name": "Manuel Baiôa",
            "avatar": "/february2017/nb22842.jpg",
            "email": "manuel.baioa92@gmail.com",
            "password": "01071992",
            "profile": "Player",
            "dateOfBirth": "01/07/1992",
            "contact": "968551207",
            "businessUnit": "FSI",
            "mbti": "ESTP",
            "counter": 0,
            "voted": "Nobody",
            "tardiness": 0,
            "skills": [
                {
                    "people": 7,
                    "communication": 6,
                    "problemSolving": 7,
                    "management": 7,
                    "android": 6
                }
            ],
            "score": [
                {
                    "date": "Mon Feb 06 2017",
                    "countType": "ACTIVITY",
                    "name": "Voluntário APP",
                    "points": 100,
                    "pointsType": "KP"
                },
                {
                    "date": "Mon Feb 06 2017",
                    "countType": "ACTIVITY",
                    "name": "2º lugar no threasure hunt",
                    "points": 200,
                    "pointsType": "XP"
                },
                {
                    "date": "Tue Feb 07 2017",
                    "countType": "ACTIVITY",
                    "name": "Adivinhar segredo",
                    "points": 200,
                    "pointsType": "HP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "ACTIVITY",
                    "name": "Adivinhar segredo",
                    "points": -50,
                    "pointsType": "HP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "ACTIVITY",
                    "name": "Adivinhar segredo",
                    "points": -50,
                    "pointsType": "HP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "ACTIVITY",
                    "name": "Adivinhar segredo",
                    "points": -50,
                    "pointsType": "HP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "ACTIVITY",
                    "name": "Adivinhar segredo",
                    "points": -50,
                    "pointsType": "HP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "ACTIVITY",
                    "name": "Chain of Claws",
                    "points": -100,
                    "pointsType": "XP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "ACTIVITY",
                    "name": "1º lugar no kahoot",
                    "points": 100,
                    "pointsType": "KP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "BADGE",
                    "name": "WATCH",
                    "points": 20,
                    "pointsType": "HP"
                },
                {
                    "date": "Thu Feb 09 2017",
                    "countType": "ACTIVITY",
                    "name": "Atraso",
                    "points": -10,
                    "pointsType": "HP"
                },
                {
                    "date": "Sat Feb 11 2017",
                    "countType": "ACTIVITY",
                    "name": "Night challenge",
                    "points": 820,
                    "pointsType": "XP"
                }
            ]
        },
        {
            "nb": "22893",
            "name": "Miguel Martinho",
            "avatar": "/february2017/nb22893.jpg",
            "email": "miguelfgmartinho@gmail.com",
            "password": "16021993",
            "profile": "Player",
            "dateOfBirth": "16/02/1993",
            "contact": "917753104",
            "businessUnit": "GTE",
            "mbti": "ESTJ",
            "counter": 1,
            "voted": "Nobody",
            "tardiness": 0,
            "skills": [
                {
                    "people": 8,
                    "communication": 8,
                    "problemSolving": 9,
                    "management": 7,
                    "android": 5
                }
            ],
            "score": [
                {
                    "date": "Mon Feb 06 2017",
                    "countType": "ACTIVITY",
                    "name": "Penalização ",
                    "points": -50,
                    "pointsType": "HP"
                },
                {
                    "date": "Mon Feb 06 2017",
                    "countType": "ACTIVITY",
                    "name": "Voluntário APP",
                    "points": 100,
                    "pointsType": "KP"
                },
                {
                    "date": "Mon Feb 06 2017",
                    "countType": "ACTIVITY",
                    "name": "2º lugar no threasure hunt",
                    "points": 200,
                    "pointsType": "XP"
                },
                {
                    "date": "Tue Feb 07 2017",
                    "countType": "ACTIVITY",
                    "name": "Duck Race",
                    "points": 50,
                    "pointsType": "XP"
                },
                {
                    "date": "Tue Feb 07 2017",
                    "countType": "ACTIVITY",
                    "name": "Adivinhar segredo",
                    "points": -50,
                    "pointsType": "HP"
                },
                {
                    "date": "Tue Feb 07 2017",
                    "countType": "ACTIVITY",
                    "name": "Adivinhar segredo",
                    "points": 50,
                    "pointsType": "HP"
                },
                {
                    "date": "Tue Feb 07 2017",
                    "countType": "ACTIVITY",
                    "name": "Inserir segredo",
                    "points": 200,
                    "pointsType": "HP"
                },
                {
                    "date": "Tue Feb 07 2017",
                    "countType": "ACTIVITY",
                    "name": "Adivinhar segredo",
                    "points": -200,
                    "pointsType": "HP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "ACTIVITY",
                    "name": "Adivinhar segredo",
                    "points": 50,
                    "pointsType": "HP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "ACTIVITY",
                    "name": "Adivinhar segredo",
                    "points": -50,
                    "pointsType": "HP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "ACTIVITY",
                    "name": "Chain of Claws",
                    "points": 350,
                    "pointsType": "XP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "BADGE",
                    "name": "WATCH",
                    "points": 20,
                    "pointsType": "HP"
                },
                {
                    "date": "Thu Feb 09 2017",
                    "countType": "ACTIVITY",
                    "name": "Landing Project",
                    "points": 400,
                    "pointsType": "XP"
                },
                {
                    "date": "Thu Feb 09 2017",
                    "countType": "ACTIVITY",
                    "name": "1º lugar no kahoot",
                    "points": 100,
                    "pointsType": "KP"
                },
                {
                    "date": "Fri Feb 10 2017",
                    "countType": "ACTIVITY",
                    "name": "Adivinhar segredo",
                    "points": -50,
                    "pointsType": "HP"
                },
                {
                    "date": "Sat Feb 11 2017",
                    "countType": "ACTIVITY",
                    "name": "Night challenge",
                    "points": 550,
                    "pointsType": "XP"
                }
            ]
        },
        {
            "nb": "23049",
            "name": "Nuno Rodrigues Machado",
            "avatar": "/february2017/nb23049.jpg",
            "email": "mac93nuno@gmail.com",
            "password": "07011993",
            "profile": "Player",
            "dateOfBirth": "07/01/1993",
            "contact": "",
            "businessUnit": "GTE",
            "mbti": "ENTJ",
            "counter": 0,
            "voted": "Nobody",
            "tardiness": 0,
            "skills": [
                {
                    "people": 6,
                    "communication": 4,
                    "problemSolving": 6,
                    "management": 6,
                    "android": 2
                }
            ],
            "score": [
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "ACTIVITY",
                    "name": "Adivinhar segredo",
                    "points": 50,
                    "pointsType": "HP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "ACTIVITY",
                    "name": "Chain of Claws",
                    "points": -100,
                    "pointsType": "XP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "BADGE",
                    "name": "WATCH",
                    "points": 20,
                    "pointsType": "HP"
                },
                {
                    "date": "Sat Feb 11 2017",
                    "countType": "ACTIVITY",
                    "name": "Night challenge",
                    "points": 100,
                    "pointsType": "XP"
                },
                {
                    "date": "Sat Feb 11 2017",
                    "countType": "ACTIVITY",
                    "name": "Attacker",
                    "points": 100,
                    "pointsType": "HP"
                }
            ]
        },
        {
            "nb": "22987",
            "name": "Pedro Moreira",
            "avatar": "/february2017/nb22987.jpg",
            "email": "pf.moreira@campus.fct.unl.pt",
            "password": "10121991",
            "profile": "Player",
            "dateOfBirth": "10/12/1991",
            "contact": "961269679",
            "businessUnit": "GTE",
            "mbti": "ISTJ",
            "counter": 1,
            "voted": "Nobody",
            "tardiness": 0,
            "skills": [
                {
                    "people": 6,
                    "communication": 6,
                    "problemSolving": 7,
                    "management": 7,
                    "android": 6
                }
            ],
            "score": [
                {
                    "date": "Mon Feb 06 2017",
                    "countType": "ACTIVITY",
                    "name": "1º lugar no threasure hunt",
                    "points": 600,
                    "pointsType": "XP"
                },
                {
                    "date": "Tue Feb 07 2017",
                    "countType": "ACTIVITY",
                    "name": "Duck Race",
                    "points": 50,
                    "pointsType": "XP"
                },
                {
                    "date": "Tue Feb 07 2017",
                    "countType": "ACTIVITY",
                    "name": "Adivinhar segredo",
                    "points": -50,
                    "pointsType": "HP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "ACTIVITY",
                    "name": "Chain of Claws",
                    "points": -100,
                    "pointsType": "XP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "BADGE",
                    "name": "WATCH",
                    "points": 20,
                    "pointsType": "HP"
                },
                {
                    "date": "Fri Feb 10 2017",
                    "countType": "BADGE",
                    "name": "BOSS",
                    "points": 50,
                    "pointsType": "HP"
                },
                {
                    "date": "Sat Feb 11 2017",
                    "countType": "ACTIVITY",
                    "name": "Night challenge",
                    "points": 640,
                    "pointsType": "XP"
                }
            ]
        },
        {
            "nb": "22826",
            "name": "Rodrigo Toste Ferreira",
            "avatar": "/february2017/nb22826.jpg",
            "email": "rodrigo14miguel@gmail.com",
            "password": "18041991",
            "profile": "Player",
            "dateOfBirth": "18/04/1991",
            "contact": "910355331",
            "businessUnit": "IMS",
            "mbti": "INTJ",
            "counter": 0,
            "voted": "Nobody",
            "tardiness": 0,
            "skills": [
                {
                    "people": 6,
                    "communication": 6,
                    "problemSolving": 7,
                    "management": 5,
                    "android": 1
                }
            ],
            "score": [
                {
                    "date": "Mon Feb 06 2017",
                    "countType": "ACTIVITY",
                    "name": "Bónus",
                    "points": 50,
                    "pointsType": "KP"
                },
                {
                    "date": "Mon Feb 06 2017",
                    "countType": "ACTIVITY",
                    "name": "3º lugar no threasure hunt",
                    "points": 100,
                    "pointsType": "XP"
                },
                {
                    "date": "Tue Feb 07 2017",
                    "countType": "ACTIVITY",
                    "name": "Duck Race",
                    "points": 40,
                    "pointsType": "XP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "ACTIVITY",
                    "name": "Chain of Claws",
                    "points": -150,
                    "pointsType": "XP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "BADGE",
                    "name": "WATCH",
                    "points": 20,
                    "pointsType": "HP"
                },
                {
                    "date": "Sat Feb 11 2017",
                    "countType": "ACTIVITY",
                    "name": "Night challenge",
                    "points": 640,
                    "pointsType": "XP"
                },
                {
                    "date": "Sat Feb 11 2017",
                    "countType": "ACTIVITY",
                    "name": "Attacker",
                    "points": 640,
                    "pointsType": "HP"
                }
            ]
        },
        {
            "nb": "22992",
            "name": "Sofia Fidalgo Silva",
            "avatar": "/february2017/nb22992.jpg",
            "email": "sofia_fidalgo_silva@hotmail.com",
            "password": "23011993",
            "profile": "Player",
            "dateOfBirth": "23/01/1993",
            "contact": "912552751",
            "businessUnit": "GTE",
            "mbti": "ISTP",
            "counter": 7,
            "voted": "Nobody",
            "tardiness": 0,
            "skills": [
                {
                    "people": 6,
                    "communication": 4,
                    "problemSolving": 8,
                    "management": 5,
                    "android": 3
                }
            ],
            "score": [
                {
                    "date": "Mon Feb 06 2017",
                    "countType": "ACTIVITY",
                    "name": "Bónus",
                    "points": 50,
                    "pointsType": "KP"
                },
                {
                    "date": "Tue Feb 07 2017",
                    "countType": "ACTIVITY",
                    "name": "Adivinhar segredo",
                    "points": 200,
                    "pointsType": "HP"
                },
                {
                    "date": "Tue Feb 07 2017",
                    "countType": "ACTIVITY",
                    "name": "1º lugar no kahoot",
                    "points": 100,
                    "pointsType": "KP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "ACTIVITY",
                    "name": "Chain of Claws",
                    "points": 350,
                    "pointsType": "XP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "ACTIVITY",
                    "name": "Adivinhar segredo",
                    "points": 200,
                    "pointsType": "HP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "BADGE",
                    "name": "WATCH",
                    "points": 20,
                    "pointsType": "HP"
                },
                {
                    "date": "Fri Feb 10 2017",
                    "countType": "ACTIVITY",
                    "name": "Adivinhar segredo",
                    "points": -50,
                    "pointsType": "HP"
                },
                {
                    "date": "Fri Feb 10 2017",
                    "countType": "ACTIVITY",
                    "name": "Adivinhar segredo",
                    "points": 200,
                    "pointsType": "HP"
                },
                {
                    "date": "Fri Feb 10 2017",
                    "countType": "ACTIVITY",
                    "name": "2º lugar no kahoot",
                    "points": 50,
                    "pointsType": "KP"
                },
                {
                    "date": "Sat Feb 11 2017",
                    "countType": "ACTIVITY",
                    "name": "Night challenge",
                    "points": 100,
                    "pointsType": "XP"
                },
                {
                    "date": "Sat Feb 11 2017",
                    "countType": "ACTIVITY",
                    "name": "Attacker",
                    "points": 300,
                    "pointsType": "HP"
                }
            ]
        },
        {
            "nb": "23055",
            "name": "Eduardo Jorge Fonseca",
            "avatar": "/february2017/nb23055.jpg",
            "email": "ejbfaa@gmail.com",
            "password": "04121991",
            "profile": "Player",
            "dateOfBirth": "04/12/1991",
            "contact": "913550541",
            "businessUnit": "FSI",
            "mbti": "ISTJ",
            "counter": 1,
            "voted": "Nobody",
            "tardiness": 0,
            "skills": [
                {
                    "people": 5,
                    "communication": 8,
                    "problemSolving": 8,
                    "management": 8,
                    "android": 1
                }
            ],
            "score": [
                {
                    "date": "Mon Feb 06 2017",
                    "countType": "ACTIVITY",
                    "name": "Bónus",
                    "points": 50,
                    "pointsType": "KP"
                },
                {
                    "date": "Mon Feb 06 2017",
                    "countType": "ACTIVITY",
                    "name": "4º lugar no threasure hunt",
                    "points": 50,
                    "pointsType": "XP"
                },
                {
                    "date": "Tue Feb 07 2017",
                    "countType": "ACTIVITY",
                    "name": "Atraso",
                    "points": -10,
                    "pointsType": "HP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "ACTIVITY",
                    "name": "Chain of Claws",
                    "points": 350,
                    "pointsType": "XP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "ACTIVITY",
                    "name": "Inserir segredo",
                    "points": 200,
                    "pointsType": "HP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "ACTIVITY",
                    "name": "Adivinhar segredo",
                    "points": -200,
                    "pointsType": "HP"
                },
                {
                    "date": "Thu Feb 09 2017",
                    "countType": "BADGE",
                    "name": "WATCH",
                    "points": 20,
                    "pointsType": "HP"
                },
                {
                    "date": "Fri Feb 10 2017",
                    "countType": "ACTIVITY",
                    "name": "1º lugar no kahoot",
                    "points": 100,
                    "pointsType": "KP"
                },
                {
                    "date": "Sat Feb 11 2017",
                    "countType": "ACTIVITY",
                    "name": "Night challenge",
                    "points": 820,
                    "pointsType": "XP"
                }
            ]
        },
        {
            "nb": "23054",
            "name": "Joana Maciel",
            "avatar": "/february2017/nb23054.jpg",
            "email": "joanamaciel_1992@hotmail.com",
            "password": "29051992",
            "profile": "Player",
            "dateOfBirth": "29/05/1992",
            "contact": "963985219",
            "businessUnit": "GTE",
            "mbti": "ISTJ",
            "counter": 0,
            "voted": "Nobody",
            "tardiness": 0,
            "skills": [
                {
                    "people": 7,
                    "communication": 6,
                    "problemSolving": 7,
                    "management": 8,
                    "android": 1
                }
            ],
            "score": [
                {
                    "date": "Mon Feb 06 2017",
                    "countType": "ACTIVITY",
                    "name": "Voluntário medley",
                    "points": 100,
                    "pointsType": "HP"
                },
                {
                    "date": "Mon Feb 06 2017",
                    "countType": "ACTIVITY",
                    "name": "Atraso no Avatar",
                    "points": -50,
                    "pointsType": "HP"
                },
                {
                    "date": "Mon Feb 06 2017",
                    "countType": "ACTIVITY",
                    "name": "Atraso na auto-avaliação",
                    "points": -50,
                    "pointsType": "KP"
                },
                {
                    "date": "Mon Feb 06 2017",
                    "countType": "ACTIVITY",
                    "name": "2º lugar no threasure hunt",
                    "points": 200,
                    "pointsType": "XP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "ACTIVITY",
                    "name": "Adivinhar segredo",
                    "points": 50,
                    "pointsType": "HP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "ACTIVITY",
                    "name": "Chain of Claws",
                    "points": 350,
                    "pointsType": "XP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "BADGE",
                    "name": "WATCH",
                    "points": 20,
                    "pointsType": "HP"
                },
                {
                    "date": "Sat Feb 11 2017",
                    "countType": "ACTIVITY",
                    "name": "Night challenge",
                    "points": 190,
                    "pointsType": "XP"
                }
            ]
        },
        {
            "nb": "23034",
            "name": "Luciano Ferraz",
            "avatar": "/february2017/nb23034.jpg",
            "email": "Ljoferraz@gmail.com",
            "password": "12051992",
            "profile": "Player",
            "dateOfBirth": "12/05/1992",
            "contact": "927686847",
            "businessUnit": "CF",
            "mbti": "ESTP",
            "counter": 2,
            "voted": "Nobody",
            "tardiness": 0,
            "skills": [
                {
                    "people": 8,
                    "communication": 7,
                    "problemSolving": 9,
                    "management": 7,
                    "android": 3
                }
            ],
            "score": [
                {
                    "date": "Mon Feb 06 2017",
                    "countType": "ACTIVITY",
                    "name": "Voluntário medley",
                    "points": 100,
                    "pointsType": "HP"
                },
                {
                    "date": "Mon Feb 06 2017",
                    "countType": "ACTIVITY",
                    "name": "Bónus",
                    "points": 50,
                    "pointsType": "KP"
                },
                {
                    "date": "Mon Feb 06 2017",
                    "countType": "ACTIVITY",
                    "name": "3º lugar no threasure hunt",
                    "points": 100,
                    "pointsType": "XP"
                },
                {
                    "date": "Tue Feb 07 2017",
                    "countType": "ACTIVITY",
                    "name": "Vencedor do ninjamotherfucker",
                    "points": 50,
                    "pointsType": "XP"
                },
                {
                    "date": "Tue Feb 07 2017",
                    "countType": "ACTIVITY",
                    "name": "Inserir segredo",
                    "points": 200,
                    "pointsType": "HP"
                },
                {
                    "date": "Tue Feb 07 2017",
                    "countType": "ACTIVITY",
                    "name": "Adivinhar segredo",
                    "points": -200,
                    "pointsType": "HP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "ACTIVITY",
                    "name": "Adivinhar segredo",
                    "points": 50,
                    "pointsType": "HP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "ACTIVITY",
                    "name": "Adivinhar segredo",
                    "points": 50,
                    "pointsType": "HP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "ACTIVITY",
                    "name": "Chain of Claws",
                    "points": 350,
                    "pointsType": "XP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "BADGE",
                    "name": "WATCH",
                    "points": 20,
                    "pointsType": "HP"
                },
                {
                    "date": "Sat Feb 11 2017",
                    "countType": "ACTIVITY",
                    "name": "Night challenge",
                    "points": 100,
                    "pointsType": "XP"
                }
            ]
        },
        {
            "nb": "23056",
            "name": "André Sobral ",
            "avatar": "/february2017/nb23056.jpg",
            "email": "amsobral5@gmail.com",
            "password": "17081991",
            "profile": "Player",
            "dateOfBirth": "17/08/1991",
            "contact": "916091323",
            "businessUnit": "FSI",
            "mbti": "ISTJ",
            "counter": 0,
            "voted": "Nobody",
            "tardiness": 0,
            "skills": [
                {
                    "people": 8,
                    "communication": 7,
                    "problemSolving": 7,
                    "management": 6,
                    "android": 2
                }
            ],
            "score": [
                {
                    "date": "Mon Feb 06 2017",
                    "countType": "ACTIVITY",
                    "name": "3º lugar no kahoot",
                    "points": 25,
                    "pointsType": "KP"
                },
                {
                    "date": "Mon Feb 06 2017",
                    "countType": "ACTIVITY",
                    "name": "Bónus",
                    "points": 50,
                    "pointsType": "KP"
                },
                {
                    "date": "Mon Feb 06 2017",
                    "countType": "ACTIVITY",
                    "name": "4º lugar no threasure hunt",
                    "points": 50,
                    "pointsType": "XP"
                },
                {
                    "date": "Tue Feb 07 2017",
                    "countType": "ACTIVITY",
                    "name": "Duck Race",
                    "points": 35,
                    "pointsType": "XP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "ACTIVITY",
                    "name": "Chain of Claws",
                    "points": -100,
                    "pointsType": "XP"
                },
                {
                    "date": "Wed Feb 08 2017",
                    "countType": "BADGE",
                    "name": "WATCH",
                    "points": 20,
                    "pointsType": "HP"
                },
                {
                    "date": "Sat Feb 11 2017",
                    "countType": "ACTIVITY",
                    "name": "Night challenge",
                    "points": 640,
                    "pointsType": "XP"
                }
            ]
        }
    ]
});
