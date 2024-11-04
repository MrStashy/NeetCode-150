const testInput = [2, 1, 2, 1, 2, 3, 1, 2, 1, 1, 2]

function isolateBuckets(arr) {
    let numOverZeroFound = false;
    let allBucketsArr = []
    let bucketArr = []
    let leftPeakNum = 0

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === 0 && !numOverZeroFound) {
            continue
        } else {
            numOverZeroFound = true;
            leftPeakNum = arr[i]
            bucketArr.push(leftPeakNum)
        }

        for (let j = i + 1; j < arr.length; j ++) {
          if (arr[j] < leftPeakNum) {
            bucketArr.push(arr[j])
            continue
          }

          if (arr[j] >= leftPeakNum) {
            bucketArr.push(arr[j])
            allBucketsArr.push(bucketArr)
            leftPeakNum = 0
            i = j - 1 
            bucketArr = []
            break
          }
        }    
    }
    return allBucketsArr
}

console.log(isolateBuckets(testInput))