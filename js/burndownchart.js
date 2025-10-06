
const DATA_COUNT = 10;
const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 60 };

// Static labels (months of the year)
const labels = ['Week 4', 'Week 8', 'Week 12', 'Week 16', 'Week 20', 'Week 24', 'Week 28', 'Week 32', 'Week 36', 'Week 40'];

// Data Generation
const dataset1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const dataset2 = [0, 2.5, 12.5, 17.5, 22.5, 22.5, 32.5, 32.5, 35, 57.5];

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
                    line: {
                        type: 'line',
                        yMin: 45,  // Minimum points required
                        yMax: 45,  // Set the same value for a horizontal line
                        borderColor: 'rgba(255, 100, 132, 1)',  // Orange color for the line
                        borderDash: [20, 5],
                        borderWidth: 5,
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
