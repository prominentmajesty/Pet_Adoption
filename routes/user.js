const express = require('express');
var AmericanModel = require('../models/america');
var EnglishModel = require('../models/english');
var GermanModel = require('../models/german');
var  User = require('../models/users'); 

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
router.post('/americanForm', (req,res)=>{
        var nameOfAdoptor = req.body.nameOfAdoptor;
        var petColor = req.body.petColor;
        var nameOfPet = req.body.nameOfPet;
        var emailOfAdoptor = req.body.emailOfAdoptor;
        var phoneNumber = req.body.phoneNumber;
        var petID = req.body.petID;
        var petPrice = req.body.petPrice;
        var enterYourBank = req.body.enterYourBank;
        var enterYourCardNumber = req.body.enterYourCardNumber;

        req.checkBody('nameOfAdoptor','Name Of Adoptor TextField Is Empty').notEmpty();
        req.checkBody('petColor','Pet Color Text Field Is Empty').notEmpty();
        req.checkBody('nameOfPet','Name Of Pet TextField Is Empty').notEmpty();
        req.checkBody('emailOfAdoptor', 'Email Of Adoptor Text Field Is Empty').notEmpty();
        req.checkBody('phoneNumber','Phone Number Text Field Is Empty').notEmpty();
        req.checkBody('petID','Pet ID Text Field Is Empty').notEmpty();
        req.checkBody('petPrice','Pet Price Text Field Is Empty').notEmpty();
        req.checkBody('enterYourBank', 'Bank Name Text Field Text Is Empty').notEmpty();
        req.checkBody('enterYourCardNumber','Cad Number Text Field Is Empty').notEmpty();

        let err = req.validationErrors();
        if(err){
            req.session.errors = err;
          return res.render('americanFormPage',{
                title : 'American Form Page',
                style : 'userStyle.css',
                script : 'userScript',
                err: req.session.errors
            });
        }
       let user = new User({
           nameOfAdoptor : nameOfAdoptor,
           petColor : petColor,
           nameOfPet : nameOfPet,
           emailOfAdoptor : emailOfAdoptor,
           phoneNumber : phoneNumber,
           petID : petID,
           petPrice : petPrice,
           bankName : enterYourBank,
           cardNumber : enterYourCardNumber
       });
      user.save().then((doc)=>{
          req.flash('success_msg','submitted successfuly');
          res.redirect('/user/americanFormPage')
      })
      .catch((err)=>{
        console.log(err)
      });
    });

    router.post('/englishForm', (req,res)=>{
        var nameOfAdoptor = req.body.nameOfAdoptor;
        var petColor = req.body.petColor;
        var nameOfPet = req.body.nameOfPet;
        var emailOfAdoptor = req.body.emailOfAdoptor;
        var phoneNumber = req.body.phoneNumber;
        var petID = req.body.petID;
        var petPrice = req.body.petPrice;
        var enterYourBank = req.body.enterYourBank;
        var enterYourCardNumber = req.body.enterYourCardNumber;

        req.checkBody('nameOfAdoptor','Name Of Adoptor TextField Is Empty').notEmpty();
        req.checkBody('petColor','Pet Color Text Field Is Empty').notEmpty();
        req.checkBody('nameOfPet','Name Of Pet TextField Is Empty').notEmpty();
        req.checkBody('emailOfAdoptor', 'Email Of Adoptor Text Field Is Empty').notEmpty();
        req.checkBody('phoneNumber','Phone Number Text Field Is Empty').notEmpty();
        req.checkBody('petID','Pet ID Text Field Is Empty').notEmpty();
        req.checkBody('petPrice','Pet Price Text Field Is Empty').notEmpty();
        req.checkBody('enterYourBank', 'Bank Name Text Field Text Is Empty').notEmpty();
        req.checkBody('enterYourCardNumber','Cad Number Text Field Is Empty').notEmpty();

        let err = req.validationErrors();
        if(err){
            req.session.errors = err;
          return res.render('englishFormPage',{
                title : 'American Form Page',
                style : 'userStyle.css',
                script : 'userScript',
                err: req.session.errors
            });
        }
       let user = new User({
           nameOfAdoptor : nameOfAdoptor,
           petColor : petColor,
           nameOfPet : nameOfPet,
           emailOfAdoptor : emailOfAdoptor,
           phoneNumber : phoneNumber,
           petID : petID,
           petPrice : petPrice,
           bankName : enterYourBank,
           cardNumber : enterYourCardNumber
       });
       user.save((err,doc)=>{
           if(err){
               return console.log(err);
           }
           req.flash('success_msg','Pet Adoption Was Successful');
           res.redirect('/user/englishFormPage');
       });
    });

    router.post('/germanForm', (req,res)=>{
        var nameOfAdoptor = req.body.nameOfAdoptor;
        var petColor = req.body.petColor;
        var nameOfPet = req.body.nameOfPet;
        var emailOfAdoptor = req.body.emailOfAdoptor;
        var phoneNumber = req.body.phoneNumber;
        var petID = req.body.petID;
        var petPrice = req.body.petPrice;
        var enterYourBank = req.body.enterYourBank;
        var enterYourCardNumber = req.body.enterYourCardNumber;

        req.checkBody('nameOfAdoptor','Name Of Adoptor TextField Is Empty').notEmpty();
        req.checkBody('petColor','Pet Color Text Field Is Empty').notEmpty();
        req.checkBody('nameOfPet','Name Of Pet TextField Is Empty').notEmpty();
        req.checkBody('emailOfAdoptor', 'Email Of Adoptor Text Field Is Empty').notEmpty();
        req.checkBody('phoneNumber','Phone Number Text Field Is Empty').notEmpty();
        req.checkBody('petID','Pet ID Text Field Is Empty').notEmpty();
        req.checkBody('petPrice','Pet Price Text Field Is Empty').notEmpty();
        req.checkBody('enterYourBank', 'Bank Name Text Field Text Is Empty').notEmpty();
        req.checkBody('enterYourCardNumber','Cad Number Text Field Is Empty').notEmpty();
        let err = req.validationErrors();
        
        if(err){
            req.session.errors = err;
          return res.render('germanFormPage',{
                title : 'American Form Page',
                style : 'userStyle.css',
                script : 'userScript',
                err: req.session.errors
            });
        }
       let user = new User({
           nameOfAdoptor : nameOfAdoptor,
           petColor : petColor,
           nameOfPet : nameOfPet,
           emailOfAdoptor : emailOfAdoptor,
           phoneNumber : phoneNumber,
           petID : petID,
           petPrice : petPrice,
           bankName : enterYourBank,
           cardNumber : enterYourCardNumber
       });
       user.save((err,doc)=>{
           if(err){
               return console.log(err);
           }
           req.flash('success_msg','Pet Adoption Was Successful');
           res.redirect('/user/germanFormPage');
       });
    });
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
