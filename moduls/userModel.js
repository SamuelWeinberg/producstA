const express = require('express');
const joi = require('joi');
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')


const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    pass: String,
    role: String,
    dataCreated: {
        type: Date,
        default: Date.now()
    }
});

exports.userModel = mongoose.model('users',userSchema)
exports.creatTokn = (email,_id) => {
    let nweToken = jwt.sign({email:email,_id:_id},"samuel12",{expiresIn:'60mins'})
    return nweToken
}

exports.validUser = (userbody) =>{
    let schema = joi.object({
     id:joi.any(),
     name:joi.string().min(2).max(100).required(),
     email:joi.string().min(2).max(100).email().required(),
     pass:joi.string().min(2).max(100).required(),
     role:joi.string().min(2).max(100).required()            
    })
    return schema.validate(userbody)
}

exports.validLogainUser = (userbody) =>{
    let schema = joi.object({
     email:joi.string().min(2).max(100).email().required(),
     pass:joi.string().min(2).max(100).required()
    })
    return schema.validate(userbody)
}
