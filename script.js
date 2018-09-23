/*function GenerateDiv(){
  const containerDiv = document.getElementById('sketch-container');
  const pixelDiv = document.createElement('div');
  pixelDiv.innerHTML = "Dom Div "; //used for testing
  containerDiv.appendChild(pixelDiv);
}*/



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

function GenerateTable(){
  const tableContainer = document.getElementById('sketch-container');
  let row = GenerateRow();
  tableContainer.appendChild(row);
  let numOfPixels = 16;
  for(let i = 0; i < numOfPixels; i++){
    GeneratePixel(numOfPixels, row);
  }
}

for(let i = 0; i < 16; i++){
  GenerateTable();
}