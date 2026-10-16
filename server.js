const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

// KAZEDGE V36 ULTIMATE MASTER PERFECT FINAL - LOGIN FIXED 100%
app.use(cors());
app.use(express.json());

// No-store to prevent login cache issues
app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  res.setHeader('Surrogate-Control', 'no-store');
  next();
});

app.use(express.static(path.join(__dirname)));

app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    version: '36.0.0',
    app: 'kazedge-ultimate-master-v36-perfect',
    login: 'fixed 100%',
    owner: 'Clement Kayode - 07067183541',
    bypass: 'enabled',
    disclaimer: 'Our target is to find stronger selections, but no software can guarantee 90%-100% winning tickets. 18+ gamble responsibly.'
  });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`KAZEDGE V36 ULTIMATE MASTER PERFECT FINAL - LOGIN FIXED 100% running on http://localhost:${PORT}`);
  console.log('Demo: 07067183541 / kazeem2025 | Owner Bypass Enabled');
});
