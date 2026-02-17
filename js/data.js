window.DB = {
    0: { 
        type: 'intro', 
        en: { 
            title: "Welcome to Project 2", 
            text: `<p><strong>Native Shift Method: Phase 2.</strong> We are moving beyond basic interactions into emotional states, location nuances, and storytelling.</p><h3 style="color:#38bdf8; margin-top:20px;">Focus Areas</h3><ul style="margin-left:20px; margin-top:10px;"><li><strong>Emotional Precision</strong> (Fed up vs Annoyed)</li><li><strong>Spatial Awareness</strong> (Town vs City vs Downtown)</li><li><strong>Social nuance</strong> (Buddy vs Friend)</li></ul>`
        }, 
        fr: { 
            title: "Bienvenue au Projet 2 🇫🇷", 
            text: `<p><strong>Méthode Native Shift : Phase 2.</strong> Nous allons au-delà des interactions de base pour explorer les états émotionnels, les nuances de lieu et la narration.</p><h3 style="color:#38bdf8; margin-top:20px;">Points Clés</h3><ul style="margin-left:20px; margin-top:10px;"><li><strong>Précision Émotionnelle</strong> (En avoir marre vs Être énervé)</li><li><strong>Conscience Spatiale</strong> (Ville vs Centre-ville)</li><li><strong>Nuance Sociale</strong> (Pote vs Ami)</li></ul>` 
        } 
    },
    1: { 
        type: 'detailed_lesson', imageKeyword: "stop", expressionPT: "Fim de papo / Ponto final",
        situations: [{text:"Argument",color:"color-1"},{text:"Decision",color:"color-2"}],
        ptAlternatives: [{text:"Acabou",color:"color-1"}],
        brWalkthrough: "Você quer encerrar uma discussão: 'Não vou e pronto. Fim de papo.'",
        enWalkthrough: "You use this to end a conversation or argument definitively.",
        correctExpression: "End of story", explanation: "It means there is nothing more to say.",
        brainMap: {pt:"Fim da história",en:"Final decision"}, brainMapNote: "Authoritative.",
        grammarHack: "Story = Discussion.", natives: [{text:"Period.",note:"(very strong)",type:"neutral"}],
        examples: [{text:"'I am not going. End of story.'",source:"Movie"}],
        mcqQuestion: "Você não quer mais discutir. Você diz:", mcqOptions: ["Finish talk","End of story","Close mouth","The end"], correctIndex: 1,
        recap: "DO: Use 'End of story' to stop arguing.",
        fr: {
            target: "Point final", walkthrough: "Vous voulez clore le débat immédiatement.",
            explanation: "Indique qu'il n'y a plus rien à ajouter.", brainMap: "Point final", hack: "Ponctuation finale",
            natives: ["Un point c'est tout","N'en parlons plus"], recap: "Dites 'Point final'.",
            situations: ["Dispute","Décision"], mcqQuestion: "Je ne veux plus en parler :",
            mcqOptions: ["Fini","Point final","La fin","Stop"],
            examples: [{text:"'Je ne viens pas. Point final.'",source:"Film"}]
        }
    },
    2: { 
        type: 'detailed_lesson', imageKeyword: "book", expressionPT: "É uma longa história",
        situations: [{text:"Complicated past",color:"color-1"}],
        ptAlternatives: [{text:"Nem te conto",color:"color-1"}],
        brWalkthrough: "Alguém pergunta o que houve e é complicado: 'Ah, é uma longa história...'",
        enWalkthrough: "You use this when you don't want to explain all the details.",
        correctExpression: "It's a long story", explanation: "Used to avoid explaining complex details.",
        brainMap: {pt:"História longa",en:"Too complex"}, brainMapNote: "Dismissive or tired.",
        grammarHack: "Long Story.", natives: [{text:"Don't ask",note:"(avoiding)",type:"neutral"}],
        examples: [{text:"'How did you get here?' - 'It's a long story.'",source:"TV"}],
        mcqQuestion: "É complicado explicar. Você diz:", mcqOptions: ["It is big history","It's a long story","History large","I don't count"], correctIndex: 1,
        recap: "DO: Use 'It's a long story'.",
        fr: {
            target: "C'est une longue histoire", walkthrough: "C'est trop compliqué à expliquer maintenant.",
            explanation: "Pour éviter les détails ennuyeux ou compliqués.", brainMap: "Longue histoire", hack: "Longue histoire",
            natives: ["Ça serait trop long","Laisse tomber"], recap: "Dites 'C'est une longue histoire'.",
            situations: ["Compliqué"], mcqQuestion: "Pourquoi tu es en retard ?",
            mcqOptions: ["C'est une longue histoire","C'est grand","Je raconte pas","Histoire"],
            examples: [{text:"'C'est une longue histoire...' - Titanic",source:"Film"}]
        }
    },
    3: { 
        type: 'detailed_lesson', imageKeyword: "friends", expressionPT: "Você é meu parceiro/amigo",
        situations: [{text:"Bonding",color:"color-1"}],
        ptAlternatives: [{text:"Meu chapa",color:"color-1"}],
        brWalkthrough: "Você diz para um amigo próximo: 'Você é meu parceiro.'",
        enWalkthrough: "You express close friendship casually.",
        correctExpression: "You are my buddy", explanation: "'Buddy' is warmer and more casual than 'friend'.",
        brainMap: {pt:"Camarada",en:"Close friend"}, brainMapNote: "Casual male bonding.",
        grammarHack: "Buddy = Brother/Friend.", natives: [{text:"You're my pal",note:"(old school)",type:"neutral"}],
        examples: [{text:"'Thanks, buddy.'",source:"Movie"}],
        mcqQuestion: "Um jeito carinhoso de chamar amigo:", mcqOptions: ["You are my colleague","You are my buddy","You are my member","You are my person"], correctIndex: 1,
        recap: "DO: Use 'Buddy' for close friends.",
        fr: {
            target: "T'es mon pote", walkthrough: "Vous parlez à un ami proche de façon décontractée.",
            explanation: "'Pote' est le terme standard familier pour ami.", brainMap: "Pote", hack: "Pote = Buddy",
            natives: ["T'es mon frère","Mon vieux"], recap: "Dites 'T'es mon pote'.",
            situations: ["Amitié"], mcqQuestion: "À un bon ami :",
            mcqOptions: ["T'es mon collègue","T'es mon pote","T'es mon associé","T'es mon cher"],
            examples: [{text:"'Salut mon pote !' - Intouchables",source:"Film"}]
        }
    },
    4: { 
        type: 'detailed_lesson', imageKeyword: "house", expressionPT: "Estou em casa",
        situations: [{text:"Arrival",color:"color-1"}],
        ptAlternatives: [{text:"Cheguei",color:"color-1"}],
        brWalkthrough: "Você entra e avisa: 'Estou em casa!'",
        enWalkthrough: "You announce your arrival or location.",
        correctExpression: "I am home", explanation: "No preposition needed. NOT 'I am in my house'.",
        brainMap: {pt:"Estou Lar",en:"Location State"}, brainMapNote: "Home is a state, not just a building.",
        grammarHack: "I am [AT] home -> I am home.", natives: [{text:"I'm back",note:"(arrival)",type:"neutral"}],
        examples: [{text:"'Honey, I'm home!'",source:"Sitcom"}],
        mcqQuestion: "Você chegou. Você diz:", mcqOptions: ["I am in house","I am home","I stay house","I arrive house"], correctIndex: 1,
        recap: "DO: Say 'I am home'. DON'T: Say 'I am in house'.",
        fr: {
            target: "Je suis à la maison", walkthrough: "Vous indiquez votre localisation.",
            explanation: "On utilise 'à la maison' ou 'chez moi'.", brainMap: "À la maison", hack: "Chez moi",
            natives: ["Je suis rentré","Je suis chez moi"], recap: "Dites 'Je suis à la maison'.",
            situations: ["Arrivée"], mcqQuestion: "Où es-tu ?",
            mcqOptions: ["Je suis à la maison","Je suis en maison","Je suis maison","Je reste"],
            examples: [{text:"'Maman, je suis à la maison !'",source:"Film"}]
        }
    },
    5: { 
        type: 'detailed_lesson', imageKeyword: "eating", expressionPT: "Estou almoçando",
        situations: [{text:"Busy",color:"color-1"}],
        ptAlternatives: [{text:"Na hora do almoço",color:"color-1"}],
        brWalkthrough: "Alguém liga meio dia: 'Não posso falar, estou almoçando.'",
        enWalkthrough: "You describe the action of eating lunch.",
        correctExpression: "I am having lunch", explanation: "We use 'Having' for meals, rarely 'Eating'.",
        brainMap: {pt:"Tendo almoço",en:"Consuming meal"}, brainMapNote: "Have = Eat/Drink.",
        grammarHack: "HAVE lunch, don't EAT lunch.", natives: [{text:"I'm grabbing lunch",note:"(quick)",type:"neutral"}],
        examples: [{text:"'Can I call back? I'm having lunch.'",source:"Phone"}],
        mcqQuestion: "O que você está fazendo ao meio dia?", mcqOptions: ["I am lunching","I am having lunch","I am doing lunch","I eat lunch"], correctIndex: 1,
        recap: "DO: Use 'Having lunch'.",
        fr: {
            target: "Je suis en train de déjeuner", walkthrough: "Vous êtes occupé à manger le midi.",
            explanation: "'En train de' marque l'action en cours.", brainMap: "En train de", hack: "Action continue",
            natives: ["Je déjeune","Je suis à table"], recap: "Dites 'Je suis en train de déjeuner'.",
            situations: ["Repas"], mcqQuestion: "Tu fais quoi ?",
            mcqOptions: ["Je suis en train de déjeuner","Je lunche","Je fais déjeuner","Je mange midi"],
            examples: [{text:"'Je te rappelle, je suis en train de déjeuner.'",source:"Téléphone"}]
        }
    },
    6: { 
        type: 'detailed_lesson', imageKeyword: "angry", expressionPT: "Estou irritado/chateado",
        situations: [{text:"Bad mood",color:"color-1"}],
        ptAlternatives: [{text:"Tô bravo",color:"color-1"}],
        brWalkthrough: "Algo deu errado e você diz: 'Estou irritado.'",
        enWalkthrough: "You express mild anger or irritation.",
        correctExpression: "I am annoyed", explanation: "Not furious, just bothered by something.",
        brainMap: {pt:"Incomodado",en:"Bothered"}, brainMapNote: "Passive feeling.",
        grammarHack: "Annoy-ED (Feeling).", natives: [{text:"I'm irritated",note:"(formal)",type:"neutral"}],
        examples: [{text:"'He is so annoyed right now.'",source:"TV"}],
        mcqQuestion: "O barulho te incomoda. Você está:", mcqOptions: ["Annoying","Annoyed","Nervous","Angrying"], correctIndex: 1,
        recap: "DO: Say 'I am annoyed'.",
        fr: {
            target: "Je suis énervé", walkthrough: "Quelque chose vous agace.",
            explanation: "Exprime une irritation ou une colère légère.", brainMap: "Énervé", hack: "Nerfs = Énervé",
            natives: ["Ça m'agace","Je suis saoulé (argot)"], recap: "Dites 'Je suis énervé'.",
            situations: ["Mauvaise humeur"], mcqQuestion: "Le bruit continue...",
            mcqOptions: ["Je suis énervé","Je suis ennuyeux","Je suis fâché","Je suis content"],
            examples: [{text:"'Arrête, je suis énervé !'",source:"Série"}]
        }
    },
    7: { 
        type: 'detailed_lesson', imageKeyword: "tired", expressionPT: "Estou de saco cheio",
        situations: [{text:"Limit reached",color:"color-1"}],
        ptAlternatives: [{text:"Não aguento mais",color:"color-1"}],
        brWalkthrough: "Você cansou da situação: 'Estou de saco cheio disso!'",
        enWalkthrough: "You have reached your limit of patience.",
        correctExpression: "I am fed up", explanation: "Imagine you ate too much and can't take more.",
        brainMap: {pt:"Alimentado até o topo",en:"Full of it"}, brainMapNote: "Idiom for patience limit.",
        grammarHack: "Fed up WITH something.", natives: [{text:"I've had it",note:"(strong)",type:"neutral"}],
        examples: [{text:"'I am fed up with this traffic.'",source:"Radio"}],
        mcqQuestion: "Você não aguenta mais o chefe. Você diz:", mcqOptions: ["I am full","I am fed up","I am bag full","I am tired"], correctIndex: 1,
        recap: "DO: Use 'Fed up'.",
        fr: {
            target: "J'en ai marre", walkthrough: "Vous n'avez plus de patience.",
            explanation: "L'expression la plus courante pour 'saco cheio'.", brainMap: "En avoir marre", hack: "Marre",
            natives: ["J'en ai ras le bol","C'est bon, stop"], recap: "Dites 'J'en ai marre'.",
            situations: ["Limite atteinte"], mcqQuestion: "Trop c'est trop :",
            mcqOptions: ["J'en ai marre","Je suis plein","J'ai fini","Je suis fatigué"],
            examples: [{text:"'J'en ai marre de tes excuses !'",source:"Film"}]
        }
    },
    8: { 
        type: 'detailed_lesson', imageKeyword: "city", expressionPT: "Estou enjoado da cidade",
        situations: [{text:"Need nature",color:"color-1"}],
        ptAlternatives: [{text:"Cansei da cidade",color:"color-1"}],
        brWalkthrough: "Muito barulho e trânsito: 'Estou enjoado da cidade.'",
        enWalkthrough: "You are tired of the city lifestyle.",
        correctExpression: "I am sick of the city", explanation: "'Sick of' means bored or tired of something repeated.",
        brainMap: {pt:"Doente (cansado) de",en:"Tired of"}, brainMapNote: "Stronger than bored.",
        grammarHack: "Sick OF [Noun].", natives: [{text:"I'm over the city",note:"(slang)",type:"neutral"}],
        examples: [{text:"'I am sick of this weather.'",source:"Conversation"}],
        mcqQuestion: "Você quer ir para o campo. Você diz:", mcqOptions: ["I am sick the city","I am sick of the city","I am ill of city","I vomit city"], correctIndex: 1,
        recap: "DO: Use 'Sick of'.",
        fr: {
            target: "J'en ai assez de la ville", walkthrough: "Vous voulez partir à la campagne.",
            explanation: "'En avoir assez' est synonyme d'être lassé.", brainMap: "Assez", hack: "Assez = Enough",
            natives: ["La ville me sort par les yeux","Je sature de la ville"], recap: "Dites 'J'en ai assez'.",
            situations: ["Besoin de nature"], mcqQuestion: "Trop de béton :",
            mcqOptions: ["J'en ai assez de la ville","Je suis malade ville","Je déteste","Je pars"],
            examples: [{text:"'J'en ai assez de Paris.'",source:"Discussion"}]
        }
    },
    9: { 
        type: 'detailed_lesson', imageKeyword: "town", expressionPT: "Eu estava na cidade (pequena)",
        situations: [{text:"Errands",color:"color-1"}],
        ptAlternatives: [{text:"Fui na rua/centro",color:"color-1"}],
        brWalkthrough: "Você foi resolver coisas no centro local: 'Eu estava na cidade.'",
        enWalkthrough: "Explaining you were in a smaller urban area.",
        correctExpression: "I was in town", explanation: "In English, 'City' is huge (NYC, London). 'Town' is everything else. Brazilians call everything 'City'.",
        brainMap: {pt:"Na vila/centro",en:"Local urban area"}, brainMapNote: "Town = Local hub.",
        grammarHack: "In town (No 'the').", natives: [{text:"I went into town",note:"(action)",type:"neutral"}],
        examples: [{text:"'Mom is in town shopping.'",source:"TV"}],
        mcqQuestion: "Você foi ao centro da sua cidade pequena:", mcqOptions: ["I was in the city","I was in town","I was in village","I was downtown"], correctIndex: 1,
        recap: "DO: Use 'Town' for local/small places.",
        fr: {
            target: "J'étais en ville", walkthrough: "Vous étiez sorti faire des courses.",
            explanation: "En français, 'en ville' marche pour tout.", brainMap: "En ville", hack: "En ville",
            natives: ["J'ai fait un tour en ville"], recap: "Dites 'J'étais en ville'.",
            situations: ["Courses"], mcqQuestion: "Où étais-tu ?",
            mcqOptions: ["J'étais en ville","J'étais cité","J'étais village","J'étais dehors"],
            examples: [{text:"'Je descends en ville.'",source:"Quotidien"}]
        }
    },
    10: { 
        type: 'detailed_lesson', imageKeyword: "road", expressionPT: "Moro a 100km de SP",
        situations: [{text:"Location",color:"color-1"}],
        ptAlternatives: [{text:"Moro no interior",color:"color-1"}],
        brWalkthrough: "Você explica onde mora: 'Moro no interior, a 100km de SP.'",
        enWalkthrough: "Explaining distance from a major hub.",
        correctExpression: "I live 100km away from São Paulo", explanation: "Never say 'Interior'. In English, 'Interior' means inside a house. Say 'Away from'.",
        brainMap: {pt:"Longe de",en:"Distance from"}, brainMapNote: "Interior = Design/Decor.",
        grammarHack: "X km AWAY FROM Y.", natives: [{text:"I live outside the city",note:"(general)",type:"neutral"}],
        examples: [{text:"'It is 10 miles away from here.'",source:"GPS"}],
        mcqQuestion: "Como dizer 'Moro no interior'?", mcqOptions: ["I live in the interior","I live inside","I live away from the city","I live in the field"], correctIndex: 2,
        recap: "DO: Say 'Away from'. DON'T: Say 'Interior'.",
        fr: {
            target: "J'habite à 100km de São Paulo", walkthrough: "Vous situez votre maison.",
            explanation: "On indique la distance. Ne dites pas 'Intérieur' (c'est la déco).", brainMap: "À X km de", hack: "Distance précise",
            natives: ["J'habite en province (France)","Je suis à 1h de route"], recap: "Dites 'À X km de...'.",
            situations: ["Localisation"], mcqQuestion: "Tu habites où ?",
            mcqOptions: ["À 100km de SP","Dans l'intérieur","Au milieu","Loin"],
            examples: [{text:"'C'est à 20km d'ici.'",source:"GPS"}]
        }
    },
    11: { 
        type: 'detailed_lesson', imageKeyword: "train", expressionPT: "Estou indo pro trabalho (trajeto)",
        situations: [{text:"Travel",color:"color-1"}],
        ptAlternatives: [{text:"No caminho",color:"color-1"}],
        brWalkthrough: "Você está no ônibus/carro indo trabalhar: 'Estou no trajeto.'",
        enWalkthrough: "Describing the daily travel between home and work.",
        correctExpression: "I am commuting to work", explanation: "'Commuting' is specifically the repetitive travel to work. 'Travelling' is for vacation.",
        brainMap: {pt:"Pendular",en:"Daily travel"}, brainMapNote: "Commute = Work travel.",
        grammarHack: "Commute = Work Route.", natives: [{text:"I'm on my way",note:"(general)",type:"neutral"}],
        examples: [{text:"'My commute takes an hour.'",source:"Conversation"}],
        mcqQuestion: "A viagem diária casa-trabalho chama-se:", mcqOptions: ["Trip","Travel","Commute","Journey"], correctIndex: 2,
        recap: "DO: Use 'Commute' for work travel.",
        fr: {
            target: "Je fais le trajet boulot-maison", walkthrough: "Vous parlez de votre transport quotidien.",
            explanation: "Le 'trajet' quotidien. En France, on dit souvent 'les transports'.", brainMap: "Trajet", hack: "Trajet",
            natives: ["Je suis dans les transports","Je vais au boulot"], recap: "Dites 'Je suis dans les transports'.",
            situations: ["Transport"], mcqQuestion: "Tu es où ?",
            mcqOptions: ["Dans les transports","En voyage","En vacances","En marche"],
            examples: [{text:"'J'ai 1h de trajet.'",source:"Discussion"}]
        }
    },
    12: { 
        type: 'detailed_lesson', imageKeyword: "coffee", expressionPT: "Passar um café",
        situations: [{text:"Morning",color:"color-1"}],
        ptAlternatives: [{text:"Fazer café",color:"color-1"}],
        brWalkthrough: "Você vai preparar café fresco: 'Vou passar um café.'",
        enWalkthrough: "The specific verb for making coffee.",
        correctExpression: "Brew a coffee", explanation: "We 'Make' coffee, but 'Brew' is the specific process (hot water + beans).",
        brainMap: {pt:"Infusionar",en:"Process of making"}, brainMapNote: "Brew = Beer or Coffee.",
        grammarHack: "Brewing.", natives: [{text:"Make some coffee",note:"(standard)",type:"neutral"}],
        examples: [{text:"'Freshly brewed coffee.'",source:"Ad"}],
        mcqQuestion: "O termo técnico para 'passar' café:", mcqOptions: ["Cook coffee","Brew coffee","Do coffee","Pass coffee"], correctIndex: 1,
        recap: "DO: Use 'Brew'.",
        fr: {
            target: "Faire couler un café", walkthrough: "Vous préparez la machine à café.",
            explanation: "L'action spécifique de la machine ou du filtre.", brainMap: "Couler", hack: "Couler = Flow",
            natives: ["Je me fais un café","Je prépare du jus (argot)"], recap: "Dites 'Faire couler un café'.",
            situations: ["Matin"], mcqQuestion: "Je vais ___ un café.",
            mcqOptions: ["Faire couler","Cuisiner","Passer","Mettre"],
            examples: [{text:"'Tu peux faire couler un café ?'",source:"Matin"}]
        }
    },
    13: { 
        type: 'detailed_lesson', imageKeyword: "downtown", expressionPT: "Encontrei alguém no centro",
        situations: [{text:"Meeting",color:"color-1"}],
        ptAlternatives: [{text:"Vi no centro",color:"color-1"}],
        brWalkthrough: "Você viu alguém na parte comercial: 'Encontrei ele no centro.'",
        enWalkthrough: "Meeting in the commercial heart of the city.",
        correctExpression: "I met someone downtown", explanation: "Brazilians say 'Center'. Natives say 'Downtown'. 'Center' is a geometric point.",
        brainMap: {pt:"Cidade Baixa",en:"Commercial Hub"}, brainMapNote: "Downtown = Business/Shops.",
        grammarHack: "Go Downtown (No 'to').", natives: [{text:"In the city center",note:"(UK)",type:"neutral"}],
        examples: [{text:"'Let's go downtown.'",source:"Song"}],
        mcqQuestion: "Onde ficam as lojas e escritórios?", mcqOptions: ["The Center","The Middle","Downtown","The Point"], correctIndex: 2,
        recap: "DO: Say 'Downtown'. DON'T: Say 'Center'.",
        fr: {
            target: "J'ai croisé quelqu'un au centre-ville", walkthrough: "Rencontre dans la zone commerciale.",
            explanation: "En français, on précise 'centre-ville'.", brainMap: "Centre-ville", hack: "Centre-ville",
            natives: ["En ville","Dans le centre"], recap: "Dites 'Centre-ville'.",
            situations: ["Rencontre"], mcqQuestion: "Où sont les magasins ?",
            mcqOptions: ["Au centre-ville","Au milieu","Au point","En bas"],
            examples: [{text:"'Rendez-vous au centre-ville.'",source:"Rdv"}]
        }
    },
    14: { 
        type: 'detailed_lesson', imageKeyword: "clock", expressionPT: "Chegue na hora",
        situations: [{text:"Appointment",color:"color-1"}],
        ptAlternatives: [{text:"Seja pontual",color:"color-1"}],
        brWalkthrough: "Você avisa o amigo atrasado: 'Chegue na hora, hein!'",
        enWalkthrough: "Asking for punctuality.",
        correctExpression: "Be on time", explanation: "'In time' means before it's too late. 'On time' means exactly at the scheduled minute.",
        brainMap: {pt:"No horário",en:"Schedule"}, brainMapNote: "On = Precision.",
        grammarHack: "ON time = ON the dot.", natives: [{text:"Don't be late",note:"(warning)",type:"neutral"}],
        examples: [{text:"'Please be on time.'",source:"Invite"}],
        mcqQuestion: "Chegar exatamente às 8:00:", mcqOptions: ["Be in time","Be on time","Be at time","Be with time"], correctIndex: 1,
        recap: "DO: Use 'On time' for schedules.",
        fr: {
            target: "Sois à l'heure", walkthrough: "Demande de ponctualité.",
            explanation: "Respecter l'horaire prévu.", brainMap: "À l'heure", hack: "À l'heure",
            natives: ["Sois ponctuel","Ne sois pas en retard"], recap: "Dites 'Sois à l'heure'.",
            situations: ["Rendez-vous"], mcqQuestion: "Le train part à 8h00. Il est :",
            mcqOptions: ["À l'heure","Dans le temps","Sur temps","Juste"],
            examples: [{text:"'Le train est à l'heure.'",source:"Gare"}]
        }
    },
    15: { 
        type: 'detailed_lesson', imageKeyword: "sofa", expressionPT: "Fique à vontade (em casa)",
        situations: [{text:"Hosting",color:"color-1"}],
        ptAlternatives: [{text:"Sinta-se em casa",color:"color-1"}],
        brWalkthrough: "Visita chega na sua casa: 'Fique à vontade!'",
        enWalkthrough: "Welcoming a guest to relax.",
        correctExpression: "Make yourself at home", explanation: "Literally: Act as if this is your own home.",
        brainMap: {pt:"Faça-se em casa",en:"Relax fully"}, brainMapNote: "Ultimate hospitality.",
        grammarHack: "Make yourself...", natives: [{text:"Mi casa es su casa",note:"(Spanish loan)",type:"neutral"}],
        examples: [{text:"'Come in, make yourself at home.'",source:"Movie"}],
        mcqQuestion: "Você recebe visita. Você diz:", mcqOptions: ["Stay at will","Make yourself at home","Be comfortable","Use my house"], correctIndex: 1,
        recap: "DO: Use 'Make yourself at home'.",
        fr: {
            target: "Fais comme chez toi", walkthrough: "Accueil chaleureux.",
            explanation: "Formule d'hospitalité standard.", brainMap: "Comme chez toi", hack: "Comme chez toi",
            natives: ["Mets-toi à l'aise"], recap: "Dites 'Fais comme chez toi'.",
            situations: ["Invités"], mcqQuestion: "À un invité :",
            mcqOptions: ["Fais comme chez toi","Reste libre","Sois bien","Prends ma maison"],
            examples: [{text:"'Entre, fais comme chez toi.'",source:"Amis"}]
        }
    },
    16: {
        type: 'final_lab', title: "🏆 Project 2 Final Exam",
        levels: [
            {title:"🟢 Q1",color:"#22c55e",question:"Match: 'Fim de papo'?",options:["Long story","End of story","Fed up"],correct:1},
            {title:"🟢 Q2",color:"#22c55e",question:"Match: 'Interior' (Location)?",options:["Inside","Away from","Downtown"],correct:1},
            {title:"🟢 Q3",color:"#22c55e",question:"Match: 'Passar café'?",options:["Make","Brew","Cook"],correct:1},
            {title:"🟡 Q4",color:"#facc15",question:"You are angry/bothered:",options:["I am annoyed","I am boring","I am nervous"],correct:0},
            {title:"🟡 Q5",color:"#facc15",question:"Daily travel to work:",options:["Travel","Trip","Commute"],correct:2},
            {title:"🟡 Q6",color:"#facc15",question:"Where are the shops?",options:["Center","Downtown","Middle"],correct:1},
            {title:"🔴 Q7",color:"#ef4444",question:"Error: 'I am in my house.'",options:["Say 'I am home'","Say 'I stay house'","No error"],correct:0},
            {title:"🔴 Q8",color:"#ef4444",question:"Error: 'I eat lunch.'",options:["Say 'I have lunch'","Say 'I do lunch'","No error"],correct:0},
            {title:"🔴 Q9",color:"#ef4444",question:"Nuance: 'Town' vs 'City'",options:["Town is bigger","Town is smaller","Same thing"],correct:1},
            {title:"🟣 Q10",color:"#a78bfa",question:"Translate: 'Saco cheio'",options:["Fed up","Full bag","Tired"],correct:0}
        ],
        fr: {
            title: "🏆 Examen Final (Projet 2)",
            levels: [
                {title:"🟢 Q1",color:"#22c55e",question:"Traduire: 'Fim de papo'",options:["Fini","Point final","Stop"],correct:1},
                {title:"🟢 Q2",color:"#22c55e",question:"Traduire: 'Estou em casa'",options:["Je suis à la maison","Je suis maison","J'arrive"],correct:0},
                {title:"🟢 Q3",color:"#22c55e",question:"Traduire: 'Saco cheio'",options:["J'en ai marre","Je suis plein","Fatigué"],correct:0},
                {title:"🟡 Q4",color:"#facc15",question:"Situation: Irrité (Annoyed)",options:["Énervé","Heureux","Triste"],correct:0},
                {title:"🟡 Q5",color:"#facc15",question:"Situation: Trajet boulot",options:["Voyage","Trajet","Marche"],correct:1},
                {title:"🟡 Q6",color:"#facc15",question:"Situation: Centre-ville",options:["Centre-ville","Milieu","Cité"],correct:0},
                {title:"🔴 Q7",color:"#ef4444",question:"Erreur: 'Je suis en maison'",options:["Dire 'À la maison'","Dire 'Dans maison'","Rien"],correct:0},
                {title:"🔴 Q8",color:"#ef4444",question:"Erreur: 'Je mange midi'",options:["Dire 'Je déjeune'","Dire 'Je dine'","Rien"],correct:0},
                {title:"🔴 Q9",color:"#ef4444",question:"Nuance: 'Pote' vs 'Ami'",options:["Pote est formel","Pote est familier","Pareil"],correct:1},
                {title:"🟣 Q10",color:"#a78bfa",question:"Traduire: 'Fais comme chez toi'",options:["Make yourself at home","Do like home","Stay free"],correct:0}
            ]
        }
    },
    17: {
        type: 'summary', title: "📑 Cheat Sheet (Resumão)",
        list: [
            {pt:"Fim de papo",en:"End of story"}, {pt:"Longa história",en:"It's a long story"},
            {pt:"Parceiro",en:"Buddy"}, {pt:"Em casa",en:"I am home"},
            {pt:"Almoçando",en:"Having lunch"}, {pt:"Irritado",en:"Annoyed"},
            {pt:"Saco cheio",en:"Fed up"}, {pt:"Enjoado da cidade",en:"Sick of the city"},
            {pt:"Na cidade (pequena)",en:"In town"}, {pt:"Longe de (Interior)",en:"Away from"},
            {pt:"Trajeto trabalho",en:"Commuting"}, {pt:"Passar café",en:"Brew coffee"},
            {pt:"No centro",en:"Downtown"}, {pt:"Na hora",en:"On time"},
            {pt:"Fique à vontade",en:"Make yourself at home"}
        ],
        fr: {
            title: "📑 Résumé (Français)",
            list: [
                {pt:"Fim de papo",en:"Point final"}, {pt:"Longa história",en:"C'est une longue histoire"},
                {pt:"Parceiro",en:"Pote"}, {pt:"Em casa",en:"À la maison"},
                {pt:"Almoçando",en:"En train de déjeuner"}, {pt:"Irritado",en:"Énervé"},
                {pt:"Saco cheio",en:"J'en ai marre"}, {pt:"Enjoado da cidade",en:"Assez de la ville"},
                {pt:"Na cidade",en:"En ville"}, {pt:"Longe de",en:"À X km de"},
                {pt:"Trajeto",en:"Trajet boulot"}, {pt:"Passar café",en:"Faire couler un café"},
                {pt:"No centro",en:"Centre-ville"}, {pt:"Na hora",en:"À l'heure"},
                {pt:"Fique à vontade",en:"Fais comme chez toi"}
            ]
        }
    }
};
