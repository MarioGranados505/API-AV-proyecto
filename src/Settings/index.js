const express=require('express');
const { URL }=require('../Settings/envconf')
const Cors=require('cors')
//import Cors from 'cors';

const app=express();

//Middware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//rutas
app.use(URL,require('../Routers/GetBD'));
app.use(URL,require('../Routers/PostBD'));

app.use(Cors());
/*
app.use((req,res)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-with, Content-Type, Accept");
    next();
})*/
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST,GET,OPTIONS");
    if (req.method == "OPTIONS") {
      return res.sendStatus(200);
    }
    next();
  });

module.exports=app;
