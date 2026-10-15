const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors());
app.use(express.json());
app.use((req,res,next)=>{
  res.set('Cache-Control','no-store, no-cache, must-revalidate, proxy-revalidate');
  res.set('Pragma','no-cache');
  res.set('Expires','0');
  next();
});
app.use(express.static(__dirname));

app.get('/health',(req,res)=>{
  res.json({ status:'ok', version:'33.0.0', build:'V33-FULL-FINAL' });
});

app.get('/api/final-perfect',(req,res)=>{
  res.json({
    perfect:true,
    version:'33.0.0',
    features:['AI Auto-Pick','Match Analysis','Bet Slip Checker','Ticket Builder','Automatic Fixtures','Owner Dashboard','Mobile-Friendly','Bookmaker Integration'],
    winning:'90%-100%',
    owner:'Clement Kayode - 07067183541 - Opay'
  });
});

app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname,'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=> console.log('KAZEDGE V33 running on '+PORT));
