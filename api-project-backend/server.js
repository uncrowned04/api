import  express  from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv"
import cors from"cors"

import {router} from "./router/router.js"

dotenv.config({"path":"./config.env"})

let app=express()

let port=process.env.PORT

const corsOptions ={
    origin:"http://localhost:3000",
    Credentials:true,
}
 
app.use(cors(corsOptions));

app.use(bodyParser.json())
      
app.use(router)

app.listen(port,()=>{
console.log(`server is running on port${port} | http://localhost:${port}`)

})