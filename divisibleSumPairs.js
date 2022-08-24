function divisibleSumPairs(n, k, ar) {
    // Write your code here
    let count = 0;
    for (let i = 0; i < n - 1; i++) {
        count += ar.slice(i + 1, n).filter((item, index) => {
            if ((item + ar[i]) % k === 0) {
                return item;
            }
        }).length;
    }
    return count;
}

function divisibleSumPairs(n, k, ar) {
    // Write your code here
    let count = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let sum = ar[i] + ar[j];
            if (sum % k === 0) {
                count++;
            }
        }
    }
    return count;
}
