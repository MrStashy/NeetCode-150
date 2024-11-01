const testInput = [0, 3, 1, 0, 1, 3, 1, 0, 1, 3]

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
            console.log("When i is ", i, "left peak num is", leftPeakNum)
            bucketArr.push(leftPeakNum)
        }

        for (let j = i + 1; j < arr.length - i; j ++) {
          if (arr[j] < leftPeakNum) {
            bucketArr.push(arr[j])
            continue
          }

          if (arr[j] >= leftPeakNum) {
            bucketArr.push(arr[j])
            allBucketsArr.push(bucketArr)
            i += (j - 2)
            leftPeakNum = 0
            bucketArr = []
            break
          }
        }    
    }
    console.log(allBucketsArr)
}

console.log(isolateBuckets(testInput))