import { call, delay, fork, put, takeEvery } from "redux-saga/effects"
import { getMeetingRoomUser, setMetaPage ,putMeetingRoom, postMeetingRoom,getMeetingRoomIDUser,setMeetingRoomUser , deleteMeetingRoom , setMeetingRoomIDUser , setDeleteMeetingRoom, setPostMeetingRoom, setPutMeetingRoom, } from "../../slices/metingroomSlice"
import { getMeetingRoomAPI,deleteMeetingRoomAPI, postMeetingRoomAPI,getMeetingRoomIDUserAPI, updateMeetingRoomAPI } from "../../../../api/meetingRoomAPI"
import { setLoading } from "../../slices/LoadingSlice";
import { ErrorNotification, SuccessNotification } from "../../../../utils/Notification";

function* LoadingOut(){
    yield delay(500);
    yield put(setLoading(false));
}

function* onHandelGetMeetingRoomSaga(payload){
    const result = yield call(getMeetingRoomAPI,payload.data)
    if(result.code === "200"){
        yield LoadingOut();
        yield put(setMeetingRoomUser(result.data));
        yield put(setMetaPage(result.metadata));
    }else{
        yield LoadingOut();
        ErrorNotification("Lỗi tải dữ liệu")
        // wirte code here
    }
}

function* onHandelDeleteRoomSaga(payload){
    const { id } = payload.data;
    const result = yield call(deleteMeetingRoomAPI,id);
    if(result.code === "200"){
        const { id } = result.data;
        yield put(setDeleteMeetingRoom(id))
    }else{

    }
}

function* onHandelPostRoomSaga(payload){
    const { data } = payload;
    const resutl = yield call(postMeetingRoomAPI,data);
    if(resutl.code === "200"){
        yield put(setPostMeetingRoom(resutl.data))
    }
}

function* onHandelGetRoomIDSaga(payload){
    const { id } = payload.data;
    const resutl = yield call(getMeetingRoomIDUserAPI,id);
    if(resutl.code === "200"){
        yield put(setMeetingRoomIDUser(resutl.data));
    }else{

    }
}   

function* onHandelUpdateMeetingRoom(payload){
    const result = yield call(updateMeetingRoomAPI,payload.data);
    if(result.code === "200"){
        yield put(setPutMeetingRoom(result.data));
        if(result.data.status === 0){
            yield LoadingOut();
            SuccessNotification("Hủy trạng thái duyệt phòng");
        }else{
            yield LoadingOut();
            SuccessNotification("Đặt phòng đã được duyệt");
        }
    }else{
        ErrorNotification("Xử lý thất bại");
    }
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