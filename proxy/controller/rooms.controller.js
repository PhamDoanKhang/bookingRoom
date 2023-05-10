const axios = require("axios")

const { endpoints, headers, API } = require("../API")

// Get list room
const getListRoom = (req,res)=>{
    try {
        API.get(endpoints["getListRoom"])
            .then((response)=>{
                res.send(response.data);
            })
            .catch((error)=>{
                console.log(error);
            })
    } catch (error) {
        console.log(error);
    }
}

// Post list room 
const postListRoom = (req,res)=>{
    try {
        const { location, name, options } = req.body.data;
        API.post(endpoints['postListRoom'], { location,name,options})
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

// Delete list room
const deleteRoom = (req,res)=>{
    try {
        const { id } = req.query;
        const headers = req.headers.authorization;
        if(id){
            API.delete(endpoints['deleteRoom'](id))
                .then((response)=>{
                   res.send(response.data);
                })
                .catch((err)=>{
                    console.log(err);
                })
        }
    } catch (error) {
        console.log(error);
    }
}

// Get room id 
const getRoomId = (req,res)=>{
    try {
        const { id } = req.query;
        if(id){
            API.get(endpoints["getRoomId"](id))
                .then((response)=>{
                    res.send(response.data);
                })
                .catch((err)=>{
                    console.log(err);
                })
        }
    } catch (error) {
        console.log(error);
    }


}

const putRoomId = (req,res)=>{
    try {
        const { id , location , option , name } = req.body.data;
        console.log({id,location,name,option});
        API.put(endpoints["putRoom"](id))
            .then((response)=>{
                console.log(response.data);
            })
            .catch((err)=>{
                console.log(err);
            })
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getListRoom,
    postListRoom,
    deleteRoom,
    getRoomId,
    putRoomId
}