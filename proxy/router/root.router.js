const express = require("express")

const { actionsRouter } = require("./actions")

const rootRouter = express.Router()


rootRouter.use("/client",actionsRouter)



module.exports = {
    rootRouter
}