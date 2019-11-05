var express = require('express');
var GermanModel = require('../models/german');
var AmericanModel = require('../models/america');
var EnglishModel = require('../models/english');
var User = require('../models/users');
var multer = require('multer');
var fs = require('fs');
const base64ArrayBuffer = require('../utils/base64ArrayBuffer');
var router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './public/uploads');
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname);
    }
});

const upload = multer({
    storage
});

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
    res.render('adminViewProfilePage', {
        title : 'Profile Page',
        style : 'adminCss.css',
        script : 'adminScript.js'
    });
});

router.post('/profileTextField', (req, res)=>{
    let profileTextField = req.body.profileTextField;
    req.checkBody('profileTextField','Profile Text Field Should Not Be Empty').notEmpty();
    var errHolder = req.validationErrors();
    if(errHolder){
        req.session.errors = errHolder;
      return res.render('adminViewProfilePage',{
            title : 'Admin View Profile',
            styles : 'adminCss.css',
            script : 'adminScript.js',
            err : req.session.errors
        });
    }
    User.find({_id : profileTextField}, (err, result)=>{
            if(err){
                console.log(err);
                return res.status(500).send(err);
            }
            res.render('adminViewProfilePage',{
                    title : "Profile",
                    style : 'adminCss.css',
                    script : 'adminScript.js',
                    result
            });
        });
    });

router.post('/adminaAmericanPost',upload.single('americanPetImage'), (req, res)=>{
    
    var file = req.file;
    var petName = req.body.americanPetName;
    var petPrice = req.body.americanPetPrice;
    var petCategory = req.body.americanPetCategory;
    var petColor = req.body.americanPetColor;

    req.checkBody('americanPetName', 'Pet Name TextField is Empty').notEmpty();
    req.checkBody('americanPetPrice', 'Pet Price Text Field Is Empty').notEmpty();
    req.checkBody('americanPetCategory', 'Pet Category Text Field Is Empty').notEmpty();
    req.checkBody('americanPetColor', 'Pet Color Text Field Is Empty').notEmpty();

    let err = req.validationErrors();
    if(err){
        req.session.errors = err;
        res.render('adminAmericanUpload', {
                    style : 'adminCss.css',
                    script : 'adminScript.js',
                    err : req.session.errors
        });
    }else if(file === undefined){
        res.render('adminAmericanUpload', { 
            style : 'adminCss.css',
            script : 'adminScript.js',
            fileError : 'No file Selected !!! Select  A file'
        });
    }else{
        
        let americanModel = new AmericanModel({
            petName : petName,
            petPrice : petPrice,
            petCategory : petCategory,
            petColor : petColor
        });

        americanModel.image.data = fs.readFileSync(file.path);
        americanModel.save().then((doc)=>{
                fs.unlink(file.path,(err)=>{
                     if(err)
                         throw err;
                });
                 req.flash('success_msg', 'Information successfully uploaded');
                 res.redirect('/admin/adminAmericanUpload');  

        },(err)=>{
            console.log(err);
        });
    }
});

router.post('/adminEnglishPost', upload.single('englishPetImage'), (req, res)=>{
        let file = req.file;
        let englishPetName = req.body.englishPetName;
        let englishPetPrice = req.body.englishPetPrice;
        let englishPetCategory = req.body.englishPetCategory;
        let englishPetColor = req.body.englishPetColor;

        req.checkBody('englishPetName','Pet Name Is Empty!!! Type A Value').notEmpty();
        req.checkBody('englishPetPrice','Pet Price Is Empty!!! Type A Value').notEmpty();
        req.checkBody('englishPetCategory','Pet Category Is Empty!!! Type A Value').notEmpty();
        req.checkBody('englishPetColor','Pet Color Is Empty!!! Type A Value').notEmpty();

        let err = req.validationErrors();
        if(err){
            req.session.errors = err;
            res.render('adminEnglishUpload',{
                style : 'adminCss.css',
                script : 'adminScript.js',
                err : req.session.errors
            });
        }else if(file === undefined){
            res.render('adminEnglishUpload',{
                style : 'adminCss.css',
                script : 'adminScript.js',
                fileError : 'No File Selected !!! Select A File'
            });
        }else{
           let englishModel = new EnglishModel({
                petName : englishPetName,
                petPrice : englishPetPrice,
                petCategory : englishPetCategory,
                petColor : englishPetColor
           });
           englishModel.image.data = fs.readFileSync(file.path);
           englishModel.save((err, doc)=>{
                    if(err){
                        return console.log(err);
                    }
                fs.unlink(file.path,(err)=>{
                        if(err)
                        throw err;
                }); 
                req.flash('success_msg', 'Information succesfully uploaded');
                res.redirect('/admin/adminEnglishUpload');            
           });
        }
        
});

router.post('/adminGermanPost',  upload.single('germanPetImage'), (req, res)=>{
    let file = req.file;
    let germanPetName = req.body.germanPetName;
    let germanPetPrice = req.body.germanPetPrice;
    let germanPetCategory = req.body.germanPetCategory;
    let germanPetColor = req.body.germanPetColor;

    req.checkBody('germanPetName','Pet Name Is Empty!!! Type A Value').notEmpty();
    req.checkBody('germanPetPrice','Pet Price Is Empty!!! Type A Value').notEmpty();
    req.checkBody('germanPetCategory','Pet Category Is Empty!!! Type A Value').notEmpty();
    req.checkBody('germanPetColor','Pet Color Is Empty!!! Type A Value').notEmpty();

    let err = req.validationErrors();
    if(err){
        req.session.errors = err;
        res.render('adminGermanUpload',{
            style : 'adminCss.css',
            script : 'adminScript.js',
            err : req.session.errors
        });
    }else if(file === undefined){
        res.render('adminGermanUpload',{
            style : 'adminCss.css',
            script : 'adminScript.js',
            fileError : 'No File Selected !!! Select A File'
        });
    }else{
       let germanModel = new GermanModel({
            petName : germanPetName,
            petPrice : germanPetPrice,
            petCategory : germanPetCategory,
            petColor : germanPetColor
       });
       germanModel.image.data = fs.readFileSync(file.path);
       germanModel.save((err, doc)=>{
                if(err){
                    return console.log(err);
                }
            fs.unlink(file.path,(err)=>{
                    if(err)
                    throw err;
            }); 
            req.flash('success_msg', 'Information succesfully uploaded');
            res.redirect('/admin/adminGermanUpload');            
       });
    }
    
});

module.exports = router;