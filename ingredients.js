const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

let wLoop = () => {
    let i = 0;
  while (i < ingredients.length){
    console.log(ingredients[i]);
    i++;
  }
}
console.log(wLoop())

let fLoop = () => {
  for (let n = 0; n < ingredients.length; n++){
    console.log(ingredients[n])
  }
}

console.log(fLoop())

let fBLoop = () => {
  for (let n = ingredients.length -1; n >= 0; n--){
    console.log(ingredients[n])
  }
}

console.log(fBLoop())