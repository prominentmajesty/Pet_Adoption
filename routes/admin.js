var express = require('express');

var router = express.Router();

router.get('/adminDashBord',function(req,res){
    res.render('adminDashBord',{
        tilte : 'Admin Dashboard',
        style : 'adminCss.css',
        script : 'adminScript.js'
    });
});

router.get('/adminGermanUpload',function(req,res){
    res.render('adminGermanUpload', {
        tilte : 'upload page',
        style : 'adminCss.css',
        script : 'adminScript.js'
    });
});

router.get('/adminAmericanUpload', function(req,res){
    res.render('adminAmericanUpload', { 
        title : 'American Upload Page',
        style : 'adminCss.css',
        script : 'adminScript.js'
    });
});

router.get('/adminEnglishUpload', function(req,res){
    res.render('adminEnglishUpload',{
        title : 'English Upload Page',
        style : 'adminCss.css',
        script : 'adminScript.js'
    });
});

router.get('/adminViewProfilePage', function(req,res){
    res.render('/adminViewProfilePage', {
        title : 'Profile Page',
        style : 'adminCss.css',
        script : 'adminScript.js'
    });
});


module.exports = router;