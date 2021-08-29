"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var Schema = mongoose_1["default"].Schema;
var PersonSchema = new Schema({
    name: String,
    id: String
});
var personModel = mongoose_1["default"].model('person', PersonSchema);
exports.personModel = personModel;
