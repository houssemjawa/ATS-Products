var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Review = new Schema({
  raiting : {
    type : Number
  }
  content : {
    type : String
  }
});
module.exports = mongoose.model('Product',Product);
