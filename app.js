require('babel-register')
var express = require('express')
var router = require("./src/routers/index")
const app = express();

app.use(router);

const PORT = 8080;

app.listen(PORT, function () {
    console.log("app server started on " + PORT + " Port");
})