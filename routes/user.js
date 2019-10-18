const express = require('express');

var router = express.Router();

router.get('/americanAdoptionPage', (req,res)=>{
    res.render('americanAdoptionPage', {
        title : 'American Adoption Page',
        style : 'userStyle.css',
        script : 'userScript.js'
    });
});

router.get('/englishAdoptionPage', (req,res)=>{
    res.render('englishAdoptionPage',{
        title : 'English Adoption Page',
        style : 'userStyle.css',
        script : 'userScript.js'
    });
});

router.get('/germanAdoptionPage',(req,res)=>{
    res.render('germanAdoptionPage',{
        title : 'German Adoption Adoption Page',
        style : 'userStyle.css',
        script : 'userScript.js'
    });
});

module.exports = router;
