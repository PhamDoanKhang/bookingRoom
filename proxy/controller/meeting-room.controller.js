const axios = require("axios")
const { endpoints, headers, API } = require("../API")
const { getHeaderToken } = require("../utils/auth/getHeaderToken")

// Get list room
const getListMeetingRoom = (req,res)=>{
    try {
        const { page_size, page} = req.query;
        console.log({page_size,page});
        API.get(endpoints["getListMeetingRoom"](page_size,page), getHeaderToken(req) )
            .then((response)=>{
                console.log(response.data);
                res.send(response.data);
            })
            .catch((err)=>{
                console.log(err);
            })
    } catch (error) {
        console.log(error);
    }
}

const deleteMeetingRoom = (req,res)=>{
    try {
        const { id } = req.query;
        API.get(endpoints["deleteMeetingRoom"](id),getHeaderToken(req))
            .then((response)=>{
                res.send(response.data);
            })
            .catch((err)=>{
                console.log(err);
            })
        console.log(req.query);
        
    } catch (error) {
        
    }
}

const postMeetingRoom = (req,res)=>{
    try {
        const data = req.body;
        // console.log(data);
        console.log("Dang chay");
        API.post(endpoints["postMeetingRoom"],data, getHeaderToken(req))
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

const getMeetingRoomID = (req,res)=>{
    try {
        const { id } = req.query;
        API.get(endpoints["getMeetingRoomID"](id),getHeaderToken(req))
            .then((response)=>{
                res.send(response.data);
            })
            .catch((err)=>{
                console.log(err);
            })

    } catch (error) {
        console.log(error);
    }
}

const putMeetingRoomID = (req,res)=>{
    try {
        const { id } = req.query;
        const data = req.body;

        API.put(`${endpoints["putMeetingRoomID"]}${id}`, data , getHeaderToken(req))
            .then((response)=>{
                console.log(response.data.data);
                res.send(response.data);
            })
            .catch((err)=>{
                console.log(err);
            })       
       
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getListMeetingRoom,
    deleteMeetingRoom,
    postMeetingRoom,
    getMeetingRoomID,
    putMeetingRoomID
}