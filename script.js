/*function GenerateDiv(){
  const containerDiv = document.getElementById('sketch-container');
  const pixelDiv = document.createElement('div');
  pixelDiv.innerHTML = "Dom Div "; //used for testing
  containerDiv.appendChild(pixelDiv);
}*/

//Event Handler
sizeBtnGroup = document.querySelectorAll(".btn");
Array.from(sizeBtnGroup).map(i => AddEvent(i));

function CreateSketchRow(btnVal){
  let row = btnVal;
  for(let i = 0; row > i; i++){
      GenerateDiv();
  }
}

function CreateSketchBoard(btnVal){
  let row = btnVal;
  for(let j = 0; j < row; j++){
      let divParent = GenerateDiv(row);
      const lineBr = document.createElement('br');
      divParent.appendChild(lineBr);
  }
}

function GenerateRow(){
  const rowDiv = document.createElement('div');
  rowDiv.classList.add('row-container');
  //const lineBr = document.createElement('br');
  //let rowDivBr = rowDiv.appendChild(lineBr);
  return rowDiv;//rowDivBr;
}

function GeneratePixel(btnValParam, rowParam){
  const pixelDiv = document.createElement('div');
  const rowDiv = rowParam;
  
  pixelDiv.innerHTML = "Pixel";
  rowDiv.appendChild(pixelDiv);
}

function GenerateTable(columns){
  const tableContainer = document.getElementById('sketch-container');
  let row = GenerateRow();
  tableContainer.appendChild(row);
  let numOfPixels = columns;
  for(let i = 0; i < numOfPixels; i++){
    GeneratePixel(numOfPixels, row);
  }
}



function AddEvent(sizeBtnArrayParam){
  
  sizeBtnArrayParam.addEventListener('click', (e) => {
    console.log('button clicked');
    let columns = e.target.value;
    console.log(columns);
    for(let j = 0; j  < columns; j++){
      GenerateTable(columns);
    }

  })


}