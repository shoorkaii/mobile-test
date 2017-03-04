/**
 * Created by reza on 3/4/17.
 */
var express = require('express');
var app = express();
var path = require("path");
app.use(express.static(path.join(__dirname, 'public')));

function sendViewMiddleware(req, res, next) {
    res.sendView = function (view) {
        return res.sendFile(__dirname + "/public/" + view);
    }
    next();
}

app.use(sendViewMiddleware);

app.get('/', function (req, res) {
    res.sendView('index.html');
});

app.get('/profile', function (req, res) {
    res.sendView('profile.html');
});

app.listen(3000);
console.log("Running at Port 3000");