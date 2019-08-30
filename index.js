//GLOBAL VARIABLES

var dwarves = ["Doc", "Dopey", "Bashful", "Grumpy"];
var planeteerCalls = ["earth", "wind", "fire", "water", "heart"];

//CREATES A LOOP THAT INCREMENTS THE LENGTH OF THE ARRAY AND PLACES THE ITEMS IN A NEW ARRAY (newDwarfs) AND NUMBERS EACH NAME IN ARRAY.

function dwarfRollCall(dwarves) {
  var newDwarfs = [];
  for (var i = 0; i < dwarves.length; i++){
    newDwarfs.push(`${i + 1}. ${dwarves[i]} `);
  }
  return newDwarfs.join("");
}

//CHECKS THE LENGTH OF THE ARRAY, CHANGES EACH INDEX TO UPPERCASE AND ADDS AN !
function summonCaptainPlanet(planeteerCalls){
  var array = [];
  for (let i=0; i<planeteerCalls.length; i++){
    planeteerCalls[i] = planeteerCalls[i].toUpperCase(); 
    array.push(`${planeteerCalls[i]}!`);
  }
  return array;
}

function longPlaneteerCalls(words) {
  if (words.length<=4){
    return false;
  }
  else {
    return true;
  }
}

//COUNTS ARRAY ITEMS AND REMOVES EACH ONE BY ONE CHECKING IF THE INGREDIENTS ARE A CHEESE OR NOT. 
function findTheCheese (foods) {
  for (var i=0; i<foods.length; i++){
    foods.shift();
    if (foods[i] === "gouda"){
      return `gouda`;
    }
    else if (foods[i] === `cheddar`){
      return 'cheddar';
    }
    else {
      return `no cheese!`;
      }
  }
}
