function maxArea(height: number[]): number {
    let maxArea = 0;
    let i = 0;
    let j = height.length-1;

    while (j !== i) {
        const area = Math.min(height[i], height[j]) * (j - i)
        console.log(area, maxArea, j-i, Math.min(height[i], height[j]))   
        if (area > maxArea) {
            maxArea = area;
        }


        if (height[j] > height[i]) {
            i++;
        } 
        else { 
            j--
        }
    }

    return maxArea
};

// Example 1:
// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
console.log("Example 1: ", maxArea([1,8,6,2,5,4,8,3,7]))

// Example 2:
// Input: height = [1,1]
// Output: 1
console.log("Example 2: ", maxArea([1, 1]))

console.log("Example 3: ", maxArea([10, 1, 1, 48, 49]))
console.log("Example 4: ", maxArea([10, 1, 1, 11, 49, 48, 50, 1, 1, 30]))