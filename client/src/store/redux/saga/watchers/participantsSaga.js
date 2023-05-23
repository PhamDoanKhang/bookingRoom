import { takeEvery, call , fork, put } from "redux-saga/effects";
import { getIndividual, getDepartment, setDepartment, setIndividual } from "../../slices/participantsSlice";
import { GetIndividualAPI,getDepartmentAPI } from "../../../../api/participantsAPI";

function* onHandelGetIndividual(){
    const result = yield call(GetIndividualAPI)
   
   if(result.code === 200){
      yield put(setIndividual(result.data));
   }
}

function* onHandelGetDepartment(){
    const result = yield call(getDepartmentAPI)
    if(result.code === 200){
       yield put(setDepartment(result.data));
    }
}


function* allHandelparticipansSaga(){
    yield takeEvery(getIndividual.type,onHandelGetIndividual);
    yield takeEvery(getDepartment.type,onHandelGetDepartment);
   
}

export const participansSaga = [fork(allHandelparticipansSaga)];