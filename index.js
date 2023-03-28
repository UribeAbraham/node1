const express = require('express');
const cors = require('cors');
require('dotenv').config();
const bodyParser = require('body-parser')
const { validarJWT } = require("./middlewares/validar-jwt");
 
const app = express();

// cors
app.use( cors() );

// parseo del body
app.use( express.json() ); 
app.use(bodyParser.urlencoded({ extended: false }));

// Rutas
app.get('/', (_req, resp) => {
    resp.json({ 
        ok: true,
        msg: 'backend OK!!'
     });
});
app.use(validarJWT)
app.use('/api/contactos', require('./routes/contactos') );
app.use('/api/usuarios', require('./routes/usuarios') );

app.listen(process.env.PORT, ()=>{
    console.log("server OK: "+process.env.PORT);
});