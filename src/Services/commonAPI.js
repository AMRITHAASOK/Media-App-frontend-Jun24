//API Configuration
//1 import axios
// const axios = require('axios')
import axios from 'axios'

export const commonAPI =async(httpMethod,url,reqBody)=>{
    let reqConfig ={
        method:httpMethod,
        url,
        data:reqBody
    }
    return await axios(reqConfig).then((response)=>{
        return response
    })
    .catch((error)=>{
        return error
    })
}