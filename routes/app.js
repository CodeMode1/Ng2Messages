var express = require('express');
var router = express.Router();
var User = require('../models/user');

/*
router.get('/:userTitle?', function(req, res, next) {
    res.render('node', {title: req.params.userTitle ? req.params.userTitle : ''});
});
*/

router.get('/', function(req, res, next) {
    res.render('index');
    /*
    var email = '';
    User.findOne({}, function(err, doc){
        if(err){
            return res.send('Error');
        }
        if(doc){
            email = doc.email;
        } 
        res.render('node', {email: email});
    });
    */
});

/*
router.post('/', function(req, res, next){
    var email = req.body.email;
    var user = new User({
        firstName: 'Daph',
        lastName: 'dargic-C',
        password: 'super-secret',
        email: email
    });
    user.save();
    res.redirect('/');
});
*/

module.exports = router;
