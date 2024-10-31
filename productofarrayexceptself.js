// Products of Array Discluding Self
// Given an integer array nums, return an array output where output[i] is the product of all the elements of nums except nums[i].

// Each product is guaranteed to fit in a 32-bit integer.

// Example 1:

// Input: nums = [1,2,4,6]

// Output: [48,24,12,8]
// Example 2:

// Input: nums = [-1,0,1,2,3]

// Output: [0,-6,0,0,0]
// Constraints:

// 2 <= nums.length <= 1000
// -20 <= nums[i] <= 20

function productExceptSelf(arr) {

    const result = arr.reduce((a, b) => a * b)
    return result
}

const testArr = [1, 5, 2, 9]

console.log(productExceptSelf(testArr))