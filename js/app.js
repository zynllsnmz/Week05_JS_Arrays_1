// In this week's assignment, you are asked to work with arrays and loops.
// In the given array, only one item is written 2 times. Others are written 3 times. Print the item written 2 times in the array to the console.

// Examples:
// ===============
// Input: [2, 2, 3, 2, 3]
// Output: 3

// Input: [0, 1, 0, 1, 0, 99, 1, 99]
// Output: 99

// Input: [7, 1, 1, 7, 1, 7, 99, 99, 12, 8, 12, 12, 99, 8]
// Output: 8

//-------------------------------------------------

// const givenArray = [2, 2, 3, 2, 3];
// const givenArray = [0, 1, 0, 1, 0, 99, 1, 99];

const givenArray = [7, 1, 1, 7, 1, 7, 99, 99, 12, 8, 12, 12, 99, 8];

for (let i = 0; i < givenArray.length; i++) {
  // The current active element of the givenArray array
  let currentItem = givenArray[i];
  let counter = 0;

  for (let j = 0; j < givenArray.length; j++) {
    if (currentItem === givenArray[j]) {
      counter = counter + 1;
    }
  }
  //If currentItem is found 2 times, we print is console and exit the loop.
  if (counter === 2) {
    console.log(`Item that occours twice in the array: ${givenArray[i]}`);
    break;
  }
}
