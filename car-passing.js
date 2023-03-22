const carPassing = function (cars, speed) {
  const newCar = {
    time: Date.now(),
    speed: speed
  };
  cars.push(newCar);
  return cars;
};
