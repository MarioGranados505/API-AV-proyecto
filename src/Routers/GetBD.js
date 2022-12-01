const { Router }=require('express');
const { GetDataUsuario,GetDataUsuarioId, GetDocumento }=require('../Controllers/GET.Controllers');

const router=Router();


router.get('/GET/:Name',GetDataUsuario);
router.get('/GET/:Name/:id',GetDataUsuarioId);
router.get('/Doc/:Name',GetDocumento)

module.exports=router;
