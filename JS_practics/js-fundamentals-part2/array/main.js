const friend1= 'Michael';
const friend2= 'steven';
const friend3='peter';

const friends = ['Michael','Steven','Peter'];
console.log(friends);

const years =new Array(1991, 1998,2002,2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length-1]);


friends[2]='joy';
console.log(friends);

// friends =['joy','ok']; // error

const firstName ='Biswarup';
const jonas =[firstName, 'Jana',2023-1999, 'student',friends]
console.log(jonas);
console.log(jonas.length);

const calcAge=function(birthYear){
    return 2023-birthYear;
}
const year=[1990, 1967, 2000,1998];

console.log(calcAge(year));
const age12= calcAge(year[0]);
const age13= calcAge(year[1]);
const age14= calcAge(year[year.length-1]);
console.log(age12, age13, age14);

const ages=[calcAge(year[0]), calcAge(year[1]),calcAge(year[year.length-1])];
console.log(ages);