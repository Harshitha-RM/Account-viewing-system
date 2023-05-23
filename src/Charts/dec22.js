import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';

const Dec22 = () => {
  useEffect(() => {
    const chartData = {
      labels: ['Dec 01','Dec 02', 'Dec 03','Dec 07', 'Dec 12', 'Dec 13','Dec 16', 'Dec 17', 'Dec 19', 'Dec 20', 'Dec 21', 'Dec 29', 'Dec 31'],
      datasets: [
        {
              label: 'Expenses',
            
          data: [24500,0,225.31,0,0,0,0,490,17850,5000,548,0,500,0],
              borderColor: 'red',
          backgroundColor:'red',
          fill: false,
        //   yAxisID: 'y-axis-1',
        },
        {
          label: 'Income',
          data: [0,10000,0,1,10,30000,1,0,0,0,0,10800,0,10000],
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

export default Dec22;

