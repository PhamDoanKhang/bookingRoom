const express = require("express");
const rootRouter = express.Router();

const { actionsRouter } = require("./actions");
const { roomRouter } = require("./room.router");
const { meetingRoomRouter } = require("./meeting-room.router");
const { WeeklyScheduleRouter } = require("./weekly-schedule.router");
const { meetingInfoRouter } = require("./meeting-info.router");
const { memberRouter } = require("./member.router");
const { InfoSuggesRouter } = require("./info-suggestion.router");
const { ParticipantsRouter } = require("./participants.router");

rootRouter.use("/room", roomRouter);
rootRouter.use("/meet", meetingRoomRouter);
rootRouter.use("/weekly-schedule",WeeklyScheduleRouter);
rootRouter.use("/meeting-info",meetingInfoRouter);
rootRouter.use("/member", memberRouter);
rootRouter.use("/info-suggestion",InfoSuggesRouter)
rootRouter.use("/participants",ParticipantsRouter)
module.exports = {
    rootRouter
}