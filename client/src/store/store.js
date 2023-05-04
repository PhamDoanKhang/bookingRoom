import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./redux/saga/rootSaga";
import actionReducer from "../store/redux/slices/actionSlice"
// create the saga middleware
const sagaMiddleware = createSagaMiddleware()


// config store the saga middleware
const store = configureStore({
    reducer:{
        actions: actionReducer
    },
    middleware: [sagaMiddleware]
})

// use the saga middelware
sagaMiddleware.run(rootSaga)

export default store



