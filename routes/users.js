module.exports = app =>{

    let user = [{
        name: 'Bruno',
        email: 'bruno@gmail.com',
        id: 1
    }];
    
    app.get('/users', (req, res) => {
    
        res.statusCode = 200;
    
        res.setHeader('Content-type', 'application/json');
        res.json(user);
    
    });
    
    app.post('/users', (req, res) =>{
    
        res.json(req.body);
    
    })
};