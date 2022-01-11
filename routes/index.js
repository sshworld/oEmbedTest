var express = require('express');
var router = express.Router();
const url = require('url')
const oembed = require('oembed-auto')
const provider = require('../provider.json');
const request = require('request')

let providerUrl = []
for(var a of provider) {
  providerUrl.push(a.endpoints[0].url)
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {pages : 'main/main'});
});

/* GET Search Data  */
router.get('/search', function(req, res) {

  const urlStr = url.parse(req.query.url, true);
  let str = ''
  let oembedUrl = ''
  let hostname = urlStr.hostname.split('.')
  hostname = hostname[hostname.length - 2]
  for(var host of providerUrl) {
    if(host.includes(hostname)) {
      str = host;
      break;
    }
  }

  if (str.includes("oembed.")) {
    str = str.replace("{format}", "json");
    oembedUrl = str + "?url=" + urlStr.href
  } else {
    oembedUrl = str + '?format=json&url=' + urlStr.href
  }
  
  request(oembedUrl, (err, response, body) => {
    var json = JSON.parse(body)
    res.send(json)
  })
  
});

module.exports = router;
