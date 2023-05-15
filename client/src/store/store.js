import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import rootSaga from "./redux/saga/rootSaga";
import loadingReducer from "./redux/slices/LoadingSlice";
import roomReducer from "./redux/slices/roomSlice";
import meetingRoomReducer from "./redux/slices/metingroomSlice"
import weeklyScheduleRuducer from "./redux/slices/weeklyScheduleSlice";
import meetingInfoReducer from "./redux/slices/meetingInfoSlice";
import memberReducer from "./redux/slices/memberSlice";
import infoSuggesReducer from "./redux/slices/infoSuggestionSlice";
// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

// config store the saga middleware
const store = configureStore({
    reducer:{
        loading: loadingReducer,
        room: roomReducer,
        meetingroom: meetingRoomReducer,
        weeklySchedule: weeklyScheduleRuducer,
        meetingInfo: meetingInfoReducer,
        member: memberReducer,
        infoSugges: infoSuggesReducer,
    },
    middleware: [sagaMiddleware]
})

// use the saga middelware
sagaMiddleware.run(rootSaga)

export default store



