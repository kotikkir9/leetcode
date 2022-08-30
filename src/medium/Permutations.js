/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function permute(nums) {
    if (nums.length === 1) return [nums];
    if (nums.length === 2) return [nums, [nums[1], nums[0]]];

    const combinations = [];

    nums.forEach(() => {
        const results = permute(nums.slice(1));

        results.forEach(e => {
            combinations.push([nums[0], ...e]);
        });

        nums.push(nums.shift());
    });

    return combinations;
}

console.log(permute([1, 2, 3]));