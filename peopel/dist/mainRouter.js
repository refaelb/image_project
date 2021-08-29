"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = __importDefault(require("./group/router"));
const express_1 = require("express");
const close_1 = require("./close");
const router_2 = __importDefault(require("./person/router"));
const MainRouter = express_1.Router();
MainRouter.use('/person', (router_2.default));
MainRouter.use('/group', (router_1.default));
MainRouter.use('/kill', (close_1.close));
exports.default = MainRouter;
//# sourceMappingURL=mainRouter.js.map