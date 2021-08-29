"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.close = void 0;
let port = 3000;
const express_1 = __importDefault(require("express"));
const app = express_1.default();
let server;
// app.use(MainRouter);
function close() {
    var server = app.listen(port);
    server.close();
    console.log("connection closed");
}
exports.close = close;
//# sourceMappingURL=close.js.map