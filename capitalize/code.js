// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    let cap = '';

    for(let i = 0; i < str.length; i++){
        if(i === 0)
            cap += str[i].toUpperCase();
        else if(str[i-1] === " ")
            cap += str[i].toUpperCase();
        else
            cap += str[i];
    }
    console.log(cap);
    return cap;
}

function capitalize2(str) {
    let arr = [];
    arr = str.split('');

    for(let i = 0; i < arr.length; i++){
        if(i === 0)
            arr[i] = arr[i].toUpperCase();
        else if(arr[i] === " ")
            arr[i+1] = arr[i+1].toUpperCase();
    }
    console.log(arr);
    return arr.join('');
}

function capitalize1(str) {
    const words = [];
    
    for (let word of str.split(' ')) {
        words.push(word[0].toUpperCase() + word.slice(1));
    }
    
    return words.join(' ');
}


console.log(capitalize("test of solution"));
module.exports = capitalize;
