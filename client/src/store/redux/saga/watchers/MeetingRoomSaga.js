import { call, delay, fork, put, takeEvery } from "redux-saga/effects"
import { getMeetingRoomUser,putMeetingRoom, postMeetingRoom,getMeetingRoomIDUser,setMeetingRoomUser , deleteMeetingRoom } from "../../slices/metingroomSlice"
import { getMeetingRoomAPI,deleteMeetingRoomAPI, postMeetingRoomAPI,getMeetingRoomIDUserAPI, updateMeetingRoomAPI } from "../../../../api/meetingRoomAPI"
import { setLoading } from "../../slices/LoadingSlice";

function* onHandelGetMeetingRoomSaga(){
    console.log("Run saga");
    const result = yield call(getMeetingRoomAPI)
    console.log(result);
    console.log(result);
    if(result.code === "200"){
        // yield put(setMeetingRoomUser(result.data))
        // yield put(setLoading(false))
    }else{
        // wirte code here
    }
}

function* onHandelDeleteRoomSaga(payload){
    const { id } = payload.data
    const result = yield call(deleteMeetingRoomAPI, id)
    // Viet Ham push o day
}

function* onHandelPostRoomSaga(payload){
    const { data } = payload
    const resutl = yield call(postMeetingRoomAPI,data)
}

function* onHandelGetRoomIDSaga(payload){
    const { id } = payload.data
    const resutl = yield call(getMeetingRoomIDUserAPI,id)
}   

function* onHandelUpdateMeetingRoom(payload){
    const result = yield call(updateMeetingRoomAPI,payload.data)
    console.log(result);
    // console.log({id,data});
}

function* allHandelMeetingRoomSaga(){
    yield takeEvery(getMeetingRoomUser.type,onHandelGetMeetingRoomSaga)
    yield takeEvery(deleteMeetingRoom.type,onHandelDeleteRoomSaga)
    yield takeEvery(postMeetingRoom.type,onHandelPostRoomSaga)
    yield takeEvery(getMeetingRoomIDUser.type,onHandelGetRoomIDSaga)
    yield takeEvery(putMeetingRoom.type,onHandelUpdateMeetingRoom)
}

export const mettingRoomSaga = [fork(allHandelMeetingRoomSaga)]