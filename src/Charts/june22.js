import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';

const June22 = () => {
  useEffect(() => {
    const chartData = {
        labels: ['June 01', 'June 02', 'June 04', 'June 06', 'June 08', 'June 11', 'June 13', 'June 15', 'June 16', 'June 17', 'June 18', 'June 19', 'June 20', 'June 22', 'June 23', 'June 24', 'June 27', 'June 28','June 29', 'June 30'],
      datasets: [
        {
        label: 'Expenses',
          data:[46000, 0, 18170, 0, 0, 11560, 4640, 10000, 0, 0, 0, 0, 0, 0, 15872.47, 0, 0, 0],
              borderColor: 'red',
          backgroundColor:'red',
          fill: false,
          yAxisID: 'y-axis-1',
        },
        {
          label: 'Income',
          data: [1000.00, 2500.00, 4225.00, 2500.00, 2525.00, 4600.00, 8000.00, 5600.00, 10000.00, 2400.00, 5000.00, 5000.00, 6500.00, 16000.00, 7000.00, 7000.00, 5000.00, 1500.00],
            borderColor: 'green',
          backgroundColor: 'green',
          fill: false,
          yAxisID: 'y-axis-2',
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

export default June22;

