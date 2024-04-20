import { ThreeSumClosest } from "../16-three-sum-closest";

describe("16 - Three Sum", () => {
    test("Example 1:", () => {
        // The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
        const result = ThreeSumClosest([-1, 2, 1, -4], 1);

        expect(result).toEqual(2)
    })

    test("Example 2:", () => {
        // The sum that is closest to the target is 0. (0 + 0 + 0 = 0).
        const result = ThreeSumClosest([0, 0, 0], 1);

        expect(result).toEqual(0)
    })
})
