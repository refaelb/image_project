// import * as mongoose from 'mongoose'
import { personModel } from "./model";
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
import * as mongoose from "mongoose";
import { Model, Schema } from "mongoose";

function meneger(result:any) {
  let personSchema: Schema = new Schema({
    name: String,
  });
  let person = mongoose.model("qas", personSchema);
  person.find({ name: "shavit" }, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      return result
    }
  });
}
export { meneger };
