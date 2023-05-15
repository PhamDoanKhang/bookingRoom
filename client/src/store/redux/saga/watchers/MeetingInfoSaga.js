import { call, fork, takeEvery, put} from "redux-saga/effects";
import { getMeetingInforList,postMeetingInfoList, deleteMeetingInfo, getMeetingInfor, putMeetingInfo, setMeetingInForList, setMeetingInfor, setPostMeeetingInfor, setDeleteMeetingInfor, setPutMeetingInfor} from "../../slices/meetingInfoSlice";
import { getListMeetingInfoAPI,postMeetingInfoAPI,deleteMeetingInfoAPI,getMeetingInfoAPI, putMeetingInfoAPI} from "../../../../api/meetingInfoAPI";





function* onHandelGetMeetingInfoList(){
    const result = yield call(getListMeetingInfoAPI);
    if(result.code === "200"){
        yield put(setMeetingInForList(result.data));
    }else{

    }
}

function* onHandelPostMeetingInfo(payload){
    const {data} = payload;
    const resuft = yield call(postMeetingInfoAPI,data)
    if(resuft.code === "200"){
        yield put(setPostMeeetingInfor(resuft.data))
    }else{

    }
}   

function* onHandelDeleteMeetingInfo(payload){
    const { id } = payload.data;
    const result = yield call(deleteMeetingInfoAPI,id);
    if(result.code === "200"){
        yield put(setDeleteMeetingInfor(result.data))
    }else{
        
    }
}

function* onHandelGetMeetingInfo(payload){
    const { id } = payload.data;
    const result = yield call(getMeetingInfoAPI,id);
    if(result.code === "200"){
        yield put(setMeetingInfor(result.data));
    }else{

    }
}

function* onHandelPutMeetingInfo(payload){
    const { data } = payload;
    const result = yield call(putMeetingInfoAPI,data);
    if(result.code === "200"){
        yield put(setPutMeetingInfor(result.data))
    }else{

    }
}

function* allHandelMeetingInfoSaga(){
    yield takeEvery(getMeetingInforList.type,onHandelGetMeetingInfoList);
    yield takeEvery(postMeetingInfoList.type,onHandelPostMeetingInfo);
    yield takeEvery(deleteMeetingInfo.type,onHandelDeleteMeetingInfo);
    yield takeEvery(getMeetingInfor.type,onHandelGetMeetingInfo);
    yield takeEvery(putMeetingInfo.type,onHandelPutMeetingInfo);
}


export const MeetingInfoSaga = [fork(allHandelMeetingInfoSaga)]