const carPassing = (cars, speed) => {
  let arr = [];
  cars.push(
    {
      time: Date.now(),
      speed: speed,
    }
  );
  for (let car in cars) {
    arr.push(cars[car]);
  }
  return arr;
}





const cars = [
  {
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35
  }
]

const speed = 38

carPassing(cars, speed)

