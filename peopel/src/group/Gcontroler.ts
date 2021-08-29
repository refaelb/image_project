import meneger from "./meneger";
import { Request, Response } from "express";
import express from "express";
import { IGroupSchema } from "./Ginterface";
import { groupModel } from "./model";
import { groupCollapsed } from "node:console";

export default class Gcontroler {
  static async createGroup(req: Request, res: Response) {
    req.on("data", async (name: IGroupSchema,groupId:any) => {
      res.json(await meneger.createGroup(name,groupId));
      console.log(name," ",groupId)
    });
  }

  static async addToGroup(req: Request, res: Response) {
    // let name :any = (req.query.data)
    // let groupId:any = "qas"
      // req.on("data", async (name: IGroupSchema,groupId:any) => {
      //   res.json(await meneger.addToGroup(name,groupId));
      // });
      // console.log(name)
      res.send(req.params)
      console.log(req.params)
    }
   
  static async deleteGroup(req: Request, res: Response) {
    req.on("data", async (name) => {
      res.json(await meneger.deleteGroup(name));
    });
  }

  static async checkGroup(req: Request, res: Response) {
    req.on("data", async (name) => {
      res.json(await meneger.checkGroup(name));
    });
  }
}
