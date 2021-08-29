"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const meneger_1 = __importDefault(require("./meneger"));
class Gcontroler {
    static async createGroup(req, res) {
        req.on("data", async (name, groupId) => {
            res.json(await meneger_1.default.createGroup(name, groupId));
            console.log(name, " ", groupId);
        });
    }
    static async addToGroup(req, res) {
        // let name :any = (req.query.data)
        // let groupId:any = "qas"
        // req.on("data", async (name: IGroupSchema,groupId:any) => {
        //   res.json(await meneger.addToGroup(name,groupId));
        // });
        // console.log(name)
        res.send(req.params);
        console.log(req.params);
    }
    static async deleteGroup(req, res) {
        req.on("data", async (name) => {
            res.json(await meneger_1.default.deleteGroup(name));
        });
    }
    static async checkGroup(req, res) {
        req.on("data", async (name) => {
            res.json(await meneger_1.default.checkGroup(name));
        });
    }
}
exports.default = Gcontroler;
//# sourceMappingURL=Gcontroler.js.map