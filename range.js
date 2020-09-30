let range = (start, end, step) => {
  let arr = []
  for (let i = start; i <= end; i = i + step){
  if(step >= 0){ 
    arr.push(i) 
  }else{return arr}
  }
  return arr
};

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, -5));