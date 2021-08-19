
function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? '0' + hex : hex;
}

export function rgbToHex(r, g, b) {
  return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
}



// CREATE RANDOM HEX
const hexChar = ['0','1','2','3','4','5','6','7','8','9','a', 'b', 'c', 'd', 'e', 'f'];
export function randomColour(){
  let randomHex = '#'
  for(let i=0; i<6; i++){
    randomHex += hexChar[Math.floor(Math.random() * hexChar.length)];
  }
  return randomHex
}