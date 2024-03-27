const topKFrequent = (nums, k) => {
    const numberCount = {}
    for (let i = 0; i < nums.length; i++) {
        if (Object.keys(numberCount).includes(nums[i].toString())) {
            numberCount[nums[i]] ++
        } else {
            numberCount[nums[i]] = 1
        }
    }

    const unsortedArr = []
    for (property in numberCount) {
        unsortedArr.push([property, numberCount[property]])
    }

    const sortedArr = unsortedArr.sort((a, b) => a[1] - b[1])

    const result = []
    for (let i = sortedArr.length - 1; i >= (sortedArr.length - k); i--) {
        result.push(sortedArr[i][0])
    }
    return result
};

const testArr = [6, 6, 6, 4, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 5, 5, 5]
const testK = 2

console.log(topKFrequent(testArr, testK))