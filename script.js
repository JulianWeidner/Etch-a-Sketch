function GenerateDiv(){
  const containerDiv = document.getElementById('sketch-container');
  const pixelDiv = document.createElement('div');
  pixelDiv.innerHTML = "Dom Div "; //used for testing
  containerDiv.appendChild(pixelDiv);
}



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

CreateSketchBoard(4);


