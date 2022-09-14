import React from 'react'
import './index.css'
import Aside from './components/aside/Aside'
import Top from './components/top/Top'
import Chart from './components/chart/Chart'
import Table from './components/table/Table'
import Profile from './components/profile/Profile'
import Doctors from './components/doctors/Doctors'
import Balance from './components/balance/Balance'

const App = () => {
  return (
    <>
    <div className='container'>
      <div className='aside'>
        <Aside />
      </div>
      <div className='main'>
        <Top/>
        <Chart/>
        <Table/>
      </div>
      <div className='right'>
        <Profile/>
        <Doctors/>
        <Balance/>
      </div>
    </div>
    </>
  )
}

export default App