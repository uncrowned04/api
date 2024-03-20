import languages from "../datasheet.js"

 import "../Database/conn.js"

 import language from "../models/languages.js"

 
let GetHome = async (req, res) => {

        try {

        let data = await language.find()
        console.log(data)
        res.status(200).json(data)

    } catch (err) {
        console.log(`Error While Finding : ${err}`)
    }


}

let GetCourse = (req, res) => {

    let what_to_find = req.params.courseid
 
    let filtredCourse = languages.filter((language) => {
        return what_to_find == language.id
    })

    console.log(filtredCourse)

    if (filtredCourse.length != 0) {
        res.status(200).json(filtredCourse)
    } else {
        res.status(404).json({ "message": `Course with id ${what_to_find} not found !` })
    }

}

let filterCourses = async (req, res) => {
    console.log(req.query)

    let { scope, difficulty, duration, focus } =  req.query
    

    if (focus) {
        focus = focus.toLowerCase()
     }

    if (scope || difficulty || duration || focus) {
       try{
        let data = await language.find({scope:scope})
        console.log("filtered data tos scope:")
        console.log(data)

        if(data.length > 0){
            res.status(200).json(data)
        }
        throw("unable to find data releated to search query")
       }
       catch(err){
        console.log(`Error WHile finding :${err}`)
        res.status(200).json({"message":"unable to find data"})
       }
        
    } else {
        res.status(400).json({ "message": "invalid parameters !" })
    }

}

let collectdata =  (req, res) => {
 console.log(req.body)
 res.status(202).json({message:"got data successfullt"})
}

export { GetHome, GetCourse, filterCourses,collectdata }