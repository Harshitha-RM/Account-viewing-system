import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';

const Jan23 = () => {
  useEffect(() => {
    const chartData = {
      labels: ['Jan 02','Jan 03', 'Jan 05','Jan 06', 'Jan 07', 'Jan 08','Jan 09', 'Jan 10', 'Jan 11', 'Jan 12', 'Jan 13', 'Jan 14', 'Jan 15', 'Jan 16', 'Jan 17', 'Jan 18', 'Jan 19', 'Jan 20', 'Jan 21','Jan 23','Jan 24','Jan 25','Jan 29','Jan 30','Jan 31'],
      datasets: [
        {
              label: 'Expenses',
            
          data: [14500,192,0,85.84,0,223.23,0,1,7500,6750,2400,7000,1802,1802,0,0,200,0,18000,7443,2500,13000],
              borderColor: 'red',
          backgroundColor:'red',
          fill: false,
        //   yAxisID: 'y-axis-1',
        },
        {
          label: 'Income',
          data: [0,0,16400,0,40000,0,13196,0,0,0,0,0,41250,0,0,1423,379,0,21240,0,0,943,0,0.60,85.84,9],
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

export default Jan23;

