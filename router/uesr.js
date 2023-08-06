const express = require('express');
const { userModel, validUser, validLogainUser, creatTokn } = require('../moduls/userModel');
const bcrypt = require('bcrypt');
const _ = require('lodash')
const jwt = require('jsonwebtoken')
const router = express.Router();

const {athToken} = require('../midluer/athToken')

router.get('/', (req, res) => {
    userModel.find({})
        .then(data => {
            res.json(data);
        })
});

router.get('/search', (req, res) => {
    let searchq = req.query.q
    let expSearchq = new RegExp(searchq,"i")
    userModel.find({$or:[{name:expSearchq}]})
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.json(err)
    })
})

router.get('/info', athToken, (req, res) => {
    userModel.findOne({ _id: req.module._id }, { pass: 0 })
        .then(data => {
            res.json(data);
        })
});

router.post('/login', async (req, res) => {
    let validbody = validLogainUser(req.body);
    if (validbody.error) {
        return res.json(validbody.error.details);
    }
    try {
        let userData = await userModel.findOne({ email: req.body.email });
        if (!userData) {
            return res.json({ msg: "user not found" });
        }
        let validPass = await bcrypt.compare(req.body.pass, userData.pass);
        if (!validPass) {
            return res.json({ msg: "password not match" });
        }
        let myToken = creatTokn(userData.email, userData._id);
        res.json({ token: myToken });
    } catch (err) {
        console.log(err);
        res.json('err', err);
    }
});

router.post('/add', async (req, res) => {
    let validbody = validUser(req.body);
    if (validbody.error) {
        return res.json(validbody.error.details);
    }
    try {
        let salt = await bcrypt.genSalt(10);
        req.body.pass = await bcrypt.hash(req.body.pass, salt);
        let data = await userModel.insertMany([req.body])
        res.json(_.pick(data[0], ['email', 'name', 'id', 'dataCreated']))
    }
    catch (err) {
        res.json("err", err)
    }
})

router.put('/adit', (req, res) => {
    let validbody = validPass(req.body)
    if (validbody.error) {
        return res.json(validbody.error.details);
    }
    userModel.updateOne({ _id: req.body._id }, req.body)
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json(err)
        })
})

router.delete('/dal/:dalit', (req, res) => {
    let idDal = req.params.idDal
    userModel.deleteOne({ _id: idDal })
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json(err)
        })
})

module.exports = router;