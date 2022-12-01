const { Router }=require('express');
const { 
    POSTUsuario,
    POSTMaestro, 
    POSTTutor,
    POSTUnidad,
    POSTMateria,
    POSTTarea,
    POSTSala,
    POSTNotificacion,
    POSTChat
 }=require('../Controllers/POST.Contrillers')

const multer=require('multer')

const Storage=multer.diskStorage({
    filename:function(res,file,cb){
        const ext=file.originalname.split('.').pop()
        const fileName=Date.now()
        cb(null,`${fileName}.${ext}`)
    },
    destination:function(res,file,cb){
        cb(null,`src/public`)
    }
})
const Subida=multer({storage:Storage})

const router=Router();



//Registros
router.post('/POST/usuario',POSTUsuario);
router.post('/POST/maestro',POSTMaestro);
router.post('/POST/tutor',POSTTutor);

//Añadir
router.post('/POST/unidad',POSTUnidad);
router.post('/POST/materias',Subida.single('myFile'),POSTMateria);
router.post('/POST/tarea',POSTTarea);
router.post('/POST/sala',POSTSala);
router.post('/POST/notificacion',POSTNotificacion);
router.post('/POST/chat',POSTChat)

module.exports=router;