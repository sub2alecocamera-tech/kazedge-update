const express=require('express');const path=require('path');const cors=require('cors');const app=express();const PORT=process.env.PORT||3000;
app.use(cors({origin:'*'}));
app.use(express.json());
app.use(express.static(__dirname,{maxAge:0}));
app.use((req,res,next)=>{res.setHeader('Cache-Control','no-store');next()});
let cache={games:[],time:new Date().toISOString()};
function gen(){const t=[["Napoli","AC Milan"],["Aston Villa","Newcastle"],["Enyimba","Rangers"]];const g=[];for(let i=0;i<8;i++){const [h,a]=t[i%t.length];const p=0.52+Math.random()*0.16;const o=(1/p*0.92).toFixed(2);g.push({t:h+' vs '+a,o:o,edge:(Math.random()*5+1).toFixed(1)+'%',code:'KZ-'+Math.floor(100000+Math.random()*900000)})}return g}
function refresh(){cache.games=gen();cache.time=new Date().toISOString()}
refresh();setInterval(refresh,60000);
app.get('/health',(req,res)=>{res.json({status:'ok',app:'KAZEDGE V25 FINAL PROFESSIONAL MOBILE',version:'25.0.0',tips:cache.games.length,time:cache.time})});
app.get('/api/final-perfect',(req,res)=>{refresh();res.json({success:true,app:'KAZEDGE V25 FINAL PROFESSIONAL MOBILE',version:'25.0.0',tips:cache.games.length,time:cache.time})});
app.get('*',(req,res)=>{res.sendFile(path.join(__dirname,'index.html'))});
app.listen(PORT,'0.0.0.0',()=>{console.log(`KAZEDGE V25 FINAL PROFESSIONAL MOBILE LIVE on ${PORT}`)});
