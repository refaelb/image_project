import Gcontroler from "./Gcontroler";
import { Router, Request, Response } from "express";

const app = Router();
    app.delete('/', (req:Request,res:Response)=>{
        Gcontroler.deleteGroup(req,res)
    })
    app.get('/', (req:any,res:any)=>{
        Gcontroler.checkGroup(req,res)
    })
    app.post('/', (req:Request,res:Response)=>{
        Gcontroler.createGroup(req,res)
    })
    app.put('/id', (req:Request,res:Response)=>{
        Gcontroler.addToGroup(req,res)
    })
export default app  ;
