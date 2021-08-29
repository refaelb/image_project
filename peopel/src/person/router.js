"use strict";
exports.__esModule = true;
var Pcontroler_1 = require("./Pcontroler");
var express_1 = require("express");
var app = express_1.Router();
app["delete"]('/', function (req, res) {
    Pcontroler_1["default"].deletePerson(req, res);
});
app.get('/', function (req, res) {
    Pcontroler_1["default"].checkPerson(req, res);
});
app.post('/', function (req, res) {
    Pcontroler_1["default"].createPerson(req, res);
});
exports["default"] = app;
