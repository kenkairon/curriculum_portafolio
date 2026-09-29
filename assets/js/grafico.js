
document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById('skillsChart').getContext('2d');
    const chartTypes = ['bar', 'pie', 'line', 'radar'];
    let currentChartType = 'bar';
    let skillsChart;

    // Datos de tecnologías
    const labels = [
        'HTML5',
        'CSS3',
        'JavaScript',
        'TypeScript',
        'React',
        'Bootstrap',
        'Python',
        'Django',
        'Node.js',
        'Ruby / Rails',
        'SQL',
        'PostgreSQL',
        'Git / GitHub',
        'Docker',
        'AWS',
        'Postman / Newman'
    ];

    const dataValues = [
        90, 88, 85, 72,
        75, 90, 85, 85,
        72, 75, 80, 75,
        85, 65, 60, 82
    ];

    // Colores correspondientes a cada tecnología
    const colors = [
        'rgba(227, 79, 38, 0.6)',     // HTML5
        'rgba(21, 114, 182, 0.6)',    // CSS3
        'rgba(247, 223, 30, 0.6)',    // JavaScript
        'rgba(49, 120, 198, 0.6)',    // TypeScript
        'rgba(97, 218, 251, 0.6)',    // React
        'rgba(121, 82, 179, 0.6)',    // Bootstrap
        'rgba(55, 118, 171, 0.6)',    // Python
        'rgba(68, 183, 139, 0.6)',    // Django
        'rgba(104, 160, 99, 0.6)',    // Node.js
        'rgba(204, 52, 45, 0.6)',     // Ruby / Rails
        'rgba(68, 121, 161, 0.6)',    // SQL
        'rgba(51, 103, 145, 0.6)',    // PostgreSQL
        'rgba(240, 80, 50, 0.6)',     // Git / GitHub
        'rgba(36, 150, 237, 0.6)',    // Docker
        'rgba(255, 153, 0, 0.6)',     // AWS
        'rgba(255, 108, 55, 0.6)'     // Postman / Newman
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

