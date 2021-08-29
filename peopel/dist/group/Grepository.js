"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = __importStar(require("mongoose"));
const model_1 = require("./model");
class repository {
    static async deleteGroup(name) {
        // return groupModel.deletOne({name: name});
        mongoose.connection.db.dropCollection(name); //, function(err, result) {});
    }
    static async check(name) {
        return model_1.groupModel.find({ name: name });
    }
    static async create(name, groupId) {
        return model_1.groupModel.create({ name: name });
        // return groupModel.findOneAndUpdate({ _id: groupId }, { $push: { "name": name } }, { new: true });
    }
    static async add(name, groupId) {
        let friend = { name: "refael", adge: "23" };
        // let name :any = (req.query.amount)
        // let groupId:any = "qas"
        return model_1.groupModel.findOneAndUpdate({ _id: groupId }, { $push: { "name": name } }, { new: true });
        // return groupModel.findOneAndUpdate({ name: name }, { $push: { people: groupId } });
    }
}
exports.default = repository;
//# sourceMappingURL=Grepository.js.map