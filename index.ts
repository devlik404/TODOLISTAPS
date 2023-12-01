import express from "express";
import {Request,Response} from "express";


import router from "./routes/route";
import cors from "cors";

const app = express();
   app.use(cors())
    const port = 5000;
    
    app.use(express.json());
    app.use("/api/v1",router);

    app.get("/",(req:Request,res:Response) => {
        res.send("hello world");
    });
    app.listen(port,()=>{
        console.log(`server is running on localhost:${port}`)
    })

