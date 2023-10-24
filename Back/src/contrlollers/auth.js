const { response } = require('express');

const crearUsuario =  (req, res = response) => {
console.log(req.body);
res.status(200).json({ 
    message: 'creacion de la card',
   
})
        }


        module.exports = crearUsuario;