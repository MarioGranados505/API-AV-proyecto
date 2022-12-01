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

const WhiteList=['https://ramonpachecoestrella.000webhostapp.com']

app.use(Cors({
    origin:WhiteList
}));
/*
app.use((req,res)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-with, Content-Type, Accept");
    next();
})
*/
module.exports=app;
