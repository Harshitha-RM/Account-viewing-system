import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';

const April22 = () => {
  useEffect(() => {
    const chartData = {
      labels: ['April 02', 'April 04', 'April 05','April 06','April 07','April 12', 'April 18', 'April 20', 'April 22','April 25','April 27'],
      datasets: [
        {
              label: 'Expenses',
            
          data: [800,7002,0,2750,0,3760,0,4000,0,0,4000],
            borderColor: 'red',
          backgroundColor:'red',
          fill: false,
         
        },
        {
          label: 'Income',
          data: [6875,12000,2,600,1000,0,13000,7000,1930,8500,0],
            borderColor: 'green',
          backgroundColor: 'green',
          fill: false,
          
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

export default April22;

