const express = require('express');
var AmericanModel = require('../models/america');
var EnglishModel = require('../models/english');
var GermanModel = require('../models/german');

var router = express.Router();

router.get('/americanFormPage', (req,res)=>{
    res.render('americanFormPage', {
        title : 'American Form Page',
        style : 'userStyle.css',
        script : 'userScript.js'
    });
});

router.get('/englishFormPage', (req,res)=>{
    res.render('englishFormPage',{
        title : 'English Form Page',
        style : 'userStyle.css',
        script : 'userScript.js'
    });
});

router.get('/germanFormPage',(req,res)=>{
    res.render('germanFormPage',{
        title : 'German Form Page',
        style : 'userStyle.css',
        script : 'userScript.js'
    });
});

router.get('/adoptionPage', function(req, res){
    AmericanModel.find({}, (err, doc1)=>{
        if(err){
            return console.log(err);
        }
        EnglishModel.find({}, (err,doc2)=>{
            if(err){
                return console.log(err)
            }
        GermanModel.find({}, (err, doc3)=>{
                if(err){
                    return console.log(err);
                }
                res.render('adoptionPage',{
                    title : 'Adoption Page',
                    style : 'userStyle.css',
                    script : 'userScript.js',
                    doc1,
                    doc2,
                    doc3
                });
            });
        });
    });
});
router.post('/americanAdoption')
/*router.get('/englishAdoption', function(req,res){
    EnglishModel.find({}, function(err, result1){
        if(err){
            return console.log(err);
        }
        res.render('englishAdoption', {
            title : 'English Adoption',
            style : 'userStyle.css',
            script : 'userScript.js',
            result1
        });
    });
});

router.get('/germanAdoption', function(req, res){
    GermanModel.find({}, function(err, result2){
        if(err){
            return console.log(err);
        }
        res.render('germanAdoption',{
            title : 'German Adoption',
            style : 'userStyle.css',
            script : 'userScript.js',
            result2
        });
    });
});*/



module.exports = router;
