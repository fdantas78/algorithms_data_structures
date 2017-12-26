// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, step = '') {
    
    if (n === row) {
        return;
    }
    
    if (n === step.length) {
        console.log(step);
        steps(n, row + 1);
        return;
    }
    
    if (step.length <= row) {
        step += '#';
    } else {
        step += ' ';
    }
    steps(n, row, step);
}

function steps1(n) {
    
    let repeat = function(str, n) {
        let aux = '';
        for (let i = 0; i < n; i++) {
            aux += str;
        }
        return aux;
    };
    
    for (let i = 1; i <= n; i++) {
        console.log(repeat('#',i) + repeat(' ', n-i));
    }
}


steps(3);

module.exports = steps;
