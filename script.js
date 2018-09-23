
//Event Handler
sizeBtnGroup = document.querySelectorAll(".btn");
Array.from(sizeBtnGroup).map(i => AddEvent(i));

//creates div for pixel divs
function GenerateRow(){
  const rowDiv = document.createElement('div');
  rowDiv.classList.add('row-container'); //these are really columns
  return rowDiv;
}
//creates 
function GeneratePixel(rowParam){
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
    GeneratePixel(row);
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