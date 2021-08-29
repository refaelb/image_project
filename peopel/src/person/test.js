"use strict";
exports.__esModule = true;
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
var mongoose = require("mongoose");
var mongoose_1 = require("mongoose");
function meneger(result) {
    var personSchema = new mongoose_1.Schema({
        name: String
    });
    var person = mongoose.model("qas", personSchema);
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
