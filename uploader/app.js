var express = require('express'),
    uploader = require(__dirname+'/lib/uploader'),
    app = express();

app.configure(function(){
    app.use(uploader);
});

app.listen(3200);