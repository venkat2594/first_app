// const amount=8;

// if(amount < 10)
// {
//     console.log("small");
// }
// else{
//      console.log('large number');
// }

// console.log(`hey it my node app`);

// console.log(__dirname);
// setInterval(()=> 
// {
//     console.log('hello world');
// },1000);


const {john,peter} = require('./name');
const sayHi =require('./utils');
const data = require('./alternate-flavor');

console.log(data);

sayHi('susan');
sayHi(john);
sayHi(peter);