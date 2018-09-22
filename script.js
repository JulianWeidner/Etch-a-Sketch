//Intial size
let rows = 16;
//document.body.onload = IntializeSketchPad(rows);

function IntializeSketchPad(rowsParam){
 const container = document.getElementById('sketch-container');
 let rowDiv = document.createElement('div');
 rowDiv.innerHTML= "<p>Data</p>";
 container.appendChild(rowDiv);
 console.log(rowDiv.textContent);


}

IntializeSketchPad(rows);