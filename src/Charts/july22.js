import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';

const July22= () => {
  useEffect(() => {
    const chartData = {
        labels: ['July 01', 'July 02','July 07', 'July 11', 'July 13', 'July 15','July 18','July 22', 'July 25','July 26','July 28','July 30','July 31'],
      datasets: [
        {
        label: 'Expenses',
          data: [4500, 1665,0,1000, 221, 124, 1700,976, 0, 0,0, 15130,20000],
              borderColor: 'red',
          backgroundColor:'red',
          fill: false,
        //   yAxisID: 'y-axis-1',
        },
        {
          label: 'Income',
          data: [0,1550,7500,0,34500,70,0,4525,16500,2500,10000,0,1880,],
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

export default July22;

