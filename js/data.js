window.DB = {
    0: { 
        type: 'intro', 
        en: { 
            title: "Welcome to Native Shift", 
            text: `<p><strong>Neuro-linguistic programming</strong> approaches use immersive, brain-based techniques to accelerate learning by connecting language input directly to neurological processes, behavior, and subconscious patterns.</p><h3 style="color:#38bdf8; margin-top:20px;">Space Memory</h3><p><strong>Spaced repetition</strong> is a learning technique that boosts long-term memory by reviewing information at increasing intervals.</p><h3 style="color:#38bdf8; margin-top:20px;">Cognitive Shifts</h3><ul style="margin-left:20px; margin-top:10px;"><li><strong>Stop Translating, Start "Toggling"</strong></li><li><strong>Embrace "English as a Lingua Franca"</strong></li><li><strong>Emotional Connection</strong></li></ul>`
        }, 
        fr: { 
            title: "Bienvenue à Native Shift 🇫🇷", 
            text: `<p><strong>La méthode Native Shift</strong> utilise des techniques immersives pour accélérer l'apprentissage du français en connectant l'entrée linguistique directement aux processus neurologiques.</p><h3 style="color:#38bdf8; margin-top:20px;">Répétition Espacée</h3><p>Une technique d'apprentissage qui renforce la mémoire à long terme.</p><h3 style="color:#38bdf8; margin-top:20px;">Changements Cognitifs</h3><ul style="margin-left:20px; margin-top:10px;"><li><strong>Arrêtez de traduire, commencez à "Basculer"</strong></li><li><strong>Connexion Émotionnelle</strong></li></ul>` 
        } 
    },
    1: { 
        type: 'detailed_lesson', imageKeyword: "bakery", expressionPT: "O que você vai querer?",
        situations: [{text:"Restaurant",color:"color-1"},{text:"Bakery",color:"color-2"}],
        ptAlternatives: [{text:"Pois não!",color:"color-1"}],
        brWalkthrough: "Imagine você entra na padaria. Ele pergunta: 'O que você vai querer?'",
        enWalkthrough: "The attendant asks what you want to order politely.",
        correctExpression: "What can I get you?", explanation: "Use in service. Don't say 'What do you want?'.",
        brainMap: {pt:"Futuro Educado",en:"Polite Service"}, brainMapNote: "Avoid direct 'want'.",
        grammarHack: "Get = Serve.", natives: [{text:"What would you like?",note:"(formal)",type:"neutral"}],
        examples: [{text:"'What can I get you?' - Friends",source:"TV"}],
        mcqQuestion: "O garçom pergunta:", mcqOptions: ["What do you want?","What can I get you?","What you want?","Want?"], correctIndex: 1,
        recap: "DO: Use 'What can I get you?'.",
        fr: {
            target: "Qu'est-ce que je vous sers ?", walkthrough: "Le serveur demande votre commande.",
            explanation: "Utilisez 'Servir'.", brainMap: "Futur Poli", hack: "Sers = Servir",
            natives: ["Que désirez-vous ?"], recap: "Dites 'Qu'est-ce que je vous sers ?'",
            situations: ["Restaurant","Boulangerie"], mcqQuestion: "Le serveur demande :",
            mcqOptions: ["Tu veux quoi ?","Qu'est-ce que je vous sers ?","Je peux aider ?","Alors ?"],
            examples: [{text:"'Et pour Monsieur ?' - Amélie Poulain",source:"Film"}]
        }
    },
    2: {
        type: 'detailed_lesson', imageKeyword: "smartphone", expressionPT: "Celular",
        situations: [{text:"Asking number",color:"color-1"}], ptAlternatives: [{text:"Zap",color:"color-1"}],
        brWalkthrough: "Você pede o número: 'Me passa seu celular?'",
        enWalkthrough: "You ask for their number using the common word.",
        correctExpression: "Phone", explanation: "Natives say 'Phone', not 'Cell'.",
        brainMap: {pt:"Móvel",en:"Device"}, brainMapNote: "Drop 'Cell'.",
        grammarHack: "Just say Phone.", natives: [{text:"Can I get your number?",note:"(social)",type:"neutral"}],
        examples: [{text:"'Phone home' - E.T.",source:"Movie"}],
        mcqQuestion: "Eu perdi meu...", mcqOptions: ["Cell","Phone","Mobile","Cellular"], correctIndex: 1,
        recap: "Say 'Phone'.",
        fr: {
            target: "Portable", walkthrough: "Vous demandez son numéro.",
            explanation: "On dit 'Portable'.", brainMap: "Objet porté", hack: "Portable.",
            natives: ["Ton 06"], recap: "Dites 'Portable'.",
            situations: ["Demander un numéro"], mcqQuestion: "J'ai perdu mon...",
            mcqOptions: ["Cellulaire","Portable","Mobile","Téléphone"],
            examples: [{text:"'Passe-moi ton portable.' - Intouchables",source:"Film"}]
        }
    },
    3: {
        type: 'detailed_lesson', imageKeyword: "lunch", expressionPT: "Pegar almoço",
        situations: [{text:"Leaving work",color:"color-1"}], ptAlternatives: [{text:"Almoçar",color:"color-1"}],
        brWalkthrough: "Você diz: 'Vou pegar meu almoço.'",
        enWalkthrough: "You say you are going to get lunch quickly.",
        correctExpression: "I will grab my lunch", explanation: "'Grab' = Quick action.",
        brainMap: {pt:"Pegar",en:"Grab"}, brainMapNote: "Use Grab for food.",
        grammarHack: "Grab, not Take.", natives: [{text:"Let's grab coffee",note:"(invite)",type:"neutral"}],
        examples: [{text:"'Let's grab food' - Avengers",source:"Movie"}],
        mcqQuestion: "Convite rápido:", mcqOptions: ["Take coffee","Grab coffee","Drink coffee","Have coffee"], correctIndex: 1,
        recap: "Use 'Grab'.",
        fr: {
            target: "Je vais chercher à manger", walkthrough: "Vous allez déjeuner.",
            explanation: "'Chercher' = Action d'aller prendre.", brainMap: "Aller chercher", hack: "Chercher = Grab",
            natives: ["Je file manger"], recap: "Dites 'Chercher à manger'.",
            situations: ["Pause déj"], mcqQuestion: "Je vais ___ mon déjeuner.",
            mcqOptions: ["Prendre","Chercher","Manger","Avoir"],
            examples: [{text:"'On va chercher à manger ?' - L'Auberge Espagnole",source:"Film"}]
        }
    },
    4: {
        type: 'detailed_lesson', imageKeyword: "weekend", expressionPT: "Como foi o findi?",
        situations: [{text:"Monday",color:"color-1"}], ptAlternatives: [{text:"E o fim de semana?",color:"color-1"}],
        brWalkthrough: "Segunda-feira: 'Como foi o findi?'",
        enWalkthrough: "You ask how their weekend went.",
        correctExpression: "How did the weekend go?", explanation: "Structure: How did X go?",
        brainMap: {pt:"Como foi?",en:"How did it go?"}, brainMapNote: "Past events.",
        grammarHack: "How did + Thing + Go.", natives: [{text:"How was it?",note:"(short)",type:"neutral"}],
        examples: [{text:"'How did it go?' - The Office",source:"TV"}],
        mcqQuestion: "A reunião:", mcqOptions: ["How was it go?","How did it go?","How went?","Good?"], correctIndex: 1,
        recap: "Use 'How did it go?'.",
        fr: {
            target: "C'était comment ton week-end ?", walkthrough: "Lundi matin.",
            explanation: "Structure naturelle.", brainMap: "C'était comment", hack: "C'était comment + X",
            natives: ["Alors, ce week-end ?"], recap: "Dites 'C'était comment ?'.",
            situations: ["Lundi"], mcqQuestion: "La réunion, ___ ?",
            mcqOptions: ["C'était comment","Comment fut","Ça va","Bien"],
            examples: [{text:"'C'était comment ?' - Le Prénom",source:"Film"}]
        }
    },
    5: {
        type: 'detailed_lesson', imageKeyword: "thumbsup", expressionPT: "Tudo bem / Nada mal",
        situations: [{text:"Greeting",color:"color-1"}], ptAlternatives: [{text:"Tranquilo",color:"color-1"}],
        brWalkthrough: "Resposta para 'Tudo bem?': 'Nada mal.'",
        enWalkthrough: "You reply that you are good.",
        correctExpression: "Not too bad!", explanation: "Modest 'Good'.",
        brainMap: {pt:"Não mal",en:"Good"}, brainMapNote: "Common reply.",
        grammarHack: "Not too bad = Good.", natives: [{text:"Can't complain",note:"(optimistic)",type:"neutral"}],
        examples: [{text:"'Not too bad.'",source:"Speech"}],
        mcqQuestion: "How are you?", mcqOptions: ["Not too bad","Regular","So-so","More or less"], correctIndex: 0,
        recap: "Use 'Not too bad'.",
        fr: {
            target: "Pas mal !", walkthrough: "Réponse standard.",
            explanation: "Positif et modeste.", brainMap: "Pas mal", hack: "Pas mal = Bien",
            natives: ["Ça va"], recap: "Dites 'Pas mal'.",
            situations: ["Salut"], mcqQuestion: "Ça va ?",
            mcqOptions: ["Pas mal","Moyen","Bof","Comme ci"],
            examples: [{text:"'Pas mal, non ?' - La Classe Américaine",source:"Film"}]
        }
    },
    6: {
        type: 'detailed_lesson', imageKeyword: "surprise", expressionPT: "Nossa!",
        situations: [{text:"Surprise",color:"color-1"}], ptAlternatives: [{text:"Meu Deus",color:"color-1"}],
        brWalkthrough: "Algo caro: 'Nossa! Que caro!'",
        enWalkthrough: "You express surprise.",
        correctExpression: "Holy cow!", explanation: "Safe shock.",
        brainMap: {pt:"Choque",en:"Shock"}, brainMapNote: "Family friendly.",
        grammarHack: "Holy Cow.", natives: [{text:"Oh my gosh",note:"(safe)",type:"neutral"}],
        examples: [{text:"'Holy cow!' - Sports",source:"TV"}],
        mcqQuestion: "Ganhou na loteria:", mcqOptions: ["Holy cow!","Holy Mary","Big God","Wow"], correctIndex: 0,
        recap: "Use 'Holy cow'.",
        fr: {
            target: "La vache !", walkthrough: "Grande surprise.",
            explanation: "Très courant.", brainMap: "La vache", hack: "Holy Cow = La Vache",
            natives: ["Purée !"], recap: "Dites 'La vache !'.",
            situations: ["Surprise"], mcqQuestion: "Il a gagné !",
            mcqOptions: ["La vache !","Zut","Mon Dieu","Bien"],
            examples: [{text:"'La vache !' - Les Bronzés",source:"Film"}]
        }
    },
    7: {
        type: 'detailed_lesson', imageKeyword: "guest", expressionPT: "Fique à vontade",
        situations: [{text:"Permission",color:"color-1"}], ptAlternatives: [{text:"Pode pegar",color:"color-1"}],
        brWalkthrough: "Você diz: 'Fique à vontade.'",
        enWalkthrough: "You give permission politely.",
        correctExpression: "Be my guest", explanation: "Polite 'Yes'.",
        brainMap: {pt:"Convidado",en:"Guest"}, brainMapNote: "Welcoming.",
        grammarHack: "Treat as Guest.", natives: [{text:"Help yourself",note:"(food)",type:"neutral"}],
        examples: [{text:"'Be my guest!' - Disney",source:"Song"}],
        mcqQuestion: "Posso entrar?", mcqOptions: ["Stay at will","Be my guest","Can","Yes"], correctIndex: 1,
        recap: "Use 'Be my guest'.",
        fr: {
            target: "Je vous en prie", walkthrough: "Permission polie.",
            explanation: "Formule standard.", brainMap: "Prier", hack: "Prie = Please",
            natives: ["Faites"], recap: "Dites 'Je vous en prie'.",
            situations: ["Permission"], mcqQuestion: "Puis-je ?",
            mcqOptions: ["Je vous en prie","Oui","Allez","D'acc"],
            examples: [{text:"'Je vous en prie.' - Amélie Poulain",source:"Film"}]
        }
    },
    8: {
        type: 'detailed_lesson', imageKeyword: "apology", expressionPT: "Foi mal",
        situations: [{text:"Mistake",color:"color-1"}], ptAlternatives: [{text:"Desculpa",color:"color-1"}],
        brWalkthrough: "Erro pequeno: 'Foi mal!'",
        enWalkthrough: "You apologize for a small mistake.",
        correctExpression: "My bad", explanation: "Casual apology.",
        brainMap: {pt:"Minha culpa",en:"My fault"}, brainMapNote: "Slang.",
        grammarHack: "My Bad.", natives: [{text:"My fault",note:"(neutral)",type:"neutral"}],
        examples: [{text:"'My bad.'",source:"TV"}],
        mcqQuestion: "Derrubou algo:", mcqOptions: ["My bad","Pardon","Forgive","Guilty"], correctIndex: 0,
        recap: "Use 'My bad'.",
        fr: {
            target: "Au temps pour moi", walkthrough: "Petite erreur.",
            explanation: "Admettre une erreur.", brainMap: "Ma faute", hack: "Ma faute",
            natives: ["Désolé"], recap: "Dites 'Au temps pour moi'.",
            situations: ["Erreur"], mcqQuestion: "J'ai raté.",
            mcqOptions: ["Au temps pour moi","Pardon","Excuse","Faute"],
            examples: [{text:"'Au temps pour moi.' - OSS 117",source:"Film"}]
        }
    },
    9: {
        type: 'detailed_lesson', imageKeyword: "sorry", expressionPT: "Desculpa por isso",
        situations: [{text:"Late",color:"color-1"}], ptAlternatives: [{text:"Foi mal",color:"color-1"}],
        brWalkthrough: "Atrasado: 'Desculpa por isso.'",
        enWalkthrough: "You apologize for a specific thing.",
        correctExpression: "Sorry about that", explanation: "Connects apology to context.",
        brainMap: {pt:"Sobre isso",en:"About that"}, brainMapNote: "Specific.",
        grammarHack: "Sorry about THAT.", natives: [{text:"So sorry",note:"(casual)",type:"neutral"}],
        examples: [{text:"'Sorry about that.'",source:"Movie"}],
        mcqQuestion: "Esqueceu algo:", mcqOptions: ["Sorry for","Sorry about that","Excuse","Pardon"], correctIndex: 1,
        recap: "Use 'Sorry about that'.",
        fr: {
            target: "Désolé pour ça", walkthrough: "Excuse spécifique.",
            explanation: "Pour un oubli.", brainMap: "Pour ça", hack: "Pour ça",
            natives: ["Navré"], recap: "Dites 'Désolé pour ça'.",
            situations: ["Oubli"], mcqQuestion: "J'ai oublié.",
            mcqOptions: ["Désolé pour ça","Pardon","Oups","Excuse"],
            examples: [{text:"'Désolé pour ça.' - Lupin",source:"Série"}]
        }
    },
    10: {
        type: 'detailed_lesson', imageKeyword: "run", expressionPT: "Anda logo",
        situations: [{text:"Rush",color:"color-1"}], ptAlternatives: [{text:"Vamos",color:"color-1"}],
        brWalkthrough: "Pressa: 'Anda logo!'",
        enWalkthrough: "You tell them to move faster.",
        correctExpression: "Hurry up", explanation: "Speed up.",
        brainMap: {pt:"Rápido",en:"Fast"}, brainMapNote: "Urgent.",
        grammarHack: "Hurry.", natives: [{text:"Let's go",note:"(nice)",type:"neutral"}],
        examples: [{text:"'Hurry up!'",source:"Movie"}],
        mcqQuestion: "Amigo lento:", mcqOptions: ["Walk fast","Hurry up","Run","Speed"], correctIndex: 1,
        recap: "Use 'Hurry up'.",
        fr: {
            target: "Dépêche-toi", walkthrough: "Aller plus vite.",
            explanation: "Urgence.", brainMap: "Vite", hack: "Dépêche",
            natives: ["Grouille"], recap: "Dites 'Dépêche-toi'.",
            situations: ["Pressé"], mcqQuestion: "Tu es lent.",
            mcqOptions: ["Dépêche-toi","Vite","Cours","Allez"],
            examples: [{text:"'Dépêche-toi !' - Taxi",source:"Film"}]
        }
    },
    11: {
        type: 'detailed_lesson', imageKeyword: "start", expressionPT: "Vamos começar",
        situations: [{text:"Meeting",color:"color-1"}], ptAlternatives: [{text:"Bora",color:"color-1"}],
        brWalkthrough: "Reunião: 'Vamos começar.'",
        enWalkthrough: "You suggest starting.",
        correctExpression: "Let's get started", explanation: "Active start.",
        brainMap: {pt:"Iniciar",en:"Start"}, brainMapNote: "Business.",
        grammarHack: "Get Started.", natives: [{text:"Shall we?",note:"(formal)",type:"neutral"}],
        examples: [{text:"'Let's get started!'",source:"Song"}],
        mcqQuestion: "Professor:", mcqOptions: ["Let's get started","Commence","Begin","Go"], correctIndex: 0,
        recap: "Use 'Let's get started'.",
        fr: {
            target: "On s'y met", walkthrough: "Lancer l'activité.",
            explanation: "Dynamique.", brainMap: "S'y mettre", hack: "On y va",
            natives: ["C'est parti"], recap: "Dites 'On s'y met'.",
            situations: ["Réunion"], mcqQuestion: "On commence.",
            mcqOptions: ["On s'y met","Début","Allez","Go"],
            examples: [{text:"'Allez, on s'y met.' - Dix pour cent",source:"Série"}]
        }
    },
    12: {
        type: 'detailed_lesson', imageKeyword: "confused", expressionPT: "Entendi errado",
        situations: [{text:"Error",color:"color-1"}], ptAlternatives: [{text:"Confundi",color:"color-1"}],
        brWalkthrough: "Erro: 'Entendi errado.'",
        enWalkthrough: "You admit a mistake.",
        correctExpression: "I misunderstood", explanation: "Honest error.",
        brainMap: {pt:"Mal entendido",en:"Misunderstood"}, brainMapNote: "Clear.",
        grammarHack: "Mis-understood.", natives: [{text:"Mixed up",note:"(casual)",type:"neutral"}],
        examples: [{text:"'I misunderstood.'",source:"Movie"}],
        mcqQuestion: "Lugar errado:", mcqOptions: ["I misunderstood","Wrongly","Confused","Error"], correctIndex: 0,
        recap: "Admit it.",
        fr: {
            target: "J'ai mal compris", walkthrough: "Incompréhension.",
            explanation: "Direct.", brainMap: "Mal compris", hack: "Mal compris",
            natives: ["Confondu"], recap: "Dites 'J'ai mal compris'.",
            situations: ["Erreur"], mcqQuestion: "Erreur de sens.",
            mcqOptions: ["J'ai mal compris","Faux","Erreur","Pardon"],
            examples: [{text:"'J'ai mal compris.' - Le Dîner de Cons",source:"Film"}]
        }
    },
    13: {
        type: 'detailed_lesson', imageKeyword: "handshake", expressionPT: "Combinado",
        situations: [{text:"Plan",color:"color-1"}], ptAlternatives: [{text:"Fechado",color:"color-1"}],
        brWalkthrough: "Acordo: 'Combinado!'",
        enWalkthrough: "You agree to plans.",
        correctExpression: "Sounds good", explanation: "Agreement.",
        brainMap: {pt:"Soa bem",en:"Sounds good"}, brainMapNote: "Social.",
        grammarHack: "Sounds Good.", natives: [{text:"Deal",note:"(business)",type:"neutral"}],
        examples: [{text:"'Sounds good.'",source:"Movie"}],
        mcqQuestion: "Almoço?", mcqOptions: ["Combined","Sounds good","Match","Yes"], correctIndex: 1,
        recap: "Use 'Sounds good'.",
        fr: {
            target: "Ça marche", walkthrough: "Validation.",
            explanation: "Accord.", brainMap: "Ça marche", hack: "Ça marche",
            natives: ["C'est noté"], recap: "Dites 'Ça marche'.",
            situations: ["Plan"], mcqQuestion: "On se voit ?",
            mcqOptions: ["Ça marche","Oui","Bon","D'acc"],
            examples: [{text:"'Ok, ça marche.' - Kaamelott",source:"Série"}]
        }
    },
    14: {
        type: 'detailed_lesson', imageKeyword: "shock", expressionPT: "Nossa!",
        situations: [{text:"Shock",color:"color-1"}], ptAlternatives: [{text:"Mentira",color:"color-1"}],
        brWalkthrough: "Fofoca: 'Nossa!'",
        enWalkthrough: "You express disbelief.",
        correctExpression: "No way!", explanation: "Shock.",
        brainMap: {pt:"Sem caminho",en:"No way"}, brainMapNote: "Disbelief.",
        grammarHack: "No Way.", natives: [{text:"Get out",note:"(slang)",type:"neutral"}],
        examples: [{text:"'No way!' - Bill & Ted",source:"Movie"}],
        mcqQuestion: "Ganhou carro:", mcqOptions: ["Yes way","No way","Big","Father"], correctIndex: 1,
        recap: "Use 'No way'.",
        fr: {
            target: "C'est pas vrai !", walkthrough: "Incrédulité.",
            explanation: "Surprise.", brainMap: "Pas vrai", hack: "Pas vrai",
            natives: ["Sans blague"], recap: "Dites 'C'est pas vrai !'.",
            situations: ["Choc"], mcqQuestion: "Il a gagné !",
            mcqOptions: ["C'est pas vrai !","Vrai","Oui","Super"],
            examples: [{text:"'Non ? C'est pas vrai !' - Les Visiteurs",source:"Film"}]
        }
    },
    15: {
        type: 'detailed_lesson', imageKeyword: "scared", expressionPT: "Vixe!",
        situations: [{text:"Worry",color:"color-1"}], ptAlternatives: [{text:"Eita",color:"color-1"}],
        brWalkthrough: "Problema: 'Vixe...'",
        enWalkthrough: "You react to a problem.",
        correctExpression: "Yikes", explanation: "Awkward/Bad.",
        brainMap: {pt:"Preocupação",en:"Worry"}, brainMapNote: "Sound.",
        grammarHack: "Yikes.", natives: [{text:"Uh-oh",note:"(mistake)",type:"neutral"}],
        examples: [{text:"'Yikes!' - Scooby Doo",source:"Cartoon"}],
        mcqQuestion: "Café na camisa:", mcqOptions: ["Yikes","Yay","Wow","Good"], correctIndex: 0,
        recap: "Use 'Yikes'.",
        fr: {
            target: "Aïe aïe aïe", walkthrough: "Problème.",
            explanation: "Préoccupation.", brainMap: "Aïe", hack: "Aïe",
            natives: ["Mince"], recap: "Dites 'Aïe aïe aïe'.",
            situations: ["Problème"], mcqQuestion: "Pluie !",
            mcqOptions: ["Aïe aïe aïe","Super","Bien","Cool"],
            examples: [{text:"'Aïe aïe aïe !' - Le Gendarme",source:"Film"}]
        }
    },
    16: {
        type: 'final_lab', title: "🏆 Final Exam",
        levels: [
            {title:"🟢 Q1",color:"#22c55e",question:"Match: 'Combinado'?",options:["My bad","Sounds good","Hurry"],correct:1},
            {title:"🟢 Q2",color:"#22c55e",question:"Match: 'Celular'?",options:["Cell","Mobile","Phone"],correct:2},
            {title:"🟢 Q3",color:"#22c55e",question:"Match: 'Vixe'?",options:["Wow","Yikes","No way"],correct:1},
            {title:"🟡 Q4",color:"#facc15",question:"Late for meeting:",options:["Sorry about that","Excuse","My bad"],correct:0},
            {title:"🟡 Q5",color:"#facc15",question:"Waiter asks:",options:["Want pizza","Take pizza","Grab pizza"],correct:2},
            {title:"🟡 Q6",color:"#facc15",question:"Crazy news:",options:["Holy cow!","Holy Mary","Big God"],correct:0},
            {title:"🔴 Q7",color:"#ef4444",question:"Error: 'Lost my cellular'",options:["Lose","Phone","None"],correct:1},
            {title:"🔴 Q8",color:"#ef4444",question:"Error: 'Confused myself'",options:["Misunderstood","Confused","None"],correct:0},
            {title:"🔴 Q9",color:"#ef4444",question:"'What do you want?' is:",options:["Long","Rude","Wrong"],correct:1},
            {title:"🟣 Q10",color:"#a78bfa",question:"Translate: 'Foi mal'",options:["My bad","Sorry no","Blind"],correct:0}
        ],
        fr: {
            title: "🏆 Examen Final",
            levels: [
                {title:"🟢 Q1",color:"#22c55e",question:"Traduire: 'Combinado'",options:["Désolé","Ça marche","Vite"],correct:1},
                {title:"🟢 Q2",color:"#22c55e",question:"Traduire: 'Celular'",options:["Cellulaire","Mobile","Portable"],correct:2},
                {title:"🟢 Q3",color:"#22c55e",question:"Traduire: 'Vixe'",options:["Wow","Aïe aïe aïe","Pas vrai"],correct:1},
                {title:"🟡 Q4",color:"#facc15",question:"Retard (Desculpa por isso):",options:["Désolé pour ça","Pardon","Ma faute"],correct:0},
                {title:"🟡 Q5",color:"#facc15",question:"Resto (O que vai querer?):",options:["Je veux","Je prends","Qu'est-ce que je sers ?"],correct:2},
                {title:"🟡 Q6",color:"#facc15",question:"Surprise (Nossa!):",options:["La vache !","Mon Dieu","Zut"],correct:0},
                {title:"🔴 Q7",color:"#ef4444",question:"Erreur: 'Perdu cellulaire'",options:["Portable","Mobile","Rien"],correct:0},
                {title:"🔴 Q8",color:"#ef4444",question:"Erreur: 'Je suis confus'",options:["Mal compris","Sais pas","Rien"],correct:0},
                {title:"🔴 Q9",color:"#ef4444",question:"'Tu veux quoi?' est:",options:["Poli","Impoli","Correct"],correct:1},
                {title:"🟣 Q10",color:"#a78bfa",question:"Traduire: 'Foi mal'",options:["Au temps pour moi","Désolé","Pardon"],correct:0}
            ]
        }
    },
    17: {
        type: 'summary', title: "📑 Cheat Sheet",
        list: [
            {pt:"O que vai querer?",en:"What can I get you?"}, {pt:"Celular",en:"Phone"},
            {pt:"Pegar almoço",en:"Grab lunch"}, {pt:"Findi?",en:"How did weekend go?"},
            {pt:"Tudo bem",en:"Not too bad"}, {pt:"Nossa!",en:"Holy cow!"},
            {pt:"Fique à vontade",en:"Be my guest"}, {pt:"Foi mal",en:"My bad"},
            {pt:"Desculpa por isso",en:"Sorry about that"}, {pt:"Anda logo",en:"Hurry up"},
            {pt:"Vamos começar",en:"Let's get started"}, {pt:"Entendi errado",en:"I misunderstood"},
            {pt:"Combinado",en:"Sounds good"}, {pt:"Vixe!",en:"Yikes!"}
        ],
        fr: {
            title: "📑 Résumé",
            list: [
                {pt:"O que vai querer?",en:"Qu'est-ce que je sers ?"}, {pt:"Celular",en:"Portable"},
                {pt:"Pegar almoço",en:"Chercher à manger"}, {pt:"Findi?",en:"C'était comment ?"},
                {pt:"Tudo bem",en:"Pas mal"}, {pt:"Nossa!",en:"La vache !"},
                {pt:"Fique à vontade",en:"Je vous en prie"}, {pt:"Foi mal",en:"Au temps pour moi"},
                {pt:"Desculpa por isso",en:"Désolé pour ça"}, {pt:"Anda logo",en:"Dépêche-toi"},
                {pt:"Vamos começar",en:"On s'y met"}, {pt:"Entendi errado",en:"J'ai mal compris"},
                {pt:"Combinado",en:"Ça marche"}, {pt:"Vixe!",en:"Aïe aïe aïe"}
            ]
        }
    }
};
