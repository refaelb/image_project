"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.personModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const PersonSchema = new Schema({
    name: String,
    id: String
});
let personModel = mongoose_1.default.model('person', PersonSchema);
exports.personModel = personModel;
//# sourceMappingURL=model.js.map