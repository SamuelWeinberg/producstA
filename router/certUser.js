const express = require('express');
const { cartModel  ,validUser  } = require('../moduls/cartModel');
const bcrypt = require('bcrypt');
const _ = require('lodash')
const jwt = require('jsonwebtoken')
const router = express.Router();

const {athToken} = require('../midluer/athToken');


router.get('/', (req, res) => {
    cartModel.find({})
        .then(data => {
            res.json(data);
        })
});

router.get('/search', (req, res) => {
    let searchq = req.query.q
    let expSearchq = new RegExp(searchq,"i")
    cartModel.find({$or:[{name:expSearchq}]})
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.status(400).json(err)
    })
})

router.get('/info', athToken, (req, res) => {
    cartModel.findOne({ _id: req.module._id }, { pass: 0 })
        .then(data => {
            res.json(data);
        })
});

 
router.post('/add',athToken,  async (req, res) => {
   
   req.body.userId = req.module._id
    let validbody = validUser(req.body);
    if (validbody.error) {
        return res.status(400).json(validbody.error.details);
    }
    try {
        let data = await cartModel.insertMany([req.body])
        res.json(data);
    }
    catch (err) {
        res.status(400).json(err)
    }
});

router.put('/edit', (req, res) => {
    let validbody = validPass(req.body)
    if (validbody.error) {
        return res.status(400).json(validbody.error.details);
    }
    cartModel.updateOne({ _id: req.body._id }, req.body)
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.status(400).json(err)
        })
})

router.delete('/dal/:idDal', (req, res) => {
    let idDal = req.params.idDal
    cartModel.deleteOne({ _id: idDal })
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.status(400).json(err)
        })
})

module.exports = router;