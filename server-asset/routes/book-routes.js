var Books = require('../models/book')
var router = require('express').Router()

router.get('/api/books', (req, res, next) => {
    
    Books.find({})
        .then(books => res.send(books))
        .catch(err => res.status(400).send(err))
})

router.get('/api/books/:id', (req, res, next) => {
    Books.findById(req.params.id)
        .then(book => res.send(book))
        .catch(err => res.status(400).send(err))
})

//CREATES NEW BOOK
router.post('/api/books', (req, res, next) => {
    Books.create(req.body)
        .then(book => res.send(book))
        .catch(err => res.status(400).send(err))
})

router.delete('/api/books/:id', (req, res, next) => {
    Books.findByIdAndRemove(req.params.id)
        .then((book) => {
            res.send({ message: 'Successfully removed book at ' + req.params.id })
        })
        .catch(err => res.status(400).send(err))
})


module.exports = router