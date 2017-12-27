// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    
    //create empty matrix
    let final = [];
    for(let i = 0; i < n; i++) final.push([]);
    
    let counter = 1;
    let col_start = 0, col_end = n-1, row_start = 0, row_end = n - 1;
    
    while(col_start <= col_end && row_start <= row_end) {
        //top row
        for (let i = col_start; i <= col_end; i++) {
            final[row_start][i] = counter++;
        }
        row_start++;
        //right column
        for (let i = row_start; i <= row_end; i++) {
            final[i][col_end] = counter++;
        }
        col_end--;
        //bottom row
        for (let i = col_end; i >= col_start; i--) {
            final[row_end][i] = counter++;
        }
        row_end--;
         //left column
        for (let i = row_end; i >= row_start; i--) {
            final[i][col_start] = counter++;
        }
        col_start++;
    }
    
    return final;
}
console.log(matrix(7));
module.exports = matrix;
