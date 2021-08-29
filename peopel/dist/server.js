"use strict";
// // import { Router, Server } from 'express'
// import express from "express";
// import { Prouter } from "./person/router";
// import { Grouter } from "./group/router";
// import MainRouter from "./mainRouter";
// let server: any;
// const app = express();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.port = exports.server = exports.app = exports.connectToServer = void 0;
// export default class connectToServer {
//   static async startServer() {
//     app.listen(port, (err: string) => {
//       if (err) throw err;
//     });
//     app.use(MainRouter)
//     // console.log("server")
// }
// }
let port = 3000;
exports.port = port;
const express_1 = __importDefault(require("express"));
const mainRouter_1 = __importDefault(require("./mainRouter"));
const app = express_1.default();
exports.app = app;
let server;
exports.server = server;
app.use(mainRouter_1.default);
function connectToServer() {
    exports.server = server = app.listen(port, () => {
        console.log("Server is listening on port 3000");
    });
}
exports.connectToServer = connectToServer;
//# sourceMappingURL=server.js.map