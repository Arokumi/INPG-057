// function bigorsmall (num1, num2) {
//     if (num2 > num1) {
//         console.log(true);
//     } else if (num2 < num1) {
//             console.log(false);
//         } else {
//             console.log(-1)
//         }
// };

// bigorsmall(5, 5);

// function reverseString(str) {
//     let newString = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         newString += str[i];
//     }
//     console.log(newString);
// }

// reverseString('Welcome');



// function HCF (num1, num2) {
//     let hcf;
//     for (let i = 1; i <= num1 && i <= num2; i++) {
//         if( num1 % i == 0 && num2 % i == 0) {
//             hcf = i;
//         }
//     }

//     console.log(hcf);
// };

// HCF(48, 64);

// function primeChecker (number) {
//     let isPrime = true;
//     if (number === 1) {
//         console.log('1 is neither a prime nor composite number')
//         isPrime = undefined;
//     }
//     else if (number > 1) {
//         for (let i = 2; i < number; i++) {
//             if (number % i == 0) {
//                 isPrime = false;
//                 break;
//             }
//         }
//     }
//     return isPrime
//     // console.log(isPrime);
// }

// primeChecker (7);


//LISTPRIME IS BROKEN LMAO//
// function listPrime (firstnum, secondnum) {
//     let allnum = [];
//     // let isPrime = true;
//     for (let i = firstnum; i <= secondnum; i++) {
//         for (let j = 2; j < i; j++) {
//             if (i % j == 0) {
//                 break;
//             } else {
//                 allnum.push(i)
//                 break;
//             }
//     }
// }
// console.log(allnum);
// };

// listPrime(1, 100);

