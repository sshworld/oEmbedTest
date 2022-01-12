var express = require('express');
var router = express.Router();
const mainController = require('../controllers/mainController')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { pages: 'main/main' });
});

/* GET Search Data  */
router.get('/search', mainController.searchData);

module.exports = router;