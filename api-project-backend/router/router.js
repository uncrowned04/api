import express from "express"
import {GetHome, GetCourse , filterCourses,collectdata} from "../controllers/controller.js"
let router = express()

router.get("/",GetHome)
 
router.get("/course/:courseid",GetCourse)  

router.get("/courses/filter" , filterCourses)

router.post("/collectdata",collectdata)
 
export {router}