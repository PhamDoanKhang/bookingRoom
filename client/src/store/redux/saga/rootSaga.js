import { all } from "redux-saga/effects"
import { LoadingSaga } from "./watchers/LoadingSaga"
import { roomSaga } from "./watchers/RoomSaga"
import { mettingRoomSaga } from "./watchers/MeetingRoomSaga"

export default function* rootSaga(){
    yield all([
        ...LoadingSaga,
        ...roomSaga,
        ...mettingRoomSaga
    ])
}