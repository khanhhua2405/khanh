/* ///
/// B1. Create "project"
/// 	npm  init  -y
/// B2. INSTALL
/// 	npm install express  body-parser  cookie-parser multer ejs mongodb mongoose  express-session cookie-session qrcode  qrcode-svg  --save
/// B3. RUN - server
/// 	node   index.js
*/// 	

/// ................................................................
/// 					 Khai báo LIB Thêm Vào để sử dụng
/// ................................................................
var express = require('express');
var router = express.Router();
var path = require('path');
var app = express();

/// ................................................................
/// 					 		Engine EJS
/// ................................................................
app.set('views', path.join( __dirname, 'views'));
app.set('view engine', 'ejs');


/// ................................................................
/// 					 		Config
/// ................................................................
/// Tham số
const PORT = process.env.PORT || 3000;
/// ------------------ Khai bao cac Folder Tĩnh, Session, Cookies
app.use(express.static('public'));


/// ................................................................
/// 						ROUTer - ROUTing
/// ................................................................
/*--- Home ---*/
var homeControl = require('./controllers/homeController');
app.get( '/', homeControl );
/*--- Admin ---*/
var adminControl = require('./controllers/adminController');
app.use('/admin', adminControl );
/*--- Product ---*/
var productControl = require('./controllers/productController');
app.use('/product', productControl );
/*--- Order ---*/
var orderControl = require('./controllers/orderController');
app.use('/order', orderControl );
/*--- Report ---*/
var reportControl = require('./controllers/reportController');
app.use('/report', reportControl );
/*--- User ---*/
var userControl = require('./controllers/userController');
app.use('/user', userControl );
/// ................................................................
/// 						RUNNING SERVER
/// ................................................................

app.listen( PORT, 
    () => {
        console.log("\n\n--------- Server running ! PORT: ", PORT);
    }
);

