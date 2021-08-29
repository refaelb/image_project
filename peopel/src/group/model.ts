import mongoose, { model } from "mongoose";
import { group } from "node:console";
import { Interface } from "node:readline";
// import { group } from 'node:console';
import { IGroupSchema } from "./Ginterface";
const { Schema } = mongoose;

// function groupModel(group: any) {
const GroupSchema = new Schema({
  id: String,
  name: String,
  people: String,
 
});
let groupModel: any = mongoose.model("group", GroupSchema);
// groupModel.create(group)
// }
export { groupModel };
