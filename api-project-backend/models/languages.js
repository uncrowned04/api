import mongoose from "mongoose";
let languageschema =mongoose.Schema({
    name:String,
    level:String,
    scope:Array,
    focus:String,
    duration:String,
    difficulty:String,
    pre_requested_topics:Array,

})

let language=mongoose.model("languages",languageschema)

export default language