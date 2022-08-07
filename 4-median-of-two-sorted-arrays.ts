function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const nums1Length = nums1.length, nums2Length = nums2.length;

    const totalLength = nums1Length + nums2Length;
    const halfLength = (totalLength % 2 === 1 ? totalLength + 1 : totalLength + 2) / 2

    let num1Index = 0, num2Index = 0;

    // Temp array will calculate to get the median value or last 2 median values as the last items in the array
    const tempArray = [];
    while (tempArray.length < halfLength) {
        if (num1Index >= nums1Length || nums1[num1Index] > nums2[num2Index]) {
            tempArray.push(nums2[num2Index])
            num2Index++;
        }
        else {
            tempArray.push(nums1[num1Index])
            num1Index++;
        }
    }

    return totalLength % 2 === 1 ? tempArray[tempArray.length - 1] : ((tempArray[tempArray.length - 2] + tempArray[tempArray.length - 1]) / 2);
};

// Example 1:
// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
console.log("Example 1:", findMedianSortedArrays([1, 3], [2]));

// Example 2:
// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
console.log("Example 2:", findMedianSortedArrays([1, 2], [3, 4]));

// Example 3 Mine:
// Input: nums1 = [1,1,1,2], nums2 = [3,4]
// Output: 1.5
// Explanation: merged array = [1,1,1,2,3,4]
console.log("Example 3:", findMedianSortedArrays([1, 1, 1, 2], [3, 4]));

console.log("Example 4:", findMedianSortedArrays([], [3, 4]));
console.log("Example 5:", findMedianSortedArrays([], [3]));
console.log("Example 6:", findMedianSortedArrays([1, 1, 1, 2], []));
console.log("Example 7:", findMedianSortedArrays([1, 1, 2], []));