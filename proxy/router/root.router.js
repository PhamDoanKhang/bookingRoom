const express = require("express")
const rootRouter = express.Router()

const { actionsRouter } = require("./actions")
const { roomRouter } = require("./room.router")
const { meetingRoomRouter } = require("./meeting-room.router")

rootRouter.use("/room", roomRouter)
rootRouter.use("/meet", meetingRoomRouter)



module.exports = {
    rootRouter
}