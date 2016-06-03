var express = require('express'),
    mongoose = require('mongoose'),
    logger = require('morgan'),
    bodyParser= require('body-parser'),
    app = express(),
    port = process.env.PORT || 8080,
    apiRoutes = require('./routes')

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(express.static(__dirname+'/public'))
    app.use(logger("dev"))
    app.use('/api', apiRoutes)

mongoose.connect('mongodb://localhost/Digiserver')

    app.listen(port)
