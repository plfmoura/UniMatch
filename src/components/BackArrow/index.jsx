import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

export default function BackArrow({color, size, top, left, onPress}) {
    
    const options = {
        style: {
            color: color ? color : "#333",
            fontSize: size ? size : "3rem",
            position: 'absolute',
            top: top ? top : "4%",
            left: left ? left : "2%",
            cursor: 'pointer'
        }
    }

  return (
        <IoIosArrowBack style={options.style} onClick={onPress}/>
    )
}
