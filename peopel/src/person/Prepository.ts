import * as mongoose from "mongoose";
import { personModel } from "./model";
import { personSchema } from "./Pinterface";

export default class repository {
  static async deletePerson(name: string) {
    return personModel.findOneAndRemove({name: name});
  }
  static async check(name: personSchema) {
    return personModel.find({name: name});
  }
  static async create(name: personSchema) {
    return personModel.create({name: name});
    
  }
}
