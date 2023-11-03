const userInputOrder = prompt(
  "Please enter your order separated by commas.",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee");

// split and convert imput into an array with string separated by strings
const stringArray = userInputOrder.split(",");
const orders = [];
for (let i = 0; i < stringArray.length; i++) {
  const str = stringArray[i];
  orders.push(str);
}

// iterate through the array and create the object
const froyoOrdersCount = {};


for (let i = 0; i < orders.length; i++) {   
    const flavor = orders[i];
    if (froyoOrdersCount[flavor] === undefined) {
        froyoOrdersCount[flavor] = 1;
    } else {
        froyoOrdersCount[flavor]++;
    }
}

console.log(orders);
console.table(froyoOrdersCount);



// var array = [1, 2, 3, 1, 2, 4];

// var object = {};

// for (var i = 0; i < array.length; i++) {
//   if (object[array[i]] === undefined) {
//     object[array[i]] = 1;
//   } else {
//     object[array[i]]++;
//   }
// }

// console.log(object);