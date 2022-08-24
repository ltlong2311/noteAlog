// medium

function matchingStrings(strings, queries) {
    // Write your code here
    return queries.map((x) => strings.filter((y) => y === x).length);
}
