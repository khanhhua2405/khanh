var express = require('express');
var router = express.Router();
/////-----------------------------------
router.use(function timeLog (req, res, next) {
	console.log('\n\t REPORTA controller - Time: ', Date().toString());
	next();
})
router.get( '/', reportPage );
function reportPage(req, res) {
	res.render(" Report controller !!! ");
}

/// --- EXports
module.exports = router;