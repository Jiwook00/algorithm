const solution = (num) => {
  if (num === 2) return 1;
  let count = 0;

  const recursion = (arr, count) => {
    if (arr.length === 0) {
      return count;
    }
    let result = [];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] % arr[0] !== 0) {
        result.push(arr[i]);
      }
    }
    count += 1;
    return recursion(result, count);
  };

  const nums = Array.from(Array(num - 1)).map((cur, i) => i + 2);
  const result = recursion(nums, 0);

  return result;
};

module.exports = { solution };

// 2는 소수, 2의 배수 제거
// 3은 소수, 3의 배수 제거

// const isPrimeNum = (num) => {
//     if (num <= 1) return false;
//     if (num === 2) return true;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) return false;
//     }
//     return true;
//   };

//   for (let i = 2; i <= num; i++) {
//     console.log("i : ", i);
//     console.log("isPrimeNum(i)", isPrimeNum(i));

//     if (isPrimeNum(i)) {
//       count += 1;
//       console.log("count : ", count);
//     }
//   }
