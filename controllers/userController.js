var express = require('express');
var router = express.Router();


/// --- DB CONNECTION OBJ/LIB
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var mongoose = require('mongoose');

/// --- DB Model
var User = require('../models/userModel');

/// --- DB config
var dbconfig = require('../configs/config_DB');

/// --- Code CONTROLLERs
router.use(function timeLog (req, res, next) {
    console.log('\n\t User controller - Time: ', Date().toString());
    next();
})

/// ..................................................
router.get('/', userPage);
function userPage(req, res) {
    res.render('user');
}

/// ..................................................
router.get('/list', listUserPage);
function listUserPage(req, res) {
    res.send('USER: list USER page');
}

/// ..................................................
router.get('/view', userViewPage);
function userViewPage(req, res) {

    MongoClient.connect( dbconfig.urldb, { useUnifiedTopology: true }, function(err, db) {
            if (err) throw err;
            var dbo = db.db( dbconfig.dbname );
            dbo.collection("user").find({}).toArray(function(err, userlist) {
              if (err) throw err;
              
                res.render("user-list",  {
                    title: "ATN-Shop User page", 
                    username: "",
                    users : userlist 
                    , configHeader: null , currpage: "User"
                    });
                console.log('Found:', userlist);

              db.close();
            });
          });

    console.log("\n\t ... connect USER from ", req.connection.remoteAddress, req.headers.host);
}


/// --- EXports
module.exports = router;


