var request = require('request');
var cheerio = require('cheerio');
var map = require('./map');

var ExchangeRate = function() {

};

ExchangeRate.prototype.get = function(callback) {
  var self = this;

  var options = {
    url: 'https://www.lafise.com/blb/Home.aspx',
    headers: {
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.81 Safari/537.36'
    }
  };


  request.get(options, function(err, httpResponse, body) {
    if (err) {
      callback(err, null);
    }
    else {
      $ = cheerio.load(body);

      var result = {
        usd: {
          buy: '',
          sale: ''
        },
        eur: {
          buy: '',
          sale: ''
        }
      };

      result.usd.buy = parseFloat($(map.usd.buy).text());
      result.usd.sale = parseFloat($(map.usd.sale).text());

      result.eur.buy = parseFloat($(map.eur.buy).text());
      result.eur.sale = parseFloat($(map.eur.sale).text());

      callback(null, result);
    }
  });
};

module.exports = ExchangeRate;
