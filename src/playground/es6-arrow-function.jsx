function square(x) {
  return x * x;
}

console.log(square(3));

// const squareArrow = (x) => {
//   return x * x;
// }

const squareArrow = (x) => x * x;

console.log(squareArrow(9));

// Challenge - Use arrow functions
// getFirstName("Mike Smith") => "Mike"

const getFirstName = (fullName) => fullName.split(" ")[0];

console.log(getFirstName("Mike Smith"));
