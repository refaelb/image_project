"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Grepository_1 = __importDefault(require("./Grepository"));
class meneger {
    static async deleteGroup(name) {
        return Grepository_1.default.deleteGroup(name);
    }
    static async checkGroup(name) {
        return Grepository_1.default.check(name);
    }
    static async createGroup(name, groupId) {
        return Grepository_1.default.create(name, groupId);
    }
    static async addToGroup(name, groupId) {
        return Grepository_1.default.add(name, groupId);
    }
}
exports.default = meneger;
//# sourceMappingURL=meneger.js.map