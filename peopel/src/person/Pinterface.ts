import {Schema,model} from 'mongoose'
import * as mongoose from 'mongoose'
import repository  from './Prepository'
import { Interface } from 'node:readline'

    export interface personSchema {
        _id: String,
        name: String
    }
   
   

