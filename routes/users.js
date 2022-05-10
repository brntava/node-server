let NeDB = require('nedb');

const{body, validationResult} = require('express-validator');

let db = new NeDB({
    
    filename: 'users.db',
    autoload: true

})

module.exports = app =>{

    let routes = app.route('/users')
    
    routes.get((req, res) => {

        db.find({}).sort({name:1}).exec((err, users) =>{

            if(err){

                app.utils.error.send(err, req, res);

            } else{

                res.statusCode = 200;
    
                res.setHeader('Content-type', 'application/json');
                res.json({
                    users
                });

            };

        });
    });
    
    routes.post([body('name').notEmpty().withMessage('Nome é obrigatorio'),
                body('password').notEmpty().withMessage('Senha obrigatoria'),
                body('email').isEmail().withMessage('Email esta invalido')],
                (req, res) =>{

                let errors = validationResult(req);

                if(errors){

                    app.utils.error.send(errors, req, res);
                    return false

                };

                db.insert(req.body, (err, user) =>{
                    
                    if(err){

                        app.utils.error.send(err, req, res);

                    } else {

                        res.status(200).json(user);

                    }

                })
    
    })

    // Pegar dados pelo id

    let routeId = app.route('/users/:id');

    routeId.get((req, res) =>{

        db.findOne({_id:req.params.id}).exec((err, user) =>{

            if(err){

                console.log(`Erro: ${err}`);
                res.status(400).json({
                    error: err
                });

            } else {

                res.status(200).json(user);

            }

        });

    });

    // Atualizar dados

    routeId.put((req, res) =>{

        db.update({_id:req.params.id}, req.body, err=>{

            if(err){

                console.log(`Erro: ${err}`);
                res.status(400).json({
                    error: err
                });

            } else {

                res.status(200).json(Object.assign(req.params, req.body));

            }

        });

    });

    // Deletar dados

    routeId.delete((req, res) =>{

        db.remove({_id:req.params.id}, {}, err =>{

            if(err){

                console.log(`Erro: ${err}`);
                res.status(400).json({
                    error: err
                });

            } else {
                // Mostra oq foi exluicod
                res.status(200).json(req.params);

            }


        })

    })

};