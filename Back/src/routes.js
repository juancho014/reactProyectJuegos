
const { response } = require('express');
const Usuario= require('../src/models/usuario')



module.exports=function(router){

    
router.post('/new', (req, res= response)=>{
    console.log(req.body);
    const {img,name,description,description2} = req.body
const usuario=new Usuario(req.body);
usuario.save()

    res.status(200).json({
        
        message:'hola nueva ',
        user:req.body,
        img,name,description,description2
       
    
    })
    })
    
    return router
    }

