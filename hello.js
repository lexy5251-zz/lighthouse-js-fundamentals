// function sayHello(name) {
//   console.log("Hello, " +name);
// }

// sayHello("Caliban");
// sayHello("Miranda");
// sayHello("Ferdinand");

// var repeatNumbers = function(data) {
//     var numbers = '';
//     for (var i = 0; i < data.length; i++) {
//         // if (i > 0) {
//         //   numbers = numbers + ',';
//         // }
//         for (var j = 0; j < data[i][1]; j++) {
//             numbers = numbers + data[i][0];
//         }

//     }
//     return numbers;
//     // Put your solution here
// };



// function repeatNumbers(data) {
//     var result = '';
//     for (var i = 0; i < data.length; i++) {
//       if (i > 0){
//             result = result + ',';
//       }
//         var s = '';
//         for (var j = 0; j <= data[i][1]; j++) {

//             s = s + data[i][0];
//         }
//         result = result + s;
//     }
//     return result;
// }

//



// var talkingCalendar = function(date) {
//     var str = date.split("/");
//     var day = str[2];
//     var month = str[1];
//     var year = str[0];
//     switch (month) {
//         case '01':
//             month = 'January';
//             break;
//         case '02':
//             month = 'February';
//             break;
//         case '03':
//             month = 'March';
//             break;
//         case '04':
//             month = 'April';
//             break;
//         case '05':
//             month = 'May';
//             break;
//         case '06':
//             month = 'June';
//             break;
//         case '07':
//             month = 'July';
//             break;
//         case '08':
//             month = 'August';
//             break;
//         case '09':
//             month = 'September';
//             break;
//         case '10':
//             month = 'October';
//             break;
//         case '11':
//             month = 'November';
//             break;
//         case '12':
//             month = 'December';

//     }

//     if (day === '01') {
//         day = '1st';
//     } else if (day === '02') {
//         day = '2nd';
//     } else if (day === '03') {
//         day = '3rd';
//     } else {
//         day = day + 'th';
//     }

//     return month + " " + day + ", " + year;


// };


// console.log(talkingCalendar("2017/12/02"));
// console.log(talkingCalendar("2007/11/11"));
// console.log(talkingCalendar("1987/08/24"));


// var calculateChange = function(total, cash) {
//     // Your code here
//     var remain = cash - total;

//     if (remain / 1000 >= 2) {
//         var a = remain / 1000 / 2;
//         // return 'Twenty dollars:' + Math.floor(a);

//         if (remain / 1000 >= 1) {
//             var b = remain / 1000 / 1;
//             return 'Ten dollars:' + Math.floor(b);
//         }
//     } else {
//         var a = '';
//     }





// };

// console.log(calculateChange(1787, 12000));
// console.log(calculateChange(2623, 4000));
// console.log(calculateChange(501, 1000));


// var camelCase = function(input) {
//     var newString = '';
//     var splitString = input.split(' ');
//     for (var i = 0; i < splitString.length; i++){
//         newString = splitString.charAt(0).toUpperCase() + splitString.slice(1);

//     }
//     return newString;
//   // Your code here
// };



// console.log(camelCase("this is a string"));
// // console.log(camelCase("loopy lighthouse"));
// // console.log(camelCase("supercalifragalisticexpialidocious"));










function sum(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
     sum = sum + arr[i];
  }
  return sum;
  /* IMPLEMENT ME */
}



console.log(sum([1,2,3,4,5]));




