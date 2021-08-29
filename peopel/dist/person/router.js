"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Pcontroler_1 = __importDefault(require("./Pcontroler"));
const express_1 = require("express");
const app = express_1.Router();
app.delete('/', (req, res) => {
    Pcontroler_1.default.deletePerson(req, res);
});
app.get('/', (req, res) => {
    Pcontroler_1.default.checkPerson(req, res);
});
app.post('/', (req, res) => {
    Pcontroler_1.default.createPerson(req, res);
});
exports.default = app;
//# sourceMappingURL=router.js.map