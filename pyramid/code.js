// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, floor = '') {
    
    if (row === n) {
        return;
    }
    
    if(floor.length === (2*n - 1)) {
        console.log(floor);
        pyramid(n, ++row);
        return;
    }
    
    if(Math.floor(n - 1/2 - row) <= floor.length && Math.floor(n - 1/2 + row) >= floor.length)
        floor += '#';
    else
        floor += ' ';
    pyramid(n, row, floor);
}

function pyramid1(n) {
    
    let repeat = function(str, n) {
        let aux = '';
        for (let i = 0; i < n; i++) {
            aux += str;
        }
        return aux;
    };
    
    for (let i = 0; i < n; i++) {
        console.log(repeat(' ',  n - (i + 1)) + repeat('#',(2*i + 1)) + repeat(' ', n - (i + 1)));
    }
}

pyramid(7);


module.exports = pyramid;
