const { API, endpoints, headers } = require("../API");
const { getHeaderToken } = require("../utils/auth/getHeaderToken");


const getListMeetingInfo = (req,res)=>{
    try {
        API.get(endpoints["getListMeetingInfo"],getHeaderToken(req))
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

const postMeetingInfo = (req,res)=>{
    try {
        const data = req.body;
        API.post(endpoints["postMeetingInfo"],data,getHeaderToken(req))
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

const deleteMeetingInfo = (req,res)=>{
    try {
        const { id } = req.query;
        API.delete(endpoints["deleteMeetingInfo"](id), getHeaderToken(req))
            .then((resposne)=>{
                res.send(resposne.data);
            })
            .catch((err)=>{
                console.log(err);
            })
    } catch (error) {
        console.log(error);
    }
}

const getMeetingInfo =  (req,res)=>{
    try {
        const { id } = req.query;
        API.get(endpoints["getMeetingInfo"](id), getHeaderToken(req))
            .then((response)=>{
                res.send(response.data);
            })
            .catch((err)=>{
                console.log(err);
            })
    } catch (error) {
        console.log(error);
    }  
};

const putMeetingInfo = (req,res)=>{
    try {
        const { id } = req.query;
        const data = req.body
        API.put(endpoints["putMeetingInfo"](id),data,getHeaderToken(req))
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

module.exports = {
    getListMeetingInfo,
    postMeetingInfo,
    deleteMeetingInfo,
    getMeetingInfo,
    putMeetingInfo
}