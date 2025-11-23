// ======= Live Scores =======
const liveData = [
    { home: "Man City", away: "Arsenal", h: 2, a: 1, status: "LIVE" },
    { home: "Real Madrid", away: "Barcelona", h: 1, a: 1, status: "HT" }
];

// ======= Fixtures =======
const fixtures = [
    { date: "2025-11-25", home: "Chelsea", away: "Liverpool", time: "22:00" },
    { date: "2025-11-26", home: "PSG", away: "Lyon", time: "21:00" }
];

// ======= Standings =======
const standings = [
    { pos: 1, team: "Arsenal", pts: 46 },
    { pos: 2, team: "Man City", pts: 44 },
    { pos: 3, team: "Liverpool", pts: 41 }
];

// ======= Players =======
const players = [
    { name: "Erling Haaland", club: "Man City", goals: 28, position: "Striker" },
    { name: "Jude Bellingham", club: "Real Madrid", goals: 19, position: "Midfielder" },
    { name: "Bukayo Saka", club: "Arsenal", goals: 14, position: "Winger" }
];

// ======= Teams =======
const teams = [
    { team: "Arsenal", coach: "Mikel Arteta", stadium: "Emirates Stadium", capacity: "60,704" },
    { team: "Liverpool", coach: "Jurgen Klopp", stadium: "Anfield", capacity: "53,394" },
    { team: "Barcelona", coach: "Xavi", stadium: "Camp Nou", capacity: "99,354" }
];

// ======= Transfers =======
const transfers = [
    { player: "Mbappé", from: "PSG", to: "Real Madrid", value: "$120M" },
    { player: "Rashford", from: "Man Utd", to: "Chelsea", value: "$90M" }
];

// ======= Live Commentary =======
const commentary = [
    "10' Kickoff! Man City vs Arsenal has started.",
    "23' Goal! Erling Haaland scores for Man City.",
    "45' Half-time, score 1-0."
];

// ======= Team Stats =======
const teamStats = [
    { match: "Arsenal vs Liverpool", possession: "55%", shots: 12, shotsOnTarget: 7 },
    { match: "Real Madrid vs Barcelona", possession: "60%", shots: 15, shotsOnTarget: 9 }
];

// ======= Render Functions =======
function renderLive() {
    const box = document.getElementById("live-scores");
    box.innerHTML = "";
    liveData.forEach(m => {
        box.innerHTML += `<div class='item fade-in ${m.status === "LIVE" ? "glow" : ""}'>
      <strong>${m.home}</strong> vs <strong>${m.away}</strong>
      <span>${m.h} - ${m.a} (${m.status})</span>
    </div>`;
    });
}

function renderFixtures() {
    const box = document.getElementById("fixtures-list");
    fixtures.forEach(f => {
        box.innerHTML += `<div class='item slide-up'>${f.date} — <strong>${f.home}</strong> vs <strong>${f.away}</strong> <span>${f.time}</span></div>`;
    });
}

function renderStandings() {
    const t = document.getElementById("standings-table");
    t.innerHTML = "<tr><th>#</th><th>Team</th><th>Points</th></tr>";
    standings.forEach(s => {
        t.innerHTML += `<tr><td>${s.pos}</td><td>${s.team}</td><td>${s.pts}</td></tr>`;
    });
}

function renderPlayers() {
    const box = document.getElementById("players-list");
    players.forEach(p => {
        box.innerHTML += `<div class='item fade-in'><strong>${p.name}</strong> (${p.position}) — ${p.club} <span>Goals: ${p.goals}</span></div>`;
    });
}

function renderTeams() {
    const box = document.getElementById("teams-list");
    teams.forEach(t => {
        box.innerHTML += `<div class='item slide-up'><strong>${t.team}</strong> Coach: ${t.coach}<br>Stadium: ${t.stadium}<br>Capacity: ${t.capacity}</div>`;
    });
}

function renderTransfers() {
    const box = document.getElementById("transfer-list");
    transfers.forEach(t => {
        box.innerHTML += `<div class='item slide-up'>${t.player}: ${t.from} → ${t.to} (${t.value})</div>`;
    });
}

function renderCommentary() {
    const box = document.getElementById("commentary-list");
    commentary.forEach(c => {
        box.innerHTML += `<div class='item fade-in'>${c}</div>`;
    });
}

function renderTeamStats() {
    const box = document.getElementById("team-stats-list");
    teamStats.forEach(s => {
        box.innerHTML += `<div class='item slide-up'>${s.match}: Possession ${s.possession}, Shots ${s.shots}, Shots on Target ${s.shotsOnTarget}</div>`;
    });
}

// ======= Player Comparison Tool =======
const player1Select = document.getElementById('player1');
const player2Select = document.getElementById('player2');
const comparisonResult = document.getElementById('comparison-result');
players.forEach(p => {
    player1Select.innerHTML += `<option value='${p.name}'>${p.name}</option>`;
    player2Select.innerHTML += `<option value='${p.name}'>${p.name}</option>`;
});
function comparePlayers() {
    const p1 = players.find(p => p.name === player1Select.value);
    const p2 = players.find(p => p.name === player2Select.value);
    comparisonResult.innerHTML = `<p>${p1.name} vs ${p2.name}</p><p>Goals: ${p1.goals} vs ${p2.goals}</p><p>Position: ${p1.position} vs ${p2.position}</p>`;
}

// ======= Search Engine =======
function searchItems() {
    const input = document.getElementById('search-input').value.toLowerCase();
    const results = document.getElementById('search-results');
    results.innerHTML = '';
    const allItems = [...players.map(p => p.name), ...teams.map(t => t.team)];
    const filtered = allItems.filter(i => i.toLowerCase().includes(input));
    filtered.forEach(f => { results.innerHTML += `<div class='item'>${f}</div>`; });
}

// ======= Scroll Helper =======
function scrollToLive() {
    document.querySelector('#live').scrollIntoView({ behavior: 'smooth' });
}

// ======= Render All Sections =======
renderLive();
renderFixtures();
renderStandings();
renderPlayers();
renderTeams();
renderTransfers();
renderCommentary();
renderTeamStats();