import React from 'react'
import './doctors.css'
import img2 from "../../images/img2.jpg"
import img1 from "../../images/img1.png"

const Doctors = () => {
  return (
    <div className='doctors'>
      <div className='head'>
        <h3>Doctors List</h3>
        <small><p>This day</p></small>
      </div>
      <div className='doctorslist'>
        <div className='doctor'>
          <img src={img2}/>
          <div className='message'>
            <p>Dr. Fan Zhendong</p>
            <small>General Practitioner</small>
          </div>
        </div>
          <div className='doctor'>
          <img src={img2}/>
          <div className='message'>
            <p>Dr. Lin Shindong</p>
            <small>Surgeon</small>
          </div>
        </div>
          <div className='doctor'>
          <img src={img2}/>
          <div className='message'>
            <p>Dr. Zhuo Qihao</p>
            <small>Dentist</small>
          </div>
        </div>
          <div className='doctor'>
          <img src={img2}/>
          <div className='message'>
            <p>Dr. Tomazaku Harimoto</p>
            <small>Oculist</small>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Doctors