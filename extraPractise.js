function bubbleSort(inputArray) {
  const expectedOutput = inputArray.slice().sort((a, b) => a - b);
  return expectedOutput;
}

const sampleInput = [5, 6, 1, 3, 4, 2];
const expectedOutput = bubbleSort(sampleInput);
console.log(expectedOutput);

//starecase problem

function steps(levels) {
  for (let a = 1; a <= levels; a++) {
    let stair = '';

    for (let b = 1; b <= levels; b++) {
      if (b <= a) {
        stair += '#';
      } else {
        stair += ' ';
      }
    }

    console.log(stair);
  }
}

//volume of a Clyinder.


