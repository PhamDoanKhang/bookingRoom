import React from "react"
import { Button,Tooltip } from 'antd'
import Styles from "./ButtonCustom.module.css"


function ButtonCustom({title,icon,onClick,bgColorAction}) {
    return ( 
        <Tooltip title={title}>
            <Button 
                className={Styles[bgColorAction]}
                icon={icon}
                block
                onClick={onClick}
                
            />
        </Tooltip>
     );
}

export default ButtonCustom;