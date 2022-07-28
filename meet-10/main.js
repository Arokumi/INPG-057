// //First Excercise

// let fruits = ["apple", "pear", "banana", "watermelon", "cherry"]

// console.log(fruits)

// fruits.unshift("tomato")

// console.log("adds tomato to the start", fruits)

// fruits.splice(0, 1, "papaya")

// console.log("removes tomato and replaces it with papaya", fruits)

// fruits.pop()

// console.log("removes cherry", fruits);

// //Second Excercise

// let desc = {
//     firstName: "Arhamuzzaky",
//     lastName: "Alfa",
//     hobbies: [
//         'drawing', 'gaming', 'reading', 'football'
//     ],
//     favNum: 420,
//     eyewear: false,
// };

// console.log(desc);

// console.log(desc.firstName, desc.lastName);

// desc.favNum = 8

// console.log(desc);

// // let newHobby = ['coding'];
// desc.hobbies.push('coding')

// console.log(desc);

// desc.graduate = 'Hacktiv8'

// console.log(desc);

// for(let index = 0; index < desc.hobbies.length; index++) {
//     console.log(desc.hobbies[index])
// };

// console.log(Object.keys(desc));
// console.log(Object.values(desc));

// for (let key in desc) {
//     console.log(key, ":", desc[key])
// };

// //Third Excercise

// function lmao() {
//     console.log("July 28th")
// };

// function lol() {
//     return "July 28th"
// };

// console.log(lmao(), lol())

//Fourth Excercise

function counter(number) {
    let isEven = number % 2 === 0
    let isNumber = typeof number === 'number'
    let isNan = isNaN(number)

    if(isNumber) {
        if (!isNan) {
            if(isEven) {
                return "this number is even"
            } else {
                return "this number is odd"
            }
        } else {
            return "this number is not valid"
        }
    } else {
        return "this is not a number"
    }
};

console.log(counter(101))
console.log(counter(5))
console.log(counter(22))
console.log(counter(NaN))