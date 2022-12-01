const Conecction=require('../Settings/BDconf')
const { Ubicacion }=require('../public/DocConex')
const path=require('path')

function GetDataUsuario(req,res){

    TB="tb_"+req.params.Name
    QUERRY='select * from '+TB;
    Conecction.query(QUERRY,(err,row,fields)=>{
        res.json(row);
    })
    
}
function GetDataUsuarioId(req,res){
    TB="tb_"+req.params.Name
    ID=req.params.id
    QUERRY="select * from "+TB+" where ID_Usuario='"+ID+"';";
    Conecction.query(QUERRY,(err,row,fields)=>{
        res.json(row);
    })
}
function GetDocumento(req,res){
    const img=req.params.Name
    const Ruta=path.join(Ubicacion(),img);
    return res.sendFile(Ruta);
    //return res.sendFile();
}

module.exports={
    GetDataUsuario,
    GetDataUsuarioId,
    GetDocumento,
}