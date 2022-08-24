/* 
 * Input Format:
        A single integer, n, denoting the size of the staircase.
 * Output Format:
        Print a staircase of size  using # symbols and spaces.
 * Ex:
    Input:
        6 
    Output
         #
        ##
       ###
      ####
     #####
    ######
 */

function staircase(n) {
    var space = " ";
    var char = "#";
    for(let i = 0; i < n; i++){
        var result = "";
        for(let j = 0; j < n-i-1; j++){
            result = result.concat(space);
        };
        for(let k = 0; k < i+1; k++){
             result = result.concat(char);
        };
        console.log(result);
    }
}

// Referenced solution
function staircase2(n) {
    for(let i = 0; i < n; i++){
        let result = "";
        for(let j = 0; j < n-i-1; j++){
            result += " ";
        };
        for(let k = 0; k < i+1; k++){
             result += "#"
        };
        console.log(result);
    }
}
staircase(6);
staircase2(5);