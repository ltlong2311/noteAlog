/*
 * Convert a time in -hour AM/PM format to military (24-hour) time. 
 * inputEx: 06:38:52PM
 * outputEx: 18:38:52  
 */

var s1 = "12:00:00AM"
var s2 = "12:00:00PM"
var s3 = "06:38:52AM"
var s4 = "06:38:52PM"

function timeConversion(s) {
    let session = s.slice(-2);
    let militaryTime = "";
    let hour = s.slice(0,2);
    if(session === "AM"){
        if(hour === "12") militaryTime = "00" + s.slice(2,8);
        else militaryTime = s.slice(0, -2);
    } else{
        if(hour === "12") militaryTime = "12" + s.slice(2,8);
        else {
            let hourMil =  parseInt(hour) + 12;
            militaryTime = hourMil.toString() + s.slice(2,8);
        }
    }
    return militaryTime;
}

console.log(timeConversion(s1));
console.log(timeConversion(s2));
console.log(timeConversion(s3));
console.log(timeConversion(s4));

// explore more

function timeConversion2(s) {
    let late = s.includes('PM')
    if (!late) {
        s = s.split('AM')
        s = s[0].split(':')
        if(s[0] == '12') s[0] = '00'
        return s.join(':')
    } else {
        s = s.split('PM')
        s = s[0].split(':')
        if(s[0] != '12') s[0] = (parseInt(s[0]) + 12).toString()
        return s.join(':')
    }
}


console.log(timeConversion2(s1));
console.log(timeConversion2(s2));
console.log(timeConversion2(s3));
console.log(timeConversion2(s4));