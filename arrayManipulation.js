// not best
function arrayManipulation(n, queries) {
    // Write your code here
    // let zeroArr = '0'
    //     .repeat(n)
    //     .split('')
    //     .map((e) => parseInt(e));
    // for (let j = 0; j < queries.length; j++) {
    //     let startIndex = queries[j][0];
    //     let endIndex = queries[j][1];
    //     let numberToAdd = queries[j][2];
    //     for (let i = 0; i < n; i++) {
    //         let index = i + 1;
    //         if (index >= startIndex && index <= endIndex) {
    //             zeroArr[i] += numberToAdd;
    //         }
    //     }
    // }
    // return Math.max(...zeroArr);

    let arr = new Array(n + 1).fill(0);
    let max = 0;
    queries.forEach(([a, b, k]) => {
        for (let i = a; i <= b; i++) {
            arr[i] += k;
            if (arr[i] > max) {
                max = arr[i];
            }
        }
    });
    return max;
}

// perfect
function arrayManipulation(n, queries) {
    // Write your code here
     const arr = new Array(n + 2).fill(0), qn = queries.length;
    let sum = 0, maxValue = 0;

    for (let i = 0; i < qn; i++) {
        const [min, max, sum] = queries[i];
        arr[min] += sum;
        maxValue = maxValue < sum ? sum : maxValue
        if (max <= n) {
            arr[max + 1] -= sum;
        }

    }
    for (let k = 0; k < n; k++) {
        sum += arr[k];
        if (maxValue < sum) {
            maxValue = sum;
        }
    }
    return maxValue;
}