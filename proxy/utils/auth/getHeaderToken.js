const getHeaderToken = (req)=>{
    const { authorization } = req.headers;
    return {
        headers: { Authorization: authorization }
    }
}

module.exports = {
    getHeaderToken
}