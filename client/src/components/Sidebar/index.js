import React from "react";
import Styles from "./Sidebar.module.css";

import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import { FaTrello } from "react-icons/fa";

const { Sider } = Layout;

function getItem(label, key, icon, children) {
    return {
      label,
      key,
      icon,
      children,
    };
}

function Sidebar() {
  const itemMenu = [
    getItem("Quản lí phòng họp", "sub1", <FaTrello />, [
      getItem(<Link to={{ pathname: "/manager_room_list", state: { fromDashboard: true },}}>Danh sách phòng họp</Link>,"sub1-1"),
      getItem(<Link to="/room_order">Danh sách đặt phòng</Link>, "sub1-2"),
      getItem(<Link to="/propose_manager">Danh sách đề xuất</Link>, "sub1-4"),
      getItem(<Link to="/weekly_calendar">Lịch tuần</Link>, "sub1-3"),
    ]),
    getItem("Quản lí phòng đặt", "sub2", <FaTrello />, [
      getItem(<Link to={{ pathname: "/room_order-user", state: { fromDashboard: true },}}>Đặt phòng</Link>,"sub2-1"),
      getItem(<Link to="/propose_manager">Danh sách đề xuất</Link>, "sub2-2"),
    ]),
    getItem("Quản lí phòng đặt", "sub3", <FaTrello />, [
      getItem(<Link to={{ pathname: "/room_order-user", state: { fromDashboard: true },}}>Đặt phòng</Link>,"sub3-1"),
      getItem(<Link to="/weeklyCalendar_register_List">Đăng ký lịch tuần</Link>, "sub3-2"),
      getItem(<Link to="/recommended_list">Đề xuất nội dung</Link>, "sub3-2"),
    ]),

  ];

  if(!window.location.href.includes("erp")){
      return (
        <Sider width={266} className={Styles.Sider}>
          <Menu mode="inline" items={itemMenu} />
        </Sider>
      )
  }else{
      return itemMenu
  }
}

export default Sidebar;
