var express = require('express');
var path = require('path');
var app = new express();

var port = 3000;

/*app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.get('/home', function(req, res){
        res.render('home');
})

app.get('/about', function(req,res){
        res.render('about');
})
app.get('/contact', function(req,res){
        res.render('contact');
})
*/

app.use(express.static(path.join(__dirname, 'views')));


app.get('/home', function(req,res){
        res.sendFile(__dirname+ '/views/home.html');
});

app.get('/about', function(req,res){
        res.sendFile(__dirname+ '/views/about.html');
});

app.get('/contact', function(req,res){
        res.sendFile(__dirname+ '/views/contact.html');
});

app.get('/error', function(req,res){
        var err =  new Error("Invalid User");
        next(err);
});

app.use(function(err,req,res,next){
    console.error(err.stack)
    res.status(500).send('Sorry this page is off limts')
});


app.listen(port);


