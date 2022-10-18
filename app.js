// var v = 3;
// if (v == 1) {
//     console.log(1)
// } else if (v == 2) {
//     console.log(2);
// } else {
//     console.log('wrong value')

// }


// const fruit = 'Papayas';
// switch (fruit) {
//   case 'Oranges':
//     console.log('Oranges are $0.59 a pound.');
//     break;
// //   case 'Mangoes':
//   case 'Papayas1':

//     console.log('Mangoes and papayas are $2.79 a pound.');
//     // expected output: "Mangoes and papayas are $2.79 a pound."
//     break;
//   default:
//     console.log(`Sorry, we are out of ${fruit}.`);
// }


const arr =[]



for (let i=0; i <= 100; i++) {
    arr.push(i)
}

const sum = arr.reduce((a,b)=>{
    return a+b
}, 0);

console.log(sum)

// console.log(arr);


