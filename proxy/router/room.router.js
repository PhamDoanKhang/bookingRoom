const express = require("express");
const roomRouter = express.Router();

const { getListRoom,postListRoom,deleteRoom,getRoomId,putRoomId, updateStatus } = require("../controller/rooms.controller");

roomRouter.get("/list", getListRoom);
// roomRouter.get("/room-list", getRoomList)
roomRouter.post("/post-list-room",postListRoom);
// roomRouter.put("/delete-room",deleteRoom);
roomRouter.get("/get-room-id",getRoomId);
roomRouter.put("/put-room-id",putRoomId);
roomRouter.put("/status", updateStatus);

module.exports = {
    roomRouter,
}