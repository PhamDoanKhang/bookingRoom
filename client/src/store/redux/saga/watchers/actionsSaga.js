import { call, fork, put, takeLatest } from "redux-saga/effects"
import { getActions, setActions } from "../../slices/actionSlice"

import { callAPi } from "../../../../api/actions";

// Thực hiện các tác nhân được chọ
function* handleGetActionList(action) {
    // Call api
    const response = yield call(callAPi)
}

// Chứa danh sách các action cần thực hiện
function* onHandleGetActionList() {

    yield takeLatest(getActions.type, handleGetActionList)
}

export const actionSaga = [fork(onHandleGetActionList)]
