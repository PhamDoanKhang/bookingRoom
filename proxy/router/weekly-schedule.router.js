const express = require("express");
const { request } = require("https");
const WeeklyScheduleRouter = express.Router();

const { getListWeeklySchedule, postWeeklyScheduleID, deleteWeeklyScheduleID,getIdWeeklySchedule, putWeeklyScheduleID } = require("../controller/weekly-schedule.controller");

WeeklyScheduleRouter.get("/",getListWeeklySchedule);
WeeklyScheduleRouter.get("/getId",getIdWeeklySchedule);
WeeklyScheduleRouter.post("/post",postWeeklyScheduleID);
WeeklyScheduleRouter.delete("/delete",deleteWeeklyScheduleID)
WeeklyScheduleRouter.put("/put",putWeeklyScheduleID)
module.exports = {
    WeeklyScheduleRouter,
    
}