document.addEventListener("DOMContentLoaded", function () {
    var ctx = document.getElementById('skillsChart').getContext('2d');
    var skillsChart = new Chart(ctx, {
        type: 'bar', // Tipo de gráfico (barras)
        data: {
            labels: ['JavaScript', 'Ruby on Rails', 'Python', 'HTML', 'CSS', 'Django', 'Bootstrap', 'PostgreSQL', 'MySQL'], // Etiquetas de habilidades
            datasets: [{
                label: 'Nivel de habilidad',
                data: [85, 70, 80, 90, 95, 89, 90, 75, 70], // Niveles de habilidad (puedes personalizar)
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)', // JavaScript
                    'rgba(255, 99, 132, 0.2)', // Ruby on Rails
                    'rgba(75, 192, 192, 0.2)', // Python
                    'rgba(153, 102, 255, 0.2)', // HTML
                    'rgba(255, 159, 64, 0.2)', // CSS
                    'rgba(255, 205, 86, 0.2)', // Django
                    'rgba(54, 162, 235, 0.2)', // Bootstrap
                    'rgba(255, 99, 71, 0.2)', // PostgreSQL
                    'rgba(255, 165, 0, 0.2)'  // MySQL
                ], // Color de las barras
                borderColor: [
                    'rgba(54, 162, 235, 1)', // JavaScript
                    'rgba(255, 99, 132, 1)', // Ruby on Rails
                    'rgba(75, 192, 192, 1)', // Python
                    'rgba(153, 102, 255, 1)', // HTML
                    'rgba(255, 159, 64, 1)', // CSS
                    'rgba(255, 205, 86, 1)', // Django
                    'rgba(54, 162, 235, 1)', // Bootstrap
                    'rgba(255, 99, 71, 1)', // PostgreSQL
                    'rgba(255, 165, 0, 1)'  // MySQL
                ], // Color del borde
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
});


