import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';

const March22 = () => {
  useEffect(() => {
    const chartData = {
      labels: ['March 01','March 03', 'March 04','March 08', 'March 09', 'March 11','March 14', 'March 15', 'March 16', 'March 17', 'March 18', 'March 19', 'March 21', 'March 22', 'March 23', 'March 24', 'March 28', 'March 30', 'March 31'],
      datasets: [
        {
              label: 'Expenses',
            
          data: [500.00,0,0,1.96,0,1151.70,3,628,450,706.82,0,2000,10024,390,0,0,0,200,0,0  ],
              borderColor: 'red',
          backgroundColor:'red',
          fill: false,
        //   yAxisID: 'y-axis-1',
        },
        {
          label: 'Income',
          data: [0, 6000, 20000,0, 1000,0,1533,0,0,2000,5000,20000,0,2192,6000,11000,11500,9400,2500],
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

export default March22;

