import React from "react";
import { Link } from "react-router-dom";
import { FaTrello, FaBuromobelexperte, FaGripVertical } from "react-icons/fa";
export function getItem(label, key, icon, children) {
  return {
    label,
    key,
    icon,
    children,

    // className: key,
  };
}
// export const itemMenu = [
//   getItem(
//       <Link to="/">Quản lí phòng hợp</Link>,
//     "booking",
//     <FaTrello />,
//     [
//       getItem(
//         <Link to="/metting-room">Danh sách phòng hợp</Link>,
//         "booking-1",
//         <FaBuromobelexperte />
//       ),
//       getItem(
//         <Link to="/booking-room">Danh sách phòng đặt</Link>,
//         "booking-2",
//         <FaGripVertical />
//       ),
//     ]
//   ),
// ];
export const itemMenu = [
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
