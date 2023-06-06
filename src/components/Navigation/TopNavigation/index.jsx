import React from 'react'
import './topNavigation.css'
import { AiFillExclamationCircle } from "react-icons/ai";
import AppLogo from '../../AppLogo';

export default function TopNavigation() {
  return (
    <nav className='Navigation-top-container'>
      <ul className="navigation-top-content">
        <AppLogo objectScale={"0.9"}/>
        <li className="navigation-item"><AiFillExclamationCircle/></li>
      </ul>
    </nav>
  )
}
