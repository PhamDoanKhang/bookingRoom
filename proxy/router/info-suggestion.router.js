const express = require("express")
const InfoSuggesRouter = express.Router()

const { getListInfoSugges, deleteInfoSugges, postInfoSugges, getInfoSuggesID,putInfoSuggesID } = require("../controller/info-sugges.controller")

InfoSuggesRouter.get("/", getListInfoSugges)
InfoSuggesRouter.get("/get",getInfoSuggesID)
InfoSuggesRouter.delete("/delete", deleteInfoSugges)
InfoSuggesRouter.post("/post", postInfoSugges)
InfoSuggesRouter.put("/put",putInfoSuggesID)

module.exports = {
    InfoSuggesRouter
}