
// let oldArray = [6,4,2];

// let newArray = [];

// for (let i = 0; i < oldArray.length; i++) {
//     newArray.push(oldArray[i] * 2);
// }

// // // console.log(newArray);

// // let testArray = oldArray.map(function(element,index,arr){
// //     return element * 2;
// // },10);


// // console.log(testArray);

// // let testArray = oldArray.map(element => element * 2);

// // console.log(testArray);

// // function add(element) {
// //     return element * 2;
// // }

// // let testArray = oldArray.map(add);
// // console.log(testArray);


// // let saliaries = [100,300,400];

// // let newSalary = saliaries.map(salary => salary + 100);

// // console.log(newSalary);

// let users = [
//     {
//         name: 'ahmed',
//         age: 22,
//         email: 'ahmed@gmail.com',
//         salary: 1000
//     },
//     {
//         name: 'ali',
//         age: 22,
//         email: 'ali@gmail.com',
//         salary: 2000
//     },
//     {
//         name: 'mostafa',
//         age: 22,
//         email: "mostafa@gmail.com",
//         salary: 4000
//     }
// ];

// let usersNames = users.map(user => user.name);
// let usersSalary = users.map(user => user.salary);
// let usersEmails = users.map(user => user.email);
// console.log(usersSalary,usersEmails,usersNames);

// let data = [10,200,300];

// let add = data.reduce(function(acc,current,index,arra) {
//     return acc + current;
// })

// // console.log(add);

// let add = data.reduce((accr,current,index,arr) => accr + current,5);
// console.log(add);

// let usersAges = [5,12,20,2];

// // let flag = usersAges.every(age => age > 18);

// // // console.log(flag);

// // let testing = usersAges.some(age => age > 20);

// // console.log(testing);

// let values = [100,200,300];

// let newValues = values.reduce((accr,current,index,arr) => accr + current, 100);

// console.log(newValues);

// let data = 'welcome to javascript';

// let flag = data.includes('to');
// console.log(flag);

// let data = ['ahmed','ali','mohamd'];

// let flag = data.includes('ali');
// console.log(flag);

// let data = "welcome to javascript";

// let testing = data.substr(4,5);

// console.log(testing);

// let data = 'ahmed';
// let user = ['ahmed'];
// let testing = data.repeat(8);
// let testing3 = user.repeat(3);

// console.log(testing);
// console.log(testing3);

// let data = 'welcome to javascript';

// data = data.replace('to','of');

// console.log(data);
// let data = ['ahmed','ali','mohamed','mona','sheriv'];

// let sli = data.slice(0,2);
// console.log(sli);
// console.log(data);
// let spli = data.splice(0,2,'testing','testing2','testing3','testign4');
// console.log(sli);
// console.log(data);

// let data = {
//     name: 'ahmed',
//     age: 55,
//     email: 'ahmed@gmail.com',
// }


// console.log(Object.entries(data));

let checkConnection = new Promise(function(resolve,reject){
    let connectionStatus = true;
    setTimeout(function(){
        if (connectionStatus) {
            resolve(function(){
                console.log('connection working')
            });
        } else {
            reject('Connection is not Working Now');
        }
    },2000);
});

checkConnection.then(function(success){
    // console.log(success);
}).catch(function(error){
    // console.log(error);
});