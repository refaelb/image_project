           
let port = 3000;
import express from "express";
import MainRouter from "./mainRouter";
const app = express();
let server: any;
// app.use(MainRouter);



function close(): void {
    var server = app.listen(port);
    server.close()
    console.log("connection closed")
  
  }

  export { close };