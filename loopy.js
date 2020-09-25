let speachA = "Loopy";
let speachB = "Lighthouse";
let speachC = "LoopyLighthouse";


for(let counter=100; counter<= 200; counter++){
  if(counter % 3 === 0 && counter % 4 === 0){
    console.log(speachC);
    continue;
  }else if(counter % 4 === 0){
    console.log(speachB);
   continue;
 } else if(counter % 3  === 0){
    console.log(speachA);
   continue;
 }else{
    console.log(counter)
  }
};


