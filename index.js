// Criar server com node

const express = require('express');
const consign = require('consign');
const bodyParses = require('body-parser');

let app = express();

app.use(bodyParses.urlencoded({ extended: false }))
app.use(bodyParses.json()); // dados q vierem vao virar json ja


// Inclui a pasta routes e add no app
consign().include('routes').into(app);

// Subir servidor

app.listen(3000, '127.0.0.1', () =>{

    console.log('servidor rodando')

})

