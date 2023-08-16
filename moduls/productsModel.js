const express = require('express');
const joi = require('joi');
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const productsSchema = new mongoose.Schema({
    name: String,
    price: Number,
    id: String,
    Description: String,
    img:String,
    deadline:String,
    category:String,
    dataCreated: {
        type: Date,
        default: Date.now()
    }
});

exports.productsModel = mongoose.model('products',productsSchema)


exports.validUser = (userbody) =>{
    let schema = joi.object({
     id:joi.any(),
     name:joi.string().min(2).max(100).required(),
     id:joi.string().min(2).max(100).required(),
     price:joi.number().min(2).max(100).required(),
     category:joi.string().min(2).max(100).required()            
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
