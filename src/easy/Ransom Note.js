function canConstruct(ransomNote, magazine) {
    if(ransomNote.length > magazine.length) 
        return false;

    for(let i = 0; i < ransomNote.length; ++i) {
        let match = false;

        for(let j = 0; j < magazine.length; ++j) {
            if(ransomNote[i] === magazine[j]) {
                magazine = magazine.substring(0, j) + magazine.substring(j + 1, magazine.length);
                match = true;
                break;
            }
        }
        if(!match) return false;
    }

    return true;
}

console.log(canConstruct("aab", "aaa"));