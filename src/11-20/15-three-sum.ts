// Too slow
function threeSum(nums: number[]): number[][] {
    const result: number[][] = [];
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                const numi = nums[i];
                const numj = nums[j];
                const numk = nums[k];
                if ((numi + numj + numk) === 0) {
                    const answer = [numi, numj, numk].sort()
                    const existingAnswer = result.find(r => r[0] === answer[0] && r[1] === answer[1] && r[2] === answer[2]);
                    !existingAnswer && result.push(answer)
                }
            }
        }
    }

    return result;
};

export const ThreeSum = threeSum