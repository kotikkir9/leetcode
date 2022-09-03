/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function subsets(nums) {
    nums = nums.sort();

    const result = [];
    const sub = Math.pow(2, nums.length);

    for (let i = 0; i < sub; ++i) {
        const temp = [];
        const bits = (i).toString(2);

        for (let j = 0; j < bits.length; j++) {
            if (bits[j] === '1') {
                temp.push(nums[bits.length - j - 1]);
            }
        }
        result.push([...temp]);
    }

    return result;
}

console.log(subsets([3,2,4,1]));