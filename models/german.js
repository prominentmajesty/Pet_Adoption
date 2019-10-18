const mongoose = require('mongoose');

var germanSchema = mongoose.Schema({
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

module.exports = GermanModel = mongoose.model('GermanModel', germanSchema);
