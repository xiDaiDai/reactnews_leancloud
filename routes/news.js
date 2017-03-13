'use strict';
var router = require('express').Router();
var request = require('request');

router.get('/:type', function(req, res) {
  request({
  method: 'GET',
  url: 'http://v.juhe.cn/toutiao/index?type='+req.params.type+'&key=9bdda90bacc90d5425b2d59352bc909d',
  }, function(err, response, body) {
    if (err) {
      console.error('Request failed with response code ' + res.statusCode);
    } else {
     // res.(JSON.parse(body));
     res.json(JSON.parse(body));
   }
  });
});

module.exports = router;
