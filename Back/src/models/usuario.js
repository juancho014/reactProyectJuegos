
const { Schema, model } = require('mongoose');


const UsuarioSchema = Schema({ 
    name : {
        type: String,
        required: true        
        },
    description: {
        type: String,
        required: true
    },
        description2:{
            type:String,
            required:true
        },

    img: { 
        type: String,
        required: true
    }
});


module.exports = model('Usuario', UsuarioSchema);