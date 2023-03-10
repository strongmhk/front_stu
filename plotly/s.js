function makeplot() {
  Plotly.d3.csv("https://raw.githubusercontent.com/hyunsy1214/plotly.js/master/owid-co2-data.csv",function(data){processData(data)});
};

function processData(allRows){

  console.log(allRows);
  let x=[], y=[];

  for (let i=39091; i<=39262; i++) {
  row = allRows[i];
  x.push(row['year']);
  y.push(row['co2']);
}
console.log('X',x,'Y',y);
makePlotly(x,y);
}

function makePlotly(x,y){
let plotDiv = document.getElementById("plot");
let traces = [{
  x: x,
  y: y
}];

Plotly.newPlot('South Korea CO2', traces, {title: 'South Korea CO2'});
};
makeplot();