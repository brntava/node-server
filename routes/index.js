let express = require('express');
let routes = express.Router();

routes.get('/',(req, res) =>{

    res.statusCode = 200; // Se deu tudo certo me retorna 200

    res.setHeader('Content-type', 'text/html');
    res.end('<h1>Ola</h1>');
});

// Exportar o arquivo
module.exports = routes;