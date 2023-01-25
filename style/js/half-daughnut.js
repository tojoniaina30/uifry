// setup 
const data = {
labels:['Daily Paiment', 'Hobby'],
datasets: [{
  label: '%',
  data: [55, 20, 25],
  backgroundColor: [
    '#6359E9',
    '#64CFF6',
    '#3A3A5A',
  ],
  borderColor: [
    '#6359E9',
    '#64CFF6',
    '#3A3A5A',
  ],
  borderWidth: 1,
  cutout: '50%',
  circumference: 180,
  rotation: 270,
  /* plugins: {
    legend: {
        display: false
    },
    tooltip: {
        filter: (tooltipItem) => {
            console.log(tooltipItem)
            return tooltipItem.dataIndex === 0;
        }
    }
  } */

}]
};

// config 
const config = {
type: 'doughnut',
data,
options: {  
  aspectRatio: 2,
}
};

// render init block
const myChart = new Chart(
document.getElementById('myChart'),
config
);