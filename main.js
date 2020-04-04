function main2() {
  Array.SIZE_RATIO = 3;
  // Create an instance of the Array class
  let arr = new Array();

  // Add an item to the array
  arr.push(3);
  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);
  arr.pop();
  arr.pop();
  arr.pop();
  arr.pop();
  arr.pop();
  arr.pop();
  arr.push("tauhida");

  console.log(arr);
  console.log(arr[0]);
}

//5. URLify a string
function formatURL(string) {
  const finalURL = [];
  string.split("").map(char => {
    if (char === " ") {
      return finalURL.push("%20");
    } else {
      return finalURL.push(char);
    }
  });
  return console.log(finalURL.join(""));
}

//6. Filtering an array
function filterNumbers(array) {
  const finalArray = [];
  array.map(num => {
    if (num < 5) {
      return;
    } else finalArray.push(num);
  });
  return console.log(finalArray);
}

//8. Merge arrays
function merge(arr1, arr2) {
  const finalArray = [];
  arr1.map(num => {
    finalArray.push(num);
  });
  arr2.map(num => {
    finalArray.push(num);
  });
  finalArray.sort((a, b) => a - b);
  return console.log(finalArray);
}

/*
11. 2D array
Write an algorithm which searches through a 2D array,
and whenever it finds a 0 should set the entire row and column to 0.
*/

function zeroFinder(arr) {
  const rows = [];
  const columns = [];
  arr.map((row, j) => {
    row.map((num, i) => {
      if (num === 0 && !rows.includes(j)) {
        rows.push(j);
      }
      if (num === 0 && !columns.includes(i)) {
        columns.push(i);
      }
    });
  });
  arr.map((row, j) => {
    row.map((num, i) => {
      if (rows.includes(j) || columns.includes(i)) {
        arr[j].splice(i, 1, 0);
      }
    });
  });
  return console.log(arr);
}

const arrOfArr = [
  [1, 0, 1, 1, 0],
  [0, 1, 1, 1, 0],
  [1, 1, 1, 1, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 1, 1]
];

// that was really fun
