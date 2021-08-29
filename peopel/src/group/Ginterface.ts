import {Schema,model} from 'mongoose'
import * as mongoose from 'mongoose'
import repository  from './Grepository'
import { Interface } from 'node:readline'

    export interface IGroupSchema {
        _id: String,
        name: String
    }
   
   

