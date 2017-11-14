var express = require('express')
var bp = require('body-parser')
var dbConnect = require('./config/mlab/mlab-config')
var autoRoutes = require('./server-assets/routes/auto-routes')
var animalRoutes = require('./server-asset/routes/animal-routes')
var propertyRoutes = require('./server-asset/routes/property-route')
var bookRoutes = require('./server-asset/routes/book-routes')

var server = express()
var port = 3000
// SERVES THE DEFAULT STATIC FILES

// MIDDLEWARE
server.use(express.static(__dirname + '/public'))
server.use(bp.json())
server.use(bp.urlencoded({ extended: true }))
server.use(autoRoutes)
server.use(animalRoutes)
server.use(propertyRoutes)
server.use(bookRoutes)


server.listen(port, () => {
    console.log('Server is running on port, ', port)
})