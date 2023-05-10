const axios = require("axios")

const { endpoints, headers, API } = require("../API")

// Get list room
const getListMeetingRoom = (req,res)=>{
    try {
        API.get(endpoints["getListMeetingRoom"])
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

const deleteMeetingRoom = (req,res)=>{
    try {
        const { id } = req.query
        console.log(id);
        API.get(endpoints["deleteMeetingRoom"](id))
            .then((response)=>{
                res.send(response.data)
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
        const { data } = req.body
        API.post(endpoints["postMeetingRoom"],data)
            .then((response)=>{
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
        const { id } = req.query
        API.get(endpoints["getMeetingRoomID"](id))
            .then((response)=>{
                res.send(response.data)
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
        const { id } = req.query
        const { data } = req.body
        API.put(`${endpoints["putMeetingRoomID"]}${id}`,data)
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
    getListMeetingRoom,
    deleteMeetingRoom,
    postMeetingRoom,
    getMeetingRoomID,
    putMeetingRoomID
}