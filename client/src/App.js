import React from "react";
import "./App.css";
import Styles from "../src/styles/globalStyles.module.css";
import { Provider } from "react-redux";
import store from "./store/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Sidebar from "./components/Sidebar";
import { getActions } from "./store/redux/slices/actionSlice";
import Index from "../src/components/Test/index";
function App() {
  const HandelRouter = () => {
    return (
      <Routes>
          <Route path="/book" element={<Index />} />
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
