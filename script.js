
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
    let columns = e.target.value; 
    console.log(columns);
    for(let j = 0; j  < columns; j++){
      GenerateTable(columns);
    }
    const allPixels = document.querySelectorAll('.pixel-container');
    Array.from(allPixels).map((i, columns) => AddSizeClass(i,columns));
    Array.from(allPixels).map((i) => HoverEvent(i));
  
  });
}

function HoverEvent(pixels){
  pixels.addEventListener('mouseover', ()  => {
    pixels.setAttribute('style','background-color: black;');
  });
}


function AddSizeClass(pixelElement, sizeParam){
  if(sizeParam == 16){
    pixelElement.setAttribute("style", "width: .39%;");
  } 
  else if(sizeParam == 32){
    //pixelElement.setAttribute("style", "width: .097%;");
  }
  else if(sizeParam == 64){
   // pixelElement.setAttribute("style", "width: .024%;");
  }

}


