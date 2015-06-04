# exchange-rates-lafise
Tipo de Cambio del Banco Lafise (https://www.lafise.com/blb/Home.aspx)

## Install

    npm i exchange-rates-lafise

## Example

    var ExchangeRate = require('exchange-rates-lafise');
    var exchangeRate = new ExchangeRate();

    exchangeRate.get(function(err, result) {
      console.log(result)
    });

## Response

    {
      usd: {
        buy: 26.92,
        sale: 27.35
      },
      eur: {
        buy: 29.1445,
        sale: 31.3167
      }
    }
