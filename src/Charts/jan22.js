import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';

const Jan22 = () => {
  useEffect(() => {
    const chartData = {
      labels: ['Jan 03', 'Jan 07', 'Jan 10','Jan 11','Jan 12','Jan 13', 'Jan 14', 'Jan 17','Jan 19', 'Jan 20','Jan 21','Jan 25','Jan 31'],
      datasets: [
        {
          label: 'Expenses',
          data: [401, '' ,2926.00, 706.82, 1929.59, '',5000.00,'' , 3741.85, 2769, '',619.00, 3030.00  ],
          borderColor: 'red',
          backgroundColor: 'red',
          fill: false,
          // yAxisID: 'y-axis-1',
        },
        {
          label: 'Income',
          data: [8,445.00, 1001.00, 6,124.00,'',2070.00, 8169.00, 4100.00, 10000.00,'','',19496.00, 706.00],
          borderColor: 'green',
          fill: false,
          backgroundColor: 'green',
          // yAxisID: 'y-axis-2',
        },
      ],
    };



    const canvasRef = document.getElementById('myChart');
    const chart = new Chart(canvasRef, {
      type: 'line',
      data: chartData,
      
    });

      return () => {
        chart.destroy();
       
    };
  }, []);

    return (<canvas id="myChart" style={{ maxWidth: '900px', maxHeight: '400px'}} />
      
    );

};

export default Jan22;

