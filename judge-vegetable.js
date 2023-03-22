const judgeVegetable = function (vegetables, metric) {
  let lowestScore = 0;
  let highestRanker = "";
  for (let i = 0; i < vegetables.length; i++) {
    if (vegetables[i][metric] > lowestScore) {
      highestRanker = vegetables[i].submitter;
      lowestScore = vegetables[i][metric];
    }
  }
  return highestRanker;
};

// Test
const vegetables = [
  {
    submitter: "Old Man Franklin",
    redness: 10,
    plumpness: 5,
  },
  {
    submitter: "Sally Tomato-Grower",
    redness: 2,
    plumpness: 8,
  },
  {
    submitter: "Hamid Hamidson",
    redness: 4,
    plumpness: 3,
  },
];

const metric = "redness";

console.log(judgeVegetable(vegetables, metric));
