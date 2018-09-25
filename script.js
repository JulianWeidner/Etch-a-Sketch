
//Event Handler
sizeBtnGroup = document.querySelectorAll(".btn");
Array.from(sizeBtnGroup).map(i => AddEvent(i));

//creates div for pixel divs
function GenerateRow(){
  const rowDiv = document.createElement('div');
  rowDiv.classList.add('row-container'); //these are really columns
  return rowDiv;
}

function GeneratePixel(rowParam){
  const pixelDiv = document.createElement('div');
  const rowDiv = rowParam;
  pixelDiv.classList.add("pixel-container");
  
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
    let columns = e.target.value; //button value
    console.log(columns);
    for(let j = 0; j  < columns; j++){
      GenerateTable(columns);
    }
    const allPixels = document.querySelectorAll('.pixel-container');
    Array.from(allPixels).map((i) => HoverEvent(i));
    Array.from(allPixels).map((i) => SetSize(columns,i));
    
    SetSize()
  });
}

function HoverEvent(pixels){
  pixels.addEventListener('mouseover', ()  => {
    pixels.setAttribute('style','background-color: #364249;');
  });
}

function SetSize(btnVal,pixel){
  if(btnVal == 16){
    pixel.setAttribute('style', 'height: 6.25%');
  }
  else if(btnVal == 32){
    pixel.setAttribute('style', 'height: 3.125%;')
  }
  else if(btnVal == 64){
    pixel.setAttribute('style','height: 1.5625%;')
  }
}

