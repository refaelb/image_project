"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Gcontroler_1 = __importDefault(require("./Gcontroler"));
const express_1 = require("express");
const app = express_1.Router();
app.delete('/', (req, res) => {
    Gcontroler_1.default.deleteGroup(req, res);
});
app.get('/', (req, res) => {
    Gcontroler_1.default.checkGroup(req, res);
});
app.post('/', (req, res) => {
    Gcontroler_1.default.createGroup(req, res);
});
app.put('/id', (req, res) => {
    Gcontroler_1.default.addToGroup(req, res);
});
exports.default = app;
//# sourceMappingURL=router.js.map