const express = require("express")

const ParticipantsRouter = express.Router()

const { getIndividual, getDepartment } = require("../controller/participants.controller")


ParticipantsRouter.get("/getIndividual",getIndividual)
ParticipantsRouter.get("/getDepartment",getDepartment)
module.exports = {
    ParticipantsRouter,
}