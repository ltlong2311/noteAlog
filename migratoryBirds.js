const arr = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4];

function migratoryBirds(arr) {
    let objectArr = arr.reduce((obj, b) => {
        obj[b] = ++obj[b] || 1;
        return obj;
    }, {});
    //      console.log(objectArr)
    const maxVal = Math.max(...Object.values(objectArr));
    const num = Object.keys(objectArr).find((key) => objectArr[key] === maxVal);

    return num;
}

console.log(migratoryBirds(arr));
