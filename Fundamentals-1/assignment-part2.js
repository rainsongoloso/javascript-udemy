function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital is ${capitalCity}`;
}

let descCountry1 = describeCountry("Philippines", "109.6", "Manila");
let descCountry2 = describeCountry("Finland", "6", "Helsinki");
let descCountry3 = describeCountry("Brazil", "212.6", "Brasilia");

console.log(descCountry1);
console.log(descCountry2);
console.log(descCountry3);

// Function declaration
function percentageOfWorld1(pop) {
  return (pop / 7900) * 100;
}
console.log(
  "Function declaration = " + parseFloat(percentageOfWorld1(1441).toFixed(1))
);

// Function expression
var percentageOfWorld2 = function (pop) {
  return (pop / 7900) * 100;
};
console.log(
  "Function expression = " + parseFloat(percentageOfWorld2(1441).toFixed(1))
);

// Arrow function
const percentageOfWorld3 = (percentageOfWorld3) =>
  (percentageOfWorld3 / 7900) * 100;
console.log(
  "Arrow function = " + parseFloat(percentageOfWorld3(1441).toFixed(1))
);

// Function calling other functions
let describePopulation = (country, population) =>
  console.log(
    `${country} has ${population} million people, which is about ${parseFloat(
      percentageOfWorld3(population)
    ).toFixed(1)}% of the world`
  );
describePopulation("philippines", 1441);
describePopulation("ukraine", 2111);
describePopulation("china", 9000);
describePopulation("india", 10000);

// Introduction to Arrays
const populations = [411, 911, 2333, 2022];
console.log(populations);
console.log(`populations = ${populations.length === 4}`);

let percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];
console.log(`percentages = ${percentages.length == 4}`);
console.log(`percentages = ${percentages}`);

// Basic array operations (Methods)
let neighbours = [
  "china",
  "singapore",
  "india",
  "thailand",
  "Sweden",
  "germany",
];

neighbours.push("Utopia");
console.log("push = " + neighbours);

neighbours.pop();
console.log("pop = " + neighbours);

if (!neighbours.includes("Germany")) {
  console.log("Probably not a central european country");
}

neighbours[neighbours.indexOf("Sweden")] = "Republic of Sweden";
console.log(neighbours);

// Introduction of Objects
// Object methods
// Dot vs bracket notation
let myCountry = {
  country: "philippines",
  capital: "manila",
  language: "tagalog",
  population: 106,
  neighbours: ["malaysia", "indonesia", "vietnam"],
  describe: function () {
    console.log(
      `${this.country} has ${this.population} million ${
        this.language
      }-speaking people, ${
        this.neighbours.length
      } neighbouring countries which are ${
        this.neighbours
      } and a capital called ${this.capital} and it is ${
        this.checkIsland() ? "not island" : "an island"
      }`
    );
  },
  checkIsland: function () {
    return this.neighbours.length < 0 ? true : false;
  },
};

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people,
${myCountry.neighbours.length} neighbouring countries which are ${myCountry.neighbours} and a capital called ${myCountry.capital}`);

// Dot notation
myCountry.population = myCountry.population += 2;
console.log("Dot notation = " + myCountry.population);

// Bracket notation
myCountry["population"] = myCountry["population"] -= 2;
console.log("Bracket notation = " + myCountry.population);

let voters = [];
for (let v = 0; v < 50; v++) {
  voters.push(v);
  console.log(`Voter ${voters[v] + 1} is currently voting`);
}
console.log(`the voters ${voters}`);

let percentages2 = [];
for (let i = 0; i < populations.length; i++) {
  const perc1 = percentageOfWorld1(populations[i]);
  percentages2.push(perc1);
}
console.log(`percentages2 ${percentages2}`);

const listOfNeighbours = [
  ["canada", "mexico"],
  ["spain"],
  ["norway", "sweden", "russia"],
];
console.log(listOfNeighbours[2].length);
for (let list1 = 0; list1 < listOfNeighbours.length; list1++) {
  for (let list2 = 0; list2 < listOfNeighbours[list1].length; list2++) {
    console.log(`Neighbour: ${listOfNeighbours[list1][list2]}`);
  }
}

const percentages3 = [];
let i = 0;
while (i < populations.length) {
  const perc2 = percentageOfWorld1(populations[i]);
  percentages3.push(perc2);
  i++;
}
console.log(percentages3);
