document.addEventListener("DOMContentLoaded", function () {
    var ctx = document.getElementById('skillsChart').getContext('2d');
    var chartTypes = ['bar', 'pie', 'line', 'radar']; // Tipos de gráficos permitidos
    var currentChartType = 'bar'; // Tipo inicial del gráfico
    var skillsChart; // Variable para almacenar el gráfico

    // Función para crear un gráfico
    function createChart(chartType) {
        return new Chart(ctx, {
            type: chartType, // Tipo de gráfico dinámico
            data: {
                labels: ['JavaScript', 'Ruby on Rails', 'Python', 'HTML', 'CSS', 'Django', 'Bootstrap', 'PostgreSQL', 'MySQL'],
                datasets: [{
                    label: 'Nivel de habilidad',
                    data: [85, 70, 80, 90, 95, 89, 90, 75, 70],
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 205, 86, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 99, 71, 0.2)',
                        'rgba(255, 165, 0, 0.2)'
                    ],
                    borderColor: [
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 205, 86, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 99, 71, 1)',
                        'rgba(255, 165, 0, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    tooltip: {
                        callbacks: {
                            label: function (tooltipItem) {
                                return tooltipItem.dataset.label + ': ' + tooltipItem.raw + '%';
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            stepSize: 10
                        }
                    }
                }
            }
        });
    }

    // Crear el gráfico inicial
    skillsChart = createChart(currentChartType);

    // Función para cambiar el tipo de gráfico aleatoriamente
    function changeChartTypeRandomly() {
        var randomType = chartTypes[Math.floor(Math.random() * chartTypes.length)]; // Selección aleatoria de tipo
        if (randomType !== currentChartType) { // Cambiar solo si es diferente al actual
            currentChartType = randomType;

            // Destruir el gráfico actual
            skillsChart.destroy();

            // Crear uno nuevo con el tipo aleatorio
            skillsChart = createChart(currentChartType);
        }
    }

    // Cambiar el tipo de gráfico cada 10 segundos (10000 ms)
    setInterval(changeChartTypeRandomly, 10000);
});
