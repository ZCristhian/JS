const a = [7, 3, 2, 4];   // => 16
const b = [6, 1, 5];      // => 12

function twoSubtrack(arr1, arr2) {
  const elements = [];
  const sumArr1 = arr1.reduce((acc, el) => acc + el);
  const sumArr2 = arr2.reduce((acc, el) => acc + el);
  const diff = Math.abs(sumArr1 - sumArr2);
  const bigger = sumArr1 > sumArr2 ? arr1 : arr2;
  const smaller = sumArr1 < sumArr2 ? arr1 : arr2;

  for (let i = 0; i < bigger.length; i++) {
    for (let j = 0; j < smaller.length; j++) {
      if (bigger[i] - smaller[j] === diff / 2) {
        elements.push(bigger[i], smaller[j]);
        return elements;
      }
    }
  }

  return 'Not Found'
}

const test = twoSubtrack(a, b);
console.log(test);