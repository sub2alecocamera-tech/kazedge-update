const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname), {
  setHeaders: (res) => { res.setHeader('Cache-Control','no-store'); }
}));
app.get('/health', (req,res) => {
  res.json({ status:'ok', version:'39.0.0', time:new Date().toISOString() });
});
app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname,'index.html'));
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('KAZEDGE V39 running on '+PORT));
