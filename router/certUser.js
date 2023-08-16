const express = require('express');
const { cartModel  ,validUser  } = require('../moduls/cartModel');
const _ = require('lodash')
const router = express.Router();

const {athToken} = require('../midluer/athToken');


router.get('/', (req, res) => {
    cartModel.find({}).then(data => res.json(data));
});

router.get('/userProducts', athToken, (req, res) => {
    cartModel.aggregate([
        { $match: { userId: req.user._id }},
        {
            $lookup: {
                from: 'products',
                localField: 'productId',
                foreignField: '_id',
                as: 'productDetails'
            }
        },
        { $unwind: '$productDetails' }
    ])
    .then(data => res.json('tast'))
    .catch(err => {
        console.error(err); 
        res.status(400).json(err);
    });
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

router.post('/add', athToken, async (req, res) => {
    req.body.userId = req.user._id;

    const existingProduct = await cartModel.findOne({ userId: req.body.userId, id: req.body.id });

    let validBody = validUser(req.body);
    if (validBody.error) {
        return res.status(400).json(validBody.error.details);
    }
    try {
        let data;
        if (existingProduct) {
            await cartModel.findOneAndUpdate(
                { userId: req.body.userId, id: req.body.id },
                { $inc: { quantity: 1 } }
            );
            data = { message: "Product quantity updated." };
        } else {
            const newCartItem = { ...req.body, quantity: 1 };
            data = await cartModel.insertMany([newCartItem]);
        }
        
        res.json(data);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put('/edit', athToken, (req, res) => {
    let validbody = validPass(req.body)
    if (validbody.error) {
        return res.status(400).json(validbody.error.details);
    }
    cartModel.updateOne({ _id: req.body._id, userId: req.user._id}, req.body)
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.status(400).json(err)
        })
})

router.delete('/dal/:idDal', athToken, (req, res) => {
    let idDal = req.params.idDal
    cartModel.deleteOne({ id: idDal, userId: req.user._id })
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.status(400).json(err)
        })
})

module.exports = router;