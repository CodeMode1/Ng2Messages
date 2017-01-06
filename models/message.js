var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require('../models/user');

var schema = new Schema({
    content: {type: String, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User'}
});

//middleware in mongoose
//after a model with this schema gets removed, the function will be exec
schema.post('remove', function(doc){
    var deletedMessage = doc;
    //doc.user gets the user id because in the message schema user is a foreign key field pointing to User model
    User.findById(doc.user, function(err, doc){
        //when using ref mongoose recognizes foreign key : deletedMessage is an id not a full message
        doc.messages.pull(deletedMessage);
        //save the user : again when user exists not creating a copy but updating it
        doc.save();
        //all relations between message and user are deleted (delete the foreign key in child)
    });
});

module.exports = mongoose.model('Message', schema);