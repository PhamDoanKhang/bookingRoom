const axios = require("axios")

const { endpoints, headers, API } = require("../API")
const { getHeaderToken  } = require("../utils/auth/getHeaderToken")
// Get list room
const getListInfoSugges = (req,res)=>{
    try {
        API.get(endpoints["getListInfoSugges"], getHeaderToken(req))
            .then((response)=>{
                console.log(response.data);
                res.send(response.data)
            })
            .catch((err)=>{
                console.log(err);
            })
    } catch (error) {
        console.log(error);
    }
}

const deleteInfoSugges = (req,res)=>{
    try {
        const { id } = req.query;
        console.log(id);
        API.delete(endpoints["deleteInfoSugges"](id),getHeaderToken(req) )
            .then((response)=>{
                res.send(response.data)
            })
            .catch((err)=>{
                console.log(err);
            })
        
    } catch (error) {
        
    }
}

const postInfoSugges = (req,res)=>{
    try {
        const data = req.body
        console.log(data);
        API.post(endpoints["postInfoSugges"],data,getHeaderToken(req))
            .then((response)=>{
                console.log(response.data);
                res.send(response.data)
            })
            .catch((err)=>{
                console.log(err);
            })
    } catch (error) {
        console.log(error);
    }
}

const getInfoSuggesID = (req,res)=>{
    try {
        const { id } = req.query
        API.get(endpoints["getInfoSuggesID"](id), getHeaderToken(req))
            .then((response)=>{
                console.log(response.data);
                res.send(response.data)
            })
            .catch((err)=>{
                console.log(err);
            })

    } catch (error) {
        console.log(error);
    }
}

const putInfoSuggesID = (req,res)=>{
    try {
        const { id } = req.query
        const data = req.body
        API.put(endpoints["putInfoSuggesID"](id),data, getHeaderToken(req))
            .then((response)=>{
                console.log(response.data);
                res.send(response.data)
            })
            .catch((err)=>{
                console.log(err);
            })       
       
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getListInfoSugges,
    deleteInfoSugges,
    postInfoSugges,
    getInfoSuggesID,
    putInfoSuggesID
}