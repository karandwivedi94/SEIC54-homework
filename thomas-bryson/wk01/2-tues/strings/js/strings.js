const DrEvil = function(amount) {
    if (amount !== 10000000) {
    amountDollars = (' ' + amount + ' dollars')
    return amountDollars;
    } else;
    amountDollarsPinky = (' ' + amount + ' dollars (pinky)')
    return amountDollarsPinky
}

console.log(DrEvil(10000000));

// Great job!

const MixUp = function(string1, string2) {
    result = string2.substr(0, 2) + string1.substr(2) + ' ' + string1.substr(0, 2) + string2.substr(2);
    return result;
}
console.log(MixUp('cat','dog'));
console.log(MixUp('mix','pod'));

// You're doing great!

const FixStart = function(string) {
    text = string.replace(/b/g, '*');
    textSlice = text.slice(1);
    textFirstChar = string.substr(0,1) + textSlice;
    return textFirstChar;
}
console.log(FixStart('babble'));
console.log(FixStart('Bullsbbt Problem'));

// Wow that one was tough!

const verbling = function(verbString) {
    if (verbString.length >= 3 & verbString.endsWith('ing') !== true) {
        ingAdd = verbString + 'ing'
        return ingAdd;
    } else if (verbString.endsWith('ing') === true) {
        lyAdd = verbString + 'ly';
        return lyAdd;
    }
        else {
            return verbString;
        } 
}
console.log(verbling("da"));
console.log(verbling("david"));
console.log(verbling("daviding"));

// Wow! Impressive!

const notBad = function(badString) {
    
}