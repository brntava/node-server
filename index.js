// Criar server com node

const http = require('http');

// Requisiçao e respostas

let server = http.createServer((req, res) =>{

    console.log('URL: ', req.url);
    console.log('METHOD: ', req.method);

    res.end('ok')

});

// Subir servidor

server.listen(3000, '127.0.0.1', () =>{

    console.log('servidor rodando')

})

