const { getHeaderToken } = require("../utils/auth/getHeaderToken");
const { endpoints, headers, API } = require("../API");

const getListRoom = (req,res)=>{
    try {
        API.get(endpoints["getListRoom"],getHeaderToken(req))
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

const postListRoom = (req,res)=>{
    try {
        const data = req.body
        API.post(endpoints['postListRoom'], data, getHeaderToken(req))
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

const deleteRoom = (req,res)=>{
    try {
        const { id } = req.query;
        if(id){
            API.delete(endpoints['deleteRoom'](id),getHeaderToken(req))
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


const getRoomId = (req,res)=>{
    try {
        const { id } = req.query;
        if(id){
            API.get(endpoints["getRoomId"](id),getHeaderToken(req))
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
        const { id , location , name } = req.body;
        const data = { location,name };
        API.put(endpoints["putRoom"](id), data , getHeaderToken(req))
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

module.exports = {
    getListRoom,
    postListRoom,
    deleteRoom,
    getRoomId,
    putRoomId
}