function GenerateDiv(){
  const containerDiv = document.getElementById('sketch-container');
  const pixelDiv = document.createElement('div');
  pixelDiv.innerHTML = "Dom Div";
  containerDiv.appendChild(pixelDiv);
}

GenerateDiv();
