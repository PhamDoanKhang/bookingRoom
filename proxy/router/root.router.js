const express = require("express")
const rootRouter = express.Router()

const { actionsRouter } = require("./actions")
const { roomRouter } = require("./room.router")
const { meetingRoomRouter } = require("./meeting-room.router")
const { WeeklyScheduleRouter } = require("./weekly-schedule.router")
const { meetingInfoRouter } = require("./meeting-info.router")

rootRouter.use("/room", roomRouter)
rootRouter.use("/meet", meetingRoomRouter)
rootRouter.use("/weekly-schedule",WeeklyScheduleRouter)
rootRouter.use("/meeting-info",meetingInfoRouter)


module.exports = {
    rootRouter
}