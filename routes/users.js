let NeDB = require('nedb');

let db = new NeDB({
    
    filename: 'users.db',
    autoload: true

})

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
    

        db.insert(req.body, (err, user) =>{

            if(err){

                console.log(`Erro: ${err}`);
                res.status(400).json({
                    error: err
                });

            } else {

                res.status(200).json(user);

            }

        })
    
    })
};