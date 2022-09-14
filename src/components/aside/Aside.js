import React from 'react'
import './aside.css'
import {BiClinic} from 'react-icons/bi'
import {HiHome} from 'react-icons/hi'
import {FaCalendarAlt} from 'react-icons/fa'
import {BsFillPersonFill} from 'react-icons/bs'
import {MdOutlineMailOutline} from 'react-icons/md'
import {TiContacts} from 'react-icons/ti'
import {RiSettings3Line} from 'react-icons/ri'
import {HiOutlineLogout} from 'react-icons/hi'


const ChangeColor = () => {
  HiHome.color = "#aa00ff";
}

const Aside = () => {
  return (
    <aside>
      <div className='logo'>
        <BiClinic className='HomeIcon' color='#aa00ff'/>
      </div>
      <div className='sidebar'>
        <a href='#' onClick={() => ChangeColor()}>
          <HiHome size={25} color='var(--color-icon)'/>
        </a>
        <a href='#'>
          <FaCalendarAlt size={20} color='var(--color-icon)'/>
        </a>
        <a href='#'>
          <BsFillPersonFill size={20} color='var(--color-icon)'/>
        </a>
        <a href='#'>
          <MdOutlineMailOutline size={20} color='var(--color-icon)'/>
        </a>
        <a href='#'>
          <TiContacts size={20} color='var(--color-icon)'/>
        </a>
        <a href='#'>
          <RiSettings3Line size={20} color='var(--color-icon)'/>
        </a>
        <a href='#'>
          <HiOutlineLogout size={20} color='var(--color-icon)'/>
        </a>
      </div>
    </aside>
  )
}

export default Aside