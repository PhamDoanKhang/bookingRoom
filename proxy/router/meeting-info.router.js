const express = require("express")
const meetingInfoRouter = express.Router()
const { getListMeetingInfo,postMeetingInfo, deleteMeetingInfo, getMeetingInfo, putMeetingInfo } = require("../controller/meeting-info.controller")

meetingInfoRouter.get("/", getListMeetingInfo);
meetingInfoRouter.post("/post", postMeetingInfo);
meetingInfoRouter.delete("/delete", deleteMeetingInfo);
meetingInfoRouter.get("/get", getMeetingInfo);
meetingInfoRouter.put("/put", putMeetingInfo);
module.exports = {
    meetingInfoRouter
}