const express = require("express")
const roomRouter = express.Router()

const { getListRoom,postListRoom,deleteRoom,getRoomId,putRoomId } = require("../controller/rooms.controller")

roomRouter.get("/list", getListRoom)
roomRouter.post("/post-list-room",postListRoom)
roomRouter.delete("/delete-room",deleteRoom)
roomRouter.get("/get-room-id",getRoomId)
roomRouter.put("/put-room-id",putRoomId)



module.exports = {
    roomRouter
}