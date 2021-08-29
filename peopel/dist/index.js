"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
const mongoose_1 = __importDefault(require("mongoose"));
const mongoIp = process.env.MONGODB_URI;
const ur = "mongodb://localhost:27017/test";
mongoose_1.default.connect(ur, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, (err) => {
    if (err)
        throw err;
    console.log('Connected to data base');
    // connectToServer.startServer()
    server_1.connectToServer();
});
//# sourceMappingURL=index.js.map