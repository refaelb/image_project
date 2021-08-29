import meneger from "./meneger";
import { Request, Response } from "express";
import express from "express";
import { personSchema } from "./Pinterface";

export default class Pcontroler {
  static async createPerson(req: Request, res: Response) {
    req.on("data", async (name) => {
      res.json(await meneger.createPerson(name));
    });
  }

  static async deletePerson(req: Request, res: Response) {
    req.on("data", async (name) => {
      res.json(await meneger.deletePerson(name));
    });
  }

  static async checkPerson(req: Request, res: Response) {
    req.on("data", async (name) => {
      res.json(await meneger.checkPerson(name));
    });
  }
}
