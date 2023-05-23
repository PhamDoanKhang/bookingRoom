import { takeEvery, call, put, fork, delay} from "redux-saga/effects";
import { getListRoom,getChangeOptionRoom, getRoomListAll ,getRoomList, postListRoom, setListRoom, getRoomId, setRoomId, postRoom, deleteRoom, putRoom, setMetaData, updateListRoomID} from "../../slices/roomSlice";
import { getListRoomApi, getRoomListAPI , getRoomIdApi, postRoomAPI, deleteRoomAPI, putRoomAPI} from "../../../../api/roomAPI";
import { setLoading } from "../../slices/LoadingSlice";
import { SuccessNotification, ErrorNotification} from "../../../../utils/Notification";



function* LoadingOut(){
    yield delay(500);
    yield put(setLoading(false));
}

function* onHandelGetListRoom(payload){
    const result = yield call(getListRoomApi,payload.data);
    console.log(payload.data);
    if(result.code === "200"){
        yield LoadingOut();
        yield put(setListRoom(result.data));
        yield put(setMetaData(result.metadata));
    }else{
        // yield LoadingOut();
        ErrorNotification("Tải dữ liệu thất bại");
    }
}    

function* onHandelGetRoomId(payload){
    const { id } = payload.data;
    const result = yield call(getRoomIdApi,id);
    if(result.code === "200"){
        console.log(result);
        yield put(setRoomId(result.data));
    }else{
    }
}

function* onHandelPostRoom(payload){
    
    const result = yield call(postRoomAPI,payload.data);
    if(result.code === "200"){
        yield put(postListRoom(result.data));
        yield LoadingOut();
        SuccessNotification("Tạo phòng thành công");
    }else{
        ErrorNotification("Tạo phòng thất bại");   
    }
}

function* onHandelDeleteRoom(payload){
    const result = yield call(deleteRoomAPI,payload.data);

    if(result.code === "200"){
        yield put(updateListRoomID(result.data));
        if(result.data?.status === 0){
            yield put(getChangeOptionRoom);
            yield LoadingOut();
            
            SuccessNotification("Mở thành công");
        }else{
            yield LoadingOut();
            SuccessNotification("Đóng thành công");
        }
    }else{
        ErrorNotification("Xử lý thất bại");
    }
}

// put room id
function* onHandelPutRoom(payload){
    const { data } = payload;
    const result = yield call(putRoomAPI,data);
    if(result.code === "200"){
       yield LoadingOut();
       yield put(updateListRoomID(result.data));
       SuccessNotification("Chỉnh sửa thành công");
    }else{
        ErrorNotification("Chỉnh sửa không thành công");
    }
}

function* onHandelGetRoomList(){
    const result = yield call(getRoomListAPI);
    console.log(result);
}

function* allHandelRoomSaga(){
    yield takeEvery(getListRoom.type,onHandelGetListRoom);
    yield takeEvery(getRoomId.type,onHandelGetRoomId);
    yield takeEvery(postRoom.type,onHandelPostRoom);
    yield takeEvery(deleteRoom.type, onHandelDeleteRoom);
    yield takeEvery(putRoom.type, onHandelPutRoom);
    yield takeEvery(getRoomList.type, onHandelGetRoomList);
    // yield takeEvery(getChangeOptionRoom.type, onHandelgetChangeOptionRoom);
}

export const roomSaga = [fork(allHandelRoomSaga)];

