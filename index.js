function dwarfRollCall(dwarves) {
  let dwarvesArray = "";
  for (var i = 0; i < dwarves.length; i++) {
    dwarvesArray += `${i + 1}. ${dwarves[i]} `;
  }
  return dwarvesArray;
}

function summonCaptainPlanet(planeteerCalls) {
  let array = [];
  for (var i = 0; i < planeteerCalls.length; i++) {
    array.push(`${planeteerCalls[i].toUpperCase()}!`);
  }
  return array;
}

function longPlaneteerCalls(words) {
  var longWord = false;
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > 4) {
      longWord = true;
    }
  }
  return longWord;
}

function findTheCheese(foods) {
        let cheeses = ['cheddar', 'gouda','camembert']
       
        for (let i =0; i < foods.length ; i++){
            if (cheeses.includes(foods[i])){
                return foods[i]
            }
        }
        return 'no cheese!'
    }
