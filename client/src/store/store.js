import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import rootSaga from "./redux/saga/rootSaga";
import loadingReducer from "./redux/slices/LoadingSlice";
import roomReducer from "./redux/slices/roomSlice";
import meetingRoomReducer from "./redux/slices/metingroomSlice"




// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

// config store the saga middleware
const store = configureStore({
    reducer:{
        loading: loadingReducer,
        room: roomReducer,
        meetingroom: meetingRoomReducer
    },
    middleware: [sagaMiddleware]
})

// use the saga middelware
sagaMiddleware.run(rootSaga)

export default store



