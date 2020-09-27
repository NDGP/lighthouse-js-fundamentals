let iceCreamFlavours = ["chocolate", "vanilla", "cookies and cream", "rocky road", "strawberry"];
console.log(iceCreamFlavours);

let addFlavour = (flavour) =>{
  iceCreamFlavours.push(flavour)
}
addFlavour("root beer")
console.log(iceCreamFlavours[0]);
console.log(iceCreamFlavours[iceCreamFlavours.length-1]);
console.log(iceCreamFlavours.length);