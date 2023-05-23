import { call, fork, takeEvery, put } from "redux-saga/effects";
import { getInfoSuggesID, setMetaData,getInfoSuggesList, postInfoSuggesList,deleteInfoSuggesID, putInfoSuggesID, setInforSuggesList, setInforSugges, setDeleteInforSugges, setPostInforSugges, setPutInforSugges} from "../../slices/infoSuggestionSlice";
import { getInfoSuggesListAPI, getInfoSuggesIDAPI, deleteInfoSuggesIDAPI, putInfoSuggesIDAPI, postInfoSuggesListAPI } from "../../../../api/infoSuggesListAPI";



function* onHandelgetInfoSuggesList(payload){
    const result = yield call(getInfoSuggesListAPI,payload.data);
    if(result.code === "200"){
        yield put(setInforSuggesList(result.data));
        yield put(setMetaData(result.metadata))
    }else{

    }
}

function* onHandelgetInfoSuggesID(payload){
    const { id } = payload.data;
    const result = yield call(getInfoSuggesIDAPI,id)
    if(result.code === "200"){
        console.log(result.data);
        yield put(setInforSugges(result.data))
    }else{

    }
}

function* onHandelDeleteInfoSuggesID(payload){
    const { id } = payload.data;
    const result = yield call(deleteInfoSuggesIDAPI,id);
    if(result.code === "200"){
        yield put(setDeleteInforSugges(result.data));
    }else{

    }
}

function* onHandelPutInfoSuggesID(payload){
    const { id, ...res } = payload.data;
    const result = yield call(putInfoSuggesIDAPI,{id,res})
    console.log(result);
    if(result.code === "200"){
        yield put(setPutInforSugges(result.data));
    }else{

    }

}

function* onHandlePostInfoSuggesList(payload){
    const { data } = payload;
    const result = yield call(postInfoSuggesListAPI,data);
    if(result.code === "200"){
        yield put(setPostInforSugges(result.data));
    }else{

    }
}

function* allHandelInfoSuggesSaga(){
    yield takeEvery(getInfoSuggesList.type,onHandelgetInfoSuggesList);
    yield takeEvery(getInfoSuggesID.type,onHandelgetInfoSuggesID);
    yield takeEvery(deleteInfoSuggesID.type,onHandelDeleteInfoSuggesID);
    yield takeEvery(putInfoSuggesID.type,onHandelPutInfoSuggesID);
    yield takeEvery(postInfoSuggesList.type,onHandlePostInfoSuggesList);
}

export const InfoSuggesSaga = [fork(allHandelInfoSuggesSaga)]