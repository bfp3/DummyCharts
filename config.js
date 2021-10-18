//bar graph

var canvasElement = document.getElementById("newchart");
var config = {
    type: "bar",
    data: {
        labels: ["Desktop", "Laptop", "Mobile", "AIO", "Tablet"],
        datasets: [{
                label: "2021",
                data: [105551, 184630, 9135, 66068, 6950],
                backgroundColor: [
                    "#037097"
                ],
                borderRadius: 3
            },
            {
                label: "2020",
                data: [115551, 194630, 10135, 76068, 12950],
                backgroundColor: [
                    "rgba(3,112,151,0.8)",

                ],
                borderRadius: 2
            },
        ],

    },
    options: {
        plugins: {
            legend: {
                position: 'top',
                align: 'end',
                labels: {
                    padding: 10,
                    boxHeight: 10,
                    boxWidth: 10,
                }
            },

            title: {
                display: true,
                text: 'Total Sales YTD',
                //padding: 29,
                font: {
                    size: 11,
                    family: 'Arial'
                }
            }
        },
        scales: {
            x: {
                grid: {
                    tickColor: '#CECECE',
                    borderColor: '#AFAFAF',
                    color: 'white',
                    borderWidth: 1,
                    size: 200,
                    borderDash: [1]
                },
                ticks: {
                    color: '#646464'
                }
            },
            y: {
                grid: {
                    tickColor: '#CECECE',
                    borderColor: '#CECECE',
                    color: '#E5E5E5',
                    borderWidth: 1,
                    size: 200,
                    borderDash: [0]
                },
                ticks: {
                    color: '#646464'
                },
                min: 0,
                max: 200000,
                ticks: {
                    // forces step size to be 50 units
                    stepSize: 50000
                }
            }
        }
    }
};
var newchart = new Chart(canvasElement, config);


//line graph

var canvasElement = document.getElementById("newchart2");
var config = {
    type: "line",
    data: {
        labels: ["Desktop", "Laptop", "Mobile", "AIO", "Tablet"],
        datasets: [{
                label: "2021",
                data: [105551, 184630, 140135, 66068, 76950],
                backgroundColor: [
                    "rgba(3,112,151,1)",
                ],
                borderColor: ["rgba(3,112,151,0.5)"],
                tension: 0.2
            },
            {
                label: "2020",
                data: [117551, 190630, 150135, 76068, 74950],
                backgroundColor: [
                    "rgba(3,112,151,0.7)",
                ],
                borderColor: ["rgba(3,112,151,1)"],
                tension: 0.2,
                pointBackgroundColor: ["rgba(3,112,151,1)"],
            }

        ],
    },
    options: {
        elements: {
            point: {
                pointRadius: 5
            }
        },
        plugins: {
            legend: {
                position: 'top',
                align: 'end',
                labels: {
                    padding: 10,
                    boxHeight: 8,
                    boxWidth: 8,
                }


            },
            title: {
                display: true,
                text: 'Total Sales YTD',
                //padding: 29,

                font: {
                    size: 11,
                    family: 'Arial'
                }
            }
        },
        scales: {
            x: {
                grid: {
                    tickColor: '#CECECE',
                    borderColor: '#AFAFAF',
                    color: 'white',
                    borderWidth: 1,
                    size: 200,
                    borderDash: [1]
                },
                ticks: {
                    color: '#646464'
                }
            },
            y: {
                grid: {
                    tickColor: '#CECECE',
                    borderColor: '#CECECE',
                    color: '#E5E5E5',
                    borderWidth: 1,
                    size: 200,
                    borderDash: [0]
                },
                ticks: {
                    color: '#646464'
                },
                min: 0,
                max: 200000,
                ticks: {
                    // forces step size to be 50 units
                    stepSize: 50000
                }

            }
        }

    }
};

var newchart2 = new Chart(canvasElement, config);





//line graph 2


var canvasElement = document.getElementById("newchart3");
var config = {
    type: "line",
    data: {
        labels: ["Desktop", "Laptop", "Mobile", "AIO", "Tablet"],
        datasets: [{
                label: "2021",
                data: [105551, 184630, 140135, 66068, 76950],
                backgroundColor: [
                    "rgba(3,112,151,1)",
                ],
                borderColor: ["rgba(3,112,151,1)"],
                tension: 0.2
            },
            {
                label: "2020",
                data: [117551, 190630, 150135, 76068, 74950],
                backgroundColor: [
                    "#037097",
                ],
                borderColor: ["rgba(3,112,151,0.8)"],
                tension: 0.2,
                pointBackgroundColor: ["rgba(3,112,151,0.8)"],
            }

        ],
    },
    options: {
        elements: {
            point: {
                pointRadius: 4
            }
        },
        plugins: {
            legend: {
                position: 'top',
                align: 'end',
                labels: {
                    padding: 10,
                    boxHeight: 6,
                    boxWidth: 6,
                }


            },
            title: {
                display: true,
                text: 'Total Sales MTD',
                //padding: 29,

                font: {
                    size: 11,
                    family: 'Arial'
                }
            }
        },
        scales: {
            x: {
                grid: {
                    tickColor: '#CECECE',
                    borderColor: '#AFAFAF',
                    color: 'white',
                    borderWidth: 1,
                    size: 200,
                    borderDash: [1]
                },
                ticks: {
                    color: '#646464'
                }
            },
            y: {
                grid: {
                    tickColor: '#CECECE',
                    borderColor: '#CECECE',
                    color: '#E5E5E5',
                    borderWidth: 1,
                    size: 200,
                    borderDash: [0]
                },
                ticks: {
                    color: '#646464'
                }
            }
        }

    }
};

var newchart3 = new Chart(canvasElement, config);