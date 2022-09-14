import React from 'react'
import './balance.css'
import { IoMdArrowDropdown} from 'react-icons/io'

const Balance = () => {
  return (
    <div className='balances'>
      <h2>Balance</h2>
      <div className='balance'>
        <div className='image'>
          <IoMdArrowDropdown size={20} color='rgba(85, 0, 128, 0.9)'/>
        </div>
        <div className='amount'>
          <p>income</p>
          <h3>$95000</h3>
        </div>
      </div>
    </div>
  )
}

export default Balance