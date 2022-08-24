/* 
 * If the difference between the grades and the next multiple of 5 is less than 3, round grade up to the next multiple of 5.
 * If the value of grade is less than 38, no rounding occurs as the result will still be a failing grade.
 
 * Ex:
   
   Sample input: 
    63
    57
    38
    23
    
   Sample output: 
    65
    57
    40
    23
 */

var grades = [63, 57, 38, 23];

function gradingStudents(grades) {
    grades.forEach((e) => {
        if (e >= 38) {
            let nextMultiOfFive = (parseInt(e / 5) + 1) * 5;
			if((nextMultiOfFive - e) < 3){
				console.log(nextMultiOfFive);
			} else {
				console.log(e);
			}
        } else {
		    console.log(e);
		}
    });
}

gradingStudents(grades);

// explore more
function gradingStudents2(grades) {
    return grades.map((grade) => {
		const round = Math.ceil((grade + 1) / 5) * 5
		return (round - grade < 3) && grade >= 38 ? round : grade;
    });
}

console.log(gradingStudents2(grades));