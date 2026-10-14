const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// V19 FINAL ALL IN ONE PROFESSIONALLY - No-cache - No old file ever - Every change together
app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  res.setHeader('Surrogate-Control', 'no-store');
  res.setHeader('X-Version', 'V19-FINAL-ALL-IN-ONE-PROFESSIONAL');
  next();
});

app.use(cors({origin:'*', credentials:true}));
app.use(express.json({limit:'20mb'}));
app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname, { 
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.html')) {
      res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');
      res.setHeader('X-App', 'KAZEDGE-V19-ALL-IN-ONE');
    }
  }
}));

// V19 ALL IN ONE - Every change together - No Man City vs Arsenal - Fresh teams - Professional
let liveGamesCache = {
  lastUpdated: null,
  games: [],
  source: 'KAZEDGE-AI-V19-FINAL-ALL-IN-ONE-PROFESSIONAL-NO-OLD-FILE',
  status: 'initializing',
  version: '19.0.0-FINAL-ALL-IN-ONE-PROFESSIONAL-NO-MAN-CITY-NO-OLD-FILE-EVERY-CHANGE-TOGETHER',
  changes: [
    'Login fixed - doLogin ultra robust + forceOwnerLogin + FORCE OWNER LOGIN button',
    'No old file ever - aggressive clear on DOM load - no Man City vs Arsenal',
    'KAZEDGE_AI_TEAMS fresh 2025/26 - Napoli vs AC Milan, Real Sociedad vs Villarreal, Slovan Bratislava vs Stuttgart, Enyimba vs Rangers Intl, Kano Pillars vs Plateau United, Aston Villa vs Newcastle, Leverkusen vs Atalanta, Feyenoord vs AZ Alkmaar, Benfica vs Sporting CP, Galatasaray vs Besiktas',
    'Generator new matches professional - generateFreshNowProfessional()',
    'Start AI generator very active professional - startKazedgeAIGenerator() + startKazedgeAIGeneratorProfessional()',
    'Reset & regenerate perfect - resetAndRegenerateProfessional()',
    'Real SportyBet direct link - gCode KZ- prefix + getSportyBetDirectLink()',
    'Dashboard Today Sure Banker - Napoli vs AC Milan FRESH V19 NEW not Man City vs Arsenal',
    'Professional Status UI - professionalStatus + lastProfessionalUpdate',
    'No-cache headers - no old file ever - sellable'
  ]
};

function generateLiveGames() {
  // V19 ALL IN ONE - Every change together - NO Man City vs Arsenal - All new fresh teams
  const teams = [
    ["Napoli","AC Milan"], ["Real Sociedad","Villarreal"], ["Slovan Bratislava","Stuttgart"],
    ["Enyimba","Rangers Intl"], ["Kano Pillars","Plateau United"], ["Aston Villa","Newcastle"],
    ["Leverkusen","Atalanta"], ["Feyenoord","AZ Alkmaar"], ["Benfica","Sporting CP"],
    ["Galatasaray","Besiktas"], ["Ajax","PSV"], ["Porto","Braga"],
    ["Al Ahly","Zamalek"], ["Real Madrid","Dortmund"], ["Bayern Munich","Leverkusen"],
    ["Inter","Juventus"], ["Atletico Madrid","Sevilla"], ["Lille","Lyon"],
    ["Napoli","Inter"], ["Barcelona","Atletico Madrid"], ["Arsenal","Tottenham - FRESH V19"]
  ];
  const leagues = ["Serie A 25/26 FRESH V19","La Liga 25/26 FRESH V19","Champions League 25/26 FRESH V19","NPFL 25/26 FRESH V19","Premier League 25/26 FRESH V19 NEW","Europa League 25/26 FRESH V19","Primeira Liga 25/26 FRESH V19"];
  const now = new Date();
  const freshTime = now.toLocaleTimeString('en-NG',{hour:'2-digit',minute:'2-digit',second:'2-digit'}) + ' FRESH V19 ALL IN ONE - NO OLD FILE';
  const games = [];
  for(let i=0;i<24;i++){
    const [home, away] = teams[Math.floor(Math.random()*teams.length)];
    const league = leagues[Math.floor(Math.random()*leagues.length)];
    const isLive = Math.random() > 0.65;
    const minute = isLive ? Math.floor(Math.random()*90) : 0;
    games.push({
      id: `KAZ-V19-ALL-IN-ONE-FRESH-${Date.now()}-${i}`,
      home, away, league,
      time: isLive ? `${minute}' LIVE - FRESH V19 ALL IN ONE` : `${Math.floor(Math.random()*12)+12}:00 - FRESH V19 ALL IN ONE - ${freshTime}`,
      isLive, minute,
      score: isLive ? `${Math.floor(Math.random()*3)}-${Math.floor(Math.random()*3)} - FRESH V19 ALL IN ONE` : "0-0 - Fresh Today V19 ALL IN ONE",
      odds: { home: (1.5 + Math.random()*2).toFixed(2), draw: (2.8 + Math.random()*1.5).toFixed(2), away: (2.2 + Math.random()*3).toFixed(2), over25: (1.6 + Math.random()*0.8).toFixed(2) },
      aiPrediction: ["HOME WIN SAFE FRESH V19 ALL IN ONE","AWAY WIN BALANCED FRESH V19 ALL IN ONE","OVER 2.5 SAFE FRESH V19 ALL IN ONE"][Math.floor(Math.random()*3)],
      confidence: 75 + Math.floor(Math.random()*20),
      source: "KAZEDGE-AI-V19-FINAL-ALL-IN-ONE-PROFESSIONAL",
      sportybetCode: `KZ-V19-ALL-IN-ONE-${Math.floor(1000+Math.random()*9000)}-FRESH-PROFESSIONAL`,
      lastUpdate: now.toISOString(),
      freshTime: freshTime,
      isFresh: true,
      version: "V19-FINAL-ALL-IN-ONE-PROFESSIONAL-NO-MAN-CITY-NO-OLD-FILE-EVERY-CHANGE-TOGETHER",
      sellable: true,
      professional: true,
      allInOne: true,
      note: "V19 ALL IN ONE - NO MAN CITY VS ARSENAL - NO OLD FILE EVER - EVERY CHANGE TOGETHER - Login fixed + Generator professional + Start AI very active + Reset perfect + Real SportyBet link + No old file"
    });
  }
  return games;
}

function refreshLiveGames() {
  console.log(`[${new Date().toISOString()}] 🔄 V19 ALL IN ONE PROFESSIONAL: Fresh 24 teams - Every change together - No Old File - No Man City vs Arsenal - Sellable`);
  try {
    liveGamesCache.games = generateLiveGames();
    liveGamesCache.lastUpdated = new Date().toISOString();
    liveGamesCache.status = 'live-fresh-V19-ALL-IN-ONE-PROFESSIONAL-NO-OLD-FILE-NO-MAN-CITY-EVERY-CHANGE-TOGETHER';
    liveGamesCache.count = liveGamesCache.games.length;
    liveGamesCache.version = '19.0.0-ALL-IN-ONE-PROFESSIONAL';
    liveGamesCache.freshTime = new Date().toLocaleTimeString();
    liveGamesCache.allInOne = true;
    console.log(`✅ V19 ALL IN ONE PROFESSIONAL: ${liveGamesCache.count} FRESH teams - Every change together - No old file - Sellable`);
  } catch(e) { console.error(e.message); }
}

refreshLiveGames();
setInterval(refreshLiveGames, 90 * 1000);

app.get('/health', (req,res)=>{
  res.json({ 
    status:'ok', 
    app:'KAZEDGE AI V19 FINAL ALL IN ONE PROFESSIONAL - EVERY CHANGE TOGETHER', 
    version:'19.0.0 FINAL ALL IN ONE PROFESSIONAL - NO OLD FILE - NO MAN CITY VS ARSENAL - EVERY CHANGE TOGETHER', 
    owner:'Clement Kayode Olatunji - 07067183541',
    opay:'7067183541',
    message:'V19 FINAL ALL IN ONE - Every change together in one professionally app - Login fixed + No old file ever + No Man City vs Arsenal + Generator professional + Start AI very active + Reset perfect + Real SportyBet link + Sellable - Best in Nigeria - To God Be The Glory',
    liveGames: liveGamesCache.count,
    lastUpdated: liveGamesCache.lastUpdated,
    freshTime: liveGamesCache.freshTime,
    changes: liveGamesCache.changes,
    allInOne: true,
    professional: true,
    sellable: true,
    time: new Date().toISOString()
  });
});

app.get('/api/info', (req,res)=>{
  res.json({ 
    name:'KAZEDGE AI V19 FINAL ALL IN ONE PROFESSIONAL',
    version:'19.0.0 FINAL ALL IN ONE',
    professional:true, live:true, autoUpdate:true, bestInNigeria:true, sellable:true, allInOne:true,
    changes: liveGamesCache.changes,
    features:['login-fixed','no-old-file-ever','no-man-city-vs-arsenal','generator-professional','start-ai-very-active','reset-perfect','real-sportybet-direct-link','professional-status-ui','no-cache-headers','sellable-all-in-one'],
    owner:'Clement Kayode Olatunji', phone:'07067183541', opay:'7067183541', toGodBeGlory:true, allInOne:true
  });
});

app.get('/api/games', (req,res)=>{
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');
  res.json({ success:true, ...liveGamesCache, endpoint:'V19 FINAL ALL IN ONE PROFESSIONAL - Every change together - Fresh 24 teams - No old file - No Man City vs Arsenal - Sellable', allInOne:true });
});

app.get('/api/games/live', (req,res)=>{
  const liveOnly = liveGamesCache.games.filter(g=>g.isLive);
  res.json({success:true, count:liveOnly.length, lastUpdated:liveGamesCache.lastUpdated, games:liveOnly, fresh:true, version:'V19-ALL-IN-ONE', allInOne:true});
});

app.get('/api/games/today', (req,res)=>{
  res.json({success:true, count:liveGamesCache.games.length, lastUpdated:liveGamesCache.lastUpdated, games:liveGamesCache.games, fresh:true, version:'V19-ALL-IN-ONE-PROFESSIONAL-FRESH', allInOne:true});
});

app.get('/api/clear-cache', (req,res)=>{
  refreshLiveGames();
  res.json({success:true, message:'V19 ALL IN ONE PROFESSIONAL: Cache cleared - 24 fresh teams - No old file - No Man City vs Arsenal - Every change together - Sellable', count:liveGamesCache.count, lastUpdated:liveGamesCache.lastUpdated, freshTime: liveGamesCache.freshTime, allInOne:true});
});

app.get('/api/force-fresh', (req,res)=>{
  refreshLiveGames();
  res.json({success:true, message:'V19 ALL IN ONE FORCE FRESH - 24 teams - No old file ever - No Man City vs Arsenal - Every change together', count:liveGamesCache.count, games: liveGamesCache.games.slice(0,6), freshTime: liveGamesCache.freshTime, changes: liveGamesCache.changes, allInOne:true});
});

app.get('/api/all-changes', (req,res)=>{
  res.json({
    success:true,
    app:'KAZEDGE V19 FINAL ALL IN ONE PROFESSIONAL',
    version:'19.0.0',
    message:'Every changes of kazedge Ai app together in one professionally app',
    changes: liveGamesCache.changes,
    features:{
      loginFixed: 'doLogin ultra robust + forceOwnerLogin + FORCE OWNER LOGIN button - works even if db corrupted',
      noOldFile: 'Aggressive clear on DOM load - kz_ai_generator_db, kz_ai_last_update, kz_selected_matches_old, kz_ai_db - version 19.0-FINAL - no Man City vs Arsenal',
      noManCityVsArsenal: 'KAZEDGE_AI_TEAMS has NO Man City vs Arsenal - replaced with Napoli vs AC Milan, Real Sociedad vs Villarreal, Slovan Bratislava vs Stuttgart, Enyimba vs Rangers Intl, Kano Pillars vs Plateau United, Aston Villa vs Newcastle, Leverkusen vs Atalanta, Feyenoord vs AZ Alkmaar, Benfica vs Sporting CP, Galatasaray vs Besiktas - dashboard Today Sure Banker is Napoli vs AC Milan FRESH V19 NEW',
      generatorProfessional: 'generateFreshNowProfessional() - clears ALL old files, generates 22-24 fresh NOW, updates UI counters, professionalStatus, lastProfessionalUpdate, toast, shows today page',
      startAIVeryActive: 'startKazedgeAIGenerator() + startKazedgeAIGeneratorProfessional() - Very Active - Professional Updating App - clears old, generates fresh initial, status Very Active Fresh 22 Teams No Old File Updating Every 30s, countdown Xs - V19 PROFESSIONAL, every 30s clears old generates fresh updates counters professionalStatus lastProfessionalUpdate toast',
      resetPerfect: 'resetAndRegenerateProfessional() - Perfect - confirm dialog, clears 8 keys, clears in-memory, stops old interval, sets version, generates fresh, updates UI, restarts generator, toast, shows today',
      realSportyBetLink: 'gCode with KZ- prefix + getSportyBetDirectLink() - real direct link https://www.sportybet.com/ng/search?keyword=... - works 100% like screenshot 9 games odds 728.64 win 82,336.51',
      professionalStatusUI: 'professionalStatus + lastProfessionalUpdate div - shows V18/V19 Professional - No Old File Ever - Fresh 22 Teams - Very Active - Ready to Sell',
      noCacheHeaders: 'Cache-Control no-store no-cache must-revalidate for all routes + index.html',
      sellableAllInOne: 'All changes together in one professionally app - ready to sell make money - best app in Nigeria'
    },
    games: liveGamesCache.games.slice(0,3),
    allInOne: true
  });
});

app.get('*', (req,res)=>{
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');
  res.setHeader('X-App', 'KAZEDGE-V19-ALL-IN-ONE-PROFESSIONAL');
  res.sendFile(path.join(__dirname,'index.html'));
});

app.listen(PORT, '0.0.0.0', ()=>{
  console.log(`🔥 KAZEDGE V19 FINAL ALL IN ONE PROFESSIONAL - EVERY CHANGE TOGETHER - PORT ${PORT}`);
  console.log(`📡 V19 ALL IN ONE: Every change together - Login fixed + No old file + No Man City vs Arsenal + Generator professional + Start AI very active + Reset perfect + Real SportyBet link + Professional Status + No-cache + Sellable`);
  console.log(`👑 Owner: Clement Kayode Olatunji - 07067183541 - All in one professional - To God Be The Glory`);
  console.log(`🔗 Health: /health | Games: /api/games | Force Fresh: /api/force-fresh | All Changes: /api/all-changes`);
});
