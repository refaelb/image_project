import Pcontroler from "./Pcontroler";
import { Router, Request, Response } from "express";

const app = Router();
    app.delete('/', (req:Request,res:Response)=>{
        Pcontroler.deletePerson(req,res)
    })
    app.get('/', (req:any,res:any)=>{
        Pcontroler.checkPerson(req,res)
    })
    app.post('/', (req:Request,res:Response)=>{
        Pcontroler.createPerson(req,res)
    })
export default app  ;
