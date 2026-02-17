// --- MAIN APPLICATION LOGIC ---

function generateSidebar() {
    const introContainer = document.getElementById('sidebar-intro');
    const modulesContainer = document.getElementById('sidebar-modules');
    introContainer.innerHTML = `<button onclick="renderTab(0)" id="btn-0" class="active"><span>🏠 Start Here</span></button>`;
    let modulesHTML = '';
    for (let i = 1; i <= 17; i++) {
        const isLocked = !AppState.unlockedTabs.includes(i);
        const lockIcon = isLocked ? '🔒' : '';
        const lockClass = isLocked ? 'locked' : '';
        const title = DB[i] ? (DB[i].ptExpression || DB[i].title) : "Loading...";
        modulesHTML += `<button onclick="renderTab(${i})" id="btn-${i}" class="${lockClass}"><span>${i}. ${title}</span> <span class="lock-icon">${lockIcon}</span></button>`;
    }
    modulesContainer.innerHTML = modulesHTML;
}

window.renderTab = function(tabIndex) {
    if (!AppState.unlockedTabs.includes(tabIndex)) { alert("🔒 Complete the previous lesson first!"); return; }
    document.querySelectorAll('.sidebar button').forEach(b => b.classList.remove('active'));
    const btn = document.getElementById(`btn-${tabIndex}`);
    if(btn) btn.classList.add('active');
    const container = document.getElementById('dynamic-content');
    const data = DB[tabIndex];
    const isFrench = AppState.currentLang === 'fr';

    // --- LABELS TRANSLATION ---
    const labels = isFrench ? {
        s2: "Étape 2 - Situations",
        s3: "Étape 3 - Autres façons (PT)",
        s4: "Étape 4 - Contexte Brésilien 🇧🇷",
        s5: "Étape 5 - Contexte Natif 🇫🇷",
        s6: "Étape 6 - Devinez l'expression",
        s6_text: "Comment diriez-vous",
        s7: "Étape 7 - Révélation",
        s8: "Étape 8 - Carte Mentale",
        s9: "Étape 9 - Astuces Mémoire",
        s10: "Étape 10 - Alternatives Natives",
        s11: "Étape 11 - Exemples Réels",
        s12: "Étape 12 - Défi QCM",
        s13: "Étape 13 - Récapitulatif",
        check: "Vérifier",
        finish: "Je suis satisfait ✅",
        ptHeader: "🇧🇷 Portugais",
        enHeader: "🇫🇷 Français"
    } : {
        s2: "Step 2 - Situations",
        s3: "Step 3 - Outras maneiras (PT)",
        s4: "Step 4 - 🇧🇷 Brazilian Walkthrough",
        s5: "Step 5 - 🇺🇸 Native Walkthrough",
        s6: "Step 6 - Guess the Expression",
        s6_text: "How would you say",
        s7: "Step 7 - Reveal",
        s8: "Step 8 - Brain Mapping",
        s9: "Step 9 - Grammar Hacks",
        s10: "Step 10 - Native Alternatives",
        s11: "Step 11 - Real Examples",
        s12: "Step 12 - MCQ Challenge",
        s13: "Step 13 - Recap",
        check: "Check & Reveal",
        finish: "I am happy with this expression ✅",
        ptHeader: "🇧🇷 Portuguese",
        enHeader: "🇺🇸 English"
    };

    if (data.type === 'intro') {
        const content = data[AppState.currentLang];
        container.innerHTML = `<div class="section-box"><h2 style="color:#38bdf8; margin-bottom:15px;">${content.title}</h2><div class="text-content">${content.text}</div><button class="complete-btn" onclick="completeTab(${tabIndex})">Start Journey 🚀</button></div>`;
        return;
    }
    if (data.type === 'summary') {
        const summaryData = isFrench ? data.fr : data;
        container.innerHTML = `<div class="section-box"><h1 class="lesson-headline">${summaryData.title}</h1><table style="width:100%; border-collapse:collapse; color:#cbd5e1;"><tr style="text-align:left; border-bottom:2px solid #38bdf8;"><th style="padding:10px;">${labels.ptHeader}</th><th style="padding:10px;">${labels.enHeader}</th></tr>${summaryData.list.map(item => `<tr style="border-bottom:1px solid #334155;"><td style="padding:10px; color:#facc15;">${item.pt}</td><td style="padding:10px; font-weight:bold;">${item.en}</td></tr>`).join('')}</table><button class="complete-btn" onclick="alert('🎉 Course Completed!')">Finish Course 🎓</button></div>`;
        return;
    }
    if (data.type === 'final_lab') {
        const labData = isFrench ? data.fr : data;
        container.innerHTML = `<h1 class="lesson-headline" style="text-align:center;">${labData.title}</h1>${labData.levels.map((level, idx) => `<div class="step-box" style="border-left-color:${level.color};"><div class="step-label" style="color:${level.color};">${level.title}</div><p class="text-content">${level.question}</p><div style="margin-top:10px;">${level.options.map((opt, i) => `<button onclick="checkFinal(${idx}, ${i}, ${level.correct}, this)" style="display:block; width:100%; padding:10px; margin-bottom:5px; background:#0f172a; border:1px solid #334155; color:#fff; text-align:left; cursor:pointer; border-radius:6px;">${opt}</button>`).join('')}</div></div>`).join('')}<button class="complete-btn" onclick="completeTab(${tabIndex})">Finish Lab 🏆</button>`;
        return;
    }
    if (data.type === 'detailed_lesson') {
        const imageUrl = `https://source.unsplash.com/800x400/?${data.imageKeyword}`;

        // SWITCH CONTENT BASED ON LANGUAGE
        const targetExpression = isFrench ? data.fr.target : data.correctExpression;
        const walkthrough = isFrench ? data.fr.walkthrough : data.enWalkthrough;
        const explanation = isFrench ? data.fr.explanation : data.explanation;
        const brainMap = isFrench ? data.fr.brainMap : data.brainMap.en;
        const hack = isFrench ? data.fr.hack : data.grammarHack;
        const natives = isFrench ? data.fr.natives : data.natives.map(n => n.text);
        const recap = isFrench ? data.fr.recap : data.recap;
        const examples = isFrench ? data.fr.examples : data.examples;

        const situations = isFrench ? data.fr.situations : data.situations.map(s => s.text);
        const mcqQuestion = isFrench ? data.fr.mcqQuestion : data.mcqQuestion;
        const mcqOptions = isFrench ? data.fr.mcqOptions : data.mcqOptions;

        container.innerHTML = `
            <img src="${imageUrl}" class="module-image" alt="${data.imageKeyword}">
            <div style="text-align:center;"><h1 class="lesson-headline">${data.expressionPT}</h1></div>

            <div class="step-box"><div class="step-label">${labels.s2}</div><ul style="list-style:none; padding:0;">${situations.map((text, i) => `<li class="${data.situations[i].color}">• ${text}</li>`).join('')}</ul></div>
            <div class="step-box"><div class="step-label">${labels.s3}</div><ul style="list-style:none; padding:0;">${data.ptAlternatives.map(s => `<li class="${s.color}">• ${s.text}</li>`).join('')}</ul></div>
            <div class="step-box"><div class="step-label">${labels.s4}</div><p class="walkthrough-text">${data.brWalkthrough}</p></div>
            <div class="step-box"><div class="step-label">${labels.s5}</div><p class="walkthrough-text">${walkthrough}</p></div>

            <div class="step-box">
                <div class="step-label">${labels.s6}</div>
                <p class="text-content">${labels.s6_text} "${data.expressionPT}"?</p>
                <input type="text" id="guessInput" class="answer-input" placeholder="...">
                <button class="check-btn" onclick="checkGuess(${tabIndex})">${labels.check}</button>
                <p id="guessFeedback" class="feedback-msg"></p>
            </div>

            <div id="hiddenContent" class="hidden-section">
                <div class="step-box"><div class="step-label">${labels.s7}</div><h2 style="color:#22c55e; font-size:2rem;">${targetExpression} <button class="audio-btn" data-text="${targetExpression}" onclick="playAudio(this.getAttribute('data-text'))">🔊</button></h2><p class="text-content" style="margin-top:10px;">${explanation}</p></div>
                <div class="step-box"><div class="step-label">${labels.s8}</div><div class="brain-map"><div class="brain-box" style="background:#334155; color:#fff;">${data.brainMap.pt}</div><div class="arrow">➜</div><div class="brain-box" style="background:#38bdf8; color:#0f172a;">${brainMap}</div></div></div>
                <div class="neon-purple-box"><div class="step-label" style="color:#f0abfc;">${labels.s9}</div>${hack}</div>
                <div class="step-box"><div class="step-label">${labels.s10}</div><ul style="list-style:none; padding:0;">${natives.map(n => `<li style="margin-bottom:8px; color:#cbd5e1;">${n} <button class="audio-btn" data-text="${n}" onclick="playAudio(this.getAttribute('data-text'))">🔊</button></li>`).join('')}</ul></div>
                <div class="step-box"><div class="step-label">${labels.s11}</div>${examples.map(e => `<p class="text-content">🎬 ${e.text} <span style="color:#64748b;">(${e.source})</span></p>`).join('')}</div>
                <div class="step-box"><div class="step-label">${labels.s12}</div><p class="text-content">${mcqQuestion}</p><div style="margin-top:15px;">${mcqOptions.map((opt, i) => `<label style="display:block; margin-bottom:10px; cursor:pointer; padding:10px; background:#0f172a; border-radius:6px;"><input type="radio" name="mcq" value="${i}"> ${opt}</label>`).join('')}</div><button class="check-btn" onclick="checkMCQ(${tabIndex}, ${data.correctIndex})">${labels.check}</button><p id="feedback-${tabIndex}" class="feedback-msg"></p></div>
                <div class="recap-box"><div class="step-label" style="color:#6ee7b7;">${labels.s13}</div>${recap}</div>
                <button class="complete-btn" onclick="completeTab(${tabIndex})">${labels.finish}</button>
            </div>`;
    }
}

// --- AUDIO FIX ---
window.playAudio = function(text) {
    if (!text) return;
    // Cancel any previous speech to avoid overlap
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    // Force language based on current mode
    utterance.lang = AppState.currentLang === 'fr' ? 'fr-FR' : 'en-US';
    utterance.rate = 0.9; // Slightly slower for clarity
    window.speechSynthesis.speak(utterance);
}

window.checkGuess = function(tabIndex) {
    const input = document.getElementById('guessInput').value.trim().toLowerCase();
    const feedback = document.getElementById('guessFeedback');
    const hiddenSection = document.getElementById('hiddenContent');
    const isFrench = AppState.currentLang === 'fr';
    const correct = isFrench ? DB[tabIndex].fr.target.toLowerCase() : DB[tabIndex].correctExpression.toLowerCase();

    if (input.includes(correct.split(' ')[0]) || input.length > 3) { 
        feedback.innerHTML = "<span style='color:#22c55e'>✅ Good try! Let's see.</span>"; 
        hiddenSection.style.display = 'block'; 
    } else { 
        feedback.innerHTML = "<span style='color:#ef4444'>❌ Not quite. Let's see the answer...</span>"; 
        hiddenSection.style.display = 'block'; 
    }
}
window.checkFinal = function(levelIdx, optIdx, correctIdx, btn) {
    if (optIdx === correctIdx) { btn.style.background = "#22c55e"; btn.textContent += " ✅"; addXP(20); }
    else { btn.style.background = "#ef4444"; btn.textContent += " ❌"; }
}
window.checkMCQ = function(tabIndex, correctIndex) {
    const selected = document.querySelector('input[name="mcq"]:checked');
    const feedback = document.getElementById(`feedback-${tabIndex}`);
    if (!selected) { feedback.textContent = "Select an option."; feedback.style.color = "#facc15"; return; }
    if (parseInt(selected.value) === correctIndex) { feedback.textContent = "Correct! +10 XP"; feedback.style.color = "#22c55e"; addXP(10); }
    else { feedback.textContent = "Try again."; feedback.style.color = "#ef4444"; }
}
window.completeTab = function(index) {
    const next = index + 1;
    if (DB[next]) {
        const overlay = document.getElementById('pacman-overlay');
        if (overlay) {
            overlay.style.display = 'flex';
            overlay.classList.add('pacman-active');
            setTimeout(() => {
                overlay.style.display = 'none';
                overlay.classList.remove('pacman-active');
                if (!AppState.unlockedTabs.includes(next)) { AppState.unlockedTabs.push(next); generateSidebar(); addXP(50); }
                renderTab(next);
            }, 2500);
        } else {
            if (!AppState.unlockedTabs.includes(next)) { AppState.unlockedTabs.push(next); generateSidebar(); addXP(50); }
            renderTab(next);
        }
    } else {
        alert("🎉 Course Completed!");
    }
}

window.openFrenchModal = function() { document.getElementById('frenchModal').style.display = 'flex'; }
window.closeFrenchModal = function() { document.getElementById('frenchModal').style.display = 'none'; }
window.checkPasscode = function() {
    if (document.getElementById('passcode').value === "01020") {
        AppState.isFrenchUnlocked = true; closeFrenchModal(); switchToLanguage('fr');
        document.getElementById('unlockBtn').style.display = 'none'; document.getElementById('toggleBtn').style.display = 'flex';
        addXP(100); awardBadge('🇫🇷', 'Polyglot'); alert("🇫🇷 Unlocked!");
    } else { alert("❌ Incorrect Code"); }
}
window.toggleLanguage = function() { switchToLanguage(AppState.currentLang === 'en' ? 'fr' : 'en'); }
function switchToLanguage(lang) {
    AppState.currentLang = lang;
    const subtitle = document.getElementById('subtitle');
    const toggleBtn = document.getElementById('toggleBtn');
    if (lang === 'fr') { subtitle.textContent = "🇧🇷 Bridge to French 🇫🇷"; toggleBtn.innerHTML = "<span>🇺🇸 Switch to English</span>"; }
    else { subtitle.textContent = "🇧🇷 Bridge to English 🌎"; toggleBtn.innerHTML = "<span>🇫🇷 Switch to French</span>"; }
    const activeBtn = document.querySelector('.sidebar button.active');
    renderTab(activeBtn ? parseInt(activeBtn.id.split('-')[1]) : 0);
}

// Init
generateSidebar();
renderTab(0);
updateProfileUI();
