// const jonasArray=[
//     'Jonas',
//     'Schmedtmann',
//     2037-1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven']
// ];

// const jonas = {
//     firstName: 'Biswarup',
//     lastName: 'Jana', 
//     age: 2022-1991,
//     job: 'teacher',
//     friends:['Michael', 'Peter', 'Steven']
// };

// console.log(jonas);

// console.log(jonas.lastName);
// console.log(jonas['lastName']);

// const nameKey='Name';
// console.log(jonas['first'+nameKey]); // firstName
// console.log(jonas['last'+nameKey]); // lastName

// // console.log(jonas.'last'+nameKey);  //not work

// // const interestedIn=prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');


// // if(jonas[interestedIn]){
// //     console.log(jonas[interestedIn]);
// // }
// // else{
// //     console.log('Wrong Entry! Choose between firstName, lastName, age, job, and friends');
// // }

// jonas.location='India';
// jonas.facebook='biswaruprx07';
// console.log(jonas);

// //jonas has 3 friends, and his best friend is called Michael.

// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);

const jonas = {
    firstName: 'Biswarup',
    lastName: 'Jana', 
    birthYear: 2000,
    job: 'student',
    friends:['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    // calcAge:function(birthYear){
    //     return 2022-birthYear;
    // }

    // calcAge:function(){
    //     console.log(this);
    //     return 2022-this.birthYear;
    // }

    calcAge:function(){
        this.age=2022-this.birthYear;
        return this.age;
    },

    getSummary: function(){
        return `${this.firstName} is a ${this.age}-years old ${this.job}, and he has ${this.hasDriversLicense?'a':'no'} driver's license.`
    }
};

console.log(jonas.calcAge());
// console.log(jonas['calcAge'](1991));
console.log(jonas.age);

//"joans is a 22 -year old student, and he has a driver's license"

console.log(`${jonas.firstName} is a ${jonas.age}-years old ${jonas.job}, and he has ${jonas.hasDriversLicense?'a':'no'} driver's license`);
console.log(jonas.getSummary());