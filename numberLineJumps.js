/*
    The first kangaroo starts at location x1 and moves at a rate of v1 meters per jump.
    The second kangaroo starts at location x2 and moves at a rate of v2 meters per jump.
    You have to figure out a way to get both kangaroos at the same location at the same time as part of the show. 
    If it is possible, return YES, otherwise return NO.
*/

function kangaroo(x1, v1, x2, v2) {
    let a = 1000;
    let result = false;
    for (let i = 0; i < a; i++) {
        x1 = x1 + v1;
        x2 = x2 + v2;
        if (x1 === x2) {
            result = true;
            break;
        }
    }

    console.log(result ? "YES" : "NO");
}

function kangaroo2(x1, v1, x2, v2) {
    if (v1 < v2) return "NO";
    else if ((x2 - x1) % (v1 - v2) === 0) return "YES";
    return "NO";
}
