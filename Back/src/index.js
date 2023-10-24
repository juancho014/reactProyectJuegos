const{PORT}= require('./config/global');
const app = require('./server');



app.listen(PORT,()=>{
    console.log( `se escucha en el puert: ${PORT}`);
})