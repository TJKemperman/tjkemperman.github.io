
const DATA_COUNT = 10;
const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 60 };

// Static labels (months of the year)
const labels = ['Week 2', 'Week 4', 'Week 6', 'Week 8', 'Week 10', 'Week 12', 'Week 14', 'Week 16', 'Week 18', 'Week 20', 'Week 22', 'Week 24', 'Week 26', 'Week 28', 'Week 30', 'Week 32', 'Week 34', 'Week 36', 'Week 38', 'Week 40'];

// Data Generation
const dataset1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
// const dataset2 = [0, 2.5, 12.5, 17.5, 22.5, 22.5, 32.5, 32.5, 35, 57.5];
const dataset2 = [0, 0, 2.5, 2.5, 12.5, 12.5, 12.5, 17.5, 17.5, 22.5, 22.5, 22.5, 22.5, 32.5, 32.5, 32.5, 32.5, 35, 42.5, 57.5];

// Chart data configuration
const data = {
    labels: labels,
    datasets: [
        {
            label: 'Current Study Progress',
            data: dataset1,
            borderColor: 'rgba(54, 162, 235, 1)', // Blue color
            backgroundColor: 'rgba(54, 162, 235, 0.2)', // Transparent blue
            fill: true,
        },
        {
            label: 'Expected Study Progress',
            data: dataset2,
            borderColor: 'rgba(255, 99, 132, 1)', // Red color
            backgroundColor: 'rgba(255, 99, 132, 0.2)', // Transparent red
            fill: true,
        }
    ]
};

// Chart configuration
const config = {
    type: 'line',
    data: data,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Burndown Chart Study Progress'
            },
            annotation: {
                annotations: {
                    horizontalLine: {
                        type: 'line',
                        yMin: 45,
                        yMax: 45,
                        borderColor: 'rgba(255, 0, 0, 0.8)',
                        borderWidth: 5,
                        label: {
                            display: true,
                            content: 'NBSA Cutoff: 45',
                            position: 'middle',
                            color: 'white',
                            backgroundColor: 'rgba(255, 0, 0, 0.8)'
                        }
                    },
                    verticalLine: {
                        type: 'line',
                        xMin: 'Week 6', // Use label directly
                        xMax: 'Week 6',
                        borderColor: 'rgba(255, 237, 34, 1)', // Orange color
                        borderWidth: 3,
                        label: {
                            display: true,
                            content: 'Current Week',
                            position: 'end',
                            color: 'black',
                            backgroundColor: 'rgba(255,255,255,0.7)'
                        }
                    }
                }
            }
        }
    },
};

// Get the context of the canvas element
const ctx = document.getElementById('myChart').getContext('2d');

// Create the chart
new Chart(ctx, config);
