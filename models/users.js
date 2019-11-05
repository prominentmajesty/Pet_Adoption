const mongoose = require('mongoose');
const moment = require('moment');

var userSchema = mongoose.Schema({
    nameOfAdoptor : {
        type : String,
        required : true 
    },

    petColor : {
        type : String,
        required : true
    },

    nameOfPet : {
        type :String,
        required : true
    },

    emailOfAdoptor : {
        type : String,
        required : true
    },

    phoneNumber : {
        type : String,
        required : true
    },

    petID : {
        type : String,
        required : true
    },

    petPrice : {
        type : String,
        required : true
    },

    bankName : {
        type : String,
        required : true,
    },

    cardNumber : {
        type : String,
        required : true
    },

     dateOfAdoption : {
        type: String,
        default: moment().format('MMMM Do YYYY')
    },
});

module.exports = User = mongoose.model('User', userSchema);
