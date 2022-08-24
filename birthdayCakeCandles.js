/* 
  Count how many candles are tallest

  Ex: 
    candles = [2,3,5,5,1]
        
    output: 
    2

    Note: There are 2 highest candles with a height is 5

*/

var candles = [2,3,5,5,1];

function birthdayCakeCandles(candles) {
    let max = 0;
    candles.forEach(e => {
        e > max && (max = e);
    })
    let tallestCandles = candles.filter(e => e === max);
    return tallestCandles.length;
}

const result = birthdayCakeCandles(candles);
console.log(result);


// explore more

function birthdayCakeCandles2(candles) {
    var max = Math.max(...candles),
        count = 0;

    candles.forEach(e => {
        if(e == max) count++;
    })
    return count;
}
console.log(birthdayCakeCandles2(candles));
