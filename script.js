//I think I should remove the GenerateColumn function now, rename the generate table to generate column, because that is what it is truly doing
//Id rename the addEvent function to CreateSketch/table/etc because that is really what that function is doing. IT just so happens that the function defines a button event that is called by each button inside the Array of buttons created in the "event handler section"
document.onload = InitialLoad();


//EVENT HANDLING
//calls the addEVent function which contains the event/function for generating the sketchpad/table
sizeBtnGroup = document.querySelectorAll(".size-button");
Array.from(sizeBtnGroup).map(i => AddEvent(i));


const shakeButton = document.getElementById('shake-btn');
shakeButton.addEventListener('click', () =>{
  let colArray = document.querySelectorAll('.column-container');
Array.from(colArray).map( (i) => DeleteColumnDiv(i));
InitialLoad(); //work around 'fix' to keep the divs there after a clear
});




//FUNCTIONS
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
    //here we pass the column div to generate the pixel.
    //the column var stays the same for all of the pixels generated. until the Generate column is called again. (Ge)
    GeneratePixel(column);
  }
}
//This is really the generate table function, 
function AddEvent(sizeBtnArrayParam){
  //Reset the playing field everytime the size button is clicked
  //This is ripped directly from the shake button
  sizeBtnArrayParam.addEventListener('click', () =>{
    let colArray = document.querySelectorAll('.column-container');
  Array.from(colArray).map( (i) => DeleteColumnDiv(i));
  });
  //
  //
  sizeBtnArrayParam.addEventListener('click', (e) => {
    let btnVal = e.target.value; //Num From size button
    //if we wanted 16 rows we would want to call the generate table function 16 times. 
    //Generate Table function also calls the GeneratePixels
    for(let j = 0; j  < btnVal; j++){
      GenerateTable(btnVal); 
    }
    //every pixel created gets the .pixel class added to it. 
    //We take advantage of that here
    //.map calls a function on every element of an array. Here we make an array of every element and then call the SetSize and add a Style changing hover affect.
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

//Shake Button
//clears the board of the style
function Shake(){
  
  colArray.removeChild(colArray);
  console.log('shake called');
}




//Deletes the node specified from the param
//
//I use this funciton in the Shake & Size buttons.
//
//
function DeleteColumnDiv(columnDivParam){
  const column = columnDivParam;
  column.parentNode.removeChild(column);
  console.log("DeleteColumnDiv func Called");

}



//sets the size of the sketchpad when the site is first accessed
function InitialLoad(){
  const initialSize = 16;
  for(let j = 0; j  < initialSize; j++){
    GenerateTable(initialSize); 
  }
  const allPixels = document.querySelectorAll('.pixel');
  Array.from(allPixels).map((i) => HoverEvent(16,i));
  Array.from(allPixels).map((i) => SetSize(16,i));
  
}