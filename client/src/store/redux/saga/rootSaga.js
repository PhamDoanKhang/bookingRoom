import { all } from "redux-saga/effects";
import { LoadingSaga } from "./watchers/LoadingSaga";
import { roomSaga } from "./watchers/RoomSaga";
import { mettingRoomSaga } from "./watchers/MeetingRoomSaga";
import { weeklyScheduleSaga } from "./watchers/weeklyScheduleSaga";
import { MeetingInfoSaga  } from "./watchers/MeetingInfoSaga";
import { memberSaga } from "./watchers/MemberSaga";
import { InfoSuggesSaga } from "./watchers/InfoSuggesSaga";
import { participansSaga } from "./watchers/participantsSaga";
export default function* rootSaga(){
    yield all([
        ...LoadingSaga,
        ...roomSaga,
        ...mettingRoomSaga,
        ...weeklyScheduleSaga,
        ...MeetingInfoSaga,
        ...memberSaga,
        ...InfoSuggesSaga,
        ...participansSaga
    ])
}