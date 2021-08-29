import  { connectToServer } from './server'
import mongoose from "mongoose";
import mainRouter from './mainRouter';
import { meneger } from './person/test';
import  config  from "./config"
import * as dotenv from "dotenv";

// const mongoIp: any = process.env.MONGODB_URI;
const mongoIp: any = config.MONGODB_URI
const ur:any = "mongodb://"+mongoIp+":27017/test"


mongoose.connect(ur,  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, (err) => {
    if (err) throw err;
    console.log('Connected to data base');
    // connectToServer.startServer()
    connectToServer();
});



