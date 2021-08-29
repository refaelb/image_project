import * as mongoose from "mongoose";
import { Schema, createConnection } from "mongoose";
import { groupModel } from "./model";
import { IGroupSchema } from "./Ginterface";
import { connectToServer } from "../server";
import { group } from "node:console";

export default class repository {
  static async deleteGroup(name: string) {
    // return groupModel.deletOne({name: name});
    mongoose.connection.db.dropCollection(name); //, function(err, result) {});
  }
  static async check(name: IGroupSchema) {
    return groupModel.find({ name: name });
  }
  static async create(name: IGroupSchema,groupId:any) {
    return groupModel.create({name: name})
    // return groupModel.findOneAndUpdate({ _id: groupId }, { $push: { "name": name } }, { new: true });
  }
  static async add(name: IGroupSchema,groupId:any) {
    let friend: any = {name: "refael", adge: "23"} 
    // let name :any = (req.query.amount)
    // let groupId:any = "qas"
    return groupModel.findOneAndUpdate({ _id: groupId }, { $push: { "name": name } }, { new: true });
    // return groupModel.findOneAndUpdate({ name: name }, { $push: { people: groupId } });
  }
}
