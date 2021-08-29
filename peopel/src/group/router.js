"use strict";
exports.__esModule = true;
var Gcontroler_1 = require("./Gcontroler");
var express_1 = require("express");
var app = express_1.Router();
app["delete"]('/', function (req, res) {
    Gcontroler_1["default"].deleteGroup(req, res);
});
app.get('/', function (req, res) {
    Gcontroler_1["default"].checkGroup(req, res);
});
app.post('/', function (req, res) {
    Gcontroler_1["default"].createGroup(req, res);
});
app.put('/id', function (req, res) {
    Gcontroler_1["default"].addToGroup(req, res);
});
exports["default"] = app;
