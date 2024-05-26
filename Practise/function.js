//function

// function sum(n){
//     let ans = 0;
//     for(let i=1; i<=n; i++){
//         ans += i;
//     }
//     return ans;
// }
// console.log(sum(5));

//square 

// let square = (n)=> n*n;
// console.log(square(5));

//callback function to add squares of two numbers

// function sumOfSquares(a , b){
//     let first = square(a);
//     let second = square(b);

//     return first + second;
// }
// console.log(sumOfSquares(2,3));

//callback function to add squares of two numbers

// const sumSquares = (a,b) => {
//     let first = square(a);
//     let second = square(b);

//     return first + second;
// }
// console.log(sumSquares(2,3));

//CallBack function

const square = (n) =>{
    return n*n;
}

const cube = (n) =>{
    return n*n*n;
}

let something = (n , callback) =>{
    return callback(n);
}

console.log(something(2 ,cube));