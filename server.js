const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
app.use(cors());
app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  next();
});
app.use(express.json());
app.use(express.static(__dirname));
app.get('/health', (req, res) => {
  res.json({ status: 'ok', version: '37.0.0', app: 'kazedge-ultimate-master-v37-perfect', time: new Date().toISOString() });
});
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('KAZEDGE V37 ULTIMATE MASTER PERFECT FINAL running on ' + PORT));
