const express = require("express")
const meetingRoomRouter = express.Router()

const { getListMeetingRoom, deleteMeetingRoom, postMeetingRoom, getMeetingRoomID,putMeetingRoomID } = require("../controller/meeting-room.controller")

meetingRoomRouter.get("/list", getListMeetingRoom)
meetingRoomRouter.get("/room-id",getMeetingRoomID)
meetingRoomRouter.delete("/delete-room", deleteMeetingRoom)
meetingRoomRouter.post("/post-room", postMeetingRoom)
meetingRoomRouter.put("/put-room",putMeetingRoomID)

module.exports = {
    meetingRoomRouter
}