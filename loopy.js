let loopyLighthouse = (range, multiples, words) => {
for(let counter = range[0]; counter <= range[1]; counter++){
  if(counter % multiples[0] === 0 && counter % multiples[1] === 0){
    console.log(words[0] + words [1]);
    continue;
  }else if(counter % multiples[0] === 0){
    console.log(words[0]);
   continue;
 } else if(counter % multiples[1]  === 0){
    console.log(words[1]);
   continue;
 }else{
    console.log(counter)
  }
}
};

console.log(loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]));