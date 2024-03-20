import React, { useState } from 'react'
// HTML and CSS
import axios from 'axios'

const Form = () => {
   
    let [data, setdata] = useState("")
    let [display, setdisplay] = useState(false)
    let response;

    let handelSumbit = async (event) => {
        event.preventDefault()
        console.log(`this is data that is submitted :${data}`)

        try {
            response = await axios({
                method: 'POST',
                url: "http://localhost:3999/collectdata",
                data: {
                    data
                }
            })
            console.log(response.data.message)
            console.log(response.status)

            if (response.status === 202) {
                setdisplay(true)
            }
        }
        catch (err) {
            console.log("some error while send data")
            console.log(err)
        }

    }

    let handelChange = (event) => {
        setdata((prev) => {
            return event.target.value
        })
    }

    return (
        <>
            <form onSubmit={handelSumbit}>
                <input onChange={handelChange} type="text" name="name" placeholder="enter something" value={data} />
                    <button type="submit">submit</button>
            </form>
        </>
    )
}

export default Form