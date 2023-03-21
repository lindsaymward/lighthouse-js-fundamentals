function range(start, end, step) {
  if (start === undefined || end === undefined || step === undefined) {
    return [];
  }
  if (start > end) {
    return [];
  }
  if (step <= 0) {
    return [];
  }

  let numberArray = [];
  for (let i = start; i <= end; i = i + step) {
    numberArray.push(i);
  }
  return numberArray;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
