import { all } from "redux-saga/effects"
import { actionSaga } from "../saga/watchers/actionsSaga"

export default function* rootSaga(){
    yield all([
        ...actionSaga  
    ])
}