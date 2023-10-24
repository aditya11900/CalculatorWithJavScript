// const nums = [1, 2, 3, 4];

// const sumTheNumbers = nums.reduce((total, currentValue) => {
//     return total + currentValue;
// }, 0);

// console.log(sumTheNumbers);


// total length of string


// const strings = ['apple', 'banana', 'cherry', 'date', 'blueberry']
// // Your code here
// const totalLength = (strings) => {
//     return strings.reduce((total, currentValue) => {
//         return total + currentValue.length;
//     }, 0);
// }

// console.log(totalLength(strings))
// Output: 30

// sum of squares of the numbers in the array

// const numbers = [1, 2, 3, 4, 5]
// // Your code here
// const sumSquares = (numbers) => {
//     return numbers.reduce((total , currentValue) =>{
//         return total + currentValue ** 2
//     }, 0)
// }

// console.log(sumSquares(numbers))

// const items = [
//     { name: 'Item 1', price: 10 },
//     { name: 'Item 2', price: 20 },
//     { name: 'Item 3', price: 30 },
//   ]
//   // Your code here
//   const totalValue = (items)=>{
//     return items.reduce((total ,currentValue)=>{
//         return total +currentValue.price;
//     },0)
// }

//   console.log(totalValue(items))

// concatenate the string

// Your code here
// const strings = ['this', 'is', 'fun']
// const concatStrings = (strings) => {
//     return strings.reduce((total, currentValue) => {
//         return total + currentValue;
//     }, '')
// }

// console.log(concatStrings(['this', 'is', 'fun'])) // Output: 'thisisfun'


// return lingest string

// const strings = ['neogcamp', 'Haule Haule', 'code', 'Batman', 'Awesome']
// // Your code here
// const longestString = (strings) => {
//     return strings.reduce((total, currentValue) => {
//         if (currentValue.length > total.length) {
//             return currentValue;
//         } else {
//             return total;
//         }
//     }, '')
// }

// console.log(longestString(strings))
// // Output: 'Haule Haule'

const products = [
    { name: 'Bread', price: 10, quantity: 2 },
    { name: 'Clips', price: 20, quantity: 5 },
    { name: 'Knife', price: 30, quantity: 1 },
    { name: 'Slipper', price: 40, quantity: 3 },
  ]
  // Your code here
    const findMostExpensiveProduct = (products) => {
        return products.reduce((total, currentValue) => {
            if (currentValue.price > total.price) {
                return currentValue;
            } else {
                return total;
            }
        });
    }
  
  console.log(findMostExpensiveProduct(products))
  // { name: "Slipper", price: 40, quantity: 3 }



