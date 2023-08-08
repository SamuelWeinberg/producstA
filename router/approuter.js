const indexR = require("./index")
const userR = require("./uesr")
const productsR = require("./products")
const cartR = require('./certUser')

exports.roterInit=(app) => {
    app.use('/',indexR)
    app.use('/user',userR)
    app.use('/products',productsR)
    app.use('/cart',cartR)

    app.use((req,res)=>{
        res.json({mas:'404 not fond'})
    })
}

exports.origin = (app) => {
    app.all('*', (req, res, next) => {
    if (!req.get('Origin')) return next();
    res.set('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.set('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type,x-api-key');
    next();
    });
} 