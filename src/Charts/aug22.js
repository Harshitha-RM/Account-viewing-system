import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';

const Aug22 = () => {
  useEffect(() => {
    const chartData = {
      labels: ['Aug 01','Aug 02', 'Aug 06','Aug 08', 'Aug 09', 'Aug 11','Aug 13', 'Aug 14', 'Aug 16', 'Aug 17', 'Aug 18', 'Aug 19', 'Aug 22', 'Aug 26', 'Aug 29', 'Aug 31'],
      datasets: [
        {
            label: 'Expenses', 
            data: [9076,3216,0,10396,2526,3909,430,0,0,449,0,849,4000,5000,2116.19,20000 ],
            borderColor: 'red',
            backgroundColor:'red',
            fill: false,
        //   yAxisID: 'y-axis-1',
        },
        {
          label: 'Income',
          data: [0,10576,10000,396,4000,0,6000,8000,10000,25000,60000,10000,11800,1,0],
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

export default Aug22;

