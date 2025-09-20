
document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById('skillsChart').getContext('2d');
    const chartTypes = ['bar', 'pie', 'line', 'radar'];
    let currentChartType = 'bar';
    let skillsChart;

    // Datos de tecnologías
    const labels = [
        'JavaScript', 'Ruby on Rails', 'Python', 'HTML', 'CSS',
        'Django', 'Bootstrap', 'PostgreSQL', 'MySQL',
        'JUnit & Mockito', 'Selenium', 'Cucumber & Gherkin',
        'Postman & Newman', 'JMeter'
    ];

    const dataValues = [
        85, 70, 80, 90, 95,
        89, 90, 75, 70,
        80, 78, 85, 82, 77
    ];

    // Colores más profesionales y variados
    const colors = [
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 99, 132, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 159, 64, 0.6)',
        'rgba(255, 205, 86, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 99, 71, 0.6)',
        'rgba(255, 165, 0, 0.6)',
        'rgba(100, 181, 246, 0.6)',
        'rgba(244, 67, 54, 0.6)',
        'rgba(0, 200, 83, 0.6)',
        'rgba(255, 202, 40, 0.6)',
        'rgba(121, 85, 72, 0.6)'
    ];

    const borderColors = colors.map(c => c.replace("0.6", "1"));

    // Función para crear el gráfico
    function createChart(chartType) {
        return new Chart(ctx, {
            type: chartType,
            data: {
                labels: labels,
                datasets: [{
                    label: 'Nivel de habilidad (%)',
                    data: dataValues,
                    backgroundColor: colors,
                    borderColor: borderColors,
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { position: 'top' },
                    tooltip: {
                        callbacks: {
                            label: function (tooltipItem) {
                                return tooltipItem.label + ': ' + tooltipItem.raw + '%';
                            }
                        }
                    }
                },
                scales: chartType !== 'pie' ? {
                    y: {
                        beginAtZero: true,
                        ticks: { stepSize: 10 }
                    }
                } : {}
            }
        });
    }

    // Gráfico inicial
    skillsChart = createChart(currentChartType);

    // Cambio aleatorio de tipo cada 10s
    setInterval(() => {
        let randomType;
        do {
            randomType = chartTypes[Math.floor(Math.random() * chartTypes.length)];
        } while (randomType === currentChartType);

        currentChartType = randomType;
        skillsChart.destroy();
        skillsChart = createChart(currentChartType);
    }, 10000);
});

