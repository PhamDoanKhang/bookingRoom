import { call, fork, takeEvery , put } from "redux-saga/effects";
import { getWeeklyScheduleList, setWeeklyScheduleList, postWeekluScheduleID, deleteWeekluScheduleID, getWeeklyScheduleId, setWeeklyScheduleID, putWeeklyScheduleID, setPostWeeklySchedu, setDeleteWeeklySchedu, setUpdateWeeklySchedu } from "../../slices/weeklyScheduleSlice";
import { getWeeklyScheduleAPI,PostWeeklyScheduleAPI,DeleteWeeklyScheduleAPI, getWeeklyScheduleIDAPI, putWeekScheduleAPI} from "../../../../api/weeklyScheduleAPI";
import { setPutMeetingRoom } from "../../slices/metingroomSlice";

function* onHandelGetWeeklySchedule(){
    const result = yield call(getWeeklyScheduleAPI);
    if(result.code === "200"){
        yield put(setWeeklyScheduleList(result.data));
    }else{
        // code here
    }
}

function* onHandlePostWeeklyScheduleID(payload){
    const result = yield call(PostWeeklyScheduleAPI,payload.data);
    if(result.code === "200"){
        yield put(setPostWeeklySchedu(result.data));
    }else{

    }

}

function* onHandelDeleteWeeklyScheduleID(payload){
    const { id } = payload.data;
    const result = yield call(DeleteWeeklyScheduleAPI,id);
    if(result.code === "200"){
        yield put(setDeleteWeeklySchedu(result.data));
    }else{

    }
    
}

function* onHandleWeeklyScheduleID(payload){
    const { id } = payload.data;
    const result = yield call(getWeeklyScheduleIDAPI,id);
    if(result.code === "200"){
        yield put(setWeeklyScheduleID(result.data));
    }else{

    }
}

function* onHandelPutWeeklyScheduleID(payload){
    const result = yield call(putWeekScheduleAPI,payload.data);
   
    if(result.code === "200"){
       yield put(setUpdateWeeklySchedu(result.data));
    }else{

    }
}

function* allHandelScheduleSaga(){
    yield takeEvery(getWeeklyScheduleList.type,onHandelGetWeeklySchedule);
    yield takeEvery(postWeekluScheduleID.type,onHandlePostWeeklyScheduleID);
    yield takeEvery(deleteWeekluScheduleID.type,onHandelDeleteWeeklyScheduleID);
    yield takeEvery(getWeeklyScheduleId.type,onHandleWeeklyScheduleID);
    yield takeEvery(putWeeklyScheduleID.type,onHandelPutWeeklyScheduleID )
}


export const weeklyScheduleSaga = [fork(allHandelScheduleSaga)];