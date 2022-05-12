function maximumWealth(accounts) {
    let richest = 0;

    for(const banks of accounts) {
        const sum = banks.reduce((acc, curr) => acc + curr);
        if(richest < sum) richest = sum;
    }
    
    return richest;
}

const accs = [[2,8,7],[7,1,3],[1,9,5]];
console.log(maximumWealth(accs));