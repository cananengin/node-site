// require express
var express = require('express');
var path    = require('path');

// create our router object
var router = express.Router();

// export our router
module.exports = router;

//route for our homepage
router.get('/', function (req, res) {
    res.render('pages/index');
});

//route for our about page
router.get('/about', function (req, res) {
    var users = [
        {name: 'Canan', email: 'canan@dama.dev', avatar: 'https://images.unsplash.com/photo-1581257856116-7cae1a9fee60?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=crop&h=300&q=80'},
        {name: 'Enğin', email: 'engin@dama.dev', avatar: 'https://images.unsplash.com/photo-1580983563878-706ee872c772?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=crop&h=300&q=80'},
        {name: 'Michael', email: 'michael@dama.dev', avatar: 'https://images.unsplash.com/photo-1581268182822-d93af63b8b20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=crop&h=300&q=80'},
        {name: 'Jackson', email: 'jackson@dama.dev', avatar: 'https://images.unsplash.com/photo-1559324926-ad3e8bab9df1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=crop&h=300&q=80'}
    ];
    res.render('pages/about', { users: users });
});

router.get('/contact', function(req, res){
    res.render('pages/contact');
});
router.post('/contact', function(req, res){
    res.send('Thanks for contacting us ' + req.body.name + '! We will respond shortly!');
});