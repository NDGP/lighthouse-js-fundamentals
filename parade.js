const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  




const finalPosition = function (moves) {
  let endSpot = [0,0];
  for (const move of moves) {
    if (move === 'north'){
      endSpot[1] = endSpot[1]+1;
    }else if (move === 'south'){
      endSpot[1] = endSpot[1]-1;
    }else if (move === 'east'){
      endSpot[0] = endSpot[0]+1;
    }else if (move === 'west'){
      endSpot[0] = endSpot[0]-1;
    }
    
  }
  return endSpot
}



console.log(finalPosition(moves));
