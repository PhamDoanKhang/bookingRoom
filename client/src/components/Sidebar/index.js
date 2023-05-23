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
      getItem(<Link to="/weekly_calendar">Lịch tuần</Link>, "sub1-3"),
      getItem(<Link to="/recommended_list-admin">Danh sách đề xuất</Link>, "sub1-4"),
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
