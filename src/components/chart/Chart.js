import React, { useEffect, useState } from 'react'
import './chart.css'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Title,
  Legend
} from 'chart.js'
import {Line} from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Title,
  Legend
);

const Chart = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });
  
  const [chartOptions, setChartOptions] = useState({});
  
  useEffect(() => {
    setChartData({
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      datasets: [
        {
          label: 'Male',
          data:[150, 240, 200, 240, 170, 250, 250],
          backgroundColor: [
            'rgba(85, 0, 128, 0.1)'
          ],
          borderWidth: 2,
          borderColor: 'rgb(85, 0, 128)',
          tension: 0.3,
          fill: true,
          pointBorderwidth: 1,
          pointBackgroundColor:'rgba(85, 0, 128, 0.1)',
          pointBorderColor: 'rgba(85, 0, 128, 0.1)'
        },{
          label: 'Female',
          data:[310, 240, 300, 190, 250, 160, 210],
          backgroundColor: [
            'rgba(255, 153, 51, 0.1)'
          ],
          borderWidth: 2,
          borderColor: 'rgb(255, 153, 51)',
          tension: 0.3,
          fill: true,
          pointBorderwidth: 1,
          pointBackgroundColor:'rgba(255, 153, 51, 0.1)',
          pointBorderColor: 'rgba(255, 153, 51, 0.1)'
        }
      ]
    })
    setChartOptions({
      plugins:{
        legend:{
          position:'top',
          labels:{
            usePointStyle: true,
            pointStyle: 'circle'
          }
        }
      },
      responsive: true,
      maintainAspectRatio: false,
      scales:{
        x:{
          grid:{
            display: false
          }
        },
        y:{
          suggestedMin: 100,
          suggestedMax: 350,
          ticks:{
            stepSize: 50
          }
        }
      }
    })
  }, [])

  return (
    <div className='chart' style={{width:'100%', height:'300px'}}>
      <Line data={chartData} options={chartOptions}/>
    </div>
  )
}

export default Chart