// // import { Router, Server } from 'express'
// import express from "express";
// import { Prouter } from "./person/router";
// import { Grouter } from "./group/router";
// import MainRouter from "./mainRouter";
// let server: any;
// const app = express();

// export default class connectToServer {
    //   static async startServer() {
        //     app.listen(port, (err: string) => {
            //       if (err) throw err;
            //     });
            //     app.use(MainRouter)
            //     // console.log("server")
            // }
            // }
            
let port = 3000;
import express from "express";
import MainRouter from "./mainRouter";
const app = express();
let server: any;
app.use(MainRouter);

function connectToServer(): void {
  server = app.listen(port, () => {
    console.log("Server is listening on port 3000");
  });
}


export { connectToServer, app, server, port };
