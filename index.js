const express = require('express');
const app = express();
const { parseScrapper} = require('./Scrapper');
const bodyParser = require('body-parser');


// app.get('/start-scrapping', parseScrapper);

app.get('/start-scrapping', function (req, res) {
    parseScrapper()
    res.send('hello world')
  })

app.listen(3001,function(){
    console.log("server runing 3001 port")
})


