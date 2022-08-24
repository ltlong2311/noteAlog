/* 
    The red region denotes the house, where s is the start point, and t is the endpoint. The apple tree is to the left of the house, and the orange tree is to its right.
    Assume the trees are located on a single point, where the apple tree is at point a, and the orange tree is at point b.
    When a fruit falls from its tree, it lands d units of distance from its tree of origin along the x-axis. *A negative value of d means the fruit fell d units to the tree's left, and a positive value of d means it falls d units to the tree's right. *


    Sample Input:
    7 11
    5 15
    3 2
    -2 2 1
    5 -6

    The first line contains two space-separated integers denoting the respective values of s and t.
    The second line contains two space-separated integers denoting the respective values of a and b.
    The third line contains two space-separated integers denoting the respective values of m and n.
    The fourth line contains m space-separated integers denoting the respective distances that each apple falls from point a.
    The fifth line contains n space-separated integers denoting the respective distances that each orange falls from point b.
 */

var apples = [-2, 2, 1];
var oranges = [5, -6];

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    const applesLand = apples.map(e => e + a);
    const orangesLand = oranges.map(e => e + b);
    let appCount = 0;
    let oranCount = 0;
    applesLand.forEach(e => (e >= s && e <= t) && appCount++);
    orangesLand.forEach(e => (e >= s && e <= t) && oranCount++);
    console.log(appCount);
    console.log(oranCount);
}

// return
function countApplesAndOranges2(s, t, a, b, apples, oranges) {
    const applesLand = apples.map(e => e + a);
    const orangesLand = oranges.map(e => e + b);
    let count = [0, 0];
    applesLand.forEach(e => e >= s && e <= t && count[0]++);
    orangesLand.forEach(e => e >= s && e <= t && count[1]++);
    return count;
}

console.log(countApplesAndOranges2(7, 11, 5, 15, apples, oranges).join("\n"));

// explore more
function countApplesAndOranges3(s, t, a, b, apples, oranges) {
    const applesRes = apples.map(num => num + a).filter(num => num >= s && num <= t).length;
    const orangesRes = oranges.map(num => num + b).filter(num => num>= s && num <= t).length;
    console.log(applesRes + "\n" + orangesRes);
}

// countApplesAndOranges3(7, 11, 5, 15, apples, oranges);
