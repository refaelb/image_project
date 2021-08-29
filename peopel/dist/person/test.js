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
exports.meneger = void 0;
// import {Ipeople} from './Pinterface'
// mongoose.connect('mongodb://localhost:27017/people',  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, (err) => {
//         if (err) throw err;
//         console.log('Connected to data base');
//         // connectToServer()
//         // mainRouter()
//     });
// let personSchema: Schema = new Schema({
//     name: String,
//     })
//     let person = mongoose.model('qas', personSchema );
//     // Ipeople(group)
//     let newPerson: any = new person({
//         name: 'shavit'
//     });
//     newPerson.save(function (person:string) {
//     console.log(newPerson)
//     console.log("connect")
const mongoose = __importStar(require("mongoose"));
const mongoose_1 = require("mongoose");
function meneger(result) {
    let personSchema = new mongoose_1.Schema({
        name: String,
    });
    let person = mongoose.model("qas", personSchema);
    person.find({ name: "shavit" }, function (err, result) {
        if (err) {
            console.log(err);
        }
        else {
            console.log(result);
            return result;
        }
    });
}
exports.meneger = meneger;
//# sourceMappingURL=test.js.map