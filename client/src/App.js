import "./App.css";

import React from "react";
import Styles from "../src/styles/globalStyles.module.css";
import store from "./store/store";
import Sidebar from "./components/Sidebar";

// import Index from "../src/components/Test/index";

import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import RoomManager from "./page/room_manager";
import RoomOrder from "./page/room_order_list";
import WeeklyCalendar from "./page/weeklyCalendar_list";
import RoomOrderList from "./page/room-order-user";
import RoomOrderUser from "./page/room_order";
import PopupPropose from "./components/PopupPropose";
import ProposeList from "./page/propose_list";
import ProposeContentList from "./page/propose_content_list";
import WeeklyCalendarRegisterList from "./page/register_weekly_list";

function App() {
  const HandelRouter = () => {
    return (
      <Routes>
          <Route path="/manager_room_list" element={<RoomManager />} />
          <Route path="/room_order" element={<RoomOrder />} />
          <Route path="/weekly_calendar" element={<WeeklyCalendar />} />
          <Route path="/room_order-user" element={<RoomOrderList />}></Route>
          <Route path="/order_room" element={<RoomOrderUser />}></Route>
          <Route path="/recommended_list-admin" element={<ProposeList />}></Route>
          <Route path="/propose_list-content" element={<ProposeContentList />}></Route>
          <Route path="/weeklyCalendar_register_List" element={<WeeklyCalendarRegisterList />}></Route>
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
