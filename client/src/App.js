import "./App.css";

import React from "react";
import Styles from "../src/styles/globalStyles.module.css";
import store from "./store/store";
import Sidebar from "./components/Sidebar";

import Index from "../src/components/Test/index";
import Test from "../src/components/Test/index";

import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import RoomManager from "./page/room_manager";

function App() {
  const HandelRouter = () => {
    return (
      <Routes>
          <Route path="/room_manager" element={<RoomManager />} />
          
      </Routes>
    );
  };
  if (window.location.href.includes("erp")) {
    return (
      <Provider store={store}>
        <div className={Styles.container}>
          <Routes>
            <Route path="/book" element={<Index />} />
          </Routes>
            {/* {HandelRouter()} */}
        </div>
      </Provider>
    );
  } else {
    return (
        <Provider store={store}>
          <ToastContainer />
          <BrowserRouter basename="/">
            <div className={Styles.container}>
                <Sidebar />
                {HandelRouter()}
            </div>
          </BrowserRouter>
        </Provider>
    );
  }
}

export default App;
