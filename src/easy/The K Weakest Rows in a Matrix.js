const { performance } = require('perf_hooks');
// let startTime = performance.now();
// let endTime = performance.now();
// console.log(`First method took: ${endTime - startTime} milliseconds`);

function kWeakestRows(mat, k) {
    const countArr = [];
    for(let i = 0; i < mat.length; ++i) {
        const c = mat[i].filter(x => x === 1).length;
        countArr.push(c);
    }

    const result = [];
    for(let i = 0; i < k; ++i) {
        let smallest;
        let index;

        for(let j = 0; j < countArr.length; ++j) {
            if(result.includes(j)) continue;

            if(smallest === undefined || countArr[j] < smallest) {
                smallest = countArr[j]
                index = j;
            }
        }
        result.push(index);
    }

    return result;
}

let matrix = [
    [1,1,0,0,0],
    [1,1,1,1,0],
    [1,0,0,0,0],
    [1,1,0,0,0],
    [1,1,1,1,1]
];

matrix = [[1,0],[0,0],[1,0]]
console.log(kWeakestRows(matrix, 2));