var express = require('express'),
    app = express(),
    product = require(__dirname + '/lib/product'),
    news = require(__dirname + '/lib/news');

app.use(product);
app.use(news);

app.listen(6060);
