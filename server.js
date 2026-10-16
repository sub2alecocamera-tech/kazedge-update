const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store');
  next();
});
app.use(express.static(path.join(__dirname)));

app.get('/health', (req, res) => {
  res.json({ status: 'ok', version: '41.0.0', app: 'KAZEDGE V41 MASTER PROFESSIONAL' });
});

app.get('/api/final-perfect', (req, res) => {
  res.json({
    app: 'KAZEDGE V41 ULTIMATE MASTER PROFESSIONAL',
    status: 'LIVE',
    features: ['AI Auto-Pick','Match Analysis','Bet Slip Checker','Ticket Builder','Fixtures','Owner Dashboard','Today/Tomorrow/Weekend','Multi-Sport'],
    disclaimer: 'Our target is to find stronger selections, but no software can guarantee 90%-100% winning tickets. 18+ gamble responsibly.'
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log('KAZEDGE V41 MASTER PROFESSIONAL LIVE on port ' + PORT);
});
