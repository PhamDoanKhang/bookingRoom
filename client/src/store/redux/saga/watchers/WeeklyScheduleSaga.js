import { call, fork, takeEvery } from "redux-saga/effects";
import { getWeeklyScheduleList, setWeeklyScheduleList, postWeekluScheduleID, deleteWeekluScheduleID, getWeeklyScheduleId, setWeeklyScheduleID, putWeeklyScheduleID } from "../../slices/weeklyScheduleSlice";
import { getWeeklyScheduleAPI,PostWeeklyScheduleAPI,DeleteWeeklyScheduleAPI, getWeeklyScheduleIDAPI, putWeekScheduleAPI} from "../../../../api/weeklyScheduleAPI";

function* onHandelGetWeeklySchedule(){
    const result = yield call(getWeeklyScheduleAPI)
    console.log(result);
    if(result.code === "200"){
        yield put(setWeeklyScheduleList(result.data));
    }else{
        // code here
    }
}

function* onHandlePostWeeklyScheduleID(payload){
    const {profile_id} = payload.data;
    const result = yield call(PostWeeklyScheduleAPI,profile_id);
    console.log(result);

}

function* onHandelDeleteWeeklyScheduleID(payload){
    const { id } = payload.data;
    const result = yield call(DeleteWeeklyScheduleAPI,id);
    console.log(result);
}

function* onHandleWeeklyScheduleID(payload){
    const { id } = payload.data
    const result = yield call(getWeeklyScheduleIDAPI,id)
}

function* onHandelPutWeeklyScheduleID(payload){
    console.log(payload);
    const result = yield call(putWeekScheduleAPI,payload.data);
    console.log(result);
}

function* allHandelScheduleSaga(){
    yield takeEvery(getWeeklyScheduleList.type,onHandelGetWeeklySchedule);
    yield takeEvery(postWeekluScheduleID.type,onHandlePostWeeklyScheduleID);
    yield takeEvery(deleteWeekluScheduleID.type,onHandelDeleteWeeklyScheduleID);
    yield takeEvery(getWeeklyScheduleId.type,onHandleWeeklyScheduleID);
    yield takeEvery(putWeeklyScheduleID.type,onHandelPutWeeklyScheduleID )
}


export const weeklyScheduleSaga = [fork(allHandelScheduleSaga)];