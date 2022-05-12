function numberOfSteps(num) {
    if(num > 1) return 1 + (num % 2 === 0 ? numberOfSteps(num / 2) : numberOfSteps(num - 1));
    return num === 1 ? 1 : 0;
}

console.log(numberOfSteps(123));
console.log(numberOfSteps(14));