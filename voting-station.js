const chooseStations = function (stations) {
  let goodStations = [];
  for (let option of stations) {
    if (
      (option[2] === "school" || option[2] === "community centre") &&
      option[1] >= 20
    ) {
      goodStations.push(option[0]);
    }
  }
  return goodStations;
};

const stations = [
  ["Big Bear Donair", 10, "restaurant"],
  ["Bright Lights Elementary", 50, "school"],
  ["Moose Mountain Community Centre", 45, "community centre"],
  ["Codeville Epic Academy", 15, "school"],
  ["Big Al Pizza", 50, "restaurant"],
];

console.log(chooseStations(stations));
