const express = require('express');
const joi = require('joi');
const mongoose = require('mongoose')


const cartSchema = new mongoose.Schema({
    name: String,
    id: String,
    userId:String,
    amount:Number,
    dataCreated: {
        type: Date,
        default: Date.now()
    }
});

exports.cartModel = mongoose.model('cartUsers',cartSchema)


exports.validUser = (userbody) =>{
    let schema = joi.object({
     name:joi.string().min(2).max(100).required(),
     id:joi.string().min(1).max(100).required(),
     userId:joi.string().required(), 
     amount:joi.number()         
    })
    return schema.validate(userbody)
}