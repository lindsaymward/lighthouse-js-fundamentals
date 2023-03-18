const howManyHundreds = function (number) {
  let totalContainers = Math.floor(number / 100);
  return totalContainers;
};

console.log(howManyHundreds(894));
console.log(howManyHundreds(1000));
console.log(howManyHundreds(97));
