const calculateRectangleArea = function (length, width) {
  let area = length * width;
  return area > 0 ? area : undefined;
};

const calculateTriangleArea = function (base, height) {
  let area = (base * height) / 2;
  return area > 0 ? area : undefined;
};

const calculateCircleArea = function (radius) {
  let area = Math.PI * Math.pow(radius, 2);
  return radius > 0 ? area : undefined;
};

console.log(calculateRectangleArea(2, 3));
console.log(calculateRectangleArea(-2, 3));

console.log(calculateTriangleArea(20, 50));

console.log(calculateCircleArea(20));
console.log(calculateCircleArea(-1));
