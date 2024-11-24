function buildArray(
  items: number,
  sortOrder: "ascending" | "descending"
): number[] {
  const randomNumbers: number[] = [];
  let nextNumber: number;

  for (let counter = 0; counter < items; counter++) {
    nextNumber = Math.ceil(Math.random() * (100 - 1));
    if (randomNumbers.indexOf(nextNumber) === -1) {
      randomNumbers.push(nextNumber);
    } else {
      counter--;
    }
  }

  if (sortOrder === "ascending") {
    return randomNumbers.sort(sortAscending);
  } else {
    return randomNumbers.sort(sortDescending);
  }
}

export default buildArray;
let sortDescending: compareFunctionType = (a: number, b: number) => {
  if (a > b) {
    return -1;
  } else if (b > a) {
    return 1;
  } else {
    return 0;
  }
};

let sortAscending: compareFunctionType = (a: number, b: number) => {
  if (a > b) {
    return 1;
  } else if (b > a) {
    return -1;
  } else {
    return 0;
  }
};

let myArray1 = buildArray(12, "ascending");
let myArray2 = buildArray(8, "descending");
console.log(myArray1);
console.log(myArray2);
