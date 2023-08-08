const express = require('express');
const joi = require('joi');
const mongoose = require('mongoose')


const cartSchema = new mongoose.Schema({
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

exports.cartModel = mongoose.model('cartUsers',cartSchema)


exports.validUser = (userbody) =>{
    let schema = joi.object({
     _id:joi.any(),
     name:joi.string().min(2).max(100).required(),
     id:joi.string().min(1).max(100).required(),
     price:joi.number().min(2).required(),
     category:joi.string().min(2).max(100).required(),
     deadline:joi.string().required(),
     Description:joi.string().required(),
     img:joi.string().required(),  
     dataCreated:joi.string()          
    })
    return schema.validate(userbody)
}