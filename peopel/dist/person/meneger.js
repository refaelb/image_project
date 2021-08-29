"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Prepository_1 = __importDefault(require("./Prepository"));
class meneger {
    static async deletePerson(name) {
        return Prepository_1.default.deletePerson(name);
    }
    static async checkPerson(name) {
        return Prepository_1.default.check(name);
    }
    static async createPerson(name) {
        return Prepository_1.default.create(name);
    }
}
exports.default = meneger;
//# sourceMappingURL=meneger.js.map