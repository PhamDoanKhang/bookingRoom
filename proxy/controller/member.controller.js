const { API, endpoints, headers } = require("../API");
const { getHeaderToken } = require("../utils/auth/getHeaderToken");


const getListMember = (req,res)=>{
    try {
        console.log(req);
        API.get(endpoints["getListMember"],getHeaderToken(req))
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

const postMember = (req,res)=>{
    try {
        const { profile_id } = req.body;
        API.post(endpoints["postMember"], { profile_id } ,getHeaderToken(req))
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

const deleteMember = (req,res)=>{
    try {
        const { id } = req.query;
        console.log(id);
        API.delete(endpoints["deleteMember"](id), getHeaderToken(req))
            .then((resposne)=>{
                console.log(resposne.data);
                res.send(resposne.data);
            })
            .catch((err)=>{
                console.log(err);
            })
    } catch (error) {
        console.log(error);
    }
}

const getMember =  (req,res)=>{
    try {
        const { id } = req.query;
        console.log(id);
        API.get(endpoints["getMember"](id),getHeaderToken(req))
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
};

const putMember = (req,res)=>{
    try {
        const { id } = req.query;
        const data = req.body;
        API.put(endpoints["putMember"](id),data,getHeaderToken(req))
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
    getListMember,
    postMember,
    deleteMember,
    getMember,
    putMember
}