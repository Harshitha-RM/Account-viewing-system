import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';

const Feb22 = () => {
  useEffect(() => {
    const chartData = {
      labels: ['Feb 01', 'Feb 02', 'Feb 03','Feb 04','Feb 05','Feb 06','Feb 07','Feb 08', 'Feb 09', 'Feb 10','Feb 12','Feb 13', 'Feb 15', 'Feb 16', 'Feb 17', 'Feb 18', 'Feb 19', 'Feb 20', 'Feb 21', 'Feb 24', 'Feb 25', 'Feb 28'],
      datasets: [
        {
              label: 'Expenses',
            
          data: [1500.00, 500.00, 5000.00, 2.00, 0, 3078.00, 15.67, 11615.00, 3000, 0, 969.78, 706.82,11132,0,0, 1880.52, 11500,0,0,0,0,1000],
              borderColor: 'red',
          backgroundColor:'red',
          fill: false,
         
        },
        {
          label: 'Income',
          data: [3000,0,0,0,3000,2703,0,2479,1000,1780.64,0,500,2,695.16,7971.78,0,0,1000,3000,7.84,78501,0],
            borderColor: 'green',
            backgroundColor:'green',
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

export default Feb22;

