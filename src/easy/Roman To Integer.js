function romanToInt(s) {
    let result = 0;

    for(var i = 0; i < s.length; i++) {
        const next = s[i + 1];

        switch(s[i]) {
            case 'I': {
                if(next && (next === 'V' || next === 'X'))
                    result -= 1;
                else 
                    result += 1;
                break;
            }
            case 'V': {
                result += 5;
                break;
            }
            case 'X': {
                if(next && (next === 'L' || next === 'C'))
                    result -= 10;
                else 
                    result += 10;
                break;
            }
            case 'L': {
                result += 50;
                break;
            }
            case 'C': {
                if(next && (next === 'D' || next === 'M'))
                    result -= 100;
                else 
                    result += 100;
                break;
            }
            case 'D': {
                result += 500;
                break;
            }
            case 'M': {
                result += 1000;
                break;
            }
        }
    }

    return result;
}


console.log(romanToInt('MCMXCIV'));
console.log(romanToInt('LVIII'));