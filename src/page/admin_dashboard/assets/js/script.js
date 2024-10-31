// Menggunakan Chart.js untuk membuat grafik garis
const ctx = document.getElementById('lineChart').getContext('2d');
const lineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: Array.from({length: 60}, (_, i) => i + 1),
        datasets: [{
            label: 'Sales',
            data: Array.from({length: 60}, () => Math.floor(Math.random() * 100)),
            fill: true,
            borderColor: 'blue',
            tension: 0.1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
