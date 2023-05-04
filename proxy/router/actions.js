const express = require("express")

const actionsRouter = express.Router()

const { getRoomData } = require("../controller/actions.controller")

actionsRouter.get("/actions",getRoomData)

module.exports = {
    actionsRouter,
}