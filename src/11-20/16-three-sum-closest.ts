function threeSumClosest(nums: number[], target: number): number {
    let result = Number.MAX_VALUE;
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                const sum = nums[i] + nums[j] + nums[k];

                const difference = Math.abs(target - sum)
                const previousBest = Math.abs(target - result);
                if (difference < previousBest) {
                    result = sum;
                }
            }
        }
    }

    return result;
};

export const ThreeSumClosest = threeSumClosest