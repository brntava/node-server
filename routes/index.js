module.exports = app =>{

    app.get('/',(req, res) =>{

        res.statusCode = 200; // Se deu tudo certo me retorna 200
    
        res.setHeader('Content-type', 'text/html');
        res.end('<h1>Ola</h1>');
    });
    
};