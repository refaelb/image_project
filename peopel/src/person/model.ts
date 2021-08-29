import mongoose, { model } from 'mongoose'
import  {personSchema}   from './Pinterface'
const { Schema } = mongoose;

const PersonSchema = new Schema(
    {
       
        name: String,
        id: String
        
       
    })
let personModel: any = mongoose.model('person', PersonSchema, );
export {personModel}