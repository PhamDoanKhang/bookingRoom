import { call, fork, put, takeLatest } from "redux-saga/effects"
import { getLoading,setLoading } from "../../slices/LoadingSlice";

function* onHandelLoading(){
    yield put(setLoading(true))
}

function* allHandelLoading(){
    yield takeLatest(getLoading.type,onHandelLoading)
}


export const LoadingSaga = [fork(allHandelLoading)]