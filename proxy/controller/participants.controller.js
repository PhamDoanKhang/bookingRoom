const axios = require("axios");
const { getHeaderToken } = require("../utils/auth/getHeaderToken")
const getIndividual = (req,res)=>{
   try {
    axios.get(`${process.env.HD_WF_DOMAIN}/profile_service/user/list`, getHeaderToken(req))
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

const getDepartment = (req,res)=>{
    try {
        console.log("Chay qua day");
        axios.get(`${process.env.HD_WF_DOMAIN}/profile_service/part/list`, getHeaderToken(req))
            .then((response)=>{
                res.send(response.data);
            })
            .catch((err)=>{
                console.log(err);
            })
    } catch (error) {
        
    }
}
module.exports = {
    getIndividual,
    getDepartment
}