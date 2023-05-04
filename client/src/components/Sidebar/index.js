import React, { useEffect } from "react";
import Styles from "./Sidebar.module.css";
import { Layout, Menu } from "antd";
// import { itemMenu } from "./SidebarItems";
import { useDispatch } from "react-redux";
import { getActions } from "../../store/redux/slices/actionSlice";
import { Link, NavLink } from "react-router-dom";
import { FaTrello, FaBuromobelexperte, FaGripVertical } from "react-icons/fa";

const { Sider } = Layout;
function getItem(label, key, icon, children) {
    return {
      label,
      key,
      icon,
      children,
  
      // className: key,
    };
  }

function Sidebar() {


    const itemMenu = [
        //   getItem("Quản lí phòng họp","sub16",  <FaTrello />,
        //   [
        //     getItem(<Link to="/metting-room">Danh sách phòng họp</Link>,'sub17',null),
      
        //   ]
        //   ),
        getItem("Quản lí phòng họp", "sub1", <FaTrello />, [
          getItem(
            <Link
              to={{
                pathname: "/meeting-room",
                state: { fromDashboard: true },
              }}
            >
              Danh sách phòng họp
            </Link>,
            "1"
          ),
          getItem(<Link to="/book">Option 2</Link>, "2"),
          getItem("Option 4", "4"),
        ]),
      ];

  // const dispath = useDispatch()
  // useEffect(()=>{
  //     dispath(getActions("khang"))
  // },[])
  if (window.location.href.includes("erp")) {
    return itemMenu;
  } else {
    return (
      <>
        <Sider width={266} className={Styles.Sider}>
          <Menu theme="dark" mode="inline" items={itemMenu} />
        </Sider>
      </>
    );
  }
}

export default Sidebar;
