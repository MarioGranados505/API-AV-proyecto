const Conecction=require('../Settings/BDconf')
const { v4:uuidv4 } =require('uuid')



function POSTUsuario(req,res){
    
    const {
        Nombres,
        AP,
        AM,
        Correo,
        Password
    }=req.body;
    
    console.log(uuidv4())
    let query=`INSERT INTO tb_usuario VALUES ('${Math.round(Math.random()*(100000-0))+0}', '${Nombres}', '${AP}', '${AM}', '${Correo}','${Password}','1','${uuidv4()}');`
   
    Conecction.query(query,(err,row,fields)=>{
        if(!err){
            return res.json(req.body)
        }else{
            return res.json({"Message":err})
        }
   })
}
function POSTMaestro(req,res){
    const {
        Nombres,
        AP,
        AM,
        Correo,
        Password
    }=req.body;
    
    let query=`INSERT INTO tb_usuario VALUES ('${Math.round(Math.random()*(100000-0))+0}', '${Nombres}', '${AP}', '${AM}', '${Correo}','${Password}','2','NULL');`
   
    Conecction.query(query,(err,row,fields)=>{
        if(!err){
            return res.json(req.body)
        }else{
            return res.json({"Message":err})
        }
   })
}
function POSTTutor(req,res){
    const {
        Codigo,
        Correo,
        Password
    }=req.body;
    
    let query=`INSERT INTO tb_usuario VALUES ('${Math.round(Math.random()*(100000-0))+0}', '', '', '', '${Correo}','${Password}','3','${Codigo}');`
   
    Conecction.query(query,(err,row,fields)=>{
        if(!err){
            return res.json(req.body)
        }else{
            return res.json({"Message":err})
        }
   })
}
function POSTUnidad(req,res){
    const {
        Nombre
    }=req.body;
    
    let query=`INSERT INTO tb_unidades VALUES ('${Math.round(Math.random()*(100000-0))+0}', '${Nombre}');`
   
    Conecction.query(query,(err,row,fields)=>{
        if(!err){
            return res.json(req.body)
        }else{
            return res.json({"Message":err})
        }
   })
}
function POSTMateria(req,res){
    const {
        myFile,
        Nombre,
        Imagen,
        ID_usuario
    }=req.body;

    
    
    let query=`INSERT INTO tb_materias VALUES ('${Math.round(Math.random()*(100000-0))+0}', '${Nombre}','${uuidv4()}','${req.file.filename}','${ID_usuario}');`;
    
    
    Conecction.query(query,(err,row,fields)=>{
        if(!err){
            return res.json(req.body)
        }else{
            return res.json({"Message":err})
        }
   })
}
function POSTTarea(req,res){
    const {
        Nombre,
        Descripcion,
        ID_usuario,
        ID_materia,
        ID_unidad
    }=req.body;
    
    let query=`INSERT INTO tb_tarea VALUES ('${Math.round(Math.random()*(100000-0))+0}', '${Nombre}','${Descripcion}','${ID_materia}','${ID_usuario}','','${ID_unidad}');`;
   
    Conecction.query(query,(err,row,fields)=>{
        if(!err){
            return res.json(req.body)
        }else{
            return res.json({"Message":err})
        }
   })
}
function POSTSala(req,res){
    const {
        Nombre,
        ID_materia,
        ID_chat
    }=req.body;
    
    let query=`INSERT INTO tb_salas VALUES ('${Math.round(Math.random()*(100000-0))+0}', '${Nombre}','${uuidv4()}','239','200');`;
   
    Conecction.query(query,(err,row,fields)=>{
        if(!err){
            return res.json(req.body)
        }else{
            return res.json({"Message":err})
        }
   })
}
function POSTNotificacion(req,res){
    const {
        Descripcion,
        ID_usuario
    }=req.body;
    //INSERT INTO `tb_notificacion` VALUES ('45', 'Hola mundo', '1', curdate());
    let query=`INSERT INTO tb_notificacion VALUES ('${Math.round(Math.random()*(100000-0))+0}', '${Descripcion}','${ID_usuario}', curdate()-1);`;
   
    Conecction.query(query,(err,row,fields)=>{
        if(!err){
            return res.json(req.body)
        }else{
            return res.json({"Message":err})
        }
   })
}
function POSTChat(req,res){
    const {
        Message,
        ID_usuario,
        ID_sala
    }=req.body;

    let query=`INSERT INTO tb_chat VALUES ('${Math.round(Math.random()*(100000-0))+0}', '${Message}',curdate()-1,'${ID_usuario}','${ID_sala}');`;
   
    Conecction.query(query,(err,row,fields)=>{
        if(!err){
            return res.json(req.body)
        }else{
            return res.json({"Message":err})
        }
   })
}

module.exports={
    POSTUsuario,
    POSTMaestro,
    POSTTutor,
    POSTUnidad,
    POSTMateria,
    POSTTarea,
    POSTSala,
    POSTNotificacion,
    POSTChat,
}