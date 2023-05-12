const { API , endpoints , headers } = require("../API");
const { getHeaderToken } = require("../utils/auth/getHeaderToken")
const getListWeeklySchedule = (req,res)=>{
    try {
        // const { authorization } = req.headers;
        API.get(endpoints["getListWeeklySchedule"], getHeaderToken(req))
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

const postWeeklyScheduleID = (req,res)=>{
    try {
        const { profile_id } = req.query;
        API.post(endpoints["postListWeeklySchedule"],{ profile_id: profile_id , registration_date: "2023-05-12" , end_time: "2023-05-12T03:16:30.644673" }, getHeaderToken(req))
            .then((response)=>{
                console.log(response.data);
                res.send(response.data);
            })
            .catch((err)=>{
                console.log(err);
            })
        // console.log(getHeaderToken(req));

    } catch (error) {
        console.log(error);
    }
}

const deleteWeeklyScheduleID = (req,res)=>{
    try {
        const { id } = req.query
        API.delete(endpoints["deleteListWeeklySchedule"](id),getHeaderToken(req))
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

const getIdWeeklySchedule = (req,res)=>{
    try {
        const { id } = req.query;
        API.get(endpoints["getIDWeeklySchedule"](id),getHeaderToken(req))
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

const putWeeklyScheduleID = (req,res)=>{
    try {
        const data = req.body;
        console.log(data);
        API.put(endpoints["putIDWeeklySchedule"](1),data,getHeaderToken(req))
            .then((response)=>{
                console.log(response.data);
                res.send(response.data)
            })
            .catch((err)=>{
                console.log(err);
            })
    } catch (error) {
        console.log(object);
    }
}

module.exports = {
    getListWeeklySchedule,
    postWeeklyScheduleID,
    deleteWeeklyScheduleID,
    getIdWeeklySchedule,
    putWeeklyScheduleID
}