// // 'use strict';

// function logger(){
//     console.log('My name is joy');

// }

// //calling / running / invoking function
// logger();
// logger();

// function fruitProcessor(apples, oranges){
//     console.log(apples, oranges);
//     const juice = `juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice=fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice= fruitProcessor(2, 4);
// console.log(appleOrangeJuice);


// // function calcAge1(birthYear){
// //     const age = 2022-birthYear;
// //     return age;
// // }

// //function declaration
// function calcAge1(birthYear){
//     return 2022-birthYear;
// }

// const age1=calcAge1(1991);

// //function expression
// const calcAge2=function (birthYear){
//     return 2022-birthYear;
// }

// const age2=calcAge2(1991);
// console.log(age1, age2);


// //arrow function
// const calcAge3=birthYear=>2022-birthYear;
// const age3=calcAge3(1991);
// console.log(age3);


// const yearsUntilRetirement = (birthYear, firstName)=>{
//     const age =2022 -birthYear;
//     const retirement = 65-age;
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1991, 'joy'));
// console.log(yearsUntilRetirement(1980, 'jonus'));


//function call
function cutFruitPieces(fruit){
    return fruit*4;
}
function fruitProcessor(apples, oranges){
    const applePieces= cutFruitPieces(apples);
    const orangePieces= cutFruitPieces(oranges );

    const juice = `juice with ${applePieces} apple pieces and ${orangePieces} orange pieces.`;
    return juice;
}

console.log(fruitProcessor(2, 3));