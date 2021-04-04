function missingNumber(arr) {
  if (arr.length > 1000 || arr.length < 1 || typeof arr !== "object") {
    console.log("Invalid");
    return "Invalid Array";
  }
  if (!arr.some(isNaN) == false) {
    console.log("Invalid");

    return "Invalid Array";
  }

  let n = arr.length;
  let total = 1;

  for (let i = 2; i <= n + 1; i++) {
    total += i;
    total -= arr[i - 2];
  }
  console.log(total);
  return total;
}

missingNumber([4, 3, 2, 1]);
missingNumber([1,4,5,2]);
