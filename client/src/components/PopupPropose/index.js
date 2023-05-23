import Styles from "./PopupPropose.module.css";
import React from "react";

import TextArea from "antd/es/input/TextArea";
import { CloseOutlined } from "@ant-design/icons";

import { Checkbox, Select } from "antd";
function PopupPropose({setShowPopupPropose}) {
    return ( 
        <div className={Styles["bg-custom"]}>
        <div className={Styles.add_room}>
            <div className={Styles["add_room-close"]}>
                <CloseOutlined onClick={()=>(setShowPopupPropose(false))} />
            </div>
            <div className={Styles["add_room-container"]}>
                <div className={Styles["add_room-title"]}>
                    <h2>Thêm đề xuất</h2>
                </div>
                <div className={Styles["detail_room-note"]}>
                    <h3>Nội dung cuộc họp:</h3>
                    <div className={Styles["detail_room-text"]}>
                        <TextArea value={""} />
                    </div>
                </div>
                <div className={Styles["title"]}>Thành phần</div>
                <div className={Styles["order_room-item"]}>
                    <Checkbox className={Styles["checkbox"]}>Phòng ban</Checkbox>
                    <Select className={Styles["order_room-select"]} />  
                </div>
                <div className={Styles["order_room-item"]}>
                    <Checkbox className={Styles["checkbox"]}>Cá nhân</Checkbox>
                    <Select className={Styles["order_room-select"]} />  
                </div>
                <div className={Styles["detail_room_list"]}>
                    <h3>Danh sách phòng ban các nhân</h3>
                    <div className={Styles["detail_room_list-user"]}>
                        <div className={Styles["detai_room-user"]}>
                           <span>Cá nhân 1</span>
                        </div>
                        <div className={Styles["detai_room-user"]}>
                            <span>Cá nhân 2</span>
                        </div>
                    </div>
                </div>
                <div className={Styles["detail_room-display"]}>
                        <div></div>
                        <div className={Styles["detail_room-btn"]}>
                            <button>Đề xuất</button>
                            <button onClick={()=>{setShowPopupPropose(false)}}>Hủy</button>
                        </div>
                    </div>
            </div>
        </div>
    </div>
     );
}

export default PopupPropose;