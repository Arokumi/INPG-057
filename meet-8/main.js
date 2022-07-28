// //Declaring Objects and key:value

// // method 1
// let obj = {
//     name: "Aro"
// };


// // method 2
// obj["age"] = 15;

// // method 3
// obj.gender = 'male';

// // console.log(obj)

// // Practice

// function showBond() {
//     console.log("Sylvie")
// }

// let arthurObj = {
//     name: 'Arthur Leywin',
//     otherAliases: [
//         'Art',
//         'Grey',
//         'Godspell'
//     ],
//     deviants: {
//         power_1: 'Lightning',
//         power_2: 'Ice',
//         power_3: 'Gravity',
//     },
//     statusAlive: true,
//     gender: 'male',
//     age: 17,
//     birthday: 'May 29',
//     bond: showBond,
// };


//WTF IS LET FOR (IN) I AM CONFUSED HELP IM GONNA DIE

function hapusSpasi(str) {
    let result = ""
    for(let index in str) {
      // console.log(str[index])
      if (str[index] !== " ") {
        result = result + str[index]
      }
    }
    return result
  }
  
  function balikKata(str) {
    let result = ""
    for (let index in str) {
      result = str[index] + result
    }
    return result
  }
  
let input = "laura, ashil & arham"
let tanpaSpasi = hapusSpasi(input)
let passFinal = balikKata(tanpaSpasi)

console.log(passFinal)

