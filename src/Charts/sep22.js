import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';

const Sep22 = () => {
  useEffect(() => {
    const chartData = {
      labels: ['Sep 01','Sep 03', 'Sep 04','Sep 05', 'Sep 06', 'Sep 07','Sep 08', 'Sep 09', 'Sep 10', 'Sep 12', 'Sep 17', 'Sep 19', 'Sep 22', 'Sep 24', 'Sep 30'],
      datasets: [
        {
              label: 'Expenses',
            
          data: [4500,521.79,0,24307,1830,0,1411,0,0,5000,690,5000,6854,942,28000],
              borderColor: 'red',
          backgroundColor:'red',
          fill: false,
        //   yAxisID: 'y-axis-1',
        },
        {
          label: 'Income',
          data: [26000,2500,2500,7500,0,5000,1,1,750,0,0,0,0,0,0],
        borderColor: 'green',
        backgroundColor: 'green',
          fill: false,
        //   yAxisID: 'y-axis-2',
        },
      ],
    };

    const options = {
      scales: {
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Date',
          },
        }],
        yAxes: [
          {
            id: 'y-axis-1',
            position: 'left',
            scaleLabel: {
              display: true,
              labelString: 'Expenses (in thousands)',
            },
            ticks: {
              beginAtZero: true,
              stepSize: 2,
              callback: (value) => {
                return `${value}k`;
              },
            },
          },
          {
            id: 'y-axis-2',
            position: 'right',
            scaleLabel: {
              display: true,
              labelString: 'Income (in thousands)',
            },
            ticks: {
              beginAtZero: true,
              stepSize: 2,
              callback: (value) => {
                return `${value}k`;
              },
            },
          },
        ],
      },
    };

    const canvasRef = document.getElementById('myChart');
    const chart = new Chart(canvasRef, {
      type: 'line',
      data: chartData,
      options,
    });

      return () => {
        chart.destroy();
       
    };
  }, []);

    return (<canvas id="myChart" style={{ maxWidth: '900px', maxHeight: '400px'}} />
      
    );

};

export default Sep22;

