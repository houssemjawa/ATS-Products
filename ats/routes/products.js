var Client = require('node-rest-client').Client;
var client = new Client();
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Product = require('../models/product');
router.get('/test',function(req,res){
      //get products list
  client.get("http://internal.ats-digital.com:3066/api/products", function (data, response) {
      //res.send(data);
      //save products in database
      Product.insertMany(data,function(error,result){
        if(error){
          console.log(error);
        }
        else{
          console.log(result);
        }
      })
      res.send(data);
});

});

router.get('/list',function(req,res){
  Product.find(function(err,products){
        if (err){
            res.send(err);
        }
        console.log(products);
        res.json(products);

    });
})
module.exports = router;
