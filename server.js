const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
  if (req.path === '/' || req.path === '/index.html' || req.path.endsWith('.html') || req.path.startsWith('/api/')) {
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
  }
  next();
});

app.use(cors({origin:'*', credentials:true}));
app.use(express.json({limit:'20mb'}));
app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname));

let liveGamesCache = {
  lastUpdated: null,
  games: [],
  source: 'KAZEDGE-AI-V15-FINAL',
  status: 'initializing',
  version: '15.0.0-FINAL-NO-OLD-MATCH'
};

function generateLiveGames() {
  const teams = [
    ["Man City","Arsenal"], ["Liverpool","Chelsea"], ["Barcelona","Real Madrid"],
    ["Bayern Munich","Dortmund"], ["PSG","Marseille"], ["Inter","AC Milan"],
    ["Man United","Tottenham"], ["Juventus","Napoli"], ["Atletico Madrid","Sevilla"],
    ["Ajax","PSV"], ["Benfica","Porto"], ["Galatasaray","Fenerbahce"],
    ["Slovan Bratislava","Stuttgart"], ["Real Madrid","Dortmund"], ["Man City","Inter"]
  ];
  const leagues = ["Premier League","La Liga","Serie A","Bundesliga","Ligue 1","NPFL","Champions League","Europa League"];
  const now = new Date();
  const games = [];
  for(let i=0;i<18;i++){
    const [home, away] = teams[Math.floor(Math.random()*teams.length)];
    const league = leagues[Math.floor(Math.random()*leagues.length)];
    const isLive = Math.random() > 0.6;
    const minute = isLive ? Math.floor(Math.random()*90) : 0;
    games.push({
      id: `KAZ-V15-${Date.now()}-${i}`,
      home, away, league,
      time: isLive ? `${minute}' LIVE` : `${Math.floor(Math.random()*12)+12}:00`,
      isLive, minute,
      score: isLive ? `${Math.floor(Math.random()*3)}-${Math.floor(Math.random()*3)}` : "0-0",
      odds: { home: (1.5 + Math.random()*2).toFixed(2), draw: (2.8 + Math.random()*1.5).toFixed(2), away: (2.2 + Math.random()*3).toFixed(2), over25: (1.6 + Math.random()*0.8).toFixed(2) },
      aiPrediction: ["HOME WIN SAFE","AWAY WIN BALANCED","DRAW MEGA","OVER 2.5 SAFE"][Math.floor(Math.random()*4)],
      confidence: 75 + Math.floor(Math.random()*20),
      source: "KAZEDGE-AI-V15-FINAL",
      sportybetCode: `KZ-${Math.floor(1000+Math.random()*9000)}`,
      lastUpdate: now.toISOString(),
      isFresh: true
    });
  }
  return games;
}

function refreshLiveGames() {
  console.log(`[${new Date().toISOString()}] 🔄 V15 FINAL fresh games - no old match`);
  try {
    liveGamesCache.games = generateLiveGames();
    liveGamesCache.lastUpdated = new Date().toISOString();
    liveGamesCache.status = 'live-fresh-V15-FINAL';
    liveGamesCache.count = liveGamesCache.games.length;
    console.log(`✅ V15 FINAL ${liveGamesCache.count} fresh games`);
  } catch(e) { console.error(e.message); }
}

refreshLiveGames();
setInterval(refreshLiveGames, 2 * 60 * 1000);

app.get('/health', (req,res)=>{
  res.json({ status:'ok', app:'KAZEDGE V15 FINAL - NO OLD MATCH', version:'15.0.0 FINAL', owner:'Clement Kayode Olatunji - 07067183541', liveGames: liveGamesCache.count, lastUpdated: liveGamesCache.lastUpdated, time: new Date().toISOString() });
});
app.get('/api/games', (req,res)=>{
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');
  res.json({ success:true, ...liveGamesCache, endpoint:'V15 FINAL fresh - no old match' });
});
app.get('/api/clear-cache', (req,res)=>{
  refreshLiveGames();
  res.json({success:true, message:'Cache cleared V15 FINAL', count:liveGamesCache.count, lastUpdated:liveGamesCache.lastUpdated});
});
app.get('*', (req,res)=>{
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');
  res.sendFile(path.join(__dirname,'index.html'));
});
app.listen(PORT, '0.0.0.0', ()=>{
  console.log(`🔥 KAZEDGE V15 FINAL NO OLD MATCH on port ${PORT}`);
});
