import React from 'react'
import './profile.css'
import img4 from "../../images/img4.png"

const Profile = () => {
  return (
    <div>
      <div className='profile'>
        <h4>My Profile</h4>
        <div className='imag'>
          <img src={img4} alt='dam'/>
        </div>
        <h3>Dr Joseph</h3>
        <p>General Practitioner</p>
        <div>
          <h4>(5.0)</h4>
          
        </div>

      </div>
    </div>
  )
}

export default Profile