import { takeEvery, call , fork  } from "redux-saga/effects";
import { getIndividual, getDepartment, setDepartment, setIndividual } from "../../slices/participantsSlice";


function* onHandelGetIndividual(){
    const result = yield call(GetIndividualAPI)
    console.log(result);
}

function* onHandelGetDepartment(){

}


function* allHandelparticipansSaga(){
    yield takeEvery(getIndividual.type,onHandelGetIndividual);
    yield takeEvery(getDepartment.type,onHandelGetDepartment);
   
}

export const participansSaga = [fork(allHandelparticipansSaga)];