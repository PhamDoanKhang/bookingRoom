const express = require("express")
const memberRouter = express.Router()
const { getListMember,postMember, deleteMember, getMember, putMember } = require("../controller/member.controller")

memberRouter.get("/", getListMember);
memberRouter.post("/post", postMember);
memberRouter.delete("/delete", deleteMember);
memberRouter.get("/get", getMember);
memberRouter.put("/put", putMember);
module.exports = {
    memberRouter
}