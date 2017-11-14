var mongoose = require('mongoose')

var schema = new mongoose.Schema({
    title: { type: String, required: true },
    type: { type: String },
    address: { type: String },
    squarefootage: { type: Number },
    location: { type: String },
    price: { type: Number, required: true },
    contact: { type: String, required: true },
    description: { type: String },
    img: { type: String, default: '//placehold.it/200x200'}

});

module.exports = mongoose.model('Property', schema);