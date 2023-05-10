import { takeEvery, call , put, fork, delay } from "redux-saga/effects";
import { getListRoom , setListRoom , getRoomId , setRoomId, postRoom , deleteRoom , putRoom } from "../../slices/roomSlice";
import { getListRoomApi,getRoomIdApi,postRoomAPI,deleteRoomAPI,putRoomAPI } from "../../../../api/roomAPI";
import { setLoading } from "../../slices/LoadingSlice";
import { SuccessNotification, InfoNotification , ErrorNotification , WarnNotification } from "../../../../utils/Notification"



function* LoadingOut(){
    yield delay(1000);
    yield put(setLoading(false));
}
// Get list room
function* onHandelGetListRoom(){
    const result = yield call(getListRoomApi);
    if(result.code === "200"){
        yield put(setListRoom(result.data));
        yield call(LoadingOut);
    }else{
        yield call(LoadingOut);
    }
}    

// Get room id
function* onHandelGetRoomId(payload){
    const { id } = payload.data;
    const result = yield call(getRoomIdApi,id);
    if(result.code === "200"){
        yield put(setRoomId(result.data));
        yield call(LoadingOut);
    }else{
        yield call(LoadingOut);
    }
}

// Post room
function* onHandelPostRoom(payload){
    const resuft = yield call(postRoomAPI,payload.data);
    console.log(resuft);
    if(resuft.code === "200"){
        // Thực hiện gì đó khi tạo thành công
    }else{
        // Thực hiện gì đó khi tạo thất bại
    }
}

// Delete room id
function* onHandelDeleteRoom(payload){
    const { id } = payload.data;
    const result = yield call(deleteRoomAPI,id);
    if(result.code === "200"){
        // Chay doan code trong day 
    }else{
        // write code here
    }
}

// put room id
function* onHandelPutRoom(payload){
    const { data } = payload;
    const result = yield call(putRoomAPI,data);
}

function* allHandelRoomSaga(){
    yield takeEvery(getListRoom.type,onHandelGetListRoom);
    yield takeEvery(getRoomId.type,onHandelGetRoomId);
    yield takeEvery(postRoom.type,onHandelPostRoom);
    yield takeEvery(deleteRoom.type, onHandelDeleteRoom);
    yield takeEvery(putRoom.type, onHandelPutRoom);
}

export const roomSaga = [fork(allHandelRoomSaga)];

