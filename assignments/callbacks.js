// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

 

  // GIVEN THIS PROBLEM:

  // function firstItem(arr, cb) {
  //   // firstItem passes the first item of the given array to the callback function.
  // }

  // SOLUTION:

  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // NOTES ON THE SOLUTION:

  // firstItem is a higher order function.
  // It expects a callback (referred to as `cb`) as its second argument.
  // To test our solution, we can use the given `items` array and a variety of callbacks.
  // Note how callbacks can be declared separately, or inlined.

  // TEST 1 (inlined callback):

  const test1 = firstItem(items, item => `I love my ${item}!`);
  console.log(test1); // "I love my Pencil!"

  // TEST 2 (declaring callback before hand):

  function logExorbitantPrice(article) {
    return `this ${article} is worth a million dollars!`;
  };

  const test2 = firstItem(items, logExorbitantPrice);
  console.log(test2); // "this Pencil is worth a million dollars!"

// ------------------------------------------

function getLength(arr, cb) {
  return cb(arr.length);
}

isLength = answer => {
  return `it is ${answer} long`;
};

console.log(getLength(items, isLength));

// -------------------------------------------

function last(arr, cb) {
  return cb(arr[arr.length - 1]);
}

isLast = answer => {
  return `${answer} is the last item`;
};

console.log(last(items, isLast));

// -------------------------------------------

function sumNums(x, y, cb) {
  return cb(x + y);
}

isSum = answer => {
  return `${answer} is the Sum`;
};

console.log(sumNums(5,76, isSum));

// -------------------------------------------

function multiplyNums(x, y, cb) {
  return cb(x * y);
}

isMult = answer => {
  return `${answer} is the Multiple`;
};

console.log(multiplyNums(5, 76, isMult));

// -------------------------------------------

function contains(item, list, cb) {
  const x = list.indexOf(item);
  return (x>=0) ? cb(true) : cb(false);
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
}
isPresent = (answer) => {return `it is ${answer}`};

console.log(contains("Pencil", items, isPresent));

// --------------------------------------------

/* STRETCH PROBLEM */

const Dogs = [
  "German Shepherd",
  "Boxer",
  "Min Pincher",
  "Golden Retriever",
  "Poodle",
  "Min Pincher",
  "Golden Retriever",
  "German Shepherd",
  "Hot Dog",
  "Pit Bull",
  "Boxer"
];

// METHOD 1 ---------------------------------------------------

function removeDuplicates(array, cb) {
  return cb(Array.from(new Set(array)));
  
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}

isDogBreeds = answer => {
  return answer;
};

console.log(removeDuplicates(Dogs, isDogBreeds));

// METHOD 2 -----------------------------------------------------

function removeDuplicates2(array, cb) {
  return cb(array.filter((item, index) =>{
    return array.indexOf(item) === index
  }))
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}

isDogBreeds2 = answer => {
  return answer;
};

console.log(removeDuplicates2(Dogs, isDogBreeds));

// METHOD 3 --------------------------------------------------------

function removeDuplicates3(array, cb) {
  return cb(
    array.reduce((unique, item) => {
      return unique.includes(item) ? unique : [...unique, item];
    }, [])
  );
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}

isDogBreeds3 = answer => {
  return answer;
};

console.log(removeDuplicates3(Dogs, isDogBreeds));