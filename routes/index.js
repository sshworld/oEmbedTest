var express = require('express');
var router = express.Router();
const url = require('url')
const oembed = require('oembed-auto')
const provider = require('../provider.json')

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(provider)
  res.render('index', {pages : 'main/main'});
});

/* GET Search Data  */
router.post('/', function(req, res) {
  // console.log(req.body)
  // const urlStr = req.body.url;

  // const urlObj = url.parse(urlStr, true);

  // console.log(urlObj.hostname + '/oembed?url=' + urlObj.href + '&format=json')

  console.log(req.body)
  

  res.render('index', {pages : 'main/main', oEmbedInfo : 'dd'})
});

module.exports = router;
