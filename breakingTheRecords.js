/*

*/

var scores = [3, 4, 21, 36, 10, 28, 35, 5, 24, 42]

function breakingRecords(scores) {
    let best = 0;
    let worst = 0;
    let bestScore = scores[0];
    let worstScore = scores[0];
    const lengthOfData = scores.length;
    for(let i = 1; i < scores.length; i++) {
        if (scores[i] > bestScore) {
            bestScore = scores[i];
            best++;
            continue;
        }
        if (scores[i] < worstScore) {
            worstScore = scores[i]
            worst++;
            continue;
        }
    }
    return [best, worst];
}


// explore more
function breakingRecords2(scores) {
    let games = scores ;
    let min = games[0];
    let max = games[0];
    
    let minRecord = 0;
    let maxRecord = 0;
    
    for (const score of games) {
        if (max < score) {
            max = score;
            maxRecord++;
        }
        else if (score < min) {
            min = score;
            minRecord++;
        }
    }
    
    return [maxRecord, minRecord];
}

console.log(breakingRecords(scores));
console.log(breakingRecords2(scores));