import { takeEvery, call, put, fork, delay} from "redux-saga/effects";
import { getListRoom, postListRoom, setListRoom, getRoomId, setRoomId, postRoom, deleteRoom, putRoom, deleteListRoom, updateListRoomID} from "../../slices/roomSlice";
import { getListRoomApi, getRoomIdApi, postRoomAPI, deleteRoomAPI, putRoomAPI} from "../../../../api/roomAPI";
import { setLoading } from "../../slices/LoadingSlice";
import { SuccessNotification, InfoNotification, ErrorNotification, WarnNotification} from "../../../../utils/Notification";



// function* LoadingOut(){
//     yield delay(1000);
//     yield put(setLoading(false));
// }

function* onHandelGetListRoom(){
    const result = yield call(getListRoomApi);
    if(result.code === "200"){
        yield put(setListRoom(result.data));
    }else{
        // yield call(LoadingOut);
    }
}    

function* onHandelGetRoomId(payload){
    const { id } = payload.data;
    const result = yield call(getRoomIdApi,id);
    if(result.code === "200"){
        yield put(setRoomId(result.data));
    }else{
    }
}

function* onHandelPostRoom(payload){
    const result = yield call(postRoomAPI,payload.data);
    if(result.code === "200"){
        yield put(postListRoom(result.data));
        // Thực hiện gì đó khi tạo thành công
    }else{
        // Thực hiện gì đó khi tạo thất bại
    }
}

function* onHandelDeleteRoom(payload){
    const { id } = payload.data;
    const result = yield call(deleteRoomAPI,id);
    if(result.code === "200"){
        yield put(deleteListRoom(result.data));
        
    }else{
        // write code here
    }
}

// put room id
function* onHandelPutRoom(payload){
    const { data } = payload;
    const result = yield call(putRoomAPI,data);
    if(result.code === "200"){
       yield put(updateListRoomID(result.data))
    }else{
   
    }
}

function* allHandelRoomSaga(){
    yield takeEvery(getListRoom.type,onHandelGetListRoom);
    yield takeEvery(getRoomId.type,onHandelGetRoomId);
    yield takeEvery(postRoom.type,onHandelPostRoom);
    yield takeEvery(deleteRoom.type, onHandelDeleteRoom);
    yield takeEvery(putRoom.type, onHandelPutRoom);
}

export const roomSaga = [fork(allHandelRoomSaga)];

