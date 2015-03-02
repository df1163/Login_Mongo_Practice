/**
 * Created by alexfeng on 2/2/15.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    passportLocalMongoose = require('passport-local-mongoose');

var Users = new Schema({
    user:String,
    password:String
});

Users.plugin(passportLocalMongoose);

module.exports = mongoose.model('Users',Users);