var express = require('express'),
    fs = require('fs'),
    app = module.exports = express();


app.configure(function() {
    app.set('view engine', 'jade');
    app.set('views', __dirname + '/views');
    app.use(express.bodyParser());
    app.use(express.static(__dirname + '/../../media'));
});

app.get('/', function(req, res) {
    
    fs.readdir(__dirname + '/../../media/',function(err,data){
        res.render('index',{images:data,path:__dirname + '/../../media/'});
    });
});

app.post('/upload', function(req, res) {
    
    fs.readFile(req.files.image.path, function(err, data) {
        var newPath = __dirname + '/../../media/'+req.files.image.name;
        fs.writeFile(newPath, data, function(err) {
            res.send('ok ' + req.files.image.path + ' has been uploaded');
        });
    });

});


