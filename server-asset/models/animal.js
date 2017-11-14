var mongoose = require('mongoose')

var schema = new mongoose.Schema({
    title: { type: String, required: true },
    type: { type: String },
    breed: { type: String },
    age: { type: Number },
    location: { type: String },
    price: { type: Number, requred: true },
    contact: { type: String, required: true },
    img: { type: String, default: '//placehold.it/200x200' },
    description: { type: String }

});

module.exports = mongoose.model('Animal', schema);