var mongoose = require('mongoose')

var schema = new mongoose.Schema({
    title: { type: String, required: true },
    price: { type: Number, required: true },
    contact: { type: String, required: true },
    condition: { type: String, enum: ['New', 'Like New', 'Battle Worn', 'Used'], default: 'Used' },
    location: { type: String },
    description: { type: String },
    img: { type: String, default: '//placehold.it/200x200'}
});

module.exports = mongoose.model('Book', schema);