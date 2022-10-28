const perf = require("execution-time")();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(extraLargeArray);
let resultsAppendXL = perf.stop();  // Stops timer and save time results

// Try it with second function
perf.start();
doublerInsert(extraLargeArray);
let resultsInsertXL = perf.stop();

console.log('Results for the extra Large Array');
console.log("insert", resultsInsertXL.preciseWords);
console.log("append", resultsAppendXL.preciseWords);



perf.start();                     // Starts timer
doublerAppend(largeArray);
let resultsAppendL = perf.stop();  // Stops timer and save time results

perf.start();
doublerInsert(largeArray);
let resultsInsertL = perf.stop();

console.log('Results for the Large Array');
console.log("insert", resultsInsertL.preciseWords);
console.log("append", resultsAppendL.preciseWords);


perf.start();                     // Starts timer
doublerAppend(mediumArray);
let resultsAppendM = perf.stop();  // Stops timer and save time results

perf.start();
doublerInsert(mediumArray);
let resultsInsertM = perf.stop();

console.log('Results for the Medium Array');
console.log("insert", resultsInsertM.preciseWords);
console.log("append", resultsAppendM.preciseWords);



perf.start();                     // Starts timer
doublerAppend(smallArray);
let resultsAppendS = perf.stop();  // Stops timer and save time results

perf.start();
doublerInsert(smallArray);
let resultsInsertS = perf.stop();

console.log('Results for the Small Array');
console.log("insert", resultsInsertS.preciseWords);
console.log("append", resultsAppendS.preciseWords);



perf.start();                     // Starts timer
doublerAppend(tinyArray);
let resultsAppendT = perf.stop();  // Stops timer and save time results

perf.start();
doublerInsert(tinyArray);
let resultsInsertT = perf.stop();

console.log('Results for the Tiny Array');
console.log("insert", resultsInsertT.preciseWords);
console.log("append", resultsAppendT.preciseWords);

// esults for the extra Large Array
// insert 738.2801 ms
// append 3.2029 ms
// Results for the Large Array
// insert 7.9391 ms
// append 316.4 μs
// Results for the Medium Array
// insert 1.145 ms
// append 444 μs
// Results for the Small Array
// insert 6.4 μs
// append 7.2 μs
// Results for the Tiny Array
// insert 2.2 μs
// append 3.9 μs


//insertion is O(n^2) because using unshift is similar to using a nested for loop
//append is O(n), linear because it only has to move one number per number in the function
//You can see this in the large difference between their times, with the gap getting much larger for larger data sets.
//Therefore, append scales better than insertion.