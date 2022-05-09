// Criar server com node

const http = require('http');

// Requisiçao e respostas

let server = http.createServer((req, res) =>{

    console.log('URL: ', req.url);
    console.log('METHOD: ', req.method);

    let user = [{
        name: 'Bruno',
        email: 'bruno@gmail.com',
        id: 1
    }];

    // Verificar URL

    switch(req.url){

        case '/':

            res.statusCode = 200; // Se deu tudo certo me retorna 200

            res.setHeader('Content-type', 'text/html');
            res.end('<h1>Ola</h1>');

        break

        case '/users':

            res.statusCode = 200;

            res.setHeader('Content-type', 'application/json');
            res.end(JSON.stringify(user));

        break

    }

});

// Subir servidor

server.listen(3000, '127.0.0.1', () =>{

    console.log('servidor rodando')

})

