var express = require('express');
//require imports a module

var router = express.Router();
var jwt = require('jsonwebtoken');

var Message = require('../models/message');
var User = require('../models/user');

//set up the routes for the /message path 
// exec to chain methods

//getting messages
router.get('/', function(req, res, next){
    Message.find()
        //get user data associated with the user id(user) (fetch in the db),specify the data(firstname) to not return full user object(returns user id by default)
        .populate('user', 'firstName')
        .exec(function(err, docs){
            if(err){
                return res.status(404).json({
                    title: 'An error occured',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Success',
                obj: docs
            });
        });
});

//Middleware in express
//how to protect creating, editing, deleting routes :
//requests travel top to bottom, use: 
//middleware -> check if a user is logged in by checking the validity of the token (created by the server and stored on client side when signing up user)
//if valid : next() to leave the middleware , the other routes : creating, editing, deleting can be reached 
router.use('/', function(req, res, next){
    jwt.verify(req.query.token, 'secret', function(err, decoded){
        if(err){
            return res.status(401).json({
                title: 'Authentification failed',
                error: err
            });
        }
        //leave the middleware and travel to the other routes
        next();
    });
});

//creating (saving) messages
router.post('/', function(req, res, next){
    //check the validity of the token before decoding it
    var decoded = jwt.decode(req.query.token);
    //dont need to check if user exists in db by comparing id of token& id of db because app doesnt have functionality to delete user 
    // and so if we verified the token, the user is logged in and exists. when user logges out token is deleted
    User.findById(decoded.user._id, function(err, doc){
        if(err){
            return res.status(404).json({
                title: 'An error occured',
                error: err
            });
        }
        //once we got the user
        var message = new Message({
            content: req.body.content,
            // mongoose sets doc as the foreign key so its just an id saved in the db
            // the result returned is a full user though thats why can access user field on client side (doc.user.firstName)
            // : is a problem for the get request because the db will return ids but we want the full user to display it (with exec method)
            // using doc (just the id) or doc._id sets the foreign 
            user: doc
        });
        message.save(function(err, result){
            if(err){
                return res.status(404).json({
                    title: 'An error occured',
                    error: err
                });
            }
            //saves this message to the array of messages the user has (user.messages.push(re))
            doc.messages.push(result);
            //update the user
            doc.save();
            res.status(201).json({
                message: 'Saved message',
                obj: result
            });
        });
    });
});

//editing messages
router.patch('/:id', function(req, res, next){
    var decoded = jwt.decode(req.query.token);
    Message.findById(req.params.id, function(err, doc){
         if(err){
            return res.status(404).json({
                title: 'An error occured',
                error: err
            });
        }
         if(!doc){
            return res.status(404).json({
                title: 'No message found',
                error: {message: 'Message could not be found'}
            });
        }
        // to edit a message the id of the logged in user has to be the id of the message (creator)
        if(doc.user != decoded.user._id){
            //if the foreign key user is not the id of the user token than un authorize
            return res.status(401).json({
                    title: 'un authorized',
                    error: {message: 'message created by other user'}
                });
        }
        doc.content = req.body.content;
        //not creating a new doc but overiding the old one when calling save on an existing doc
        doc.save(function(err, result){
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
    })
});

//delete route 
router.delete('/:id', function(req, res, next){
    var decoded = jwt.decode(req.query.token);
    Message.findById(req.params.id, function(err, doc){
         if(err){
            return res.status(404).json({
                title: 'An error occured',
                error: err
            });
        }
         if(!doc){
            return res.status(404).json({
                title: 'No message found',
                error: {message: 'Message could not be found'}
            });
        }
        doc.remove(function(err, result){
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
    })
});


//export the router so the routes are available outside of this file
module.exports = router;