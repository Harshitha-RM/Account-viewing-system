import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';

const May22 = () => {
  useEffect(() => {
    const chartData = {
      labels: ['May 02','May 03', 'May 07', 'May 08','May 09', 'May 10', 'May 11', 'May 12', 'May 15', 'May 16', 'May 18', 'May 19', 'May 22', 'May 24', 'May 25', 'May 26', 'May 30', 'May 31'],
      datasets: [
        {
        label: 'Expenses',
          data: [50000,6468,0,0,50000,0,6000,0,2100,0,0,5000,23600,4524,1000,6025,3789,0],
          borderColor: 'red',
              fill: false,
          backgroundColor:'red',
        //   yAxisID: 'y-axis-1',
        },
        {
          label: 'Income',
          data: [50000,0,23500,4900,4200,12800,4640,20000,0,1750,18282,2000,5000,0,17576.96,5000,2400,10000],
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

export default May22;

