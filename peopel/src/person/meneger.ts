 import {personModel} from './model'
 import repository from './Prepository'
import { personSchema } from './Pinterface'

export default class meneger{

    static async deletePerson(name:string) {  
        return repository.deletePerson(name)
    }
    static async checkPerson(name:personSchema) {  
        return repository.check(name)
    }
    static async createPerson(name:personSchema) {  
        return repository.create(name)
    }      
    
}
