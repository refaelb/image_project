"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const meneger_1 = __importDefault(require("./meneger"));
class Pcontroler {
    static async createPerson(req, res) {
        req.on("data", async (name) => {
            res.json(await meneger_1.default.createPerson(name));
        });
    }
    static async deletePerson(req, res) {
        req.on("data", async (name) => {
            res.json(await meneger_1.default.deletePerson(name));
        });
    }
    static async checkPerson(req, res) {
        req.on("data", async (name) => {
            res.json(await meneger_1.default.checkPerson(name));
        });
    }
}
exports.default = Pcontroler;
//# sourceMappingURL=Pcontroler.js.map