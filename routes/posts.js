/**
 * Created by alexfeng on 2/2/15.
 */
var passport = require('passport');
var User = require('../models/users');
var Post = require('../models/posts');
var router = require('express').Router();

router.post('/create_post',function(req,res){
    new Post({
        title:req.body.title,
        content:req.body.content,
        author:req.body.author
    }).save();

    res.status(200).json({message:'Post Added'});
});

router.post('/get_posts',function(req,res){
    if(req.body.type === 'admin'){
        Post.find({},function(err,result){
            res.status(200).json(result);
        })
    }else{
        Post.find({'author':req.body.username},function(err,result){
            res.status(200).json(result);
        });
    }
});

router.post('/delete_post',function(req,res){
    Post.find()
})