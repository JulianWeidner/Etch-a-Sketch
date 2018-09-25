
//Event Handler
sizeBtnGroup = document.querySelectorAll(".size-button");
Array.from(sizeBtnGroup).map(i => AddEvent(i));



//Creates the Column Div and adds the style class to it
//the div created by this function is held in memory, and not added to HTML until the GenerateTable()
function GenerateColumn(){
  const columnDiv = document.createElement('div');
  columnDiv.classList.add('column-container'); 
  return columnDiv;
}
//Creates a single Pixel
//Adds the pixel to the Column Div parameneter (passed from Generate Table)
function GeneratePixel(columnParam){
  const pixelDiv = document.createElement('div');
  const columnDiv = columnParam;
  pixelDiv.classList.add("pixel");
  columnDiv.appendChild(pixelDiv);
}
//Creates A Single Column
//Adds column to the sketch container
///generates x num of pixels and places them inside of the column 
function GenerateTable(btnValParam){ 
  const sketchContainer = document.getElementById('sketch-container');
  let column = GenerateColumn(); //creates on column
  sketchContainer.appendChild(column);
  let numOfPixels = btnValParam; //The number of pixels is the same as the size button value
  for(let i = 0; i < numOfPixels; i++){
    GeneratePixel(column);
  }
}

function AddEvent(sizeBtnArrayParam){
  sizeBtnArrayParam.addEventListener('click', (e) => {
    let btnVal = e.target.value; //Num From size button
    for(let j = 0; j  < btnVal; j++){
      GenerateTable(btnVal); //calls the column
    }
    const allPixels = document.querySelectorAll('.pixel');
    Array.from(allPixels).map((i) => HoverEvent(btnVal,i));
    Array.from(allPixels).map((i) => SetSize(btnVal,i));

  });
}

function HoverEvent(btnVal,pixel){
  pixel.addEventListener('mouseover', ()  => {
    if(btnVal == 16){
      pixel.setAttribute('style', ' background-color: #364249; height: 6.25%;');
    }
    else if(btnVal == 32){
      pixel.setAttribute('style', 'background-color: #364249; height: 3.125%;')
    }
    else if(btnVal == 64){
      pixel.setAttribute('style','background-color: #364249; height: 1.5625%;')
    }

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

