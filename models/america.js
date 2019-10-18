const mongoose = require('mongoose');

var americanSchema = mongoose.Schema({
    petName : {
        type : String,
        required : true
    },
    
    petPrice : {
        type : String,
        required : true
    },

    petCategory : {
        type :String,
        required : true
    },

    petColor : {
        type : String,
        required : true
    },

    image : {
        data : Buffer,
        contentType : String
    }
});

module.exports = AmericanModel = mongoose.model('AmericanModel', americanSchema);
