import mongoose from"mongoose"

import dotenv from"dotenv"

dotenv.config({path:"./config.env"})

let connection_string =process.env.MONGODBSTRING

let connect =async ()=>{

    try{
        await mongoose.connect(connection_string)
        console.log(`coonection succsessful`)
    }catch(err){
        console.log(`connection unsuccessful ${err}`)
    }
}

connect()