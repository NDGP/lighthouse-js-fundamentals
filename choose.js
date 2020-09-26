const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];



const chooseStations = () => {
  let goodStations = [];
  for (const station of stations) {
    const cap = station[1];
    const type = station[2];
    if (cap >= 20 && type !== 'restaurant'){
      goodStations.push(station[0])}
      
    }
    return goodStations
  }


console.log(chooseStations())