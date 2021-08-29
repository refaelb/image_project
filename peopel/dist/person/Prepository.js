"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("./model");
class repository {
    static async deletePerson(name) {
        return model_1.personModel.findOneAndRemove({ name: name });
    }
    static async check(name) {
        return model_1.personModel.find({ name: name });
    }
    static async create(name) {
        return model_1.personModel.create({ name: name });
    }
}
exports.default = repository;
//# sourceMappingURL=Prepository.js.map