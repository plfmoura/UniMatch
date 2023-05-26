import React from 'react'
import './bottomNavigation.css'
import { AiFillExclamationCircle } from "react-icons/ai";

export default function BottomNavigation() {
  return (
    <nav className='Navigation-bottom-container'>
      <ul className="navigation-bottom-content">
        <li className="navigation-item"><AiFillExclamationCircle /></li>
        <li className="navigation-item"><AiFillExclamationCircle /></li>
        <li className="navigation-item"><AiFillExclamationCircle /></li>
        <li className="navigation-item"><AiFillExclamationCircle /></li>
      </ul>
    </nav>
  )
}
