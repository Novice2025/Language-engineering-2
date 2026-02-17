function addXP(amount) {
    AppState.user.xp += amount;
    const needed = AppState.user.level * AppState.constants.LEVEL_XP;
    if (AppState.user.xp >= needed) {
        AppState.user.level++;
        const rankIndex = Math.min(AppState.user.level - 1, AppState.constants.RANKS.length - 1);
        AppState.user.rank = AppState.constants.RANKS[rankIndex];
        alert(`🎉 LEVEL UP! You are now Level ${AppState.user.level}: ${AppState.user.rank}`);
    }
    updateProfileUI();
    showXPPopup(amount);
}

function awardBadge(icon, title) {
    if (!AppState.user.badges.includes(title)) {
        AppState.user.badges.push(title);
        const badge = document.createElement('span');
        badge.className = 'badge';
        badge.textContent = icon;
        badge.title = title;
        document.getElementById('badgesContainer').appendChild(badge);
        alert(`🏅 New Badge Unlocked: ${title}`);
    }
}

function updateProfileUI() {
    document.getElementById('userLevel').textContent = AppState.user.level;
    document.getElementById('userRank').textContent = AppState.user.rank;
    document.getElementById('currentXP').textContent = `${AppState.user.xp} XP`;
    const nextXP = AppState.user.level * AppState.constants.LEVEL_XP;
    document.getElementById('nextLevelXP').textContent = `${nextXP} XP`;
    const prevXP = (AppState.user.level - 1) * AppState.constants.LEVEL_XP;
    const progress = ((AppState.user.xp - prevXP) / (nextXP - prevXP)) * 100;
    document.getElementById('xpFill').style.width = `${progress}%`;
}

function showXPPopup(amount) {
    const popup = document.createElement('div');
    popup.className = 'xp-popup';
    popup.textContent = `+${amount} XP`;
    popup.style.left = '50%';
    popup.style.top = '50%';
    document.body.appendChild(popup);
    setTimeout(() => popup.remove(), 1000);
}
