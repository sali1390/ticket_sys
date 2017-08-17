/**
 * Created by saleemaali on 7/4/17.
 */
var express = require('express');
var app = express();
var port = 3000;
var bodyParser = require("body-parser");

var mongo = require('mongo');
var mongoose = require('mongoose');

app.use(express.static(__dirname + "/app"));

app.listen(port, function() {
    console.log("listening on port:" + port);
});

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json({
    extended: false
}));

//database info
mongoose.connect('mongodb://localhost/ticket_sys', {useMongoClient: true});

var db = mongoose.connection;

db.on('error', function(error){
    console.log("Mongoose Error: " + error)
});

db.once('open', function() {
    console.log("Mongoose connection successful.");
});

var User = require("./models/User.js");
var Ticket = require("./models/Ticket.js");
var Comment = require("./models/Comment.js");
var File = require("./models/File.js");

//All GET functions
app.get("/api/users", function(req, res){
   User.find({
   }, function(err, doc){
       if(err){
           console.log(err);
       } else {
           res.send(doc);
       }
   })
});

app.get("/api/tickets", function(req, res){
    Ticket.find({
    }, function(err, doc){
        if(err){
            console.log(err);
        } else {
            res.send(doc);
        }
    })
});

//All POST functions
app.post("/newUser", function(req, res){
    var email = req.body.email;
    var userName = req.body.userName;
    var password = req.body.password;

    console.log("Email: " + email + " Username: " + userName + " Password: " + password);

    var newUser = new User({
        email: email,
        userName: userName,
        password: password
    });

    newUser.save(function(err, newUser){
        if(err) {
            res.json(err)
        } else {
            res.json(newUser)
        }
    });
});

app.post("/newTicket", function(req, res){
    var title = req.body.title;
    var body = req.body.body;
    var files = req.body.files;

    console.log("Title: " + title + " Body: " + body + " Files: " + files);

    var newTicket = new Ticket({
        title: title,
        body: body,
        files: files
    });

    newTicket.save(function(err, newTicket){
        if(err) {
            res.json(err)
        } else {
            res.json(newTicket)
        }
    });
});

//All DELETE functions
app.delete("/api/deleteTicket/:id", function(req, res){
    var id = req.params.id;

    Ticket.findOneAndRemove({
        _id: id
    }, function(err, doc) {
        if (err) {
            res.json(err);
        } else if(!doc){
            res.status(404).end();
        } else {
            res.status(204).end();
        }
    });
});

app.delete("/api/deleteUser/:id", function(req, res){
    var id = req.params.id;

    User.findOneAndRemove({
        _id: id
    }, function(err, doc) {
        if (err) {
            res.json(err);
        } else if(!doc){
            res.status(404).end();
        } else {
            res.status(204).end();
        }
    });
});

//All PUT functions
app.put('/api/updateUser/:id', function(req, res){
    var email = req.body.email;
    var userName = req.body.userName;
    var password = req.body.password;
    var id = req.params.id;

    User.findOneAndUpdate({
        _id: id
    },{
        email: email,
        userName: userName,
        password: password,
        updatedAt: new Date()
    },{
        new: true
    }, function(err, doc) {
        if (err) {
            res.json(err);
        } else {
            res.json(doc);
        }
    });
});

app.put('/api/updateTicket/:id', function(req, res){
    var title = req.body.title;
    var body = req.body.body;
    var files = req.body.files;
    var id = req.params.id;

    Ticket.findOneAndUpdate({
        _id: id
    },{
        title: title,
        body: body,
        files: files,
        updatedAt: new Date()
    },{
        new: true
    }, function(err, doc) {
        if (err) {
            res.json(err);
        } else {
            res.json(doc);
        }
    });
});
