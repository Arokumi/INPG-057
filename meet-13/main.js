// const fn2 = function (callback) {
//     callback()
// };

// const variable = function () {
//     console.log("wassup my migga")
// };

// fn2(variable);

// setTimeout(function () {console.log('Namaku')}, 500);

// setTimeout(function () {console.log('Aam')}, 1000);

// setTimeout(function () {console.log('bagaimana kamu hari ini?')}, 2000);

// console.log('Hallo');

fetch('https://cataas.com/cat?json=true')
.then( function(response){
    return response.json()
})
.then( function (data){
    console.log(data)
})
.catch(function (err){
    console.log('error')
});