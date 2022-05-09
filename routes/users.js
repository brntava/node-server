let express = require('express');
let routes = express.Router();

let user = [{
    name: 'Bruno',
    email: 'bruno@gmail.com',
    id: 1
}];

routes.get('/', (req, res) => {

    res.statusCode = 200;

    res.setHeader('Content-type', 'application/json');
    res.json(user);

});

routes.get('/admin', (req, res) =>{

    res.statusCode = 200;

    res.setHeader('Content-type', 'application/json');
    res.json({
        users: []
    })

})

module.exports = routes;