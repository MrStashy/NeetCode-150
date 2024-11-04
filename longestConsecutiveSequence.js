const testArr = [7, 2, 20, 4, 10, 3, 4, 5, 6];

function longestConsecutive(nums) {
  const numSet = new Set(nums);
  let longestStreak = 0;

  for (let num of numSet) {
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentStreak = 1;

      while (numSet.has(currentNum + 1)) {
        currentNum += 1;
        currentStreak += 1;
      }

      longestStreak = Math.max(longestStreak, currentStreak);
    }
  }

  return longestStreak;
}

console.log(longestConsecutive(testArr));
