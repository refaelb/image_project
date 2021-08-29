"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
// function groupModel(group: any) {
const GroupSchema = new Schema({
    id: String,
    name: String,
    people: String,
});
let groupModel = mongoose_1.default.model("group", GroupSchema);
exports.groupModel = groupModel;
//# sourceMappingURL=model.js.map