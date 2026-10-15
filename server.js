const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors());
app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store, no-cache, must-revalidate, private');
  next();
});
app.use(express.static(__dirname));

app.get('/health', (req, res) => {
  res.json({ status: 'ok', version: '31.0.0', app: 'KAZEDGE ULTIMATE MASTER V31' });
});

app.get('/api/final-perfect', (req, res) => {
  res.json({
    app: 'KAZEDGE V31 FINAL PROFESSIONAL',
    status: 'final',
    principle: 'Strength 40% + Form 25% + xG 20% + H2H 10% + Motivation 5%',
    edge: '>3% VALUE only',
    confidence: '58-78% honest',
    matches: 5,
    toGod: 'To God Be Glory',
    best: 'Best App in Nigeria'
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('KAZEDGE V31 running on ' + PORT));
