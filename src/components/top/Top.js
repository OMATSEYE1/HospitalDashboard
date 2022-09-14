import React from 'react'
import './top.css'
import {RiSearch2Fill, RiNotification2Fill} from 'react-icons/ri'
import {BsThreeDots} from 'react-icons/bs'
import {FcConferenceCall, FcDepartment, FcBusinessman} from 'react-icons/fc'
import {GiRotaryPhone} from 'react-icons/gi'

const Top = () => {
  return (
    <>
    <div className='uptop'>
      <div className='welcome'>
        <h2>Hello, Dr. Joseph</h2>
        <p>Have a nice day at work and stay healthy</p>
      </div>
      <div className='buttns'>
        <RiSearch2Fill color='var(--color-icon)'/>
        <input type='text' placeholder='Search'/>
        <div className='notification'>
        <RiNotification2Fill size={18} color='var(--color-icon)'/>
        </div>
      </div>
    </div>
    <div className='cards'>
      <div className='total-patients'>
        <a href='#'>
          <BsThreeDots/>
        </a>
        <div className='contain'>
          <FcConferenceCall size={35}/>
        </div>
        <p>Total Patients</p>
        <h2>1.521</h2>
      </div>
      <div className='consultation'>
        <a href='#'>
          <BsThreeDots/>
        </a>
        <div className='contain'>
          <GiRotaryPhone size={35}/>
        </div>
        <p>Consultation</p>
        <h2>307</h2>
      </div>
      <div className='staff'>
        <a href='#'>
          <BsThreeDots/>
        </a>
        <div className='contain'>
          <FcBusinessman size={35}/>
        </div>
        <p>Staff</p>
        <h2>771</h2>
      </div>
      <div className='rooms'>
        <a href='#'>
          <BsThreeDots/>
        </a>
        <div className='contain'>
          <FcDepartment size={35}/>
        </div>
        <p>Rooms</p>
        <h2>2.170</h2>
      </div>
    </div>
    </>
  )
}

export default Top