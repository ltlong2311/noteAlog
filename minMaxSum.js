/* 
   Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. 
   Then print the respective minimum and maximum values as a single line of two space-separated long integers.
   
   Ex:
      arr = [1,3,5,7,9]
      
      The minimum sum is 1+3+5+7=16
      
      The maximum sum is 3+5+7+9=24.
      
      output:
      16 24
*/

let arr = [1,3,5,7,9];

function miniMaxSum(arr) {
   let min = arr[0];
   let max = arr[0];
   let sum = arr.reduce((pev, current) => pev + current);
   arr.forEach(e => {
      e < min && (min = e);
      e > max && (max = e);
   })
   return(sum - max) + " " + (sum - min) ;
}

// Referenced solution
function miniMaxSum2(arr) {
   let min = arr[0];
   let max = arr[0];
   let sum = 0;
   for (let i = 0; i < 5; i++) {
      if (max < arr[i]) {
         max = arr[i];
      }
      if (min > arr[i]) {
         min = arr[i];
      }
      sum += arr[i];
   }
   let maxSum = sum - min;
   let minSum = sum - max;
   return (minSum + " " + maxSum);
}

console.log(miniMaxSum(arr));
console.log(miniMaxSum2(arr));