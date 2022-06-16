import React, { useState, useEffect } from "react"
import { Chart as ChartJS, BarElement } from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { Chart, registerables } from 'chart.js';
import { Link } from "react-router-dom";

Chart.register(...registerables);

ChartJS.register(
    BarElement
)

const BarChart = () => {

    
    //const numbers = NumberService.getNumbers();
    const [numbers, setNumbers] = useState([])

    const fetchData = () => {
        fetch("http://localhost:8080/testHistory")
          .then(response => {
            return response.json()
          })
          .then(data => {
            setNumbers(data)
          })
      }
      useEffect(() => {
        fetchData()
      }, [])

      var coins = numbers?.map(x => x.coinName);

    
    var data = {
        labels: numbers?.map(x => x.priceDate),
        
        datasets: [{
            label: `${coins[0]}`+ ' price in Nok',
            data: numbers?.map(x => x.coinPrice),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    }


    var options =  {
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        
    }
    
    
    return(
        <React.Fragment>
        <div>
            <Bar
            data={data}
            height={400}
            options={options}
            />
        </div>
        <div>
            <Link to="/home">Click here for home</Link>

        </div>
        </React.Fragment>
    )
}
export default BarChart