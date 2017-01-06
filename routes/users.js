var express = require('express');
var router = express.Router();
var passwordHash = require('password-hash');
var jwt = require('jsonwebtoken');

var User = require('../models/user');

//defining the routes
//new package to install to encrypt string(password) : npm install --save password-hash
// --save to save it to dev dependencies in package.json

//creating user, sign-up
router.post('/', function(req, res, next){
    var user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: passwordHash.generate(req.body.password),
        email: req.body.email
    });
    user.save(function(err, result){
       if(err){
           return res.status(404).json({
            title: 'An error occured',
            error: err
            });
        }
        res.status(201).json({
            message: 'success',
            obj: result
        }); 
    });
});

router.post('/signin', function(req, res, next){
    //server sends token to client if :  user is found by email and the entered password is valid (same in db)
    //client will use this token for future requests
    User.findOne({email: req.body.email}, function(err, doc){
        if(err){
            return res.status(404).json({
                title: 'An error occured',
                error: err
            });
        }
        if(!doc){
            return res.status(404).json({
                title: 'no user found',
                error: {message: 'User could not be found'}
            });
        }
        if(!passwordHash.verify(req.body.password, doc.password)){
           return res.status(404).json({
                title: 'Could not sign you in',
                error: {message: 'invalid password'}
            });
        }
        //generate a token and return it to the client (using a 3rd party package to generate encrypted token : jsonwebtoken) npm install --save jsonwebtoken
        //define valid duration, payload 
        // first arg: payload => what we want to send (user) sec arg: key to check validity of token client side
        var token = jwt.sign({user: doc}, 'secret', {expiresIn: 7200});
        res.status(200).json({
            message: 'Success',
            token: token,
            userId: doc._id
        });
    });
});

//note: in real app, encript on client & server side  (SSL)

//export the router to make these routes available outside this file 
module.exports = router;