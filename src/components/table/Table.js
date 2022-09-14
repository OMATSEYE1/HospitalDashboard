import React from 'react'
import './table.css'
import img2 from "../../images/img2.jpg"
import img1 from "../../images/img1.png"

const Table = () => {
  return (
    <div className='recent-patients'>
      <h2>Recent Patients</h2>
      <table>
        <tbody>
          <tr>
            <td><img src={img2}/></td>
            <td>21/06/2021</td>
            <td>Andrio Rodgber</td>
            <td>37</td>
            <td>Cardiac Disease</td>
            <td>Room Number 157</td>
          </tr>
          <tr>
            <td><img src={img1}/></td>
            <td>21/06/2021</td>
            <td>Doukair Abatuo</td>
            <td>53</td>
            <td>Something Fever</td>
            <td>Room Number 259</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Table