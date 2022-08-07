function twoSum(nums: number[], target: number): number[] {
    let indexes: number[] | undefined;

    nums.forEach((num1: number, index1: number) => {
        nums.forEach((num2: number, index2: number) => {
            if (!indexes && index1 !== index2 && (num1 + num2) === target) {
                indexes = [index1, index2];
            }
        });
    });

    return indexes || [];
};

function twoSumImproved(nums: number[], target: number): number[] {
    for (let index1 = 0; index1 < nums.length; index1++) {
        for (let index2 = index1 + 1; index2 < nums.length; index2++) {
            if ((nums[index1] + nums[index2]) === target) {
                return [index1, index2];
            }
        }
    }

    return [];
};


// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
let nums = [2, 7, 11, 15], target = 9
console.log("Example 1: ", twoSumImproved(nums, target))

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]
nums = [3, 2, 4], target = 6
console.log("Example 2: ", twoSumImproved(nums, target))

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]
nums = [3, 3], target = 6
console.log("Example 3: ", twoSumImproved(nums, target))


