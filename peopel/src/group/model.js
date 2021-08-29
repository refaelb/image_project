"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var Schema = mongoose_1["default"].Schema;
// function groupModel(group: any) {
var GroupSchema = new Schema({
    id: String,
    name: String,
    people: String
});
var groupModel = mongoose_1["default"].model("group", GroupSchema);
exports.groupModel = groupModel;
