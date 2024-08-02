/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var roman = {
        I: 1,
        V: 5, 
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    let count = 0;
    for(let i=0; i<s.length; i++){
        if([s[i]] == "I" && s[i+1] == "V" || s[i]=="I" && s[i+1] == "X" || s[i]=="C" && s[i+1] == "M" || s[i] == "X" && s[i+1] == "L" || s[i] == "X" && s[i+1] == "C" || s[i] == "C" && s[i+1] == "D"   ){
            count += (roman[s[i+1]]-roman[s[i]])
            console.log('printing', roman[s[i+1]]- roman[s[i]])
            i++;
        }else{
            count += roman[s[i]]
            console.log('printing', roman[s[i]])
        }
    }
    return count
};
