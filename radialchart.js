let radial = document.getElementById('radial');
let data;
let datachecked = document.querySelector('input[name="data"]');
let dataarray = [20,20,20,20,20,20,20,20];
let highdata = [20,20,20,20,20,20,20,20];
let lowdata = [20,20,20,20,20,20,20,20];
let highcontrol = [20,20,20,20,20,20,20,20];
let lowcontrol = [20,20,20,20,20,20,20,20];
let highcaut = [20,20,20,20,20,20,20,20];
let lowcaut = [20,20,20,20,20,20,20,20];
let highrisk = [20,20,20,20,20,20,20,20];
let lowrisk = [20,20,20,20,20,20,20,20];

let dataquestions = document.querySelectorAll('.dataquestion');
let controlquestions = document.querySelectorAll('.controlquestion');
let cautiousquestions = document.querySelectorAll('.cautiousquestion');
let riskquestions = document.querySelectorAll('.riskquestion');


function drawChart() {
  
  myChart = new Chart(radial, {
      type: 'radar',
      data: {
        labels: ['DATA', 'HIGH CONTROL', 'CAUTIOUS', 'LOW RISK', 'INTUITION', 'LOW CONTROL', 'ADVENTUROUS', 'HIGH RISK'],
        datasets: [{
          data: dataarray,
          
        }]
      },
      options: {
          animation: false,
          responsive: true,
          backgroundColor:'rgba(87, 174, 226, 0.5)',
          elements: {
            line: {
              borderColor:'rgba(0, 0, 0, 1)',
              borderWidth: 3,
            },
            point: {
              radius: 5,
              backgroundColor:'rgba(0, 0, 0, 1)',
              borderColor:'rgba(255, 255, 255, 1)',
              borderWidth: 2,
            },
          },
          
          plugins: {
            legend: {
              display: false
            },
            tooltip: {
              backgroundColor: 'rgba(253, 199, 67, 0.8)',
              bodyColor: 'rgba(0, 0, 0, 1)',
              titleColor: 'rgba(0, 0, 0, 1)',
              xAlign: 'right',
            }
          },
          scales: {
            r: {
              grid: {
                display: false,
              },
              ticks: {
                display: false,
              },
              suggestedMin: 0,
              suggestedMax: 50
            },
            
            
            
          },
      },
    });
}


dataquestions.forEach(question => question.addEventListener("change", e => {
  
  let target = parseInt(e.target.value);
  let position = parseInt(e.target.parentNode.parentNode.parentNode.id) - 1;
  let lowposition = parseInt(e.target.parentNode.parentNode.parentNode.id) + 3;
  let questionposition = parseInt(e.target.parentNode.parentNode.id) - 1;
  
  if(target >= 0 && target <= 45) {
    target = (50 - target)
    highdata.splice(questionposition,1,target);
    lowdata.splice(questionposition,1,(target-target) )
  }else if(target >= 55 && target <= 100) {
    target = (target/2)
    lowdata.splice(questionposition,1,target);
    highdata.splice(questionposition,1,(target-target))
  };
  dataarray.splice(position,1, getAverage(highdata));
  dataarray.splice(lowposition,1, getAverage(lowdata));
  myChart.destroy();
  drawChart();
}))


controlquestions.forEach(question => question.addEventListener("change", e => {
  
  let target = parseInt(e.target.value);
  let position = parseInt(e.target.parentNode.parentNode.parentNode.id) - 1;
  let lowposition = parseInt(e.target.parentNode.parentNode.parentNode.id) + 3;
  let questionposition = parseInt(e.target.parentNode.parentNode.id) - 1;
  
  if(target >= 0 && target <= 45) {
    target = (50 - target)
    highcontrol.splice(questionposition,1,target);
    lowcontrol.splice(questionposition,1,(target-target) )
  }else if(target >= 55 && target <= 100) {
    target = (target/2)
    lowcontrol.splice(questionposition,1,target);
    highcontrol.splice(questionposition,1,(target-target))
  };
  dataarray.splice(position,1, getAverage(highcontrol));
  dataarray.splice(lowposition,1, getAverage(lowcontrol));
  myChart.destroy();
  drawChart();
}))


cautiousquestions.forEach(question => question.addEventListener("change", e => {
  
  let target = parseInt(e.target.value);
  let position = parseInt(e.target.parentNode.parentNode.parentNode.id) - 1;
  let lowposition = parseInt(e.target.parentNode.parentNode.parentNode.id) + 3;
  let questionposition = parseInt(e.target.parentNode.parentNode.id) - 1;
  
  if(target >= 0 && target <= 45) {
    target = (50 - target)
    highcaut.splice(questionposition,1,target);
    lowcaut.splice(questionposition,1,(target-target) )
  }else if(target >= 55 && target <= 100) {
    target = (target/2)
    lowcaut.splice(questionposition,1,target);
    highcaut.splice(questionposition,1,(target-target))
  };
  dataarray.splice(position,1, getAverage(highcaut));
  dataarray.splice(lowposition,1, getAverage(lowcaut));
  myChart.destroy();
  drawChart();
}))

riskquestions.forEach(question => question.addEventListener("change", e => {
  
  let target = parseInt(e.target.value);
  let position = parseInt(e.target.parentNode.parentNode.parentNode.id) - 1;
  let lowposition = parseInt(e.target.parentNode.parentNode.parentNode.id) + 3;
  let questionposition = parseInt(e.target.parentNode.parentNode.id) - 1;
  
  if(target >= 0 && target <= 45) {
    target = (50 - target)
    highrisk.splice(questionposition,1,target);
    lowrisk.splice(questionposition,1,(target-target) )
  }else if(target >= 55 && target <= 100) {
    target = (target/2)
    lowrisk.splice(questionposition,1,target);
    highrisk.splice(questionposition,1,(target-target))
  };
  dataarray.splice(position,1, getAverage(highrisk));
  dataarray.splice(lowposition,1, getAverage(lowrisk));
  myChart.destroy();
  drawChart();
}))



function getAverage(array) {
  let sum = 0
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return Math.round(sum / array.length);
}



