import { call, fork, takeEvery } from "redux-saga/effects";
import { getMeetingInforList,postMeetingInfoList, deleteMeetingInfo, getMeetingInfor, putMeetingInfo} from "../../slices/meetingInfoSlice";
import { getListMeetingInfoAPI,postMeetingInfoAPI,deleteMeetingInfoAPI,getMeetingInfoAPI, putMeetingInfoAPI} from "../../../../api/meetingInfoAPI";





function* onHandelGetMeetingInfoList(){
    const result = yield call(getListMeetingInfoAPI);
    console.log(result);
}

function* onHandelPostMeetingInfo(payload){
    const {data} = payload
    const resuft = yield call(postMeetingInfoAPI,data)
}   

function* onHandelDeleteMeetingInfo(payload){
    const { id } = payload.data;
    const result = yield call(deleteMeetingInfoAPI,id)
}

function* onHandelGetMeetingInfo(payload){
    const { id } = payload.data;
    const result = yield call(getMeetingInfoAPI,id)

}

function* onHandelPutMeetingInfo(payload){
    const { data } = payload
    const result = yield call(putMeetingInfoAPI,data)
}

function* allHandelMeetingInfoSaga(){
    yield takeEvery(getMeetingInforList.type,onHandelGetMeetingInfoList);
    yield takeEvery(postMeetingInfoList.type,onHandelPostMeetingInfo);
    yield takeEvery(deleteMeetingInfo.type,onHandelDeleteMeetingInfo);
    yield takeEvery(getMeetingInfor.type,onHandelGetMeetingInfo);
    yield takeEvery(putMeetingInfo.type,onHandelPutMeetingInfo);
}


export const MeetingInfoSaga = [fork(allHandelMeetingInfoSaga)]