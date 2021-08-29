"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pSchema = void 0;
// import {my_server} from './server'
const Ginterface_1 = require("./Ginterface");
function pSchema(name, group, person) {
    // 
    Ginterface_1.Ipeople(group);
    let newPerson = new person({
        name: name
    });
    newPerson.save(function (person) {
        console.log(newPerson);
        console.log("connect");
    });
}
exports.pSchema = pSchema;
//# sourceMappingURL=Gmodel.js.map