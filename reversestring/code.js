// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse1(str) {
    return str.split('').reverse().join('');
}

function reverse2(str) {
    let rev = '';
    
    for(let char of str) {
        rev = char + rev;
    }
    
    return rev;
}

function reverse(str) {
    return str.split('').reduce((rev, char) => char + rev, '');
}

module.exports = reverse;
