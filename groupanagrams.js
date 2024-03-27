// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]

const groupAna = (arr) => {
    let holdingArr = []
    let resultArr = []

    for (let i = 0; i < arr.length; i++) {
        holdingArr.push(arr[i])
        for (let j = 0; j < arr.length; j++) {
            if (j === i) {
                continue
            }
            if (arr[i].split('').toSorted().join('') === arr[j].split('').toSorted().join('')) {
                holdingArr.push(arr[j])
                arr.splice(j, 1)
                j--
            }
        }
        resultArr.push(holdingArr)
        holdingArr = []
    }
    return resultArr
}

