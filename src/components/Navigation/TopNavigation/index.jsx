import React from 'react'
import './topNavigation.css'
import { AiFillExclamationCircle } from "react-icons/ai";
import AppLogo from '../../AppLogo';

export default function TopNavigation() {
  return (
    <nav className='Navigation-top-container'>
      <ul className="navigation-top-content">
        <AppLogo objectName={true} objectScale={"0.9"} nameScale={"22px"}/>
        <li className="navigation-item"><AiFillExclamationCircle/></li>
      </ul>
    </nav>
  )
}
