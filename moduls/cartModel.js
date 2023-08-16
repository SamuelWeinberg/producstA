const express = require('express');
const joi = require('joi');
const mongoose = require('mongoose')


const cartSchema = new mongoose.Schema({
    productId: String,
    userId: String,
    quantity: Number,
});

exports.cartModel = mongoose.model('cartusers',cartSchema)


exports.validUser = (userbody) =>{
    let schema = joi.object({
     productId: joi.string().min(1).max(100).required(),
     userId: joi.string().required(), 
     quantity: joi.number()         
    })
    return schema.validate(userbody)
}