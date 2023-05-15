const { takeEvery, fork, call, put } = require("redux-saga/effects");
const { getMemberList, postMemberList, deleteMemberID, getMemberID, putMemberID, setMember, setMemberList, setPostMember, setDeleteMember, setPutMember } = require("../../slices/memberSlice");
const { getListMemberAPI, postMemberListAPI, deleteMemberIDAPI, getMemberIDAPI, putMemberIDAPI } = require("../../../../api/memberAPI");


function* onHandleGetListMember(){
    const result = yield call(getListMemberAPI);
    if(result.code === "200"){
        yield put(setMemberList(result.data));
    }else{

    }
}

function* onHandelPostMemberList(payload){
    const { profile_id } = payload.data;
    const resutl = yield call(postMemberListAPI,profile_id);
    if(resutl.code === "200"){
        yield put(setPostMember(resutl.data));
    }else{

    }
}

function* onHandelDeleteMemberID(payload){
    const { id } = payload.data;
    const result = yield call(deleteMemberIDAPI,id);
    if(result.code === "200"){
        yield put(setDeleteMember(result.data));
    }else{

    }
}

function* onHandelGetMemberID(payload){
    const { id } = payload.data;
    const result = yield call(getMemberIDAPI,id);
    if(result.code === "200"){
        yield put(setMember(result.data));
    }else{

    }
}

function* onHandelPutMemberID(payload){
    const resutl = yield call(putMemberIDAPI,payload.data);
    if(resutl.code === "200"){
        yield put(setPutMember(resutl.data));
    }else{

    }
}

function* allHandelMemberSaga(){
    yield takeEvery(getMemberList.type,onHandleGetListMember);
    yield takeEvery(postMemberList.type,onHandelPostMemberList);
    yield takeEvery(deleteMemberID.type,onHandelDeleteMemberID);
    yield takeEvery(getMemberID.type,onHandelGetMemberID);
    yield takeEvery(putMemberID.type, onHandelPutMemberID);
}


export const memberSaga = [fork(allHandelMemberSaga)]