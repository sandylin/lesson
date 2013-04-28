var express = require('express'),
    app = module.exports = express();

app.configure(function()  {
    app.set('view engine', 'jade');
    app.set('views', __dirname + '/views');
});

var list = function list(req,res){
    res.render('index');
};

app.get('/products', list);
