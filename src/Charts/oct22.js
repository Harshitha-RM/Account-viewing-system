import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';

const Oct22 = () => {
  useEffect(() => {
    const chartData = {
      labels: ['Oct 01','Oct 03', 'Oct 04','Oct 08', 'Oct 09', 'Oct 11','Oct 14', 'Oct 15', 'Oct 16', 'Oct 17', 'Oct 18', 'Oct 19', 'Oct 21', 'Oct 22', 'Oct 23', 'Oct 24', 'Oct 28', 'Oct 30', 'Oct 31'],
      datasets: [
        {
              label: 'Expenses',
            
          data: [4500,326.39,0,507,0,0,3500,10,4479,6569,942.82],
              borderColor: 'red',
          backgroundColor:'red',
          fill: false,
        //   yAxisID: 'y-axis-1',
        },
        {
          label: 'Income',
          data: [0,0,10001,0,17700,15001,6000,24990,0,0,0],
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

export default Oct22;

