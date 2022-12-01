const express =require('express')
const app=require('./Settings/index');
const {PORT}=require('./Settings/envconf')

app.get('/',(req,res)=>{
    return res.json({"Menssage":"Hola mundo"})
})

app.use(express.static('./public'));

app.listen(PORT,()=>{
    console.log("Server port:",PORT);
});