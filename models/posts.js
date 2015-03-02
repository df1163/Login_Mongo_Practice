/**
 * Created by alexfeng on 2/2/15.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    passportLocalMongoose = require('passport-local-mongoose');

var Posts = new Schema({
    title:String,
    content: String,
    author: String
});

Posts.plugin(passportLocalMongoose);

module.exports = mongoose.model('Posts',Posts);