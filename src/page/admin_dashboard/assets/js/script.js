const ctx = document.getElementById('salesChart').getContext('2d');
      const salesChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: Array.from({length: 60}, (_, i) => (i + 1) * 1000),
          datasets: [{
            label: 'Sales',
            data: [20, 30, 45, 25, 50, 40, 55, 35, 60, 70, 65, 55, 50, 45, 55, 35, 25, 60, 45, 40, 30, 20, 45, 55, 50, 45, 60, 55, 50, 45, 40, 30, 20, 45, 60, 55, 50, 45, 35, 40, 50, 60, 55, 45, 40, 35, 50, 45, 40, 55, 60, 55, 45, 50, 55, 60, 50, 40, 35, 30],
            borderColor: '#007bff',
            fill: true,
            backgroundColor: 'rgba(0, 123, 255, 0.1)',
            tension: 0.4
          }]
        },
        options: {
          scales: {
            x: {
              title: {
                display: true,
                text: 'Time'
              }
            },
            y: {
              title: {
                display: true,
                text: 'Sales (%)'
              },
              min: 0,
              max: 100
            }
          }
        }
      });