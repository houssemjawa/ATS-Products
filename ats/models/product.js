var mongoose = require('mongoose');
var Schema = mongoose.Schema;
/*
Produit Schema
 */


var Product = new Schema({
    productName: {
        type: String
    },
    basePrice: {
        type: String
    },
    category: {
        type: String
    },
    brand: {
        type: String
    },
    productMaterial: {
        type: String
    },
    imageUrl: {
        type: String
    },
    delivery: {
        type: Date
    },
    details: {
        type: String
    },
    reviews: {
      type: Schema.Types.Mixed
    }

});
module.exports = mongoose.model('Product',Product);
