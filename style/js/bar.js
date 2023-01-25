var canvasElement = document.getElementById('badCanvas')
const data = [
    {x: 'Jan' , outcome:27000, income: 37000},
    {x: 'Feb' , outcome:33000, income: 27000},
    {x: 'Mar' , outcome:22000, income: 30000},
    {x: 'Apr' , outcome:26500, income: 38000},
    {x: 'May' , outcome:32500, income: 41000},
    {x: 'Jun' , outcome:28000, income: 21500},
    {x: 'Jul' , outcome:29000, income: 33000},
    {x: 'Aug' , outcome:23000, income: 28000},
];
var config = {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        datasets: [{
            label:'Janvier 2020',
            data: data,
            parsing: {
                yAxisKey:'outcome'
            },
            backgroundColor: '#64CFF6',
            borderRadius: 5,
            barPercentage:0.7,
            
            
        },{
            label:'Janvier 2020',
            data: data,
            parsing: {
                yAxisKey:'income'
            },
            backgroundColor: '#5A51D4',
            borderRadius: 5,
            barPercentage:0.7,
            
        }],
    },
    options: {
        plugins: {
            legend: {
                display: false
            },
        scales:{
            y: {
                beginAtZero:false,
                grid:{
                    color: 'green',
                },
                
            },
            x: {
                grid: {
                    display:false,
                    /* borderDash: [5,5],
                    borderDashOffset:2, */
                    borderCapStyle: 'dashed',
                }
            }
        }
    }
}}
var badCanvas = new Chart (canvasElement, config)