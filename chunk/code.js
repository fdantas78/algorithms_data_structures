// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk1(array, size) {
    const chunked = [];
    
    for(let elem of array){
        const last = chunked[chunked.length -1];
        
        if(!last || last.length === size)
            chunked.push([elem]);
        else
            last.push(elem);
            
    }
    console.log(chunked);
    return chunked;
}

function chunk(array, size) {
    const chunked = [];

    for(let index = 0; index < array.length; index += size){
        chunked.push(array.slice(index, index+size));
    }
    console.log(chunked);
    return chunked;
}

module.exports = chunk;
