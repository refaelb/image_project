"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const PersonSchema = new Schema({
    name: String,
    age: Number,
});
let person = mongoose_1.default.model('qas', PersonSchema);
//# sourceMappingURL=nodel.js.map