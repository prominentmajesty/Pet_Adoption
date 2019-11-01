const express = require('express');
const GermanModel = require('../models/german');
const AmericanModel = require ('../models/america');
const EnglishModel = require('../models/english');

var router = express.Router();

router.get('/', (req, res)=>{
        GermanModel.find({}, {}, {limit : 1, sort : {petName : -1}}, (err, doc1)=>{
                if(err){
                   console.log(err);
                }else{
                   AmericanModel.find({}, {}, {limit : 1, sort : {petName : -1}}, (err,doc2)=>{
                        if(err){
                            console.log(err);
                        }else{
                           EnglishModel.find({}, {}, {limit : 1, sort : {petName : -1}}, (err, doc3)=>{
                                   if (err) {
                                           return console.log(err);
                                   }
                                res.render('index',{
                                        title : 'Home',
                                        style : 'index.css',
                                        script : 'index.js',
                                        doc1,
                                        doc2,
                                        doc3
                                });
                           }); 
                        }
                   });   
                }
            });
        });
module.exports = router;