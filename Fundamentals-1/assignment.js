const country = "Philippines";
const continent = "Asia";
let population = 32;
const isIsland = true;
const language = "tagalog";
let description =
  country +
  " is in " +
  continent +
  ", and its " +
  population +
  " million speak " +
  language;

if (population > 33) {
  console.log("population is above average");
} else if (population < 33) {
  console.log("population is below average");
}
console.log(country);
console.log(continent);
console.log(population);
console.log(isIsland);
console.log(language);
console.log(description);

// Strings and Template literals
const description2 = `${country} is in ${continent}, and its ${population} million people speak ${language}`;

// Type conversion and coercion
console.log("9" - "5");
console.log("19" - "13" + "17");
console.log("19" - "13" + 17);
console.log("123" < 57);
console.log(5 + 6 + "4" + 9 - 4 - 2);

// == vs. ===
let numNeighbours = prompt(
  "How many neighbour countries does your country have?"
);
let conNN = Number(numNeighbours);
console.log(typeof conNN);
if (numNeighbours == 1) {
  console.log("Only " + numNeighbours + " border!");
} else if (numNeighbours > 1) {
  console.log("You have more than 1 neighbours");
}

// Logical operators
if (language === "english" && population < 50 && !isIsland) {
  console.log(`You should live in ${country}`);
} else {
  console.log(`${country} does not meet your criteria`);
}

// Switch statement
switch (language) {
  case "tagalog":
  case "bisaya":
    console.log("The native language of the Philippines");
    break;
  case "english":
    console.log("Most used Language");
    break;
  case "spanish":
    console.log("Most used by Spanish peoples");
    break;
  default:
    console.log("Greate language");
}

// The Conditional(Ternary) Operator
console.log(
  `${country}'s population is ${population > 33 ? "above" : "below"} average`
);
