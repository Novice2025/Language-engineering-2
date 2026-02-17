window.DB = {
    0: { 
        type: 'intro', 
        en: { 
            title: "Welcome to Project 3", 
            text: `<p><strong>Native Shift Method: Phase 3.</strong> This module covers modern lifestyle, digital interactions, and slang nuances.</p><h3 style="color:#38bdf8; margin-top:20px;">Focus Areas</h3><ul style="margin-left:20px; margin-top:10px;"><li><strong>Modern Places</strong> (Café vs Lanchonete)</li><li><strong>Digital Life</strong> (Loading, Facebook)</li><li><strong>Slang & Idioms</strong> (Nuts, Sugar Daddy)</li></ul>`
        }, 
        fr: { 
            title: "Bienvenue au Projet 3 🇫🇷", 
            text: `<p><strong>Méthode Native Shift : Phase 3.</strong> Ce module couvre le mode de vie moderne, les interactions numériques et l'argot.</p><h3 style="color:#38bdf8; margin-top:20px;">Points Clés</h3><ul style="margin-left:20px; margin-top:10px;"><li><strong>Lieux Modernes</strong> (Café vs Snack)</li><li><strong>Vie Numérique</strong> (Chargement, Facebook)</li><li><strong>Argot & Idiomes</strong> (Dingue, Sugar Daddy)</li></ul>` 
        } 
    },
    1: { 
        type: 'detailed_lesson', imageKeyword: "cafe", expressionPT: "Estou na lanchonete/café",
        situations: [{text:"Meeting",color:"color-1"},{text:"Remote Work",color:"color-2"}],
        ptAlternatives: [{text:"Na padaria (chique)",color:"color-1"}],
        brWalkthrough: "Você está num lugar que serve café e lanches rápidos: 'Estou no café.'",
        enWalkthrough: "A 'Café' in English is like a Brazilian 'Lanchonete' or 'Padaria' with tables.",
        correctExpression: "I am at the café", explanation: "Not just 'coffee' (the drink). It's the place (Starbucks, local shop).",
        brainMap: {pt:"No estabelecimento",en:"Location"}, brainMapNote: "Café = Place.",
        grammarHack: "At the café.", natives: [{text:"I'm at the coffee shop",note:"(common)",type:"neutral"}],
        examples: [{text:"'Meet me at the café.'",source:"Text"}],
        mcqQuestion: "Você está na Starbucks ou padaria. Você diz:", mcqOptions: ["I am at the snack bar","I am at the café","I am in the bread house","I am at coffee"], correctIndex: 1,
        recap: "DO: Use 'Café' for the place.",
        fr: {
            target: "Je suis au café", walkthrough: "Vous êtes dans un lieu pour boire un verre.",
            explanation: "Le lieu de rencontre standard en France.", brainMap: "Au café", hack: "Au café",
            natives: ["Je suis au bistrot","Je suis en terrasse"], recap: "Dites 'Je suis au café'.",
            situations: ["Détente"], mcqQuestion: "Où es-tu ?",
            mcqOptions: ["Je suis au café","Je suis à la café","Je suis café","Je suis restaurant"],
            examples: [{text:"'On se voit au café ?'",source:"SMS"}]
        }
    },
    2: { 
        type: 'detailed_lesson', imageKeyword: "happy", expressionPT: "Estou empolgado/radiante",
        situations: [{text:"Good news",color:"color-1"}],
        ptAlternatives: [{text:"Muito feliz",color:"color-1"}],
        brWalkthrough: "Você recebeu uma notícia incrível: 'Estou radiante!'",
        enWalkthrough: "Stronger than happy. You are vibrating with excitement.",
        correctExpression: "I am thrilled", explanation: "Thrilled = Very excited + Happy.",
        brainMap: {pt:"Eletrizado",en:"Vibrating"}, brainMapNote: "Thrill = Adrenaline.",
        grammarHack: "Thrilled (ED ending).", natives: [{text:"I'm over the moon",note:"(idiom)",type:"neutral"}],
        examples: [{text:"'I am thrilled about the new job.'",source:"Email"}],
        mcqQuestion: "Você ganhou na loteria. Você está:", mcqOptions: ["Happyish","Thrilled","Nice","Cool"], correctIndex: 1,
        recap: "DO: Use 'Thrilled' for big excitement.",
        fr: {
            target: "Je suis ravi / excité", walkthrough: "Une excellente nouvelle.",
            explanation: "Plus fort que 'content'.", brainMap: "Ravi", hack: "Ravi",
            natives: ["Je suis aux anges","C'est génial"], recap: "Dites 'Je suis ravi'.",
            situations: ["Bonne nouvelle"], mcqQuestion: "Tu as eu le poste !",
            mcqOptions: ["Je suis ravi","Je suis bon","Je suis ok","Je suis triste"],
            examples: [{text:"'Je suis ravi de vous rencontrer.'",source:"Formel"}]
        }
    },
    3: { 
        type: 'detailed_lesson', imageKeyword: "writing", expressionPT: "Anotar / Tomar nota",
        situations: [{text:"Class",color:"color-1"}],
        ptAlternatives: [{text:"Escrever",color:"color-1"}],
        brWalkthrough: "O professor fala algo importante: 'Vou anotar.'",
        enWalkthrough: "Writing down information to remember later.",
        correctExpression: "Take notes", explanation: "We don't say 'Make notes'. We 'Take' them from the source.",
        brainMap: {pt:"Pegar notas",en:"Capture info"}, brainMapNote: "Take = Capture.",
        grammarHack: "TAKE notes.", natives: [{text:"Write this down",note:"(imperative)",type:"neutral"}],
        examples: [{text:"'Please take notes during the meeting.'",source:"Office"}],
        mcqQuestion: "O chefe fala. Você deve:", mcqOptions: ["Do notes","Make notes","Take notes","Get notes"], correctIndex: 2,
        recap: "DO: Say 'Take notes'.",
        fr: {
            target: "Prendre des notes", walkthrough: "Noter pour ne pas oublier.",
            explanation: "Comme en anglais, on utilise le verbe 'Prendre'.", brainMap: "Prendre", hack: "Prendre",
            natives: ["Noter ça","Écrire ça"], recap: "Dites 'Prendre des notes'.",
            situations: ["Cours"], mcqQuestion: "Le prof parle :",
            mcqOptions: ["Faire des notes","Prendre des notes","Avoir des notes","Mettre des notes"],
            examples: [{text:"'Prenez des notes, c'est important.'",source:"École"}]
        }
    },
    4: { 
        type: 'detailed_lesson', imageKeyword: "loading", expressionPT: "O vídeo está carregando",
        situations: [{text:"Internet slow",color:"color-1"}],
        ptAlternatives: [{text:"Tá travando",color:"color-1"}],
        brWalkthrough: "A internet está lenta e o vídeo não toca: 'Está carregando...'",
        enWalkthrough: "The spinning circle on a screen.",
        correctExpression: "The video is loading up", explanation: "'Loading up' or just 'Loading' or 'Buffering'.",
        brainMap: {pt:"Enchendo",en:"Filling buffer"}, brainMapNote: "Load = Weight/Data.",
        grammarHack: "Loading UP.", natives: [{text:"It's buffering",note:"(technical)",type:"neutral"}],
        examples: [{text:"'Wait, the page is loading up.'",source:"Tech"}],
        mcqQuestion: "A internet está lenta. O vídeo está:", mcqOptions: ["Walking","Running","Loading up","Going"], correctIndex: 2,
        recap: "DO: Use 'Loading up' or 'Buffering'.",
        fr: {
            target: "La vidéo charge", walkthrough: "Attente de connexion.",
            explanation: "L'action de remplir la mémoire tampon.", brainMap: "Charger", hack: "Charger",
            natives: ["Ça rame (argot)","C'est en train de charger"], recap: "Dites 'La vidéo charge'.",
            situations: ["Internet"], mcqQuestion: "L'écran est figé :",
            mcqOptions: ["La vidéo charge","La vidéo marche","La vidéo court","La vidéo mange"],
            examples: [{text:"'Attends, ça charge.'",source:"Ordi"}]
        }
    },
    5: { 
        type: 'detailed_lesson', imageKeyword: "pain", expressionPT: "Distendi um músculo",
        situations: [{text:"Gym",color:"color-1"}],
        ptAlternatives: [{text:"Machuquei o músculo",color:"color-1"}],
        brWalkthrough: "Você fez força demais na academia: 'Ai, distendi o músculo.'",
        enWalkthrough: "A specific injury where the muscle stretches too much.",
        correctExpression: "I pulled a muscle", explanation: "We say 'Pull' because the fiber stretches/pulls apart.",
        brainMap: {pt:"Puxei",en:"Stretched"}, brainMapNote: "Pull = Injury.",
        grammarHack: "Pulled [Body Part].", natives: [{text:"I strained a muscle",note:"(medical)",type:"neutral"}],
        examples: [{text:"'I pulled a muscle in my back.'",source:"Doctor"}],
        mcqQuestion: "Dor na academia. Você:", mcqOptions: ["Broke a muscle","Pulled a muscle","Pushed a muscle","Cut a muscle"], correctIndex: 1,
        recap: "DO: Say 'Pulled a muscle'.",
        fr: {
            target: "Je me suis claqué un muscle", walkthrough: "Douleur sportive.",
            explanation: "Un 'claquage' est le terme courant.", brainMap: "Claquage", hack: "Claquage",
            natives: ["Je me suis fait une élongation","J'ai une contracture"], recap: "Dites 'Je me suis claqué'.",
            situations: ["Sport"], mcqQuestion: "Aïe, ma jambe :",
            mcqOptions: ["Je me suis claqué","J'ai tiré","J'ai poussé","J'ai cassé"],
            examples: [{text:"'Je me suis claqué la cuisse.'",source:"Sport"}]
        }
    },
    6: { 
        type: 'detailed_lesson', imageKeyword: "highway", expressionPT: "Estou na estrada/rodovia",
        situations: [{text:"Driving",color:"color-1"}],
        ptAlternatives: [{text:"Na pista",color:"color-1"}],
        brWalkthrough: "Você está dirigindo rápido entre cidades: 'Estou na estrada.'",
        enWalkthrough: "Driving on a major high-speed road.",
        correctExpression: "I am on the highway", explanation: "Use 'ON' for roads and surfaces.",
        brainMap: {pt:"Sobre a via alta",en:"Surface"}, brainMapNote: "Highway = High speed.",
        grammarHack: "ON the road/highway.", natives: [{text:"I'm on the freeway",note:"(US West)",type:"neutral"}],
        examples: [{text:"'Don't text, I am on the highway.'",source:"Phone"}],
        mcqQuestion: "Você está dirigindo a 100km/h:", mcqOptions: ["I am in the highway","I am on the highway","I am at the highway","I am highway"], correctIndex: 1,
        recap: "DO: Use 'ON' the highway.",
        fr: {
            target: "Je suis sur l'autoroute", walkthrough: "Conduite rapide.",
            explanation: "Préposition 'Sur' pour la route.", brainMap: "Sur la route", hack: "Sur",
            natives: ["Je roule","Je suis sur la route"], recap: "Dites 'Sur l'autoroute'.",
            situations: ["Conduite"], mcqQuestion: "Tu es où ?",
            mcqOptions: ["Sur l'autoroute","Dans l'autoroute","À l'autoroute","Sous l'autoroute"],
            examples: [{text:"'Attention, je suis sur l'autoroute.'",source:"GPS"}]
        }
    },
    7: { 
        type: 'detailed_lesson', imageKeyword: "police", expressionPT: "Estou de serviço (trabalhando)",
        situations: [{text:"Police/Doctor",color:"color-1"}],
        ptAlternatives: [{text:"De plantão",color:"color-1"}],
        brWalkthrough: "Policial ou médico avisa: 'Não posso sair, estou de serviço.'",
        enWalkthrough: "Working a scheduled shift, usually for essential services.",
        correctExpression: "I am on duty", explanation: "Opposite of 'Off duty'. Used for jobs with shifts.",
        brainMap: {pt:"Em dever",en:"Active shift"}, brainMapNote: "Duty = Obligation.",
        grammarHack: "ON duty / OFF duty.", natives: [{text:"I'm working a shift",note:"(general)",type:"neutral"}],
        examples: [{text:"'Officer, are you on duty?'",source:"Movie"}],
        mcqQuestion: "Um médico no hospital está:", mcqOptions: ["In duty","On duty","At duty","With duty"], correctIndex: 1,
        recap: "DO: Say 'On duty'.",
        fr: {
            target: "Je suis de service / de garde", walkthrough: "Travail posté (médecin, police).",
            explanation: "Être disponible pour le travail.", brainMap: "De service", hack: "De service",
            natives: ["Je bosse","Je suis de permanence"], recap: "Dites 'Je suis de service'.",
            situations: ["Travail"], mcqQuestion: "Le policier travaille :",
            mcqOptions: ["Je suis de service","Je suis en service","Je suis à service","Je suis le service"],
            examples: [{text:"'Le médecin est de garde ce soir.'",source:"Hôpital"}]
        }
    },
    8: { 
        type: 'detailed_lesson', imageKeyword: "pizza", expressionPT: "Pedir uma pizza",
        situations: [{text:"Dinner",color:"color-1"}],
        ptAlternatives: [{text:"Encomendar pizza",color:"color-1"}],
        brWalkthrough: "Você liga para a pizzaria: 'Vamos pedir uma pizza?'",
        enWalkthrough: "The action of requesting food delivery.",
        correctExpression: "Order a pizza", explanation: "We 'Order' food. We don't 'Ask for' a pizza in this context.",
        brainMap: {pt:"Ordenar (pedido)",en:"Request commercial"}, brainMapNote: "Order = Command.",
        grammarHack: "Order [Food].", natives: [{text:"Get a pizza",note:"(casual)",type:"neutral"}],
        examples: [{text:"'Let's order a pizza tonight.'",source:"Home"}],
        mcqQuestion: "Você quer comer em casa. Você vai:", mcqOptions: ["Ask a pizza","Order a pizza","Command a pizza","Do a pizza"], correctIndex: 1,
        recap: "DO: Use 'Order'.",
        fr: {
            target: "Commander une pizza", walkthrough: "Appeler le restaurant.",
            explanation: "Le verbe standard pour la livraison.", brainMap: "Commander", hack: "Commander",
            natives: ["Se faire une pizza","Prendre une pizza"], recap: "Dites 'Commander'.",
            situations: ["Dîner"], mcqQuestion: "On mange quoi ?",
            mcqOptions: ["On commande une pizza","On demande une pizza","On fait une pizza","On dit une pizza"],
            examples: [{text:"'J'ai commandé une Reine.'",source:"Soirée"}]
        }
    },
    9: { 
        type: 'detailed_lesson', imageKeyword: "menu", expressionPT: "Qual vai ser a pizza? (Sabor)",
        situations: [{text:"Choosing",color:"color-1"}],
        ptAlternatives: [{text:"Qual o sabor?",color:"color-1"}],
        brWalkthrough: "Você pergunta para o grupo: 'E aí, qual vai ser a pizza?'",
        enWalkthrough: "Asking about the choice/flavor politely.",
        correctExpression: "What would be the pizza?", explanation: "Using 'Would' makes it polite and hypothetical until decided.",
        brainMap: {pt:"Qual seria?",en:"Polite choice"}, brainMapNote: "Would = Soft future.",
        grammarHack: "What WOULD be...", natives: [{text:"What toppings do you want?",note:"(specific)",type:"neutral"}],
        examples: [{text:"'So, what would be the pizza for tonight?'",source:"Party"}],
        mcqQuestion: "Perguntando o sabor educadamente:", mcqOptions: ["What is the pizza?","What would be the pizza?","Which pizza is it?","Pizza what?"], correctIndex: 1,
        recap: "DO: Use 'What would be...'.",
        fr: {
            target: "Quelle sera la pizza ?", walkthrough: "Choisir la garniture.",
            explanation: "Futur ou conditionnel pour le choix.", brainMap: "Quelle sera", hack: "Quel choix",
            natives: ["On prend quoi ?","Quelle garniture ?"], recap: "Dites 'Quelle sera la pizza ?'.",
            situations: ["Choix"], mcqQuestion: "On choisit :",
            mcqOptions: ["Quelle sera la pizza ?","Quoi la pizza ?","C'est quoi pizza ?","La pizza est ?"],
            examples: [{text:"'Quelle sera la pizza pour les enfants ?'",source:"Menu"}]
        }
    },
    10: { 
        type: 'detailed_lesson', imageKeyword: "office", expressionPT: "Estou no trabalho",
        situations: [{text:"Location",color:"color-1"}],
        ptAlternatives: [{text:"Tô no serviço",color:"color-1"}],
        brWalkthrough: "Alguém liga: 'Não posso falar, estou no trabalho.'",
        enWalkthrough: "General location for your job.",
        correctExpression: "I am at work", explanation: "No 'the'. Just 'At work'. Like 'At home'.",
        brainMap: {pt:"No trabalho",en:"Location State"}, brainMapNote: "Work is a place here.",
        grammarHack: "AT work (No 'the').", natives: [{text:"I'm at the office",note:"(specific)",type:"neutral"}],
        examples: [{text:"'Sorry, I am at work.'",source:"SMS"}],
        mcqQuestion: "Onde você está das 9 às 18h?", mcqOptions: ["I am in the work","I am at work","I am on work","I am work"], correctIndex: 1,
        recap: "DO: Say 'At work'. DON'T: Say 'At the work'.",
        fr: {
            target: "Je suis au travail", walkthrough: "Lieu professionnel.",
            explanation: "Expression standard.", brainMap: "Au travail", hack: "Au boulot",
            natives: ["Je suis au boulot","Je bosse"], recap: "Dites 'Je suis au travail'.",
            situations: ["Bureau"], mcqQuestion: "Tu peux parler ?",
            mcqOptions: ["Je suis au travail","Je suis dans le travail","Je suis travail","Je suis le travail"],
            examples: [{text:"'Je suis encore au travail.'",source:"Téléphone"}]
        }
    },
    11: { 
        type: 'detailed_lesson', imageKeyword: "check", expressionPT: "Terminei / Acabei",
        situations: [{text:"Task complete",color:"color-1"}],
        ptAlternatives: [{text:"Pronto",color:"color-1"}],
        brWalkthrough: "Você acabou a tarefa: 'Pronto, terminei!'",
        enWalkthrough: "Declaring a task is finished.",
        correctExpression: "I am done", explanation: "Very common. 'I have finished' is formal. 'I am done' is natural.",
        brainMap: {pt:"Estou feito",en:"State of completion"}, brainMapNote: "Done = Finished.",
        grammarHack: "I am DONE.", natives: [{text:"I'm finished",note:"(formal)",type:"neutral"}],
        examples: [{text:"'Are you done with that paper?'",source:"Office"}],
        mcqQuestion: "Você acabou de comer. Você diz:", mcqOptions: ["I am end","I am done","I finish","I am over"], correctIndex: 1,
        recap: "DO: Say 'I am done'.",
        fr: {
            target: "J'ai fini / C'est fini", walkthrough: "Tâche accomplie.",
            explanation: "Passé composé ou état.", brainMap: "Fini", hack: "Fini",
            natives: ["C'est bon","J'ai terminé"], recap: "Dites 'J'ai fini'.",
            situations: ["Fin"], mcqQuestion: "Tu as terminé ?",
            mcqOptions: ["J'ai fini","Je suis fini","J'ai fait","Je suis fin"],
            examples: [{text:"'J'ai fini mes devoirs.'",source:"École"}]
        }
    },
    12: { 
        type: 'detailed_lesson', imageKeyword: "money", expressionPT: "Sugar Daddy (Patrocinador)",
        situations: [{text:"Relationship",color:"color-1"}],
        ptAlternatives: [{text:"Velho rico",color:"color-1"}],
        brWalkthrough: "Homem mais velho que banca alguém mais jovem: 'Ele é o Sugar Daddy dela.'",
        enWalkthrough: "A wealthy older person who supports a younger person financially.",
        correctExpression: "Sugar Daddy", explanation: "Cultural term. 'Sugar' implies money/gifts. 'Daddy' implies older protector.",
        brainMap: {pt:"Papai de Açúcar",en:"Sponsor"}, brainMapNote: "Slang/Cultural.",
        grammarHack: "No translation.", natives: [{text:"Sponsor",note:"(polite)",type:"neutral"}],
        examples: [{text:"'She is looking for a sugar daddy.'",source:"Gossip"}],
        mcqQuestion: "Homem rico que banca namorada jovem:", mcqOptions: ["Money Father","Rich Dad","Sugar Daddy","Sweet Papa"], correctIndex: 2,
        recap: "DO: Use the English term.",
        fr: {
            target: "Sugar Daddy", walkthrough: "Relation basée sur l'argent.",
            explanation: "On utilise le terme anglais en français aussi.", brainMap: "Mécène", hack: "Anglicisme",
            natives: ["Papa gâteau (vieux)","Mécène"], recap: "Dites 'Sugar Daddy'.",
            situations: ["Relation"], mcqQuestion: "Terme pour un protecteur riche :",
            mcqOptions: ["Sugar Daddy","Papa Sucre","Père Riche","Banquier"],
            examples: [{text:"'C'est son Sugar Daddy.'",source:"Potins"}]
        }
    },
    13: { 
        type: 'detailed_lesson', imageKeyword: "facebook", expressionPT: "Tenho Facebook (Conta)",
        situations: [{text:"Social Media",color:"color-1"}],
        ptAlternatives: [{text:"Tô no Face",color:"color-1"}],
        brWalkthrough: "Alguém pergunta se você tem conta: 'Sim, eu tenho Facebook.'",
        enWalkthrough: "Having an account vs Using it right now.",
        correctExpression: "I am on Facebook", explanation: "To say you HAVE an account, say 'I am on Facebook'. To say you are browsing, say 'I am using Facebook'.",
        brainMap: {pt:"Estou no (plataforma)",en:"Presence"}, brainMapNote: "On = Member of.",
        grammarHack: "I am ON [Platform].", natives: [{text:"I have Facebook",note:"(also ok)",type:"neutral"}],
        examples: [{text:"'Are you on Facebook?' - 'Yes, add me.'",source:"Party"}],
        mcqQuestion: "Você tem uma conta nessa rede. Você diz:", mcqOptions: ["I have on Facebook","I am on Facebook","I exist in Facebook","I am Facebook"], correctIndex: 1,
        recap: "DO: Say 'I am on Facebook'.",
        fr: {
            target: "Je suis sur Facebook", walkthrough: "Avoir un compte.",
            explanation: "Indique la présence sur la plateforme.", brainMap: "Sur Facebook", hack: "Sur",
            natives: ["J'ai Facebook","Tu peux me trouver sur Facebook"], recap: "Dites 'Je suis sur Facebook'.",
            situations: ["Réseaux"], mcqQuestion: "Tu as un compte ?",
            mcqOptions: ["Je suis sur Facebook","J'ai sur Facebook","Je suis dans Facebook","Je fais Facebook"],
            examples: [{text:"'Ajoute-moi, je suis sur Facebook.'",source:"Amis"}]
        }
    },
    14: { 
        type: 'detailed_lesson', imageKeyword: "walking", expressionPT: "Eu gosto de caminhar",
        situations: [{text:"Hobby",color:"color-1"}],
        ptAlternatives: [{text:"Curto andar",color:"color-1"}],
        brWalkthrough: "Você fala do seu hobby: 'Eu gosto de caminhar.'",
        enWalkthrough: "Expressing enjoyment of an activity.",
        correctExpression: "I enjoy walking", explanation: "After 'Enjoy', always use ING. Never 'Enjoy to walk'.",
        brainMap: {pt:"Desfruto caminhando",en:"Enjoy + ING"}, brainMapNote: "Enjoy requires Gerund.",
        grammarHack: "Enjoy DOING.", natives: [{text:"I like walking",note:"(weaker)",type:"neutral"}],
        examples: [{text:"'I enjoy walking in the park.'",source:"Hobby"}],
        mcqQuestion: "Você adora ler. I enjoy...", mcqOptions: ["Read","To read","Reading","Reader"], correctIndex: 2,
        recap: "DO: Use ING after Enjoy.",
        fr: {
            target: "J'aime marcher", walkthrough: "Parler d'un loisir.",
            explanation: "Le verbe aimer simple.", brainMap: "Aimer marcher", hack: "Aimer + Infinitif",
            natives: ["J'adore la marche","Ça me plaît de marcher"], recap: "Dites 'J'aime marcher'.",
            situations: ["Loisir"], mcqQuestion: "Ton hobby :",
            mcqOptions: ["J'aime marcher","J'aime marchant","Je jouis marcher","Je fais marche"],
            examples: [{text:"'J'aime marcher le matin.'",source:"Santé"}]
        }
    },
    15: { 
        type: 'detailed_lesson', imageKeyword: "crazy", expressionPT: "Isso é loucura / Insano",
        situations: [{text:"Shock",color:"color-1"}],
        ptAlternatives: [{text:"Que doideira",color:"color-1"}],
        brWalkthrough: "Uma situação absurda acontece: 'Isso é loucura!'",
        enWalkthrough: "Slang for 'Crazy' or 'Unbelievable'.",
        correctExpression: "This is nuts", explanation: "'Nuts' is common slang for crazy. Can be good (amazing) or bad (chaos).",
        brainMap: {pt:"Isso é nozes (louco)",en:"Crazy"}, brainMapNote: "Nuts = Crazy head.",
        grammarHack: "It's nuts.", natives: [{text:"This is insane",note:"(stronger)",type:"neutral"}],
        examples: [{text:"'The traffic today is nuts.'",source:"Traffic"}],
        mcqQuestion: "Algo muito doido aconteceu:", mcqOptions: ["This is peanuts","This is nuts","This is fruits","This is crazy food"], correctIndex: 1,
        recap: "DO: Use 'Nuts' for crazy situations.",
        fr: {
            target: "C'est dingue / C'est fou", walkthrough: "Situation incroyable.",
            explanation: "'Dingue' est le mot familier parfait.", brainMap: "Dingue", hack: "Dingue",
            natives: ["C'est n'importe quoi","C'est ouf (verlan)"], recap: "Dites 'C'est dingue'.",
            situations: ["Choc"], mcqQuestion: "C'est incroyable :",
            mcqOptions: ["C'est dingue","C'est noix","C'est fruit","C'est malade"],
            examples: [{text:"'Ce film est dingue !'",source:"Cinéma"}]
        }
    },
    16: {
        type: 'final_lab', title: "🏆 Project 3 Final Exam",
        levels: [
            {title:"🟢 Q1",color:"#22c55e",question:"Where do you buy coffee & snacks?",options:["The snack bar","The café","The bakery"],correct:1},
            {title:"🟢 Q2",color:"#22c55e",question:"You are VERY happy:",options:["Thrilled","Nice","Ok"],correct:0},
            {title:"🟢 Q3",color:"#22c55e",question:"Teacher speaks. You...",options:["Make notes","Do notes","Take notes"],correct:2},
            {title:"🟡 Q4",color:"#facc15",question:"Internet is slow. Video is...",options:["Loading up","Walking","Stopping"],correct:0},
            {title:"🟡 Q5",color:"#facc15",question:"Gym injury:",options:["Broke a muscle","Pulled a muscle","Cut a muscle"],correct:1},
            {title:"🟡 Q6",color:"#facc15",question:"Driving fast between cities:",options:["In the highway","On the highway","At the highway"],correct:1},
            {title:"🔴 Q7",color:"#ef4444",question:"Doctor working a shift:",options:["On duty","In job","At duty"],correct:0},
            {title:"🔴 Q8",color:"#ef4444",question:"I have a Facebook account:",options:["I have Facebook","I am on Facebook","I use Facebook"],correct:1},
            {title:"🔴 Q9",color:"#ef4444",question:"Correct grammar: I enjoy...",options:["To walk","Walk","Walking"],correct:2},
            {title:"🟣 Q10",color:"#a78bfa",question:"Slang for 'Crazy':",options:["Nuts","Beans","Fruits"],correct:0}
        ],
        fr: {
            title: "🏆 Examen Final (Projet 3)",
            levels: [
                {title:"🟢 Q1",color:"#22c55e",question:"Lieu pour boire un verre :",options:["Café","Snack","Cantine"],correct:0},
                {title:"🟢 Q2",color:"#22c55e",question:"Traduire: 'Thrilled'",options:["Ravi","Triste","Normal"],correct:0},
                {title:"🟢 Q3",color:"#22c55e",question:"Action: 'Take notes'",options:["Prendre des notes","Faire des notes","Lire"],correct:0},
                {title:"🟡 Q4",color:"#facc15",question:"Vidéo lente :",options:["Elle charge","Elle court","Elle dort"],correct:0},
                {title:"🟡 Q5",color:"#facc15",question:"Blessure muscle :",options:["Claquage","Cassure","Coupure"],correct:0},
                {title:"🟡 Q6",color:"#facc15",question:"Sur la route rapide :",options:["Sur l'autoroute","Dans la rue","Au chemin"],correct:0},
                {title:"🔴 Q7",color:"#ef4444",question:"Médecin au travail :",options:["De service","Au bureau","En vacances"],correct:0},
                {title:"🔴 Q8",color:"#ef4444",question:"J'ai un compte Facebook :",options:["Je suis sur Facebook","J'ai le Facebook","Je suis Facebook"],correct:0},
                {title:"🔴 Q9",color:"#ef4444",question:"J'aime marcher :",options:["J'aime marcher","J'aime marchant","Je fais marche"],correct:0},
                {title:"🟣 Q10",color:"#a78bfa",question:"C'est fou (Argot) :",options:["C'est dingue","C'est noix","C'est fruit"],correct:0}
            ]
        }
    },
    17: {
        type: 'summary', title: "📑 Cheat Sheet (Resumão)",
        list: [
            {pt:"Na lanchonete/café",en:"At the café"}, {pt:"Radiante/Empolgado",en:"Thrilled"},
            {pt:"Anotar",en:"Take notes"}, {pt:"Carregando (vídeo)",en:"Loading up"},
            {pt:"Distendi o músculo",en:"Pulled a muscle"}, {pt:"Na estrada",en:"On the highway"},
            {pt:"De serviço",en:"On duty"}, {pt:"Pedir pizza",en:"Order a pizza"},
            {pt:"Qual o sabor?",en:"What would be the pizza?"}, {pt:"No trabalho",en:"At work"},
            {pt:"Terminei",en:"I am done"}, {pt:"Patrocinador",en:"Sugar Daddy"},
            {pt:"Tenho Facebook",en:"I am on Facebook"}, {pt:"Gosto de caminhar",en:"I enjoy walking"},
            {pt:"Isso é loucura",en:"This is nuts"}
        ],
        fr: {
            title: "📑 Résumé (Français)",
            list: [
                {pt:"No café",en:"Au café"}, {pt:"Radiante",en:"Ravi / Excité"},
                {pt:"Anotar",en:"Prendre des notes"}, {pt:"Carregando",en:"Ça charge"},
                {pt:"Distensão",en:"Claquage"}, {pt:"Na estrada",en:"Sur l'autoroute"},
                {pt:"De serviço",en:"De service"}, {pt:"Pedir pizza",en:"Commander une pizza"},
                {pt:"Qual sabor?",en:"Quelle sera la pizza ?"}, {pt:"No trabalho",en:"Au travail"},
                {pt:"Terminei",en:"J'ai fini"}, {pt:"Sugar Daddy",en:"Sugar Daddy"},
                {pt:"Tenho Facebook",en:"Je suis sur Facebook"}, {pt:"Gosto de caminhar",en:"J'aime marcher"},
                {pt:"Loucura",en:"C'est dingue"}
            ]
        }
    }
};
