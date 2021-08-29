import {groupModel} from './model'
import repository from './Grepository'
import { IGroupSchema } from './Ginterface'

export default class meneger{

   static async deleteGroup(name:string) {  
       return repository.deleteGroup(name)
   }
   static async checkGroup(name:IGroupSchema) {  
       return repository.check(name)
   }
   static async createGroup(name:IGroupSchema,groupId:any) {  
       return repository.create(name,groupId)
   }      

   static async addToGroup(name:IGroupSchema,groupId:any) {  
    return repository.add(name,groupId)
}      
   
}
